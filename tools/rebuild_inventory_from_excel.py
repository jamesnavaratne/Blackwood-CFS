#!/usr/bin/env python3
from __future__ import annotations

import argparse
import datetime as _dt
import json
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

NS = {
    "a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}

APPLIANCE_ORDER = ["Blackwood Rescue", "34P", "CAFS 24"]

MASTER_POSITION_FALLBACK = {
    1: "Item_ID",
    2: "Appliance",
    3: "Locker",
    4: "Section",
    5: "Subsection",
    6: "Item",
    7: "Quantity",
    8: "Category",
    9: "Description",
    10: "Status",
    11: "Photo",
    12: "ExtraPhoto",
    13: "Last_Checked",
    14: "Checked_By",
    15: "Tags",
    16: "Notes",
}

RECORD_KEYS = [
    "id", "appliance", "locker", "section", "subsection", "item",
    "quantity", "category", "description", "status", "photo",
    "extraPhoto", "lastChecked", "checkedBy", "tags", "notes", "location",
]


def cell_text(value):
    """Preserve source text exactly enough for inventory fidelity.

    We normalise CRLF/CR to LF for browser display, but deliberately do not strip
    leading/trailing spaces from item names or descriptions. Some existing app data
    already contains those spaces, and this rebuild tool should reproduce the
    current Excel-derived data rather than silently cleaning it.
    """
    if value is None:
        return ""
    return str(value).replace("\r\n", "\n").replace("\r", "\n")


def clean_key(value):
    return cell_text(value).strip()


def col_to_num(col):
    n = 0
    for ch in col:
        n = n * 26 + (ord(ch.upper()) - 64)
    return n


def read_shared_strings(z):
    strings = []
    if "xl/sharedStrings.xml" not in z.namelist():
        return strings
    root = ET.fromstring(z.read("xl/sharedStrings.xml"))
    for si in root.findall("a:si", NS):
        strings.append("".join(
            t.text or ""
            for t in si.iter("{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t")
        ))
    return strings


def workbook_sheet_paths(z):
    wb = ET.fromstring(z.read("xl/workbook.xml"))
    rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
    relmap = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels}
    out = {}
    for sheet in wb.find("a:sheets", NS):
        name = sheet.attrib["name"]
        rid = sheet.attrib["{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"]
        target = relmap[rid]
        if target.startswith("/"):
            target = target.lstrip("/")
        elif not target.startswith("xl/"):
            target = "xl/" + target
        out[name] = target
    return out


def read_sheet_rows(xlsx_path: Path, sheet_name: str):
    with zipfile.ZipFile(xlsx_path, "r") as z:
        sheets = workbook_sheet_paths(z)
        if sheet_name not in sheets:
            raise ValueError(f"Workbook is missing required sheet: {sheet_name}")

        shared = read_shared_strings(z)
        root = ET.fromstring(z.read(sheets[sheet_name]))
        rows = []

        for row in root.findall(".//a:row", NS):
            row_values = {}
            for cell in row.findall("a:c", NS):
                ref = cell.attrib.get("r", "")
                match = re.match(r"([A-Z]+)", ref)
                if not match:
                    continue

                idx = col_to_num(match.group(1))
                ctype = cell.attrib.get("t")
                value = ""

                if ctype == "inlineStr":
                    inline = cell.find("a:is", NS)
                    if inline is not None:
                        value = "".join(
                            t.text or ""
                            for t in inline.iter("{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t")
                        )
                else:
                    v = cell.find("a:v", NS)
                    if v is not None:
                        raw = v.text or ""
                        if ctype == "s":
                            try:
                                value = shared[int(raw)]
                            except Exception:
                                value = raw
                        elif ctype == "b":
                            value = "TRUE" if raw == "1" else "FALSE"
                        else:
                            value = raw

                row_values[idx] = cell_text(value)

            if row_values:
                max_col = max(row_values)
                rows.append([row_values.get(i, "") for i in range(1, max_col + 1)])
        return rows


def row_to_map(headers, row, fallback_positions=None):
    fallback_positions = fallback_positions or {}
    mapped = {}
    max_len = max(len(headers), len(row), max(fallback_positions.keys(), default=0))
    for i in range(1, max_len + 1):
        header = headers[i - 1] if i <= len(headers) else ""
        key = clean_key(header) or fallback_positions.get(i, "")
        if key:
            mapped[key] = cell_text(row[i - 1] if i <= len(row) else "")
    return mapped


def truthy_yes(value):
    return clean_key(value).lower() in {"yes", "y", "true", "1", "show", "display"}


def safe_int(value, default=9999):
    try:
        return int(float(clean_key(value)))
    except Exception:
        return default


def existing_appliances_from_index(index_path: Path):
    if not index_path.exists():
        return {}
    html = index_path.read_text(encoding="utf-8")
    m = re.search(r"const\s+APPLIANCES\s*=\s*(\{.*?\});\s*\n", html, flags=re.S)
    if not m:
        return {}
    try:
        return json.loads(m.group(1))
    except Exception:
        return {}


def parse_master_inventory(xlsx_path: Path):
    rows = read_sheet_rows(xlsx_path, "Master Inventory")
    if not rows:
        raise ValueError("Master Inventory sheet is empty.")

    headers = rows[0]
    records_by_app = {app: [] for app in APPLIANCE_ORDER}
    unknown_apps = []

    for row in rows[1:]:
        mapped = row_to_map(headers, row, MASTER_POSITION_FALLBACK)
        item = mapped.get("Item", "")
        app = clean_key(mapped.get("Appliance", ""))
        locker = mapped.get("Locker", "")
        item_id = mapped.get("Item_ID", "")

        if not any([clean_key(item), app, clean_key(locker), clean_key(item_id)]):
            continue

        if not app:
            raise ValueError(f"Inventory row has an item but no appliance: {row!r}")

        if app not in records_by_app:
            unknown_apps.append(app)
            records_by_app.setdefault(app, [])

        status = mapped.get("Status", "")
        record = {
            "id": item_id,
            "appliance": app,
            "locker": locker,
            "section": mapped.get("Section", ""),
            "subsection": mapped.get("Subsection", ""),
            "item": item,
            "quantity": mapped.get("Quantity", ""),
            "category": mapped.get("Category", ""),
            "description": mapped.get("Description", ""),
            "status": status if clean_key(status) else "In service",
            "photo": mapped.get("Photo", ""),
            "extraPhoto": mapped.get("ExtraPhoto", ""),
            "lastChecked": mapped.get("Last_Checked", ""),
            "checkedBy": mapped.get("Checked_By", ""),
            "tags": mapped.get("Tags", ""),
            "notes": mapped.get("Notes", ""),
            "location": locker,
        }
        records_by_app[app].append({k: record.get(k, "") for k in RECORD_KEYS})

    return records_by_app, sorted(set(unknown_apps))


def parse_appliance_config(xlsx_path: Path, records_by_app):
    rows = read_sheet_rows(xlsx_path, "Appliance_Config")
    if not rows:
        raise ValueError("Appliance_Config sheet is empty.")

    headers = rows[0]
    config = {app: [] for app in records_by_app.keys()}

    for row in rows[1:]:
        mapped = row_to_map(headers, row)
        app = clean_key(mapped.get("Appliance", ""))
        location = mapped.get("Location", "")
        if not app or not clean_key(location):
            continue
        if not truthy_yes(mapped.get("Display_In_Tabs", "Yes")):
            continue
        config.setdefault(app, []).append((safe_int(mapped.get("Display_Order")), location))

    lockers_by_app = {}
    for app, records in records_by_app.items():
        ordered = []
        seen = set()

        for _, loc in sorted(config.get(app, []), key=lambda x: (x[0], x[1])):
            loc_key = clean_key(loc)
            if loc_key and loc_key not in seen:
                ordered.append(loc)
                seen.add(loc_key)

        for r in records:
            loc = r.get("locker", "")
            loc_key = clean_key(loc)
            if loc_key and loc_key not in seen:
                ordered.append(loc)
                seen.add(loc_key)

        lockers_by_app[app] = ordered

    return lockers_by_app


def parse_locker_photos(xlsx_path: Path, records_by_app, repo_root: Path):
    locker_photos = {app: {} for app in records_by_app.keys()}

    try:
        rows = read_sheet_rows(xlsx_path, "Locker Photos")
        if rows:
            headers = rows[0]
            for row in rows[1:]:
                mapped = row_to_map(headers, row)
                loc = mapped.get("Locker", "")
                if not clean_key(loc):
                    continue
                locker_photos.setdefault("Blackwood Rescue", {})[loc] = {
                    "photo": clean_key(mapped.get("Photo_File", "")),
                    "title": mapped.get("Display_Title", "") or loc,
                    "description": mapped.get("Description", ""),
                }
    except ValueError:
        pass

    rescue_cabin = locker_photos.setdefault("Blackwood Rescue", {}).setdefault("Cabin", {
        "photo": "cabin.jpg",
        "title": "Cabin",
        "description": "Main photo shown at top of this locker page",
    })
    if (repo_root / "photos" / "rescue" / "lockers" / "cabin_front.jpg").exists():
        rescue_cabin["frontPhoto"] = "cabin_front.jpg"
    if (repo_root / "photos" / "rescue" / "lockers" / "cabin_rear.jpg").exists():
        rescue_cabin["rearPhoto"] = "cabin_rear.jpg"

    for sheet_name, app_name in {
        "34P Location Photos": "34P",
        "CAFS 24 Location Photos": "CAFS 24",
    }.items():
        try:
            rows = read_sheet_rows(xlsx_path, sheet_name)
        except ValueError:
            continue
        if not rows:
            continue

        headers = rows[0]
        cabin_rear = ""

        for row in rows[1:]:
            mapped = row_to_map(headers, row)
            loc = mapped.get("Location", "")
            photo = clean_key(mapped.get("Photo_File", ""))
            if not clean_key(loc) or not photo:
                continue

            if clean_key(loc).lower() == "cabin rear":
                cabin_rear = photo
                continue

            target = "Cabin" if clean_key(loc).lower() == "cabin" else loc
            entry = {
                "photo": photo,
                "title": mapped.get("Display_Title", "") or target,
                "description": mapped.get("Description", ""),
            }
            if target == "Cabin":
                entry["frontPhoto"] = photo
            locker_photos.setdefault(app_name, {})[target] = entry

        if cabin_rear:
            cabin = locker_photos.setdefault(app_name, {}).setdefault("Cabin", {
                "photo": "",
                "title": "Cabin",
                "description": "Cabin front/rear photos shown at top of this location page",
            })
            cabin["rearPhoto"] = cabin_rear

    return locker_photos


def build_appliances(xlsx_path: Path, index_path: Path, repo_root: Path, build_date: str | None = None):
    old = existing_appliances_from_index(index_path)
    records_by_app, unknown_apps = parse_master_inventory(xlsx_path)
    lockers_by_app = parse_appliance_config(xlsx_path, records_by_app)
    locker_photos = parse_locker_photos(xlsx_path, records_by_app, repo_root)

    ordered_apps = [app for app in APPLIANCE_ORDER if app in records_by_app]
    ordered_apps.extend([app for app in records_by_app.keys() if app not in ordered_apps])

    out = {}
    for app in ordered_apps:
        old_app = old.get(app, {})
        out[app] = {
            "appliance": app,
            "records": records_by_app.get(app, []),
            "lockers": lockers_by_app.get(app, []),
            "lockerPhotos": locker_photos.get(app, {}),
            "built": build_date or old_app.get("built") or _dt.date.today().isoformat(),
            "version": old_app.get("version") or "v2.x Excel auto-rebuild",
        }

    return out, unknown_apps


def replace_index_appliances(index_path: Path, appliances):
    html = index_path.read_text(encoding="utf-8")
    payload = json.dumps(appliances, ensure_ascii=False, separators=(",", ":"))

    # Use a replacement function so JSON backslashes are not interpreted by re.sub.
    pattern = re.compile(r"const\s+APPLIANCES\s*=\s*\{.*?\};\s*\n", flags=re.S)
    new_html, count = pattern.subn(lambda _m: "const APPLIANCES = " + payload + ";\n", html, count=1)

    if count != 1:
        raise RuntimeError("Could not find exactly one `const APPLIANCES = ...;` block in index.html")
    index_path.write_text(new_html, encoding="utf-8")


def write_outputs(repo_root: Path, appliances, xlsx_path: Path, unknown_apps, write_report=False):
    """Write only app-required generated files by default.

    This keeps the normal inventory workflow low-conflict:
      - index.html is already updated by replace_index_appliances()
      - data/inventory.json is updated here

    Timestamped report files are useful locally, but they create unnecessary Git
    merge conflicts, so they are only written when --write-report is used.
    """
    data_dir = repo_root / "data"
    data_dir.mkdir(exist_ok=True)
    (data_dir / "inventory.json").write_text(
        json.dumps(appliances, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )

    counts = {
        app: {
            "items": len(obj.get("records", [])),
            "locations": obj.get("lockers", []),
            "locker_photo_entries": len(obj.get("lockerPhotos", {})),
        }
        for app, obj in appliances.items()
    }

    if write_report:
        meta = {
            "source_workbook": xlsx_path.name,
            "rebuilt_at_utc": _dt.datetime.now(_dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
            "appliances": counts,
            "unknown_apps": unknown_apps,
            "note": "index.html APPLIANCES object and data/inventory.json regenerated directly from Blackwood_CFS_Master_Inventory.xlsx.",
        }
        (repo_root / "BLACKWOOD_CFS_V2_EXCEL_GOSPEL_REBUILD.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")

        lines = [
            "# Blackwood CFS Inventory Rebuild Report",
            "",
            f"Source workbook: `{xlsx_path.name}`",
            f"Rebuilt at UTC: `{meta['rebuilt_at_utc']}`",
            "",
            "## Appliance counts",
            "",
            "| Appliance | Items | Locations | Locker photo entries |",
            "|---|---:|---:|---:|",
        ]
        for app, info in counts.items():
            lines.append(f"| {app} | {info['items']} | {len(info['locations'])} | {info['locker_photo_entries']} |")

        lines.extend(["", "## Location order", ""])
        for app, info in counts.items():
            lines.append(f"### {app}")
            lines.append("")
            lines.append(", ".join(info["locations"]) or "_No locations found_")
            lines.append("")

        if unknown_apps:
            lines.extend(["## Warning: unknown appliance names", "", ", ".join(unknown_apps), ""])
        else:
            lines.extend(["## Warnings", "", "None.", ""])

        (repo_root / "INVENTORY_REBUILD_REPORT.md").write_text("\n".join(lines), encoding="utf-8")

    return counts


def validate(appliances):
    errors = []
    for app in APPLIANCE_ORDER:
        if app not in appliances:
            errors.append(f"Missing appliance: {app}")
            continue
        if not appliances[app].get("records"):
            errors.append(f"No records generated for {app}")
        if not appliances[app].get("lockers"):
            errors.append(f"No lockers generated for {app}")

    expected_cafs = ["Cabin", "P1", "P2", "Pump Panel", "P-Tube", "P3", "P4", "D-Tube", "D1", "D2", "Rear"]
    cafs_order = appliances.get("CAFS 24", {}).get("lockers", [])
    if cafs_order != expected_cafs:
        errors.append(f"CAFS 24 locker order changed: {cafs_order!r}")

    if "P4" not in cafs_order:
        errors.append("CAFS 24 P4 is missing from tabs.")

    return errors


def main(argv=None):
    parser = argparse.ArgumentParser(description="Rebuild Blackwood CFS inventory app data from Excel.")
    parser.add_argument("--workbook", default="Blackwood_CFS_Master_Inventory.xlsx")
    parser.add_argument("--index", default="index.html")
    parser.add_argument("--repo-root", default=".")
    parser.add_argument("--build-date", default=None)
    parser.add_argument("--check-only", action="store_true")
    parser.add_argument("--write-report", action="store_true", help="Also write timestamped local rebuild reports.")
    args = parser.parse_args(argv)

    repo_root = Path(args.repo_root).resolve()
    xlsx_path = Path(args.workbook)
    if not xlsx_path.is_absolute():
        xlsx_path = repo_root / xlsx_path
    index_path = Path(args.index)
    if not index_path.is_absolute():
        index_path = repo_root / index_path

    if not xlsx_path.exists():
        raise FileNotFoundError(f"Workbook not found: {xlsx_path}")
    if not index_path.exists():
        raise FileNotFoundError(f"index.html not found: {index_path}")

    appliances, unknown_apps = build_appliances(xlsx_path, index_path, repo_root, build_date=args.build_date)

    errors = validate(appliances)
    if errors:
        for err in errors:
            print(f"ERROR: {err}", file=sys.stderr)
        return 2

    if args.check_only:
        counts = {
            app: {
                "items": len(obj.get("records", [])),
                "locations": obj.get("lockers", []),
                "locker_photo_entries": len(obj.get("lockerPhotos", {})),
            }
            for app, obj in appliances.items()
        }
    else:
        replace_index_appliances(index_path, appliances)
        counts = write_outputs(repo_root, appliances, xlsx_path, unknown_apps, write_report=args.write_report)

    print("Blackwood CFS inventory rebuild OK")
    for app, info in counts.items():
        print(f"- {app}: {info['items']} items, {len(info['locations'])} locations, {info['locker_photo_entries']} locker photo entries")
    if unknown_apps:
        print("Warnings: unknown appliance names: " + ", ".join(unknown_apps))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
