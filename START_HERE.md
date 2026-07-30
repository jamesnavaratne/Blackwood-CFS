# START HERE — Blackwood CFS App

This folder contains the Blackwood CFS appliance inventory app and Directions Book.

## Most common job: edit the inventory

1. Open `Blackwood_CFS_Master_Inventory.xlsx`.
2. Make your inventory change.
3. Save and close Excel.
4. Run:

```text
tools\rebuild_inventory_from_excel.bat
```

5. Open `index.html` locally and check the change.
6. Commit and push these app files with GitHub Desktop.

The routine rebuild now reapplies the stored Directions Hydrants coordinates first, then rebuilds inventory and offline metadata. Expected generated changes include:

```text
directions\index.html
directions\hydrants\GEOCODING_REVIEW_*.csv/.html/.json/.md
index.html
data\inventory.json
content-metadata.json
offline-assets.json
```

The Hydrants step is offline-safe: it uses stored official results and manual overrides only and never calls the geocoder.

## Important rule

Treat the Excel workbook as the source of truth.

Do not manually edit item data inside:

```text
index.html
data\inventory.json
```

Those files are generated from Excel.

## More instructions

- Inventory editing: `docs/HOW_TO_EDIT_INVENTORY.md`
- GitHub/Desktop workflow: `docs/deployment/HOW_TO_DEPLOY_WITH_GITHUB_DESKTOP.md`
- Folder structure: `docs/FOLDER_STRUCTURE.md`
- Photos: `docs/HOW_TO_ADD_OR_UPDATE_PHOTOS.md`
- Rebuild troubleshooting: `docs/TROUBLESHOOTING_REBUILD.md`


## Create a new item

Yes, new inventory items are supported.

Read:

```text
docs/HOW_TO_CREATE_NEW_INVENTORY_ITEM.md
```

For new items, the safer workflow is:

```text
Edit/copy row in Excel
↓
tools\validate_inventory_only.bat
↓
tools\rebuild_inventory_from_excel.bat
```


## Report a Directions Book issue

Open a Directions entry, then use the small `Report issue` pill at the bottom.

More detail:

```text
docs/directions/HOW_TO_REPORT_DIRECTIONS_ISSUE.md
```
