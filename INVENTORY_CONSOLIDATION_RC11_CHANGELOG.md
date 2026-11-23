# Inventory Consolidation RC11 — 23 November 2026

**Baseline:** v2.9.4.37 — Performance RC10
**Release:** v2.9.4.38 — Inventory Consolidation RC11

## Deliberately limited refactor

- Removed an obsolete Global Search diagnostic function (`window.v2GlobalSearchDebugCounts`). A whole-package source search found no caller; this was developer-only instrumentation, not part of the user-facing search feature.
- Merged two adjacent immediate-invocation Inventory fixes into one script tag, preserving each function's entire body and the original execution order: (1) the 34P display title correction; (2) legacy theme-toggle removal. The code statements were not rewritten.
- Reduced inline Inventory script tags from 24 to 22 (total script tags including external scripts from 27 to 25). No CSS, icons, photos, directions, maps or application behaviours were intentionally changed.
- Advanced release identifier, embedded metadata, and app-shell cache version. Offline content version and manifest intentionally unchanged.
- Added a lightweight Inventory script-structure regression check to detect reintroduction of the obsolete diagnostic and accidental loss of either legacy handler.

## Validation

- `python tools/audit_release.py <full zip>`
- `python tools/test_inventory_scripts.py <full zip>`
- `node --check` on all inline Inventory script bodies and other app JavaScript when Node.js is available
- Full/update ZIP CRC integrity checks and changed-file diff from RC10

**Pending:** Android / browser interaction testing, especially light/default-blue switching, the 34P title, inventory search, and the System Home hamburger. Keep RC10 as rollback until tested.
