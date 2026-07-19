# Blackwood CFS v2.2 Android Smooth Native Handoff Sandbox

Base: `Blackwood_CFS_v2.1_STABLE_DIRECTIONS_SOURCE_UPDATE.zip`

Purpose:
- Smooth installed Android/PWA app launch.
- Avoid the glitchy repeated CFS insignia.
- Do not show any second in-app logo or splash image.
- Let Android show the native PWA splash, then fade in actual app content.
- Remove all slide/rise movement during startup.

Changed:
- `index.html`
- `manifest.json` background/theme colours aligned to the app background

Kept unchanged:
- Directions v2.1 source/data/fidelity
- Inventory data
- Photos
- Gestures
- UBD maps
- Themes/buttons

Testing:
- Install/open from Android home screen.
- Look for: native splash -> smooth fade to System Home, with no second icon jump.
