# Blackwood CFS — Official live Hydrants layer 6 RC1 (8 November 2026)

Source: app's most recent Admin v0.2 / broom test / original hydrant fallback full ZIP.

## Changes
- `hydrants/index.html`: switch official overlay to `Infrastructure_Utilities/MapServer/6` on `agsplus.geodata.sa.gov.au`; use the visually tested live GeoJSON point query first and a transparent image export as secondary fallback.
- `service-worker.js`: cache version bumped to trigger the existing in-app update process.
- `docs/HYDRANT_LAYER6_REPLACEMENT_RC1.md`: this release note.

No other application files changed. No changes to stored hydrant street coordinates, Directions Book, inventory, photos or Admin. The existing external Location SA button and its URL builder are preserved.

## Safety and validation
- Features can be incomplete if a server response is truncated. If the returned list reaches 2,000 features or announces `exceededTransferLimit`, the test code warns and attempts the alternate official layer image; do not assume complete data at broad zoom levels.
- Official hydrant symbols indicate possible locations, **not confirmed usability**. For operational verification, use the existing Location SA link.
- Desktop HTML trial demonstrated 1,244 markers on visible map with close visual comparison to Location SA. This integrated build is not yet independently tested on Android PWA; deploy as test and verify panning/zooming and Location SA link.
- Offline hydrant layer and offline basemap are not part of this release.
