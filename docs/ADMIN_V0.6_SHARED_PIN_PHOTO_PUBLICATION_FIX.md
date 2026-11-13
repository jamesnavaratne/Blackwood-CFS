# Blackwood CFS Admin v0.6 — Shared PIN and photo publication fix

Full GitHub deployment package, based on v2.9.4.28 + Admin v0.5 + Live Hydrants layer 6 RC2.

## Changes
- Shared Admin access PIN is now **8888**. No PIN setup required; this is a *public convenience deterrent*, NOT an authorisation mechanism.
- GitHub OAuth / Cloudflare gateway remains the only publishing authorisation. No secrets are in this ZIP.
- Admin processor now writes the uploaded item photo filename into **ExtraPhoto** (column L), the field actually selected by the operational app. Original Photo field is left alone when replacement photo is uploaded.
- Processing report now includes `photo_paths` mapping, making it easier to review where replacement images are stored.
- Admin service-worker cache updated to v0.6.

## Important deployment notes
1. Back up or commit any personal local changes first. This is a full clean ZIP and can overwrite edits already merged after v0.5, including your practice broom change.
2. Copy all ZIP contents into the current GitHub Desktop repo; DO NOT delete the `.git` directory.
3. Commit and push to main, ensure GitHub Pages completes deployment, then reload Admin.
4. Open `/admin/` in a new tab and enter `8888`. Existing v0.2+ drafts stay in browser storage unless explicitly cleared.
5. Submit a photo replacement in a fresh PR; run `Process Blackwood Admin review proposal` for that PR; confirm processed photo and workbook + inventory changes; only then merge.
6. If the same draft has already been submitted and processed, use a new PR. Do not merge proposal-only PRs.

## Validation performed
- Executed an isolated test against the **actual bundled workbook** with a replacement JPEG for BR-0081, without saving test edits in this release.
- Rebuilt main app using existing script and ran its `--check-only` validation: Rescue 146; 34P 142; CAFS 24 115.
- Verified `extraPhoto` matches the uploaded filename, the file exists, and the generated `index.html` contains the new filename.
- Original Hydrants RC2, Directions Book and all appliance photo files copied unchanged.

## Edited files
- `admin/index.html`
- `admin/sw.js`
- `tools/admin-publishing/apply_admin_submission.py`
- Added `docs/ADMIN_V0.6_SHARED_PIN_PHOTO_PUBLICATION_FIX.md`

No change to `Blackwood_CFS_Master_Inventory.xlsx`, `data/inventory.json`, or operational `index.html` in the ZIP.
