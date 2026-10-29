# Blackwood CFS Admin — integrated v0.2 pilot

## Included
- Existing operational app v2.9.4.28 source retained, with one item-modal **Edit in Admin ↗** shortcut.
- `/admin/` separate installable PWA, reads live `data/inventory.json` from this repository.
- Item-ID deep links: `admin/?item=BR-0136` (for example).
- Local device drafts for adding/editing/removing records, with photo file attachment and downloadable JSON change package.
- All three appliances currently include 146 / 142 / 115 records respectively.

## Important safety limits
- **DO NOT treat this pilot as a secure admin login or publishing system.** Public GitHub Pages exposes these static files to visitors.
- This pilot **does not edit Excel, photos, GitHub, or volunteers' live inventory**. Changes are only saved in browser storage and exported as a JSON package for later review.
- No secret, password, or GitHub PAT may be inserted into a static client-side app.
- Deep-link buttons are visible to anyone who opens an equipment modal; the admin site is not access-controlled in this pilot.
- Photo attachments inside JSON can make exports large; keep original images and verify paths when applying changes.
- The current automatic rebuild workflow is unchanged; only approved changes to the Excel master or photo library should trigger it.

## Installation and testing
1. **Back up** the current live repository and branch first.
2. Copy this ZIP's **contents** (excluding outer folder if extracting to a new directory) over the working repo, rather than committing a second repo. This package intentionally excludes `.git` history.
3. Commit/push to a test branch or staging deployment first. GitHub Pages must serve the `/admin/` directory.
4. Open `https://<USERNAME>.github.io/<REPO>/admin/` on Android Chrome, then use *Add to Home screen* / *Install*.
5. Open a known inventory item in the main app, use **Edit in Admin ↗**. The admin editor should open with the matching item ID.
6. Make a small draft, export JSON, and verify the main app **has not changed**.
7. Do not publish operational edits directly through the pilot. Future integration will validate the workbook's authoritative schema, enforce authenticated GitHub changes, approve and build before release.

## Next secure publishing milestone
Implement a trusted server-side GitHub App or equivalent OAuth-backed service, restrict contributors and branch access, require an approval stage, safely modify workbook and photo files, and run existing rebuild/action tests before publishing. A public static PWA itself cannot safely keep GitHub write credentials.
