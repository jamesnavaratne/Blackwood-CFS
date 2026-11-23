# Blackwood CFS — Code Consolidation RC9 (23 November 2026)

**Baseline:** tested Home Hamburger RC8 (`v2.9.4.35`). **Candidate:** `v2.9.4.36 — Consolidation RC9`.

## Changes
- Consolidated two Inventory late-stage theme scripts into one. Preserves Default Blue / Light selections, the legacy-control cleanup, and the original immediate / +100 ms / +150 ms refresh timings.
- Added `tools/audit_release.py`: read-only checks for release labels, offline asset existence and count, essential app entry points, and cache identity presence.
- Updated visible app release, embedded release metadata, and application cache name.
- Did **not** change Home navigation, System Home styling, Maps catalogue, ribbon, Directions, Hydrants, CFSScan, or service-worker caching logic.

## Follow-up
- Test theme switching (Default Blue ↔ Light), menu, Home hamburger, then offline update on Android.
- Later work: refactor additional legacy patch layers individually after visual and interaction comparisons; performance benchmarking requires device measurements.
