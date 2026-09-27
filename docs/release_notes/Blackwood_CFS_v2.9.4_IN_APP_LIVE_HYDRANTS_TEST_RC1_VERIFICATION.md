# v2.9.4 In-App Live Hydrants Test RC1 — Verification

Verified: 2026-09-26

- Inventory rebuild passed: Blackwood Rescue 146, 34P 142, CAFS 24 115.
- Directions hydrant rebuild validation passed: 678 entries, 677 active coordinates, one fallback, no runtime geocoding.
- Generated hydrant catalogue contains 678 unique IDs and exactly matches every Directions coordinate and fallback state.
- Five previously validated hydrant coordinates were preserved: Gorse Avenue, Rosella Avenue, Hannaford Road, Keith Road and Nama Drive.
- All inline JavaScript blocks compile; the service worker passes Node syntax checking.
- Root, Directions and Hydrants pages contain no duplicate HTML IDs and their CSS blocks have balanced braces.
- The app shell and generated offline asset manifest include `hydrants/index.html` and `hydrants/locations.js`.
- The official Location SA hydrant layer, basemap tiles and Leaflet library remain live online resources and are not placed in offline storage.
