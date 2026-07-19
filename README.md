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
photos/        appliance locker and item photos
icons/         PWA icons
tools/         Excel rebuild tools
docs/          human instructions and release notes
.github/       GitHub Actions workflow
```

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

Routine rebuild updates:

```text
index.html
data/inventory.json
```

Optional report rebuild:

```text
tools\rebuild_inventory_from_excel_with_report.bat
```

## Stable operational constraints

- Excel is the inventory source of truth.
- Directions Book data is not rebuilt by the inventory tool.
- Photos stay in `photos/`.
- UBD maps stay in `directions/maps/ubd/`.
- CAFS 24 locker order must remain:

```text
Cabin, P1, P2, Pump Panel, P-Tube, P3, P4, D-Tube, D1, D2, Rear
```
