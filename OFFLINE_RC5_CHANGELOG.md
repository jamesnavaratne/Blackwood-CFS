# RC5 — Offline Reliability & Consolidation

- Retained RC4 visuals and navigation exactly; no layout redesign.
- Service worker now checks all expected cached resources before reporting Offline Content Ready; catches evictions/missing maps/photos.
- Prepare request checks the current installed asset manifest and rejects stale/mismatched lists, preventing false readiness from mixed app versions.
- Completed downloads are checked against actual cache entries before marking complete.
- Concurrent offline preparation requests are rejected instead of interfering with each other.
- Migration from legacy app caches now carries across only operational media, not old application shells/scripts; existing persistent offline cache is preserved.
- Options explains missing cached files and rechecks status after preparation.
- New worker cache name and aligned metadata, assets manifest, release banner.
- Operational assets unchanged; original stable and RC4 remain untouched.
- Actual device airplane-mode and update-migration regression checks remain necessary before promotion to stable.
