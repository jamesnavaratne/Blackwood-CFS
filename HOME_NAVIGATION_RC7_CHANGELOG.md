# Home Navigation RC7 — 18 November 2026

Built from the complete RC6 CFSScan Live Incidents Beta 1 ZIP.

- System Home: changed **Live Hydrants** to **Hydrants** (the actual hydrant module and links remain unchanged).
- System Home: added the same hamburger styling and menu action used by Inventory, without creating a second drawer.
- Updated Home visibility handling so its shared drawer and backdrop are accessible.
- Updated the home finalisation script to recognise the renamed Hydrants tile after regeneration.
- Updated app version and service-worker shell-cache identifier. Offline content version and 92-resource manifest unchanged.

## Changes
- `index.html`
- `shared/home-final.css`
- `shared/home-final.js`
- `shared/release.js`
- `content-metadata.json`
- `service-worker.js`
- New `HOME_NAVIGATION_RC7_CHANGELOG.md`

## Testing required
Open System Home on desktop and phone, open/close hamburger, switch appliance, use ribbon, confirm Hydrants and Live Incidents and verify no home overlay blocking the drawer. RC7 does not implement offline hydrants.
