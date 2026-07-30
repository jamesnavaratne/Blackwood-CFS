# Full Directions Book Live Hydrants geocoding review

- Directions entries: **678**
- Accepted active Hydrants links: **461**
- Manual coordinate overrides used: **0**
- Failed entries using the grey Blackwood CFS fallback: **77**
- Ambiguous entries using the grey Blackwood CFS fallback: **140**
- Total unresolved entries retained for later review: **217**

Official source: Government of South Australia Location SA `SAGAF_PLUS` geocoder with `outSR=4326`.

The complete entry-by-entry review is in `GEOCODING_REVIEW_FULL.csv` and `GEOCODING_REVIEW_FULL.html`. The permanent unresolved list is `UNRESOLVED_ENTRIES.csv`.

Normal rebuilds reapply stored coordinates only. They do not contact the geocoder and the installed app never geocodes at runtime. Future coordinate overrides in `manual-overrides.json` take priority over official collected results.
