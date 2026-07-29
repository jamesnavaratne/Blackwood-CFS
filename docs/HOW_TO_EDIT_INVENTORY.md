# How to Edit the Inventory

## One-page version

1. Pull latest changes in GitHub Desktop.
2. Open `Blackwood_CFS_Master_Inventory.xlsx`.
3. Edit the inventory.
4. Save and close Excel.
5. Run `tools\rebuild_inventory_from_excel.bat`.
6. Open `index.html` and check the app.
7. Commit and push.

## What to edit

Use the `Master Inventory` sheet for item changes.

Common safe edits:

```text
Item
Quantity
Description
Status
Photo
ExtraPhoto
Tags
Notes
```

Be more careful with:

```text
Appliance
Locker
Section
Subsection
Item_ID
```

Changing these can affect search, grouping, tabs, or item identity.

## Locker/tab order

Locker order comes from the Excel `Appliance_Config` sheet.

Do not casually change CAFS 24 ordering. It should remain:

```text
Cabin, P1, P2, Pump Panel, P-Tube, P3, P4, D-Tube, D1, D2, Rear
```

The rebuild script checks this and will fail if the order changes.

## Rebuild command

For normal inventory edits, run:

```text
tools\rebuild_inventory_from_excel.bat
```

This updates the app-generated files:

```text
index.html
data\inventory.json
content-metadata.json
offline-assets.json
```

The metadata files record Excel's embedded last-saved date, the current content version, and the files required by **Prepare for Offline Use**. Timestamped report files are still excluded from a normal rebuild to avoid unnecessary conflicts.

## Optional report command

Only when you want a local report, run:

```text
tools\rebuild_inventory_from_excel_with_report.bat
```

This also creates/updates:

```text
BLACKWOOD_CFS_V2_EXCEL_GOSPEL_REBUILD.json
INVENTORY_REBUILD_REPORT.md
```

These reports are optional and are ignored for routine Git commits.

## What to commit after a normal inventory edit

Usually commit:

```text
Blackwood_CFS_Master_Inventory.xlsx
index.html
data/inventory.json
content-metadata.json
offline-assets.json
```

If you added or changed photos, also commit the relevant files under:

```text
photos/
```

## What not to manually edit

Do not manually edit inventory item data inside:

```text
index.html
data/inventory.json
```

Those are generated from Excel.

## Quick test idea

For a safe test:

1. Add `AUTO-REBUILD TEST` to one description in Excel.
2. Save and close Excel.
3. Run `tools\rebuild_inventory_from_excel.bat`.
4. Open `index.html`.
5. Confirm the text appears.
6. Remove the test text from Excel.
7. Rebuild again.
8. Confirm the app is back to normal.


## Creating a new item

New items are supported.

Use:

```text
docs/HOW_TO_CREATE_NEW_INVENTORY_ITEM.md
```

The safest workflow is:

```text
copy a similar row in Excel
give the new row a unique Item_ID
run tools\validate_inventory_only.bat
run tools\rebuild_inventory_from_excel.bat
check the app
```


## Content dates and offline preparation

The hamburger menu displays **Inventory Excel last updated** using the workbook's own embedded Excel save timestamp. Saving the workbook in Excel and running the rebuild updates this automatically.

The rebuild also regenerates `offline-assets.json`. If inventory photos, UBD maps, icons or Directions operational files change, run the rebuild so volunteers who previously prepared offline content are shown that an update is available.
