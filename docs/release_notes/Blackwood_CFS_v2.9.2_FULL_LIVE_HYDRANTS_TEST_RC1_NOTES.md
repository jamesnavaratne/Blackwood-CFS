# Blackwood CFS v2.9.2 Personal UBD Full Live Hydrants Test RC1

## Scope

Full Directions Book Live Hydrants rollout built from the confirmed working v2.9.1 Personal UBD + Read Aloud + five-street Live Hydrants baseline.

## Result

- 678 Directions entries processed.
- 461 accepted active Hydrants links.
- 77 failed and 140 ambiguous entries retained as grey fallback links.
- All five previously validated coordinates preserved exactly.
- Failed/ambiguous pills open the live official map at Blackwood CFS, 16A Gorse Avenue, Hawthorndene.
- UPPER STURT ROAD HAWTHORNDENE was explicitly queried as 192 Upper Sturt Road and remains unresolved because no exact official candidate was returned.

## Rebuild behaviour

Normal Windows and GitHub rebuilds apply stored coordinates and manual overrides only. No network geocoding occurs during rebuild or in the installed app. Manual overrides take priority.

## Preserved

Read Aloud, Super UBD, Blackwood CFS Response Zone, all UBD maps and behaviour, inventory data, favourites, street-name-only search, photos, offline preparation and GitHub rebuild workflow.

Hydrant data, maps and tiles are not included in offline preparation.
