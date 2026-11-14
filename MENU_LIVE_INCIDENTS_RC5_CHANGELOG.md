# Blackwood CFS · RC5 Live Incidents Beta

Baseline: Blackwood_CFS_15Nov2026_MENU_OFFLINE_RC4_NO_GIT.zip (user supplied)
Release: v2.9.4.32 — Menu & Live Incidents Beta RC5

## Changes
- Added a collapsed **Beta** details dropdown immediately below the Version line in the existing Inventory hamburger drawer.
- Added Live Incidents link inside dropdown, linking to standalone `beta/live-incidents.html`.
- Preserved Open Admin on its own line below Beta.
- Added the previously supplied official CFS public-feed beta viewer and a Back to Blackwood CFS link.
- Added beta page to service worker app shell/offline manifest; live incident content still requires network.
- Updated visible release, content version and service-worker cache identifier to prompt installed-PWA updates.
- No changes to inventory data, directions, maps, hydrants, photos, ribbon or Admin.

## Important
This is supplementary public CFS incident data, NOT BART/pager text or Juvare. If the GIS server blocks direct browser access, the page displays an explicit fetch error. Do not use as an operational dispatch source.

## Files modified
- index.html
- service-worker.js
- shared/release.js
- content-metadata.json
- offline-assets.json

## Files added
- beta/live-incidents.html
- MENU_LIVE_INCIDENTS_RC5_CHANGELOG.md
