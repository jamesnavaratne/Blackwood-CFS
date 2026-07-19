# Folder Structure

## Files that must stay at the root

```text
index.html                         main app
manifest.json                      Android/PWA install settings
service-worker.js                  offline/cache behaviour
icon.png                           app icon used by the app shell
Blackwood_CFS_Master_Inventory.xlsx inventory source of truth
README.md                          root project overview
START_HERE.md                      quick instructions
```

## Runtime folders

These are used by the app and should not be renamed without changing code paths.

```text
data/
directions/
photos/
icons/
```

### `data/`

Generated inventory data.

```text
data/inventory.json
```

### `directions/`

Directions Book app, maps and source documents.

```text
directions/index.html
directions/maps/ubd/
directions/source/
```

### `photos/`

Appliance photos.

```text
photos/rescue/lockers/
photos/rescue/items/
photos/34p/lockers/
photos/34p/items/
photos/cafs24/lockers/
photos/cafs24/items/
```

### `tools/`

Rebuild tools.

```text
tools/rebuild_inventory_from_excel.bat
tools/rebuild_inventory_from_excel.py
tools/rebuild_inventory_from_excel_with_report.bat
```

### `docs/`

Human documentation only. The app does not depend on these files at runtime.

```text
docs/HOW_TO_EDIT_INVENTORY.md
docs/HOW_TO_ADD_OR_UPDATE_PHOTOS.md
docs/TROUBLESHOOTING_REBUILD.md
docs/deployment/
docs/release_notes/
docs/verification/
docs/archive/
```

## Safe organisation rule

It is safe to move documentation files inside `docs/`.

It is not safe to rename these without checking code paths:

```text
index.html
manifest.json
service-worker.js
data/
directions/
photos/
icons/
tools/
Blackwood_CFS_Master_Inventory.xlsx
```
