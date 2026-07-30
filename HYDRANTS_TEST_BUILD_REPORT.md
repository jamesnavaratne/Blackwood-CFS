# Blackwood CFS v2.9.1 Hydrants Test RC2

## Baseline

Built from **Blackwood CFS v2.9.0 Directions Read Aloud RC1**, which includes all v2.8.4 stable features.

## Test scope

An active **Hydrants** pill is provided only for:

- Gorse Avenue — Hawthorndene
- Rosella Avenue — Glenalta
- Hannaford Road — Blackwood
- Keith Road — Blackwood
- Nama Drive — Hawthorndene

All other Directions entries retain their existing wording, search, favourites, Read Aloud and UBD behaviour. Their Hydrants action remains hidden until an official coordinate is accepted.

## Location SA configuration

- Basemap: Roads
- Zoom: 18
- Hydrant layer UID: 334
- Coordinates: WGS84 (`outSR=4326`)
- `x`: longitude
- `y`: latitude
- Pin: none
- Runtime geocoding: none
- Offline hydrant maps/data/tiles: none

## Geocoding result

All five test targets were accepted from the official Location SA SAGAF_PLUS output at score 100.

See:

- `directions/hydrants/GEOCODING_REVIEW_TEST.md`
- `directions/hydrants/GEOCODING_REVIEW_TEST.csv`

## Files added

- `directions/hydrants/geocodes.json`
- `directions/hydrants/manual-overrides.json`
- `directions/hydrants/geocode-config.json`
- `directions/hydrants/GEOCODING_REVIEW_TEST.md`
- `directions/hydrants/GEOCODING_REVIEW_TEST.csv`
- `directions/hydrants/GEOCODING_REVIEW_CURRENT.csv`
- `directions/hydrants/MANUAL_REVIEW.csv`
- `directions/hydrants/README.md`
- `tools/rebuild_directions_hydrants.py`
- `HYDRANTS_TEST_BUILD_REPORT.md`

## Files changed

- `directions/index.html` — Hydrants pill, safe Location SA URL builder and five stored test geocodes.
- `service-worker.js` — test-build cache version only.
- `index.html` — displayed test-build version only; inventory data remains unchanged.
- `content-metadata.json` and `offline-assets.json` — regenerated because Directions Book changed; no Location SA map or external hydrant content was added.
- `.github/workflows/rebuild_inventory_from_excel.yml` — applies preserved hydrant coordinates before inventory/offline metadata rebuild.
- `tools/rebuild_inventory_from_excel.bat`
- `tools/rebuild_inventory_from_excel.ps1`
- `tools/rebuild_inventory_from_excel_with_report.bat`
- `tools/rebuild_inventory_from_excel_with_report.ps1`
- `tools/README.md`
- `CHANGELOG.md`

## Full-rollout design

After the five links are confirmed on a real device, the same rebuild tool can process all reliable unique street/suburb combinations. It reuses duplicates, keeps same-named streets in different suburbs separate, preserves accepted results, gives manual overrides priority and reports every unresolved entry instead of guessing.
