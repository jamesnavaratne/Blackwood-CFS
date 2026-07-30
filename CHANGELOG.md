## v2.9.0 - Directions read-aloud RC1
- Added a compact speaker pill beside Report issue in each Directions modal.
- Uses the device's built-in speech synthesis; no audio files or server service are included.
- Reads only the street name followed by the Directions text exactly as stored.
- The pill toggles between Read and Stop, and speech stops when the modal closes or another street is opened.
- Directions data, wording and formatting are unchanged.

## v2.8.4 - Light mode font-weight update test RC5
- Slightly increased the weight of dark inventory text in Light mode for improved readability.
- Kept colours, spacing, component layout and Directions Book styling unchanged.
- Incremented the service-worker version specifically to test the v2.8.3 in-app Update available prompt on existing installations.

## v2.8.3 - In-app update prompt RC4
- Added a user-controlled Update available banner shown when a newer service worker or newer published content version is detected.
- Added Refresh now and Later actions; updates never force-reload the app during use.
- Checks for updates on launch, reconnection, return from background, and periodically while online.
- Preserved prepared photos and UBD maps across app-shell upgrades by moving offline content and readiness status into durable dedicated caches.
- Migrates v2.8.2 prepared content automatically during this upgrade.
- Kept offline-content refresh separate: OPTIONS still indicates when Prepare for Offline Use should be run again.

## v2.8.1 RC2 - Light mode readability and offline workflow correction
- Corrected inventory Light mode headings, counters, locker titles and header icons that were still inheriting white-on-dark styling.
- Kept Directions Book styling unchanged.
- Clarified that installation is recommended for offline use but is not a strict requirement in supported browsers.
- Restored the GitHub Actions rebuild workflow that was accidentally excluded from the v2.8.0 package.
- Expanded the workflow so inventory, photo and map changes regenerate content metadata and the offline asset version.

## v2.8.0 RC1 - Volunteer options, offline preparation and inventory light mode
- Added a themed notification clarifying that Out of Service changes are stored only on the current device and should be reported by email through Report Issue.
- Added a collapsed OPTIONS section after Training in the hamburger menu.
- Moved the inventory theme palette into OPTIONS and added one inventory-only Light mode; Directions Book theme behaviour is unchanged.
- Added Prepare for Offline Use with progress and device status, caching inventory photos, Directions Book content and all supplied UBD/reference maps.
- Added automatic Inventory Excel and Directions Book update dates in OPTIONS.
- Extended the Excel rebuild tool to read Excel's embedded last-saved timestamp and regenerate deterministic content/offline metadata.
- Extended the GitHub workflow to refresh content metadata when inventory, photos, maps or Directions operational content changes.

## v2.7.2 - Directions pill line colours and title colour restore
- Kept the System Home Directions Book emphasis but aligned both double-line accents with the same cyan family as the other home pills.
- Preserved the clickable Directions Book title-home behaviour while restoring its original blue-and-white appearance.

## v2.7.1 - Directions launch clarity and title-home link
- Gave the System Home Directions Book pill a slightly stronger filled / double-outline treatment so it stands out a little more on a job while keeping the same theme language.
- Made the Directions Book title in the top-left header return to System Home when tapped/clicked.
- Left the existing separate home button in place.

## v2.7.0 RC1 - Directions handoff, locker swipe cue, and ribbon edge fix
- Built from the accepted inventory-update baseline containing 146 Blackwood Rescue items.
- Added a dark first-paint handoff for the Directions Book to remove the white navigation flash.
- Increased controlled horizontal locker-swipe movement and added a progressive edge arrow showing the destination locker.
- Replaced viewport-level tab centring with contained ribbon scrolling to prevent the right-side white stripe on the final locker and Out of Service tabs.
- Preserved inventory modal status behaviour, themes, photos, Directions data, and Excel rebuild workflow.

## v2.6.2 STABLE - Inventory source update
- Accepted the user-edited Excel/inventory build as the new stable data baseline.
- Blackwood Rescue inventory increased from 145 to 146 items with BLOCK TRAY LAYOUT - CHOCKS in Locker 2.
- Preserved the descriptive block_tray_layout_chocks.jpg photo filename and all other application content.

## v2.6.1 - Compact status icon size alignment
- Reduced the green tick on locker-page item cards to better match the favourites star.
- Normalised the green tick and red cross so they render at the same compact size.
- Left full service-status wording and modal behaviour unchanged.

## v2.6.0 - Compact locker-card status indicators
- Replaced the full green In service badge on locker-page item cards with a compact green tick.
- Replaced the full red Out of service badge on locker-page item cards with a compact red cross.
- Preserved the full status wording, status controls, and editing behaviour inside the item modal.
- Removed temporary test-blue/green/yellow/red HTML pages from the packaged app.

## v2.5.9 - Cohesive surface fine pass
- Performed a final cohesion pass across item pills, locker headings, All Items pills, locker photo pills, and unselected ribbon pills.
- Softened gradients further and reduced glow/border variance for a more unified dark neon look.
- Slightly tuned item pill brightness so they sit in the same visual family without looking flat.
- Kept palette-aware behaviour across Blue, Green, Yellow, and Red themes.

## v2.5.8 - Theme review and subtler item pills
- Reviewed the latest inventory styling across theme changes.
- Removed the stale cool-blue cast from inventory item pills so palette switching stays consistent.
- Reduced the item-pill gradient for a subtler finish.
- Preserved the accepted hamburger menu and recent locker-surface work.


## v2.5.7 - Item pill finish and softer locker headings
- Softened the expandable locker heading gradients again.
- Updated individual inventory item pills to use the same theme-aware locker-photo capsule surface.
- Removed the thin accent line/highlight above the All Items and locker-photo pill titles.
- Preserved the accepted hamburger menu styling from v2.5.5 onward.

# Blackwood CFS Changelog

## v2.5.6 — Locker surface refinement

### Improved
- Preserved the accepted v2.5.5 hamburger menu treatment unchanged.
- Softened the light-to-dark gradient in expandable locker headings.
- Matched unselected Home/Cabin/locker ribbon pills to the preserved theme-aware locker-photo capsule background.
- Matched the large All Items capsule on each appliance Home tab to the same locker-photo capsule background.
- Kept active ribbon pills visually distinct.

# Changelog

## v2.5.5 Dark neon surface consistency — 2026-07-28
- Restored deeper, theme-aware gradients to the hamburger drawer.
- Reworked drawer buttons and active states with restrained neon borders and glow.
- Restored dark neon richness to collapsed and expanded locker headings.
- Kept the brighter v2.5.3 inventory cards and the v2.5.4 Directions-style search bar unchanged.
- Updated the service-worker cache key for deployment.

## v2.5.4 Inventory search visual alignment — 2026-07-28
- Restyled the inventory-page search field to match the Directions Book design language.
- Replaced the separate **Clear** button with an inset circular **×** clear control.
- Preserved the existing inventory search and clear behaviour.
- Updated the service-worker cache key so the visual change is picked up after deployment.

## Blackwood CFS v2.0 Stable Baseline before Directions fidelity checks — 2026-07-11

Housekeeping-only stable release package.

- Added Directions Book Word source documents to `directions/source/`.
- Added `directions/source/README.txt` with the suggested Directions update workflow.
- Updated root `README.md` and `README.txt` to describe the combined Inventory + Directions app.
- Updated `RELEASE_MANIFEST.json` for the stable baseline.
- Added `STABLE_RELEASE_CHECKLIST.md`.
- No app logic, inventory data, Directions Book data, UBD map behaviour, photo folders, or UI behaviour changed in this housekeeping release.

# Blackwood CFS Changelog

## v2.0 RC1

### Added
- Multi-appliance support.
- Blackwood Rescue, Blackwood 34P, and CAFS 24 in one app.
- System home page with appliance selection.
- Hamburger Global Search.
- Global Search routing into the selected appliance's normal search results.
- `Appliance_Config` sheet support for Excel-driven locker/location ordering.
- Standardised appliance photo folders.
- Main appliance heading navigation back to the system home.

### Improved
- Rescue Blue header System Home button recoloured to neon blue/cyan instead of purple.
- Added visible theme-matched System Home button to the far right of appliance header.
- Main locker/cabin photo card now hides file paths and tap instructions; file paths are reserved for zoom modal.
- Locker/cabin photo file paths hidden on main page and shown inside zoom modal.
- Locker photo presentation trial: side capsule with text on the left and non-cropped tappable photo on the right.
- Patched 34P/CAFS locker photo mappings, added cabin front/rear support, and generated photo README files from current app data.
- Safe compact locker-photo preview added; title and clean file path retained.
- Mobile short-locker white-gap fix so theme background fills the viewport.
- Legacy light/dark button removed; dark themes retained.
- Legacy light/dark button fixed to remain in supported dark mode.
- Light theme removed; app returned to dark-only themes.
- Theme-coloured content background behind tiles.
- Refined Rescue Blue neon system home with lighter white text.
- Default dark Rescue Blue theme.
- 34P inventory title standardised to Blackwood 34P Inventory.
- Default theme set to dark Rescue Blue with matching neon system home.
- Rescue Blue dark styled system home.
- Blackwood Rescue preserved while adding 34P and CAFS 24.
- Photo filename/path display standardised.
- Safer locker/photo fade behaviour to reduce browser crashes.
- Home tab restored to appliance home behaviour.
- Hamburger menu organisation with SEARCH heading.
- Quiz support across selected appliances.
- Cleaner release package structure.

### Preserved
- Existing appliance item tiles.
- Starred items.
- Out of Service view.
- Existing appliance Home behaviour.
- Photo support.
- Offline/static GitHub Pages-friendly approach.

### Notes
- The active master workbook is `Blackwood_CFS_Master_Inventory.xlsx`.
- Legacy Rescue-only workbook is retained in `Archive/` for historical reference only.