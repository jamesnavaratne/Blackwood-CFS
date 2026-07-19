# Safer Inventory Workflow

The normal workflow is still simple:

```text
Edit Excel
↓
Run tools\rebuild_inventory_from_excel.bat
↓
Check app
↓
Commit/push
```

The safety layer runs automatically during rebuild.

## What validation checks

Hard errors stop the rebuild:

```text
duplicate Item_ID
blank Item_ID
blank Locker
blank Item name
locker name not listed in Appliance_Config
missing appliance data
CAFS 24 P4 missing
CAFS 24 locker order changed
```

Warnings do not stop the rebuild:

```text
unusual Status value
```

## Recommended routine update

For changing an existing item:

1. Pull latest in GitHub Desktop.
2. Edit `Blackwood_CFS_Master_Inventory.xlsx`.
3. Save and close Excel.
4. Run:

```text
tools\rebuild_inventory_from_excel.bat
```

5. Check the app locally.
6. Commit and push.

## Recommended new-item workflow

For creating a new item:

1. Copy a similar row in `Master Inventory`.
2. Edit the copied row.
3. Make sure `Item_ID` is unique.
4. Make sure `Appliance` and `Locker` match existing values.
5. Save and close Excel.
6. Run:

```text
tools\validate_inventory_only.bat
```

7. If validation passes, run:

```text
tools\rebuild_inventory_from_excel.bat
```

8. Check the new item in the app.
9. Commit and push.

## Why there are two bat files

`validate_inventory_only.bat` checks the Excel but does not change the app.

`rebuild_inventory_from_excel.bat` checks the Excel and then updates the app.

So for simple updates, just use the rebuild bat. For new rows/items, validating first is a nice safety step.
