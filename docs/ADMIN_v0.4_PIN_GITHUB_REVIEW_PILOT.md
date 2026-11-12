# Blackwood Admin v0.4 — PIN and GitHub review-submission pilot

Built directly on v2.9.4.28 Admin v0.3.1 + Live Hydrants Layer 6 RC2.

## Modified files

- `admin/index.html` — four-digit local convenience PIN (first-use setup) and secure gateway-based GitHub OAuth + draft PR submission controls. Existing equipment editor and dropdown functionality remains in place.
- `admin/sw.js` — PWA cache version increment.

## New files

- `tools/admin-gateway/worker.js` — backend source for authenticated GitHub PR creation.
- `tools/admin-gateway/wrangler.toml.example` — configuration template only (no secrets).
- `tools/admin-gateway/README.md` — complete one-time gateway deployment instructions and security limitations.
- `docs/ADMIN_v0.4_PIN_GITHUB_REVIEW_PILOT.md` — this note.

## Important

- Nothing is published automatically. Submission creates a **draft, proposal-only pull request** with change JSON. It does NOT update Excel or rebuild the app. Never merge a proposal-only PR until validated and reconciled into master Excel.
- A hosted gateway + GitHub OAuth app must be manually configured before GitHub submission will work. Credentials are never embedded in the public Admin app.
- Four-digit PIN is a local deterrent, not real security. It can be cleared or bypassed and cannot authorise publication.
- Workbook, generated inventory, directions, hydrants, photos and existing update process are byte-for-byte unchanged.
- Test edits in `Blackwood_Admin_Changes_2026-11-12.json` are not included.
- Android separate PWA installation remains out of scope by request.

## Test

1. Install this ZIP into a test branch/site if possible and visit `/admin/`.
2. First visit creates a 4-digit PIN. Close the browser session and verify unlock is requested. Test incorrect PIN.
3. Confirm changing appliance clears old editor and Start over works; existing drafts preserved.
4. For GitHub review submission, deploy `tools/admin-gateway` as described in its README; then sign in from Admin with an allowlisted GitHub account.
5. Submit a harmless test edit; verify it creates a draft PR with one JSON file and does not modify live inventory.
6. Do NOT merge test PR; close it and delete test branch.
