#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import html as html_lib
import json
import re
import shutil
import sys
from collections import Counter
from pathlib import Path

ACCEPTED_STATUSES = {
    "Accepted",
    "Accepted (preserved validated)",
    "Manual lookup override accepted",
}


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8-sig"))


def save_json(path: Path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def normalise(value: str) -> str:
    return re.sub(r"[^A-Z0-9]+", " ", str(value or "").upper()).strip()


def key_for(street: str, locality: str) -> str:
    return f"{normalise(street)}|{normalise(locality)}"


def valid_coordinates(record: dict | None) -> bool:
    if not isinstance(record, dict):
        return False
    try:
        longitude = float(record.get("longitude"))
        latitude = float(record.get("latitude"))
    except (TypeError, ValueError):
        return False
    return 138.45 <= longitude <= 138.85 and -35.25 <= latitude <= -34.80


def parse_directions_html(path: Path):
    html = path.read_text(encoding="utf-8")
    match = re.search(r"const DIRECTIONS = (\[.*?\]);\n", html, flags=re.S)
    if not match:
        raise RuntimeError("Could not locate const DIRECTIONS in directions/index.html")
    return html, match, json.loads(match.group(1))


def write_directions_html(path: Path, html: str, match, entries: list[dict]):
    payload = json.dumps(entries, ensure_ascii=False, separators=(",", ":"))
    updated = html[:match.start(1)] + payload + html[match.end(1):]
    path.write_text(updated, encoding="utf-8")


def compact_record(record: dict) -> dict:
    fields = [
        "key", "street", "suburb", "longitude", "latitude", "matchedAddress",
        "score", "method", "query", "status", "reason", "source",
        "officialEndpoint", "outSR", "manualLookupOverride", "manualOverrideNote",
        "preservedValidated", "collectedAtUtc", "sourceGeneratedAtUtc",
    ]
    output = {field: record.get(field) for field in fields if field in record}
    if "key" not in output and record.get("street") and record.get("suburb"):
        output["key"] = key_for(record["street"], record["suburb"])
    return output


def compact_entry_result(result: dict) -> dict:
    fields = [
        "entryIndex", "entryId", "directionsEntry", "streetField",
        "authoritativeLocalities", "lookupStreet", "lookupLocality", "lookupKey",
        "source", "reviewCategory", "status", "queryAttempted",
        "matchedOfficialAddress", "methodUsed", "score", "latitude", "longitude", "notes",
    ]
    return {field: result.get(field) for field in fields if field in result}


def import_collector(collector_path: Path, hydrants_dir: Path):
    collector = load_json(collector_path, {})
    if not collector.get("complete"):
        raise RuntimeError("Collector JSON is not marked complete.")
    if collector.get("officialEndpoint", "").find("SAGAF_PLUS") < 0:
        raise RuntimeError("Collector JSON is not from the official Location SA SAGAF_PLUS endpoint.")
    if int(collector.get("outSR", 0)) != 4326:
        raise RuntimeError("Collector JSON does not use outSR=4326.")
    if len(collector.get("entryResults", [])) != 678:
        raise RuntimeError("Collector JSON does not contain all 678 Directions entry results.")

    records = {key: compact_record(value) for key, value in collector.get("records", {}).items()}
    entry_results = [compact_entry_result(value) for value in collector.get("entryResults", [])]
    fallback = dict(collector.get("fallbackStation", {}))
    fallback_record = collector.get("fallbackStationRecord") or {}
    if not valid_coordinates(fallback_record):
        raise RuntimeError("The official Blackwood CFS fallback address did not resolve to valid coordinates.")
    fallback.update({
        "longitude": fallback_record.get("longitude"),
        "latitude": fallback_record.get("latitude"),
        "matchedAddress": fallback_record.get("matchedAddress", ""),
        "score": fallback_record.get("score"),
        "method": fallback_record.get("method", ""),
        "query": fallback_record.get("query", ""),
        "source": fallback_record.get("source", "Location SA SAGAF_PLUS"),
        "officialEndpoint": fallback_record.get("officialEndpoint", collector.get("officialEndpoint", "")),
        "outSR": fallback_record.get("outSR", 4326),
    })

    geocodes = {
        "schemaVersion": 2,
        "collector": collector.get("collector", ""),
        "generatedAtUtc": collector.get("generatedAtUtc", ""),
        "inputSha256": collector.get("inputSha256", ""),
        "officialEndpoint": collector.get("officialEndpoint", ""),
        "outSR": collector.get("outSR", 4326),
        "confidenceThreshold": collector.get("confidenceThreshold", 95),
        "sensibleBounds": collector.get("sensibleBounds", {}),
        "attemptOrder": collector.get("attemptOrder", []),
        "records": records,
        "entryResults": entry_results,
        "fallbackStation": fallback,
        "collectorSummary": collector.get("summary", {}),
        "complete": True,
    }
    save_json(hydrants_dir / "geocodes.json", geocodes)
    shutil.copy2(collector_path, hydrants_dir / "official-collector-results.json")
    return geocodes


def override_for(entry_id: str, lookup_key: str, overrides: dict):
    entry_override = (overrides.get("entries") or {}).get(entry_id)
    if valid_coordinates(entry_override):
        return dict(entry_override), "entry"
    key_override = (overrides.get("records") or {}).get(lookup_key)
    if valid_coordinates(key_override):
        return dict(key_override), "street/locality"
    return None, ""


def reviewed_for(entry_id: str, lookup_key: str, reviewed: dict):
    entry_resolution = (reviewed.get("entries") or {}).get(entry_id)
    if valid_coordinates(entry_resolution):
        return dict(entry_resolution), "entry"
    record_resolution = (reviewed.get("records") or {}).get(lookup_key)
    if valid_coordinates(record_resolution):
        return dict(record_resolution), "street/locality"
    return None, ""


def active_payload(record: dict, *, manual: bool = False, reviewed: bool = False, override_scope: str = ""):
    payload = {
        "longitude": float(record.get("longitude")),
        "latitude": float(record.get("latitude")),
        "matchedAddress": record.get("matchedAddress", ""),
        "score": record.get("score"),
        "method": record.get("method", "manual override" if manual else ""),
        "query": record.get("query", ""),
        "status": "Manual override used" if manual else record.get("status", "Accepted"),
        "source": record.get("source", "Manual override" if manual else "Location SA SAGAF_PLUS"),
        "outSR": record.get("outSR", 4326),
    }
    if manual:
        payload["manualOverride"] = True
        payload["manualOverrideScope"] = override_scope
        payload["manualOverrideNote"] = record.get("note") or record.get("manualOverrideNote", "")
    if reviewed:
        payload["reviewedResolution"] = True
        payload["resolutionCategory"] = record.get("resolutionCategory", "Reviewed resolution")
        payload["resolutionConfidence"] = record.get("resolutionConfidence", "")
        payload["resolutionReason"] = record.get("resolutionReason", "")
        payload["approximate"] = bool(record.get("approximate"))
        payload["anchorKey"] = record.get("anchorKey", "")
        payload["secondaryEvidence"] = record.get("secondaryEvidence", [])
    if record.get("preservedValidated"):
        payload["preservedValidated"] = True
    return payload


def fallback_payload(fallback: dict, review: dict):
    return {
        "longitude": float(fallback["longitude"]),
        "latitude": float(fallback["latitude"]),
        "matchedAddress": fallback.get("matchedAddress", fallback.get("address", "")),
        "method": fallback.get("method", "Blackwood CFS fallback"),
        "query": fallback.get("query", fallback.get("address", "")),
        "status": "Fallback — unresolved Directions entry",
        "source": fallback.get("source", "Location SA SAGAF_PLUS"),
        "outSR": fallback.get("outSR", 4326),
        "fallbackLabel": fallback.get("label", "Blackwood CFS"),
        "reviewStatus": review.get("status", "Unresolved"),
        "reviewReason": review.get("notes", ""),
    }


def apply_hydrants(entries: list[dict], geocodes: dict, overrides: dict, reviewed: dict):
    records = geocodes.get("records", {})
    fallback = geocodes.get("fallbackStation") or {}
    if not valid_coordinates(fallback):
        raise RuntimeError("Stored Blackwood CFS fallback coordinates are missing or invalid.")

    reviews_by_id = {row.get("entryId"): row for row in geocodes.get("entryResults", []) if row.get("entryId")}
    rows = []
    counts = Counter()
    key_frequency = Counter(row.get("lookupKey") for row in reviews_by_id.values() if row.get("lookupKey"))

    for index, entry in enumerate(entries, start=1):
        for field in ("hydrant", "hydrantFallback", "hydrantReview"):
            entry.pop(field, None)

        entry_id = entry.get("id", "")
        review = dict(reviews_by_id.get(entry_id) or {})
        lookup_key = review.get("lookupKey", "")
        record = records.get(lookup_key) if lookup_key else None
        manual_record, override_scope = override_for(entry_id, lookup_key, overrides)
        reviewed_record, reviewed_scope = reviewed_for(entry_id, lookup_key, reviewed)

        button_mode = "Grey fallback"
        original_category = review.get("reviewCategory") or review.get("status") or "Ambiguous"
        original_status = review.get("status") or "Ambiguous"
        category = original_category
        status = original_status
        reason = review.get("notes", "") or (record or {}).get("reason", "")
        applied_record = None
        approximate = False
        resolution_confidence = ""
        resolution_evidence = []

        if manual_record:
            applied_record = manual_record
            entry["hydrant"] = active_payload(manual_record, manual=True, override_scope=override_scope)
            category = "Manual override"
            status = "Manual override used"
            reason = manual_record.get("note") or manual_record.get("manualOverrideNote", "")
            button_mode = "Active"
            counts["manual"] += 1
        elif reviewed_record:
            applied_record = reviewed_record
            entry["hydrant"] = active_payload(reviewed_record, reviewed=True, override_scope=reviewed_scope)
            approximate = bool(reviewed_record.get("approximate"))
            category = reviewed_record.get("resolutionCategory", "Reviewed resolution")
            status = reviewed_record.get("status", "Reviewed resolution")
            reason = reviewed_record.get("resolutionReason", "")
            resolution_confidence = reviewed_record.get("resolutionConfidence", "")
            resolution_evidence = reviewed_record.get("secondaryEvidence", []) or []
            button_mode = "Active"
            counts["reviewed_vicinity" if approximate else "reviewed_exact"] += 1
        elif record and record.get("status") in ACCEPTED_STATUSES and valid_coordinates(record):
            applied_record = record
            entry["hydrant"] = active_payload(record)
            category = "Accepted"
            status = record.get("status", "Accepted")
            reason = ""
            button_mode = "Active"
            counts["accepted"] += 1
        else:
            entry["hydrantFallback"] = fallback_payload(fallback, review)
            entry["hydrantReview"] = {
                "status": status,
                "category": category,
                "reason": reason,
                "lookupKey": lookup_key,
            }
            if original_category == "Failed" or original_status == "Failed":
                counts["failed"] += 1
            else:
                counts["ambiguous"] += 1

        street = review.get("streetField") or entry.get("name", "")
        localities = review.get("authoritativeLocalities") or []
        locality_display = " · ".join(localities) if localities else ""
        rows.append({
            "Entry number": index,
            "Entry ID": entry_id,
            "Source": review.get("source") or entry.get("source", ""),
            "Street field": street,
            "Authoritative locality field(s)": locality_display,
            "Lookup street": review.get("lookupStreet", ""),
            "Lookup locality": review.get("lookupLocality", ""),
            "Lookup key": lookup_key,
            "Duplicate lookup reused": "Yes" if lookup_key and key_frequency[lookup_key] > 1 else "No",
            "Original collector category": original_category,
            "Original collector status": original_status,
            "Review category": category,
            "Status": status,
            "Hydrants pill": button_mode,
            "Reviewed resolution": "Yes" if reviewed_record else "No",
            "Resolution confidence": resolution_confidence,
            "Approximate vicinity anchor": "Yes" if approximate else "No",
            "Anchor key": (applied_record or {}).get("anchorKey", ""),
            "Query attempted": (applied_record or record or {}).get("query", review.get("queryAttempted", "")),
            "Matched official address": (applied_record or record or {}).get("matchedAddress", review.get("matchedOfficialAddress", "")),
            "Method used": (applied_record or record or {}).get("method", review.get("methodUsed", "")),
            "Score": (applied_record or record or {}).get("score", review.get("score", "")),
            "Latitude": (applied_record or record or {}).get("latitude", review.get("latitude", "")),
            "Longitude": (applied_record or record or {}).get("longitude", review.get("longitude", "")),
            "Manual override": "Yes" if manual_record else "No",
            "Notes / unresolved reason": reason,
            "Secondary evidence": " | ".join(str(v) for v in resolution_evidence),
            "Fallback address when grey": fallback.get("matchedAddress", fallback.get("address", "")) if button_mode == "Grey fallback" else "",
        })

    if len(rows) != len(entries):
        raise RuntimeError("Hydrants review row count does not match Directions entry count.")
    return rows, counts

def write_csv(path: Path, rows: list[dict], fieldnames: list[str] | None = None):
    path.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = fieldnames or (list(rows[0].keys()) if rows else [])
    with path.open("w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        if fieldnames:
            writer.writeheader()
        writer.writerows(rows)


def write_html_report(path: Path, rows: list[dict], summary: dict, geocodes: dict):
    headers = list(rows[0].keys()) if rows else []
    body_rows = []
    for row in rows:
        category = row.get("Review category", "").lower().replace(" ", "-")
        cells = "".join(f"<td>{html_lib.escape(str(row.get(header, '')))}</td>" for header in headers)
        body_rows.append(f'<tr class="{html_lib.escape(category)}">{cells}</tr>')
    generated = html_lib.escape(str(geocodes.get("generatedAtUtc", "")))
    doc = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Blackwood CFS Live Hydrants Geocoding Review</title>
<style>
body{{font-family:system-ui,-apple-system,Segoe UI,sans-serif;margin:0;background:#f5f7fa;color:#17202a}}
header{{padding:24px;background:#081522;color:white}} h1{{margin:0 0 8px;font-size:24px}}
.summary{{display:flex;flex-wrap:wrap;gap:10px;padding:16px 24px;background:white;border-bottom:1px solid #d9e0e7}}
.pill{{padding:8px 12px;border-radius:999px;background:#e9eef3;font-weight:700}}
.wrap{{padding:16px;overflow:auto}} table{{border-collapse:collapse;width:max-content;min-width:100%;background:white;font-size:12px}}
th,td{{border:1px solid #d8dee6;padding:7px 9px;vertical-align:top;max-width:380px}} th{{position:sticky;top:0;background:#172b3a;color:white;text-align:left;z-index:1}}
tr.accepted td:first-child,tr.manual-override td:first-child,tr.official-candidate-salvage td:first-child,tr.secondary-assisted-official-correction td:first-child{{border-left:5px solid #16833c}}
tr.reviewed-vicinity-anchor td:first-child,tr.reviewed-multi-locality-vicinity-anchor td:first-child{{border-left:5px solid #286c9d}}
tr.failed td:first-child{{border-left:5px solid #a22}} tr.ambiguous td:first-child{{border-left:5px solid #8a6500}}
small{{color:#aab8c4}}
</style></head><body>
<header><h1>Blackwood CFS Directions Book — Live Hydrants Geocoding Review</h1><small>Official Location SA SAGAF_PLUS, outSR=4326 · collector generated {generated}</small></header>
<div class="summary">
<span class="pill">Entries: {summary['entries']}</span><span class="pill">Original accepted: {summary['accepted']}</span><span class="pill">Reviewed exact: {summary['reviewedExact']}</span><span class="pill">Reviewed vicinity: {summary['reviewedVicinity']}</span><span class="pill">Manual: {summary['manual']}</span><span class="pill">Grey fallback: {summary['failed'] + summary['ambiguous']}</span>
</div><div class="wrap"><table><thead><tr>{''.join(f'<th>{html_lib.escape(h)}</th>' for h in headers)}</tr></thead><tbody>{''.join(body_rows)}</tbody></table></div>
</body></html>"""
    path.write_text(doc, encoding="utf-8")


def write_reports(hydrants_dir: Path, rows: list[dict], counts: Counter, geocodes: dict):
    summary = {
        "entries": len(rows),
        "accepted": counts["accepted"],
        "reviewedExact": counts["reviewed_exact"],
        "reviewedVicinity": counts["reviewed_vicinity"],
        "manual": counts["manual"],
        "failed": counts["failed"],
        "ambiguous": counts["ambiguous"],
    }
    summary["active"] = summary["accepted"] + summary["reviewedExact"] + summary["reviewedVicinity"] + summary["manual"]
    summary["unresolved"] = summary["failed"] + summary["ambiguous"]
    fieldnames = list(rows[0].keys()) if rows else []
    write_csv(hydrants_dir / "GEOCODING_REVIEW_FULL.csv", rows, fieldnames)
    write_csv(hydrants_dir / "GEOCODING_REVIEW_CURRENT.csv", rows, fieldnames)
    write_csv(hydrants_dir / "ACTIVE_ENTRIES.csv", [r for r in rows if r["Hydrants pill"] == "Active"], fieldnames)
    write_csv(hydrants_dir / "ACCEPTED_ENTRIES.csv", [r for r in rows if r["Review category"] == "Accepted"], fieldnames)
    write_csv(hydrants_dir / "REVIEWED_RESOLUTIONS.csv", [r for r in rows if r["Reviewed resolution"] == "Yes"], fieldnames)
    write_csv(hydrants_dir / "REVIEWED_EXACT_OFFICIAL_ENTRIES.csv", [r for r in rows if r["Reviewed resolution"] == "Yes" and r["Approximate vicinity anchor"] == "No"], fieldnames)
    write_csv(hydrants_dir / "REVIEWED_VICINITY_ANCHOR_ENTRIES.csv", [r for r in rows if r["Approximate vicinity anchor"] == "Yes"], fieldnames)
    write_csv(hydrants_dir / "FAILED_ENTRIES.csv", [r for r in rows if r["Hydrants pill"] == "Grey fallback" and r["Original collector category"] == "Failed"], fieldnames)
    write_csv(hydrants_dir / "AMBIGUOUS_ENTRIES.csv", [r for r in rows if r["Hydrants pill"] == "Grey fallback" and r["Original collector category"] == "Ambiguous"], fieldnames)
    write_csv(hydrants_dir / "MANUALLY_OVERRIDDEN_ENTRIES.csv", [r for r in rows if r["Review category"] == "Manual override"], fieldnames)
    write_csv(hydrants_dir / "UNRESOLVED_ENTRIES.csv", [r for r in rows if r["Hydrants pill"] == "Grey fallback"], fieldnames)
    write_html_report(hydrants_dir / "GEOCODING_REVIEW_FULL.html", rows, summary, geocodes)

    markdown = f"""# Full Directions Book Live Hydrants geocoding review — reviewed second pass

- Directions entries: **{summary['entries']}**
- Original accepted official links retained: **{summary['accepted']}**
- Reviewed exact official candidate selections/corrections: **{summary['reviewedExact']}**
- Reviewed Directions-route vicinity anchors: **{summary['reviewedVicinity']}**
- Manual coordinate overrides used: **{summary['manual']}**
- Total active Hydrants links: **{summary['active']}**
- Failed entries still using the grey Blackwood CFS fallback: **{summary['failed']}**
- Ambiguous entries still using the grey Blackwood CFS fallback: **{summary['ambiguous']}**
- Total unresolved entries retained for later review: **{summary['unresolved']}**

Official coordinate source remains Government of South Australia Location SA `SAGAF_PLUS` with `outSR=4326`.

Reviewed exact resolutions select the lowest valid numbered official candidate or an official candidate after a reviewed spelling, street-type or adjoining-locality correction. Reviewed vicinity anchors deliberately use an official coordinate on the confirmed Directions approach route when the target road is historical, internal, unnumbered or absent from the official address geocoder.

The complete entry-by-entry review is in `GEOCODING_REVIEW_FULL.csv` and `GEOCODING_REVIEW_FULL.html`. The remaining permanent unresolved list is `UNRESOLVED_ENTRIES.csv`. Reviewed resolutions are stored in `reviewed-resolutions.json`.

Normal rebuilds use stored coordinates only. They do not contact the geocoder and the installed app never geocodes at runtime. Future coordinate overrides in `manual-overrides.json` retain highest priority.
"""
    (hydrants_dir / "GEOCODING_REVIEW_SUMMARY.md").write_text(markdown, encoding="utf-8")
    save_json(hydrants_dir / "GEOCODING_REVIEW_SUMMARY.json", summary)
    return summary

def main(argv=None):
    parser = argparse.ArgumentParser(description="Apply stored official Location SA coordinates to all Directions Hydrants links without runtime or rebuild-time geocoding.")
    parser.add_argument("--repo-root", default=None)
    parser.add_argument("--import-collector", default=None, help="Import a completed official collector JSON before applying coordinates.")
    parser.add_argument("--validate-only", action="store_true")
    args = parser.parse_args(argv)

    repo_root = Path(args.repo_root).resolve() if args.repo_root else Path(__file__).resolve().parents[1]
    directions_path = repo_root / "directions" / "index.html"
    hydrants_dir = repo_root / "directions" / "hydrants"
    geocodes_path = hydrants_dir / "geocodes.json"
    overrides_path = hydrants_dir / "manual-overrides.json"
    reviewed_path = hydrants_dir / "reviewed-resolutions.json"

    if args.import_collector:
        geocodes = import_collector(Path(args.import_collector).resolve(), hydrants_dir)
    else:
        geocodes = load_json(geocodes_path, {})
    if not geocodes.get("complete") or len(geocodes.get("entryResults", [])) != 678:
        raise RuntimeError("Stored full-rollout geocodes are incomplete. Import the completed official collector JSON first.")

    overrides = load_json(overrides_path, {"schemaVersion": 2, "records": {}, "entries": {}})
    reviewed = load_json(reviewed_path, {"schemaVersion": 1, "records": {}, "entries": {}})
    html, match, entries = parse_directions_html(directions_path)
    if len(entries) != 678:
        raise RuntimeError(f"Expected 678 Directions entries, found {len(entries)}.")

    rows, counts = apply_hydrants(entries, geocodes, overrides, reviewed)
    summary = write_reports(hydrants_dir, rows, counts, geocodes)
    if not args.validate_only:
        write_directions_html(directions_path, html, match, entries)

    if summary["entries"] != 678 or summary["active"] + summary["unresolved"] != 678:
        raise RuntimeError(f"Unexpected reviewed rollout counts: {summary}")

    print(f"Directions hydrants rebuild OK — {summary['entries']} entries processed")
    print(f"- Active links: {summary['active']} ({summary['accepted']} original accepted, {summary['reviewedExact']} reviewed exact, {summary['reviewedVicinity']} reviewed vicinity, {summary['manual']} manual)")
    print(f"- Grey fallback links: {summary['unresolved']} ({summary['failed']} failed, {summary['ambiguous']} ambiguous)")
    print("- Network geocoding: disabled; stored coordinates only")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"Hydrants rebuild failed: {exc}", file=sys.stderr)
        raise
