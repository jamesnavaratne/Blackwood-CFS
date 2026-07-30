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


## Directions Hydrants rebuild

The normal rebuild wrappers now run:

```text
rebuild_directions_hydrants.py --geocode-missing
```

before rebuilding the inventory and offline metadata.

The hydrant script:

- uses only the official Location SA SAGAF_PLUS endpoint;
- reuses preserved accepted street/suburb coordinates;
- gives `manual-overrides.json` priority;
- geocodes only missing configured targets;
- writes accepted coordinates into generated Directions data;
- records unresolved entries in the review report;
- never geocodes when a volunteer taps the Hydrants button.

The current `geocode-config.json` is in **test mode**, so only the five approved test streets are processed. Full rollout is enabled later by changing the rollout mode after test-link validation.
