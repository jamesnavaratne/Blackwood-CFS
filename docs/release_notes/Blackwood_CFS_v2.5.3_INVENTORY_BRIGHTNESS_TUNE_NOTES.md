# Blackwood CFS v2.5.3 Inventory Brightness / Readability Tune Test

Base: `Blackwood_CFS_v2.5.2_APPLIANCE_SWITCH_HOME_RESET_TEST.zip`

Purpose:
- Make the inventory side feel less dark after photos load.
- Make white text crisper/whiter.
- Lift panels/cards/backgrounds one shade brighter.
- Keep Directions Book untouched.

Changed:
- `index.html`
- `service-worker.js` cache name only
- release/verification notes

Visual tuning:
- Main text colour lifted closer to white.
- Muted text lifted slightly.
- Inventory panels/cards lifted one shade brighter.
- Photo-backed item card dark overlay reduced.
- Locker-photo zero-flash wave kept, but made visually lighter.
- Photo-ready blurred background opacity reduced slightly.

Unchanged:
- Directions Book HTML/data/fidelity
- Inventory data
- Photos
- UBD map files
- Inventory rebuild tools
- Native locker swipe
- Zero-flash image-safe loading
- Appliance switch Home reset
