# Blackwood CFS Admin v0.7 — guided publishing and photo removal

Based on the complete Admin v0.6 full package, retaining Live Hydrants layer 6 and external Location SA layer 334.

## Changed files

- `admin/index.html`: responsive, sticky publishing checklist with direct GitHub workflow/PR links; saved-draft count; explicit `Remove added photo` / `Undo photo removal` functionality.
- `admin/sw.js`: Admin PWA cache refresh.
- `tools/admin-publishing/apply_admin_submission.py`: validates `removePhoto`, clears `ExtraPhoto` workbook field, optionally deletes previously uploaded `admin-*` photo only when not referenced by another item, restores original `Photo` value. Report includes `removed_photos`.
- `docs/ADMIN_V0.7_GUIDED_PUBLISHING_PHOTO_REMOVAL.md`: this file.

## Publishing photo removal

Open a published item in Admin, choose **Remove added photo**, then **Save draft**. Authenticate and submit a new PR. In GitHub Actions run **Process Blackwood Admin review proposal** on `main` using that PR number. Check updated workbook, inventory and photo deletion in PR Files changed, approve checks, mark ready, merge and wait for Pages refresh.

When a legacy photo exists, removal restores that original item photo. `removePhoto` cannot accompany a new JPEG in the same submission. Existing v0.6 draft files remain compatible.

## Important when deploying

The full ZIP is based on the last locally available v0.6 full app and may not contain newer live edits. If retaining more recent changes on your GitHub `main` branch, pull those changes first and copy **only the changed files listed above** from this package. This avoids overwriting the newest workbook/photos with an older baseline.
