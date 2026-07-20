# Blackwood CFS v2.4.4 Inventory Smoothness and Photo Wash Test

Base: `Blackwood_CFS_v2.4.3_FIXED_ITEM_CARD_PHOTO_BACKGROUNDS_TEST.zip`

Purpose:
- Make the attached-photo card background wash a little lighter.
- Ensure the grey wash covers the whole card/photo background so obvious photo edge lines are less visible.
- Reduce jumpiness/flashing in the inventory UI with slower, softer fades.

Changed:
- `index.html`
- `service-worker.js` cache name only
- release/verification notes

Photo-card background adjustment:
- Still background-only.
- No pseudo-elements.
- No child positioning/z-index changes.
- Lighter dark/grey wash.
- Full-card first background layer uses `100% 100%` over the photo.

Smoothness adjustment:
- Adds soft fade/translate transitions around inventory re-renders.
- Adds a small MutationObserver wrapper to reduce hard visual changes after filtering/tab switching/searching.
- Respects reduced-motion settings.

Unchanged:
- Inventory data
- Directions data/fidelity
- Photos
- UBD map files
- Inventory rebuild tools
