# Blackwood CFS v2.2 Internal Transitions Sandbox

Base: `Blackwood_CFS_v2.2_STATIC_HOME_COLD_START_TEST.zip` when available, otherwise v2.1 stable.

Purpose:
- Keep Android cold-start calm: no in-app splash/logo overlay.
- Add subtle internal app transitions only after the app is open.
- Make the app feel smoother without slowing operational use.

Changed:
- `index.html`
- `directions/index.html`
- `manifest.json`
- `service-worker.js`

Transition changes:
- System Home pill press feedback.
- System Home -> appliance fade transition.
- Appliance/locker/search content soft fade.
- Hamburger drawer polish.
- Item, quiz, issue and photo modal fade/scale polish.
- Global Search modal fade/scale polish.
- Directions Book street card and UBD/map modal fade/scale polish.
- Reduced-motion support retained.

Safety:
- Directions v2.1 data/fidelity unchanged.
- Inventory data unchanged.
- Photos unchanged.
- UBD map files unchanged.
- Gesture code unchanged.
