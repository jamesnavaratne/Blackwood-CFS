# Admin change-package integration test — 29 October 2026

Source: `Blackwood_Admin_Changes_2026-10-29.json` (Admin v0.2 pilot)

Applied one update to master inventory record `BR-0081` (Blackwood Rescue / Locker 6 / BROOM [x2]):
- Quantity: blank → `2`
- Description: blank → `2 Brooms`
- All other supplied fields were unchanged from the source workbook.
- No photo changes.

Rebuilt inventory using `python tools/rebuild_inventory_from_excel.py --repo-root . --build-date 2026-10-29`.

Validation passed; appliance counts: Blackwood Rescue 146, 34P 142, CAFS 24 115.

This package is a manual integration test. Admin v0.2 still does not perform authenticated direct publishing.
