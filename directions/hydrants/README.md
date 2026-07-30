# Directions Book Live Hydrants

This folder stores official Location SA SAGAF_PLUS street-centre geocoding results used to build online-only Hydrants links.

## Current rollout

`geocode-config.json` is set to `test` mode. Only these street/suburb pairs are active:

- Gorse Avenue — Hawthorndene
- Rosella Avenue — Glenalta
- Hannaford Road — Blackwood
- Keith Road — Blackwood
- Nama Drive — Hawthorndene

The Hydrants action opens the live Location SA Roads viewer at zoom 18 with hydrant layer UID 334 and no pin.

## Files

- `geocodes.json` — preserved accepted official results.
- `manual-overrides.json` — durable manual corrections; these always take priority.
- `geocode-config.json` — test/full rollout mode, threshold and geographic bounds.
- `GEOCODING_REVIEW_TEST.md/.csv` — initial test review.
- `GEOCODING_REVIEW_CURRENT.csv` — generated current review.
- `MANUAL_REVIEW.csv` — unresolved test entries.

No hydrant map, hydrant tile or hydrant dataset is stored offline.
