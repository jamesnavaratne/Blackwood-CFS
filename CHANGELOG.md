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