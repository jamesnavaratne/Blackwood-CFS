# Blackwood CFS v2.9.4.4 Tablet Landscape Trial RC1 — Verification

Verified on 2026-09-27 against v2.9.4.3 Stable.

## Passed static checks

- All 29 inline JavaScript blocks compile.
- Service worker, UBD map catalogue and Hydrants location catalogue compile.
- All three HTML entry points parse without hard structural errors.
- CSS block braces are balanced in all three entry points.
- Manifest and release metadata are valid JSON.
- Manifest orientation is `any`.
- The 900px × 540px landscape breakpoint is present in Inventory, Directions and Hydrants.
- All 67 offline-media assets resolve to existing files.
- Service-worker cache name is unique to this trial.

## Data integrity

- Blackwood Rescue: 146 inventory records.
- 34P: 142 inventory records.
- CAFS 24: 115 inventory records.
- Directions: 678 entries.
- Hydrants catalogue: 678 entries.
- Inventory JSON is byte-identical to v2.9.4.3 Stable.
- Inventory workbook is byte-identical to v2.9.4.3 Stable.
- Directions data block is byte-identical to v2.9.4.3 Stable.
- Hydrants location catalogue is byte-identical to v2.9.4.3 Stable.
- Offline media catalogue is byte-identical to v2.9.4.3 Stable.

## Trial scope

Only layout, rotation, visible build labels, release documentation and the service-worker cache version changed. Device visual testing remains the purpose of this RC1 package.
