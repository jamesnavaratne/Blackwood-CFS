# Blackwood CFS Admin v0.9.2 — Publishing Clarity

## Update only
Replace `admin/index.html` and `admin/sw.js`; no change to operational inventory, Excel reconciliation, Cloudflare Worker, or workflows.

## Changes
- Stable tracked PR number and copy control, separate from GitHub status.
- Status polling preserves last confirmed step when disconnected or an API call fails; reflects processed files, check status, and merger.
- Review confirmation and live app verification are explicitly manual; GitHub cannot independently verify the equipment is correct on users' devices.
- Collapsible draft panel, collapsed by default, count badge.
- Submitted drafts are moved to device-local Publishing History and a recoverable local backup, if browser storage permits. The history is limited to 30 entries; backup is removed only after the user confirms publication.
- Older drafts that were submitted under previous versions are not automatically deleted, because the browser cannot safely determine which items were included. Remove them manually after checking.
- History and backup live only on the current browser/device, not a central database.
- If a submission is successful but the device storage is full, drafts are retained and a warning is displayed to avoid duplicate submission.

## Manual publication steps
1. Save draft. 2. Sign in and submit. 3. Run processing on `main` using PR number. 4. Approve validation workflow if prompted. 5. Review Files changed and checks. 6. Ready for review and merge. 7. Confirm Pages deployment and live equipment.

No GitHub branch protection or Cloudflare changes are included.
