# Blackwood CFS App

Static GitHub Pages app for Blackwood CFS appliance inventory and Directions Book.

## App entry points

Runtime files that must stay at the repository root:

```text
index.html
manifest.json
service-worker.js
icon.png
Blackwood_CFS_Master_Inventory.xlsx
```

Important folders:

```text
data/          generated inventory JSON
directions/    Directions Book, source documents and UBD maps
hydrants/      In-app live hydrant map and generated street locations
photos/        appliance locker and item photos
icons/         PWA icons
tools/         Excel rebuild tools
docs/          human instructions and release notes
.github/       GitHub Actions workflow
```

## Current test baseline

`v2.9.4 Personal UBD + Operational Workspace Test RC4` turns the full-width Inventory / Directions Book / Hydrants taskbar into a stateful three-part operational workspace. The taskbar now remains available on System Home as well as throughout each working screen.

RC4 preserves each workspace independently for the current app session. Directions restores the selected street, both open modal layers, selected UBD map, zoom and pan. Hydrants restores its selected street, map centre and zoom. Inventory restores System Home or the selected appliance, locker/filter, search and page position. RC3's modal-safe taskbar, RC2's circular Android location dot, reserved taskbar space and safe Blackwood CFS direct-open default are retained. The official hydrant layer and Location SA basemap remain online-only. The generated street catalogue contains all 678 Directions entries: 677 stored-coordinate locations and the existing Blackwood CFS fallback for the deliberately unresolved entry.

## Start here

Open:

```text
START_HERE.md
```

## Normal inventory workflow

```text
Edit Blackwood_CFS_Master_Inventory.xlsx
↓
Run tools\rebuild_inventory_from_excel.bat
↓
Check index.html locally
↓
Commit and push in GitHub Desktop
```

## Current rebuild behaviour

Routine rebuild reapplies stored Directions Hydrants coordinates, regenerates the Hydrants review reports, and then updates inventory/offline metadata:

```text
directions/index.html
directions/hydrants/GEOCODING_REVIEW_*
hydrants/locations.js
index.html
data/inventory.json
content-metadata.json
offline-assets.json
```

Optional report rebuild:

```text
tools\rebuild_inventory_from_excel_with_report.bat
```

## Stable operational constraints

- Excel is the inventory source of truth.
- Directions wording/source data is not rebuilt by the inventory tool; stored Hydrants fields are reapplied before each normal rebuild.
- Photos stay in `photos/`.
- UBD maps stay in `directions/maps/ubd/`.
- CAFS 24 locker order must remain:

```text
Cabin, P1, P2, Pump Panel, P-Tube, P3, P4, D-Tube, D1, D2, Rear
```
