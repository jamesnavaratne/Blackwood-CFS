# Full Directions Book Live Hydrants geocoding review — reviewed second pass

- Directions entries: **678**
- Original accepted official links retained: **461**
- Reviewed exact official candidate selections/corrections: **154**
- Reviewed Directions-route vicinity anchors: **62**
- Manual coordinate overrides used: **0**
- Total active Hydrants links: **677**
- Failed entries still using the grey Blackwood CFS fallback: **1**
- Ambiguous entries still using the grey Blackwood CFS fallback: **0**
- Total unresolved entries retained for later review: **1**

Official coordinate source remains Government of South Australia Location SA `SAGAF_PLUS` with `outSR=4326`.

Reviewed exact resolutions select the lowest valid numbered official candidate or an official candidate after a reviewed spelling, street-type or adjoining-locality correction. Reviewed vicinity anchors deliberately use an official coordinate on the confirmed Directions approach route when the target road is historical, internal, unnumbered or absent from the official address geocoder.

The complete entry-by-entry review is in `GEOCODING_REVIEW_FULL.csv` and `GEOCODING_REVIEW_FULL.html`. The remaining permanent unresolved list is `UNRESOLVED_ENTRIES.csv`. Reviewed resolutions are stored in `reviewed-resolutions.json`.

Normal rebuilds use stored coordinates only. They do not contact the geocoder and the installed app never geocodes at runtime. Future coordinate overrides in `manual-overrides.json` retain highest priority.
