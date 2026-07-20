# Blackwood CFS v2.4.7 Inventory Locker Swipe Smooth Test

Base: `Blackwood_CFS_v2.4.6_INVENTORY_NO_SECOND_PHOTO_FLASH_TEST.zip`

Purpose:
- Add smooth left/right swiping between lockers within the current appliance.
- Keep the existing tab structure.
- Continue the inventory smoothness/no-second-photo-flash work.
- Leave Directions Book untouched.

Changed:
- `index.html`
- `service-worker.js` cache name only
- release/verification notes

Swipe behaviour:
- Swipe left: next locker.
- Swipe right: previous locker.
- If starting from Home/Out of Service, swipe moves into the nearest locker direction.
- The active tab scrolls into view.
- Search is cleared when swiping lockers, matching normal locker tab selection behaviour.
- Buttons/inputs/modals/drawer/photo modal are excluded from swipe capture.

Smoothness:
- Swipe transitions use a directional fade/slide.
- Existing staged render remains.
- Reduced-motion support preserved.

Unchanged:
- Directions Book HTML/data/fidelity
- Inventory data
- Photos
- UBD map files
- Inventory rebuild tools
- Existing locker tab structure
