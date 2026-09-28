# START HERE — Blackwood CFS App

This folder contains the Blackwood CFS appliance inventory app and Directions Book.

## Current trial build

This package is `v2.9.4.4 Tablet Landscape Trial RC3`, based on `v2.9.4.3 Stable`.

The installed PWA now permits landscape rotation. On tablets at least 900px wide and 540px high in landscape, the trial provides a three-column Inventory, side-by-side Directions/UBD panes, a condensed Hydrants header and a compact persistent taskbar. The street Directions card keeps its normal 640px width when the UBD pane opens, preventing route text from reflowing. UBD maps can be dragged immediately at the opening 100% view. Portrait and smaller-screen layouts retain the stable presentation.

Hydrants rebuild priority is:

```text
manual coordinate override
↓
reviewed second-pass resolution
↓
original accepted official result
↓
grey Blackwood CFS fallback
```

The permanent reviewed exact, reviewed vicinity and unresolved lists are in `directions\hydrants\`.

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
