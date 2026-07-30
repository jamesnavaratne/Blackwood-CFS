# Directions Book Live Hydrants — full rollout

This folder stores the official Location SA `SAGAF_PLUS` geocoder results used to build the Directions Book's online-only Hydrants links.

## Current rollout

All 678 Directions entries are processed from their authoritative street and locality fields. Stored results are applied during the normal rebuild; the installed app never geocodes at runtime.

- Accepted entries show the normal active **Hydrants** pill.
- Failed or ambiguous entries show a grey **Hydrants** pill.
- The grey pill opens the official live Location SA Roads map at Blackwood CFS, `16A Gorse Avenue, Hawthorndene`, with hydrant layer UID 334 enabled.
- No hydrant data, map or tiles are included in offline preparation.

## Files

- `geocodes.json` — compact stored official results and the 678-entry result mapping.
- `official-collector-results.json` — complete raw official-only collector return, including attempted queries and candidates.
- `manual-overrides.json` — future manual coordinate overrides. Entry-specific overrides take priority, followed by street/locality overrides, then collected results.
- `geocode-config.json` — authoritative rollout and fallback behaviour.
- `GEOCODING_REVIEW_FULL.csv/.html` — complete entry-by-entry review.
- `UNRESOLVED_ENTRIES.csv` — permanent failed/ambiguous review list for later resolution.
- `ACCEPTED_ENTRIES.csv`, `FAILED_ENTRIES.csv`, `AMBIGUOUS_ENTRIES.csv`, `MANUALLY_OVERRIDDEN_ENTRIES.csv` — category extracts.

## Rebuild

Run:

```text
python tools/rebuild_directions_hydrants.py
```

This uses stored coordinates only and regenerates the app fields and all reports. It does not contact Location SA.
