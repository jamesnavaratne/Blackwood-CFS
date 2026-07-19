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
