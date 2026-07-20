# Blackwood CFS v2.4.3 Item Card Photo Backgrounds Test

Base: `Blackwood_CFS_v2.4.2_DIRECTIONS_REPORT_PILL_SOURCE_ROW_TEST.zip`

Purpose:
- Make it more obvious when an item card has an attached photo.
- Keep the existing item-card structure, text positions, and interaction model.
- Add `.nojekyll` to reduce GitHub Pages/Jekyll deployment noise for this static app.

Changed:
- `index.html`
- `.nojekyll`
- `service-worker.js` cache name only
- release/verification notes

Feature:
- Existing photo availability detection now also applies a subtle faded background image to item cards when the attached item photo loads.
- Cards without a valid attached photo are unchanged.
- The existing photo indicator button and item modal behaviour remain unchanged.

Unchanged:
- Inventory data
- Directions data/fidelity
- Photos
- UBD map files
- Inventory rebuild tools
