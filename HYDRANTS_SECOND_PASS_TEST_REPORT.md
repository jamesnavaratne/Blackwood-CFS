# Blackwood CFS v2.9.3 Personal UBD Hydrants Second-Pass Test RC1

## Outcome

- Directions entries reviewed: **678**
- Original accepted official links preserved: **461**
- Reviewed exact official resolutions: **154**
- Reviewed vicinity/approach anchors: **62**
- Total active Hydrants pills: **677**
- Remaining grey Blackwood CFS fallback pills: **1**
- Remaining unresolved entry: **GOVERNMENT ROAD — SPRINGFIELD**

## Resolution policy

Manual coordinate overrides remain highest priority. Reviewed exact resolutions use official Location SA candidates after selecting the lowest valid numbered address or applying a reviewed spelling, street-type or adjoining-locality correction. Reviewed vicinity anchors use an official stored coordinate on a confirmed approach route when the target is historical, internal, unnumbered or absent from the address geocoder. The app does not geocode at runtime.

## User-interface changes

- Directions UBD viewer maximum zoom increased from **4× to 8×**.
- The `Refresh now` button in the update popup now immediately enters a pressed/loading state, disables repeat clicks, displays `Refreshing…`, and lets that state paint before a direct reload.

## Preserved

Read Aloud, Super UBD, Blackwood CFS Response Zone, all UBD/reference maps, all 678 Directions entries and wording, all inventory data and photos, favourites, search, offline preparation, and Windows/GitHub rebuild workflow.

Hydrant data, maps and tiles remain excluded from offline preparation.

## Review files

- `directions/hydrants/GEOCODING_REVIEW_FULL.csv`
- `directions/hydrants/REVIEWED_EXACT_OFFICIAL_ENTRIES.csv`
- `directions/hydrants/REVIEWED_VICINITY_ANCHOR_ENTRIES.csv`
- `directions/hydrants/UNRESOLVED_ENTRIES.csv`
- `directions/hydrants/reviewed-resolutions.json`
- `directions/hydrants/manual-overrides.json`
