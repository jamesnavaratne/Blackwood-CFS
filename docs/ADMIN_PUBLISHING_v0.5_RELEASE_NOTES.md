# Blackwood CFS Admin v0.5 — Excel publishing pipeline RC1

Base: `v2.9.4.28 Admin v0.4 PIN GitHub Review Pilot + Live Hydrants Layer 6 RC2`.

### New files

- `tools/admin-publishing/apply_admin_submission.py` — strict proposal validator, permanent ID allocation, targeted Excel updates, photo placement.
- `.github/workflows/process_admin_review.yml` — owner-triggered review-branch processing; protects main, checks draft PR contents and writes processing result to its branch.
- `.github/workflows/validate_admin_review.yml` — read-only inventory validation on PR updates.
- `docs/ADMIN_PUBLISHING_v0.5_SETUP.md` — setup / acceptance test / operational caveats.

### Modified existing file

- `.github/workflows/rebuild_inventory_from_excel.yml` — automatic rebuild on *main pushes only*, preventing the existing workflow from automatically writing to an unreviewed Admin PR branch.

### Deliberately unchanged

- `index.html`, `admin/index.html`, `admin/sw.js`, `tools/admin-gateway/**`, all inventory data, original master Excel and all photograph assets.
- Directions Book, Hydrants RC2, Location SA link, offline/update behaviour.

### Test results

- Broom update: reconciliation succeeded, workbook validator passed, counts Rescue 146 / 34P 142 / CAFS 115.
- New Rescue equipment with JPEG: reconciliation succeeded, assigned a new `BR-` identifier using the **highest allocated ID** (not the count of items), workbook validator passed, counts Rescue 147 / 34P 142 / CAFS 115.
- GitHub Action has **not** been run against your live repository yet; this is a review release, not a fully field-tested deployment.
- The owner must run the processing workflow manually for PR #1, review the resulting branch diff and merge only after confirming the data.
