# Blackwood CFS v2.4.6 Inventory No-Second-Photo-Flash Test

Base: `Blackwood_CFS_v2.4.5_INVENTORY_STAGED_RENDER_PHOTO_WASH_TEST.zip`

Purpose:
- Reduce the remaining double-flash after selecting a locker.
- Keep Directions untouched.

Changed:
- `index.html`
- `service-worker.js` cache name only
- release/verification notes

Fix:
- Item-card photo background class/style is now applied during the initial card render.
- The later photo availability check now only reveals/hides the small photo icon.
- The later photo check no longer changes the whole item-card background.
- This targets the visual pattern: card appears, then flashes again when the photo background is applied.

Unchanged:
- Directions Book HTML/data/fidelity
- Inventory data
- Photos
- UBD map files
- Inventory rebuild tools
- Item card structure
