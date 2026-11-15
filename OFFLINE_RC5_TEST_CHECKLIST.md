# Blackwood CFS RC5 — offline regression checklist

Baseline: 15 November 2026 RC4. RC5 is not stable until device tests pass.

1. With a reliable connection, load RC5. Verify release label shows `v2.9.4.32 — Offline Reliability RC5`.
2. Open Options. Initially expect **Prepare for Offline Use** (unless this exact RC5 was already prepared).
3. Tap and allow the download to finish without closing the app. Wait for **Offline Content Ready** and **Ready** in the status card. Files: 92, approximately 202 MiB uncompressed.
4. Close and restart installed PWA; Ready should persist. Verify all appliances, locker/item photos, Directions street search, UBD and all DEWNR park pages.
5. Turn on airplane mode AND disable Wi-Fi, fully close/relaunch PWA. Check all core pages and representative photos/maps. Live Hydrants still require internet.
6. Restore connectivity. Confirm update check and app navigation work.
7. Update from an older installed app. Verify the new app prompts for refresh and that old offline content is not falsely reported as Ready.
8. If browser storage is cleared or some offline cache entries are evicted, Ready must change to Incomplete after a status check, not remain green.
9. If a file fails to download, readiness must not be reported; retrying should recover.

Static checks are not a substitute for these Android/iOS browser checks. Cache Storage may be evicted by browser storage policy; persistent storage is requested but not guaranteed.
