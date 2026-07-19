# Blackwood CFS v2.3.1 Auto-Rebuild Low-Conflict Patch

Base: `Blackwood_CFS_v2.3_AUTO_REBUILD_FOUNDATION_TEST.zip`

Purpose:
- Keep the Excel auto-rebuild workflow.
- Avoid repeated Git conflicts from timestamped generated report files.

Normal routine rebuild now updates only:
- `index.html`
- `data/inventory.json`

Optional local report rebuild is still available:
- `tools/rebuild_inventory_from_excel_with_report.bat`
- `tools/rebuild_inventory_from_excel_with_report.ps1`
- or `python tools/rebuild_inventory_from_excel.py --write-report`

GitHub Action now commits only:
- `index.html`
- `data/inventory.json`

The rebuild validation still checks:
- all three appliances exist
- each appliance has records and locker tabs
- CAFS 24 order remains:
  `Cabin, P1, P2, Pump Panel, P-Tube, P3, P4, D-Tube, D1, D2, Rear`
- CAFS 24 `P4` remains present
