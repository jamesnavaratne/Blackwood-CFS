# v2.9.4 In-App Live Hydrants Test RC2 — Verification

Verified: 2026-09-27

- User-location marker has `display: block`, 18×18 dimensions, a circular radius, blue fill and white border.
- All three primary pages use a fixed full-width taskbar with no width cap, translation or outer border radius.
- Hydrants layout reserves the full taskbar height beneath the map.
- Missing latitude/longitude query values produce `NaN` and safely select Blackwood CFS.
- RC1 data integrity checks remain mandatory: 678 Directions entries, 677 active hydrant locations and one fallback.
