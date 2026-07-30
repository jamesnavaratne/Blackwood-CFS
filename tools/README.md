# Tools

## Normal inventory rebuild

Use this for routine inventory edits:

```text
rebuild_inventory_from_excel.bat
```

It updates:

```text
../index.html
../data/inventory.json
```

## Optional report rebuild

Use this only when you want local reports:

```text
rebuild_inventory_from_excel_with_report.bat
```

It also writes:

```text
../BLACKWOOD_CFS_V2_EXCEL_GOSPEL_REBUILD.json
../INVENTORY_REBUILD_REPORT.md
```

Those reports are optional and ignored for routine Git commits.

## Python script

The bat files run:

```text
rebuild_inventory_from_excel.py
```

The script has no external Python package dependencies.


## Validate without rebuilding

Use this when you want to check the Excel workbook before generating app files:

```text
validate_inventory_only.bat
```

It checks for:

- duplicate `Item_ID`s
- blank required fields
- locker names that are not listed in `Appliance_Config`
- CAFS 24 locker order
- CAFS 24 `P4`
- unusual status values

It does not change app files.

## Directions Live Hydrants rebuild (v2.9.3 reviewed second pass)

The normal rebuild wrappers first run:

```text
python tools\rebuild_directions_hydrants.py
```

This reapplies the stored official Location SA coordinates to all 678 Directions entries before the inventory/offline metadata rebuild. It does **not** contact the geocoder. Manual coordinate overrides are applied first, followed by accepted stored official results; failed or ambiguous entries retain a grey Hydrants pill linked to the official live map at Blackwood CFS.

No hydrant data, map or tiles are stored offline, and the installed app never geocodes at runtime. Complete and category-specific review reports are regenerated in `directions/hydrants/`.
