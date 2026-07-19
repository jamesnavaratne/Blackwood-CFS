# Blackwood CFS v2.2 Static Home Cold-Start Sandbox

Base: `Blackwood_CFS_v2.1_STABLE_DIRECTIONS_SOURCE_UPDATE.zip`

Purpose:
- Improve cold launch from an installed Android home-screen PWA after force close.
- Avoid the glitchy second CFS insignia.
- Avoid all in-app startup slide/rise/fade overlays.
- Make the first app-controlled paint already be the normal System Home.
- Bump the service-worker cache name so this startup test is not hidden by stale cached files.

Changed:
- `index.html`
- `manifest.json`
- `service-worker.js`

Kept unchanged:
- Directions v2.1 source/data/fidelity
- Inventory data
- Photos
- Gestures
- UBD maps
- Themes/buttons

Important testing note:
Android may cache the installed app splash/manifest aggressively. For a true test, after deploying:
1. Open the app once from Chrome/browser to let the service worker update.
2. Close it.
3. Open from the Android home-screen icon.
4. If the old splash behaviour persists, remove the installed app icon and reinstall it from the updated site.
