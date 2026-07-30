#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import datetime as dt
import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

OFFICIAL_ENDPOINT = "https://location.sa.gov.au/arcgis/rest/services/Locators/SAGAF_PLUS/GeocodeServer/findAddressCandidates"
DEFAULT_THRESHOLD = 95.0
DEFAULT_BOUNDS = {
    "minLongitude": 138.45,
    "maxLongitude": 138.85,
    "minLatitude": -35.25,
    "maxLatitude": -34.80,
}
STREET_TYPE_ALIASES = {
    "RD": "ROAD", "ROAD": "ROAD",
    "ST": "STREET", "STREET": "STREET",
    "AVE": "AVENUE", "AV": "AVENUE", "AVENUE": "AVENUE",
    "DR": "DRIVE", "DVE": "DRIVE", "DRIVE": "DRIVE",
    "CRES": "CRESCENT", "CR": "CRESCENT", "CRESCENT": "CRESCENT",
    "CT": "COURT", "CRT": "COURT", "COURT": "COURT",
    "TCE": "TERRACE", "TERRACE": "TERRACE",
    "PDE": "PARADE", "PARADE": "PARADE",
    "HWY": "HIGHWAY", "HIGHWAY": "HIGHWAY",
    "LN": "LANE", "LANE": "LANE",
    "CL": "CLOSE", "CLOSE": "CLOSE",
    "PL": "PLACE", "PLACE": "PLACE",
    "GR": "GROVE", "GROVE": "GROVE",
    "CCT": "CIRCUIT", "CIRCUIT": "CIRCUIT",
    "BVD": "BOULEVARD", "BLVD": "BOULEVARD", "BOULEVARD": "BOULEVARD",
    "WAY": "WAY", "WALK": "WALK", "TRACK": "TRACK", "TRK": "TRACK",
    "RETREAT": "RETREAT", "RISE": "RISE", "VIEW": "VIEW",
}

def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8-sig"))

def save_json(path: Path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

def norm_words(value: str) -> str:
    text = re.sub(r"[^A-Z0-9]+", " ", str(value or "").upper()).strip()
    words = text.split()
    if words:
        words[-1] = STREET_TYPE_ALIASES.get(words[-1], words[-1])
    return " ".join(words)

def norm_locality(value: str) -> str:
    return re.sub(r"[^A-Z0-9]+", " ", str(value or "").upper()).strip()

def key_for(street: str, suburb: str) -> str:
    return f"{norm_words(street)}|{norm_locality(suburb)}"

def direction_suburb(entry: dict) -> str | None:
    areas = [str(x).strip() for x in entry.get("areas", []) if str(x).strip() and not str(x).strip().startswith("(")]
    unique = []
    for area in areas:
        if area not in unique:
            unique.append(area)
    return unique[0] if len(unique) == 1 else None

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

def candidate_valid(candidate: dict, street: str, suburb: str, threshold: float, bounds: dict):
    attrs = candidate.get("attributes") or {}
    official_street = " ".join(part for part in [attrs.get("StreetName", ""), attrs.get("StreetType", "")] if part)
    locality = attrs.get("Locality", "")
    score = float(candidate.get("score") or attrs.get("Score") or 0)
    location = candidate.get("location") or {}
    longitude = location.get("x")
    latitude = location.get("y")
    if norm_words(official_street) != norm_words(street):
        return False, "Returned street does not match"
    if norm_locality(locality) != norm_locality(suburb):
        return False, "Returned suburb/locality does not match"
    if score < threshold:
        return False, f"Score below threshold ({score:g} < {threshold:g})"
    if not isinstance(longitude, (int, float)) or not isinstance(latitude, (int, float)):
        return False, "Missing WGS84 coordinates"
    if not (bounds["minLongitude"] <= longitude <= bounds["maxLongitude"] and bounds["minLatitude"] <= latitude <= bounds["maxLatitude"]):
        return False, "Coordinates outside configured sensible area"
    return True, ""

def convert_candidate(candidate: dict):
    attrs = candidate.get("attributes") or {}
    return {
        "address": candidate.get("address") or attrs.get("Match_addr") or "",
        "score": candidate.get("score") or attrs.get("Score") or 0,
        "location": candidate.get("location") or {"x": attrs.get("X"), "y": attrs.get("Y")},
        "attributes": {
            "Match_addr": attrs.get("Match_addr", ""),
            "HouseNumber": attrs.get("HouseNumber", ""),
            "StreetName": attrs.get("StreetName", ""),
            "StreetType": attrs.get("StreetType", ""),
            "StreetDir": attrs.get("StreetDir", ""),
            "Locality": attrs.get("Locality", ""),
            "State": attrs.get("State", ""),
            "Postcode": attrs.get("Postcode", ""),
            "Addr_type": attrs.get("Addr_type", ""),
            "X": attrs.get("X"),
            "Y": attrs.get("Y"),
            "Ref_ID": attrs.get("Ref_ID"),
            "Comp_score": attrs.get("Comp_score", ""),
        }
    }

def request_candidates(street_query: str, locality: str):
    body = urllib.parse.urlencode({
        "Street": street_query,
        "Locality": locality,
        "State": "SA",
        "outFields": "*",
        "maxLocations": "10",
        "outSR": "4326",
        "f": "json",
    }).encode("utf-8")
    request = urllib.request.Request(
        OFFICIAL_ENDPOINT,
        data=body,
        headers={"Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.loads(response.read().decode("utf-8"))
    if payload.get("error"):
        raise RuntimeError(payload["error"].get("message", "Official geocoder error"))
    return [convert_candidate(x) for x in payload.get("candidates", []) if x]

def select_from_attempts(street: str, suburb: str, attempts: list[dict], threshold: float, bounds: dict):
    reasons = []
    for attempt in attempts:
        valid = []
        for candidate in attempt.get("candidates", []):
            ok, reason = candidate_valid(candidate, street, suburb, threshold, bounds)
            if ok:
                valid.append(candidate)
            else:
                reasons.append(f"{attempt.get('method')}: {reason}")
        if not valid:
            continue
        if attempt.get("method") == "street-only" and len(valid) != 1:
            return None, "Multiple plausible street-only results"
        return (attempt, valid[0]), ""
    return None, "; ".join(reasons) or "No official match"

def perform_official_lookup(street: str, suburb: str, threshold: float, bounds: dict):
    attempts = []
    for method, number in [("No. 1", "1"), ("No. 2", "2"), ("street-only", "")]:
        street_query = f"{number} {street}".strip()
        query = f"{street_query}, {suburb} SA"
        try:
            candidates = request_candidates(street_query, suburb)
            attempts.append({"method": method, "query": query, "candidates": candidates})
        except Exception as exc:
            attempts.append({"method": method, "query": query, "candidates": [], "error": str(exc)})
        selected, reason = select_from_attempts(street, suburb, attempts[-1:], threshold, bounds)
        if selected:
            return selected[0], selected[1], attempts, ""
    selected, reason = select_from_attempts(street, suburb, attempts, threshold, bounds)
    return (selected[0], selected[1], attempts, "") if selected else (None, None, attempts, reason)

def record_from_selection(street: str, suburb: str, attempt: dict, candidate: dict, generated_at: str):
    location = candidate.get("location") or {}
    return {
        "street": street,
        "suburb": suburb,
        "longitude": location.get("x"),
        "latitude": location.get("y"),
        "matchedAddress": candidate.get("address") or (candidate.get("attributes") or {}).get("Match_addr") or "",
        "score": candidate.get("score") or 0,
        "method": attempt.get("method"),
        "query": attempt.get("query"),
        "requestMode": attempt.get("selectedRequestMode", "StreetLocalityState"),
        "status": "Accepted",
        "source": "Location SA SAGAF_PLUS",
        "officialEndpoint": OFFICIAL_ENDPOINT,
        "outSR": 4326,
        "manualOverride": False,
        "sourceGeneratedAtUtc": generated_at,
    }

def import_collector_results(path: Path, cache: dict, threshold: float, bounds: dict):
    doc = load_json(path, {})
    for target in doc.get("testSet", []):
        street = target.get("street", "")
        suburb = target.get("suburb", "")
        selected, reason = select_from_attempts(street, suburb, target.get("attempts", []), threshold, bounds)
        if selected:
            attempt, candidate = selected
            cache.setdefault("records", {})[key_for(street, suburb)] = record_from_selection(
                street, suburb, attempt, candidate, doc.get("generatedAtUtc", "")
            )
    cache["officialEndpoint"] = doc.get("officialEndpoint", OFFICIAL_ENDPOINT)
    cache["outSR"] = doc.get("outputSpatialReference", 4326)
    return cache

def rollout_targets(entries: list[dict], config: dict):
    mode = config.get("rolloutMode", "test")
    if mode == "test":
        return [(x["street"], x["suburb"]) for x in config.get("testTargets", [])]
    seen = set()
    targets = []
    for entry in entries:
        suburb = direction_suburb(entry)
        if not suburb:
            continue
        pair = (entry.get("name", ""), suburb)
        key = key_for(*pair)
        if key not in seen:
            seen.add(key)
            targets.append(pair)
    return targets

def apply_cache(entries: list[dict], cache: dict, overrides: dict):
    accepted = {}
    for key, record in cache.get("records", {}).items():
        if record.get("status") == "Accepted":
            accepted[key] = record
    for key, record in overrides.get("records", {}).items():
        if record:
            merged = dict(record)
            merged["manualOverride"] = True
            merged["method"] = "manual override"
            merged["status"] = "Manual override used"
            accepted[key] = merged
    applied = 0
    for entry in entries:
        entry.pop("hydrant", None)
        suburb = direction_suburb(entry)
        if not suburb:
            continue
        record = accepted.get(key_for(entry.get("name", ""), suburb))
        if not record:
            continue
        entry["hydrant"] = {
            "longitude": record.get("longitude"),
            "latitude": record.get("latitude"),
            "matchedAddress": record.get("matchedAddress", ""),
            "score": record.get("score"),
            "method": record.get("method"),
            "query": record.get("query", ""),
            "status": record.get("status", "Accepted"),
        }
        applied += 1
    return applied

def write_review(repo_root: Path, targets, cache: dict, overrides: dict, review_reasons: dict):
    out_dir = repo_root / "directions" / "hydrants"
    fieldnames = [
        "Directions entry", "Query attempted", "Matched official address",
        "Method used", "Score", "Latitude", "Longitude", "Status"
    ]
    rows = []
    for street, suburb in targets:
        key = key_for(street, suburb)
        record = (overrides.get("records", {}).get(key) or cache.get("records", {}).get(key))
        if record:
            status = "Manual override used" if record.get("manualOverride") or key in overrides.get("records", {}) else record.get("status", "Accepted")
            rows.append({
                "Directions entry": f"{street} — {suburb}",
                "Query attempted": record.get("query", ""),
                "Matched official address": record.get("matchedAddress", ""),
                "Method used": record.get("method", ""),
                "Score": record.get("score", ""),
                "Latitude": record.get("latitude", ""),
                "Longitude": record.get("longitude", ""),
                "Status": status,
            })
        else:
            rows.append({
                "Directions entry": f"{street} — {suburb}",
                "Query attempted": "",
                "Matched official address": "",
                "Method used": "",
                "Score": "",
                "Latitude": "",
                "Longitude": "",
                "Status": review_reasons.get(key, "Manual review required"),
            })
    with (out_dir / "GEOCODING_REVIEW_CURRENT.csv").open("w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    return rows

def main():
    parser = argparse.ArgumentParser(description="Apply and optionally refresh official Location SA street coordinates for Directions Hydrants links.")
    parser.add_argument("--repo-root", default=None)
    parser.add_argument("--import-results", default=None)
    parser.add_argument("--geocode-missing", action="store_true")
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve() if args.repo_root else Path(__file__).resolve().parents[1]
    directions_path = repo_root / "directions" / "index.html"
    hydrants_dir = repo_root / "directions" / "hydrants"
    config = load_json(hydrants_dir / "geocode-config.json", {
        "rolloutMode": "test", "testTargets": [], "confidenceThreshold": DEFAULT_THRESHOLD, "sensibleBounds": DEFAULT_BOUNDS
    })
    threshold = float(config.get("confidenceThreshold", DEFAULT_THRESHOLD))
    bounds = dict(DEFAULT_BOUNDS)
    bounds.update(config.get("sensibleBounds", {}))
    cache = load_json(hydrants_dir / "geocodes.json", {
        "schemaVersion": 1, "rolloutMode": config.get("rolloutMode", "test"), "officialEndpoint": OFFICIAL_ENDPOINT,
        "outSR": 4326, "confidenceThreshold": threshold, "sensibleBounds": bounds, "records": {}
    })
    cache_before = json.loads(json.dumps(cache))
    overrides = load_json(hydrants_dir / "manual-overrides.json", {"schemaVersion": 1, "records": {}})

    if args.import_results:
        cache = import_collector_results(Path(args.import_results), cache, threshold, bounds)

    html, match, entries = parse_directions_html(directions_path)
    targets = rollout_targets(entries, config)
    review_reasons = {}
    if args.geocode_missing:
        for street, suburb in targets:
            key = key_for(street, suburb)
            if key in overrides.get("records", {}) or key in cache.get("records", {}):
                continue
            attempt, candidate, attempts, reason = perform_official_lookup(street, suburb, threshold, bounds)
            if candidate:
                cache.setdefault("records", {})[key] = record_from_selection(
                    street, suburb, attempt, candidate, dt.datetime.now(dt.timezone.utc).isoformat()
                )
            else:
                review_reasons[key] = "No official match" if "No official match" in reason else "Manual review required"

    cache["rolloutMode"] = config.get("rolloutMode", "test")
    cache["confidenceThreshold"] = threshold
    cache["sensibleBounds"] = bounds
    before_compare = dict(cache_before)
    after_compare = dict(cache)
    before_compare.pop("generatedAtUtc", None)
    after_compare.pop("generatedAtUtc", None)
    if before_compare != after_compare:
        cache["generatedAtUtc"] = dt.datetime.now(dt.timezone.utc).isoformat()
    else:
        cache["generatedAtUtc"] = cache_before.get("generatedAtUtc", cache.get("generatedAtUtc", ""))
    save_json(hydrants_dir / "geocodes.json", cache)

    applied = apply_cache(entries, cache, overrides)
    write_directions_html(directions_path, html, match, entries)
    rows = write_review(repo_root, targets, cache, overrides, review_reasons)

    accepted = sum(1 for row in rows if row["Status"] in {"Accepted", "Manual override used"})
    unresolved = len(rows) - accepted
    print(f"Directions hydrants rebuild OK — {applied} direction entries linked")
    print(f"- Accepted/manual override targets: {accepted}")
    print(f"- Manual review/no match targets: {unresolved}")
    print(f"- Rollout mode: {config.get('rolloutMode', 'test')}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
