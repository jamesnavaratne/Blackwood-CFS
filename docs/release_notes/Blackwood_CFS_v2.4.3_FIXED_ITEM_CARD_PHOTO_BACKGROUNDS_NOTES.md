# Blackwood CFS v2.4.3 Fixed Item Card Photo Backgrounds Test

Base: `Blackwood_CFS_v2.4.2_DIRECTIONS_REPORT_PILL_SOURCE_ROW_TEST.zip`

Purpose:
- Make item cards with attached photos more visually obvious.
- Preserve the exact item-card structure and layout.
- Add `.nojekyll` for cleaner GitHub Pages static deployment.

Changed:
- `index.html`
- `.nojekyll`
- `service-worker.js` cache name only
- release/verification notes

Feature:
- If an item's attached photo successfully loads, the card receives a subtle dark blended background image.
- The background is applied using the card's own background only.
- No pseudo-elements are used.
- No child positioning/z-index changes are used.

Unchanged:
- Item-card HTML structure
- Star button layout
- Photo indicator layout
- Status pill layout
- Inventory data
- Directions data/fidelity
- Photos
- UBD map files
- Inventory rebuild tools
