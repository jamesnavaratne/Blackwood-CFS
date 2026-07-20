# Blackwood CFS v2.4.5 Inventory Staged Render and Photo Wash Test

Base: `Blackwood_CFS_v2.4.3_FIXED_ITEM_CARD_PHOTO_BACKGROUNDS_TEST.zip`

Purpose:
- Target the inventory jumpiness/flashing seen in screen recordings.
- Leave the Directions Book untouched.
- Keep item-card photo backgrounds, but make the grey wash lighter and full-cover.

Changed:
- `index.html`
- `service-worker.js` cache name only
- release/verification notes

Inventory smoothness:
- The inventory render now uses a staged transition:
  1. fade existing summary/photo/results down slightly
  2. render the new locker/search results
  3. fade the new content in
- Explicit scroll-to-top transitions now use `auto` rather than smooth scrolling, reducing the sliding/jumpy feel.
- Reduced-motion support is preserved.

Photo-card background:
- Background-only implementation retained.
- No pseudo-elements.
- No z-index or child positioning changes.
- Lighter wash.
- Wash layer uses `100% 100%` so it covers the full card/photo background.

Unchanged:
- Directions Book HTML/data/fidelity
- Inventory data
- Photos
- UBD map files
- Inventory rebuild tools
