# Blackwood CFS v2.9.2 Personal UBD Full Live Hydrants Test RC1

## Baseline

Built directly from the confirmed working `v2.9.1 Personal UBD + Read Aloud + Live Hydrants Test RC1` package.

## Full rollout result

- Directions entries processed: **678**
- Active accepted Hydrants links: **461**
- Failed entries using grey fallback: **77**
- Ambiguous entries using grey fallback: **140**
- Total unresolved entries retained for later review: **217**
- Manual coordinate overrides currently used: **0**
- Preserved validated coordinates: **5**

## Behaviour

Accepted entries open the official live Location SA Roads viewer at the stored coordinate, zoom 18, with hydrant layer UID 334 enabled. Failed and ambiguous entries show a grey Hydrants pill and open the same live viewer at Blackwood CFS, 16A Gorse Avenue, Hawthorndene.

`UPPER STURT ROAD HAWTHORNDENE` was looked up using the explicit address `192 Upper Sturt Road, Hawthorndene SA`; no exact official SAGAF_PLUS candidate was returned, so it remains unresolved and uses the grey fallback.

## Rebuild and offline handling

The normal Windows and GitHub workflows run `tools/rebuild_directions_hydrants.py` before the inventory rebuild. The script reads stored official results and manual overrides only; it does not contact the geocoder. The installed app does not geocode at runtime.

No hydrant dataset, map or tiles are added to offline preparation.

## Review files

See `directions/hydrants/GEOCODING_REVIEW_FULL.html` or `.csv` for all 678 entries. `UNRESOLVED_ENTRIES.csv` is the permanent list for future manual review.
