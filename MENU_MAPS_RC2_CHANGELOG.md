# Blackwood CFS — Menu & Maps RC2 (15 November 2026)

Source: 15 November Cleanup RC1; original 15 November stable ZIP remains untouched.

- Inventory menu now offers only Default Blue and Light mode. Old saved blue/green/red/yellow choices migrate to Default Blue.
- Removed redundant Directions Book drawer shortcut; the persistent taskbar still navigates to Directions.
- Training shortcuts retained, with neutral theme-aware glyphs instead of hardcoded blue dots.
- Matching 11px radii and consistent padding on drawer pills and buttons.
- Offline preparation button now has a clear accent outline, download glyph, and more descriptive content copy. Existing offline download logic is NOT rewritten.
- Rebuild utility now preserves the release label and the offline manifest includes its source.
- Version visible in drawer uses one maintained release label in `shared/release.js` (cached in app shell); content metadata version and offline content fingerprint synchronised.
- Added subtle local `Open Admin` link under version to `admin/index.html` (no authorisation bypass).
- Maps sidebar search field adjusted for even left/right spacing; removed meaningless count.
- No operational media replaced or removed; map catalogue / multi-page viewer retained.

## Validation scope
Static JavaScript parser, link/asset manifest checks and ZIP integrity validation. Device and offline tests still required. Not labelled stable until validated on Android/tablet.

## Training suggestions (not implemented)
A lightweight randomised 'missed items' repeat round and an appliance-specific progress summary (kept device-local) could help volunteers, without adding online accounts or modifying operational data.
