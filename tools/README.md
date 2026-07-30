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

## Directions Live Hydrants rebuild (v2.9.1 test)

The normal rebuild wrappers first run:

```text
python tools/rebuild_directions_hydrants.py --geocode-missing
```

This reapplies the five validated official Location SA coordinates to the generated Directions data before the inventory/offline metadata rebuild. The script uses only Location SA SAGAF_PLUS, preserves accepted results, gives manual overrides priority, and never performs runtime geocoding when a volunteer taps Hydrants.

The current rollout remains in **test mode** for Gorse Avenue, Rosella Avenue, Hannaford Road, Keith Road and Nama Drive. No hydrant map, tile or dataset is stored offline.
