# Blackwood CFS v2.9.4.4 Tablet Landscape Trial RC3 — Verification

Verified on 2026-09-28 against Tablet Landscape Trial RC2.

## Directions layout checks

- Normal landscape street card width remains 640px.
- Side-by-side street pane provides 640px of content width plus the original 8px margins.
- The prior 40% width split is absent.
- The prior narrow-pane header grid and title-wrapping overrides are absent.
- The UBD context begins immediately after the fixed street pane and fills the remaining width.
- RC2 immediate touch and mouse UBD pan at 100% remains present.

## Structural checks

- All 29 inline JavaScript blocks compile.
- Service worker, UBD map catalogue and Hydrants catalogue compile.
- Inventory, Directions and Hydrants HTML parse without hard structural errors.
- CSS braces are balanced in all three entry points.
- All 67 offline-media assets resolve to existing files.
- Release labels, manifest and service-worker cache identity are aligned to RC3.

## Data integrity

- Inventory JSON and workbook are unchanged from RC2.
- Directions remains 678 entries and its data block is unchanged from RC2.
- Hydrants catalogue is unchanged from RC2.
- Offline media catalogue is unchanged from RC2.

This RC3 change is limited to the landscape Directions/UBD pane geometry, version metadata and documentation.
