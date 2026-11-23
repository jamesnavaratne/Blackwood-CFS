# Blackwood CFS — Performance RC10 (23 November 2026)

**Source:** RC9 (`v2.9.4.36`) **Candidate:** `v2.9.4.37 — Performance RC10`.

## Targeted optimisation
- Service worker now coalesces *overlapping* media offline-readiness checks into a single in-flight status/manifest read. This avoids duplicated Cache Storage reads when multiple inventory photos or map tiles are requested together.
- The result is **not kept across completed batches**: later requests read status and version afresh. This preserves the existing behaviour when offline preparation changes, the app is updated, or cache storage is evicted.
- Existing cache-first/live-first selection criteria, offline manifest, preparation workflow, successful-cache verification, Live Hydrants, CFSScan, and navigation are otherwise unchanged.
- Release metadata and app-shell cache name advanced to RC10. No image resizing or content changes.

## Verification
- Run `python tools/audit_release.py <full-app-zip>` for the existing release checks.
- Run `node tools/test_media_readiness.js` for concurrent and sequential read behaviour.
- On Android, confirm Inventory photos with/without a prepared offline set, offline readiness, and airplane-mode reopening. These runtime checks remain outstanding.

## Risks and safeguards
- Should caching be unavailable, the same existing network fallback applies.
- Do not promote to stable until operational regression tests pass.
