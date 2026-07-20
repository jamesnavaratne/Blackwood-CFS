# Blackwood CFS v2.5.2 Appliance Switch Home Reset Test

Base: `Blackwood_CFS_v2.5.1_ZERO_FLASH_IMAGE_SAFE_TEST.zip`

Purpose:
- When switching to a different appliance, always return to that appliance's Home view.
- Reset the horizontal locker-tab row back to the start so it does not remain visually half-way along the locker list.

Changed:
- `index.html`
- `service-worker.js` cache name only
- release/verification notes

Behaviour:
- Appliance selection now explicitly:
  - clears any search text
  - sets `activeLocker = "Home"`
  - rebuilds the tabs
  - renders the appliance Home view
  - resets the tabs scroll position to the start
  - clears any leftover main-panel transform/opacity from swipe movement

Unchanged:
- Directions Book HTML/data/fidelity
- Inventory data
- Photos
- UBD map files
- Inventory rebuild tools
- Zero-flash locker image loading/wave
- Native locker swipe behaviour
