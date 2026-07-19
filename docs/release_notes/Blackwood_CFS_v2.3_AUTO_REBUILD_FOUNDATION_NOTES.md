# Blackwood CFS v2.3 Auto-Rebuild Foundation

Base: `Blackwood_CFS_v2.2_DIRECTIONS_UBD_FILLED_BUTTONS_TEST.zip`

This package adds the first auto-rebuild foundation for the appliance inventory app.

## What it does

The tool rebuilds inventory data from:

- `Blackwood_CFS_Master_Inventory.xlsx`

It regenerates:

- `index.html` embedded `APPLIANCES` object
- `data/inventory.json`
- `BLACKWOOD_CFS_V2_EXCEL_GOSPEL_REBUILD.json`
- `INVENTORY_REBUILD_REPORT.md`

## What it deliberately does not touch

- Directions Book data
- Directions source files
- UBD map images
- Photo files
- Gesture code
- Visual transitions
- Theme/UI styling except the rebuilt inventory data object inside `index.html`

## Local rebuild

From the app folder:

```bash
python tools/rebuild_inventory_from_excel.py
```

On Windows:

```text
tools\rebuild_inventory_from_excel.bat
```

## GitHub auto-rebuild

This package includes:

```text
.github/workflows/rebuild_inventory_from_excel.yml
```

When committed to GitHub, it can rebuild automatically when the master Excel workbook is changed/pushed.

## Current validation

The rebuild tool validates:

- all three appliances exist
- each appliance has records and locker tabs
- CAFS 24 keeps the exact required locker order:
  `Cabin, P1, P2, Pump Panel, P-Tube, P3, P4, D-Tube, D1, D2, Rear`
- CAFS 24 `P4` remains present


## v2.3.1 low-conflict rebuild patch

The normal rebuild command now updates only:

- `index.html`
- `data/inventory.json`

The timestamped report files are now optional because they can cause unnecessary Git merge conflicts:

- `BLACKWOOD_CFS_V2_EXCEL_GOSPEL_REBUILD.json`
- `INVENTORY_REBUILD_REPORT.md`

For routine inventory changes, run:

```text
tools\rebuild_inventory_from_excel.bat
```

For a local report when you specifically want one, run:

```text
tools\rebuild_inventory_from_excel_with_report.bat
```

The GitHub Action now commits only:

```text
index.html
data/inventory.json
```
