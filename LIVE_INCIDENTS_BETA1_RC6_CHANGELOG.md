# RC6 — CFSScan Live Incidents Beta 1 (15 November 2026)

Base: `Blackwood_CFS_15Nov2026_OFFLINE_RELIABILITY_RC5_NO_GIT.zip`.

Changes:
- Added `beta/live-incidents.html`, the supplied Beta 1 direct CFSScan embed, unaltered.
- Added `Beta > Live Incidents` in the Inventory hamburger menu; uses app menu styling.
- Updated RC5 service-worker **only** for the RC6 shell cache version and local beta page precache. Retained RC5 offline cache integrity checks, migration, preparation, and status logic (the RC7/RC8 drop-in worker was not applied).
- Updated visible release and metadata app version to `v2.9.4.33 — Live Incidents Beta 1 RC6`.
- Preserved offline content version and all 92 existing offline assets. Live pager feed requires internet and is not part of the prepared offline media set.

Notes:
- Live pager feed is third-party content. If embedded content is unavailable, tap `Open full feed` on the beta page.
- BART remains the operational paging/turnout authority.
- The full app ZIP contains no `.git` history. Original RC5 assets, maps, photos, data and admin files retained.

Validation: ZIP CRC/integrity, JS syntax, route existence, offline-asset referential integrity, and hash comparison for all files not specifically changed. Real Android/PWA UI and third-party iframe behaviour require device testing.
