# Blackwood CFS v2.3.2 Organisation and How-To Test

Base: `Blackwood_CFS_v2.3.1_AUTO_REBUILD_LOW_CONFLICT_TEST.zip`

Purpose:
- Organise non-runtime notes/reports into `docs/`.
- Add clear instructions for routine inventory edits.
- Keep runtime app paths unchanged.

Changed:
- Documentation organisation
- `README.md`
- `START_HERE.md`
- `docs/`
- `tools/README.md`
- service-worker cache name only, to refresh deployed test build

Runtime paths intentionally unchanged:
- `index.html`
- `manifest.json`
- `service-worker.js`
- `icon.png`
- `data/`
- `directions/`
- `photos/`
- `icons/`
- `tools/`
- `Blackwood_CFS_Master_Inventory.xlsx`

Normal inventory rebuild remains:
- `tools\rebuild_inventory_from_excel.bat`

Routine rebuild still updates only:
- `index.html`
- `data/inventory.json`
