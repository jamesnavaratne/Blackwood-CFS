# Blackwood CFS Admin — v0.3 editing test (13 November 2026)

## Baseline
Derived from the user-tested full app package `Blackwood_CFS_v2.9.4.28_Admin_v0.2_LIVE_HYDRANTS_LAYER6_RC2_LOCATION_SA_LINK_FIXED_NO_GIT.zip`.

## Changed files
- `admin/index.html` — dependent appliance-specific locker, section and subsection choices; photo optimisation; labels and guidance
- `admin/manifest.json` — distinct identity and start URL for separate Android PWA installation
- `admin/sw.js` — own cache version and old admin-cache clean-up
- `admin/admin-icon-192.png` and `admin/admin-icon-512.png` — unique icon
- `docs/ADMIN_V03_EDITING_TEST.md` — this document

## Deliberately unchanged
- Master Excel workbook and all existing inventory rows
- `data/inventory.json` and equipment IDs
- The main operational app, Directions Book, working Hydrants layer 6, and external Location SA 334 link
- Main `service-worker.js` and offline behaviour
- No export from 12 November was published, including test equipment and photo

## Test guidance
1. Open `/admin/` from HTTPS. Confirm selections in Blackwood Rescue, 34P and CAFS 24 offer the correct lockers, sections and subsections from the source inventory.
2. Select an existing item with section/subsection, edit and confirm those values remain selected after saving.
3. Change locker and confirm section/subsection options are recalculated.
4. Create a NEW item and check its locker selections, save, export to JSON and confirm source fields and temporary `NEW-` ID.
5. Attach phone photo, verify KB size displayed and export JSON; check `photo.type` is `image/jpeg` and dimensions <= 1600 pixels.
6. Check old saved drafts are still present (v0.2 local-storage key retained).
7. Try install from `/admin/` on Android Chrome. It now has its own icon, app ID and scope, although Android may still choose to launch the existing installed PWA because both share an origin; if so, use the admin URL in Chrome.

## Not yet production ready
- A PIN is **not** implemented. A PIN would be only a convenience lock and must never substitute for server-side publishing authorisation.
- Admin saves and exports drafts; it does not yet submit to GitHub. The planned next stage is an authenticated backend/GitHub App which creates a reviewable PR, runs Excel/photo validation, allocates permanent IDs, and merges only after approval.
- No automatic publication/rollback workflow has been tested. Continue using GitHub Desktop ZIP deployments until secure publishing has passed end-to-end tests.
- Existing old camera uploads from v0.2 remain in draft storage as originally exported; optimization is applied to newly selected photos only.
