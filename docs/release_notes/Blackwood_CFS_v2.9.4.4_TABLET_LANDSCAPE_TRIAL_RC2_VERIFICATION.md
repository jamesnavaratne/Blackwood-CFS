# Blackwood CFS v2.9.4.4 Tablet Landscape Trial RC2 — Verification

Verified on 2026-09-28 against Tablet Landscape Trial RC1.

## Interaction checks

- The old `mapZoom > 1` one-finger pan gate is absent.
- One-finger pan is active whenever the touch gesture mode is `pan`, including at 100%.
- Mouse down, move, up and focus-loss cleanup handlers are present.
- Touch and mouse drag update the existing scroll container, so the existing saved scroll-position logic remains authoritative.
- Pinch, double-tap, double-tap-and-slide, zoom buttons and control-click wheel zoom handlers remain present.

## Structural checks

- All 29 inline JavaScript blocks compile.
- Service worker, UBD map catalogue and Hydrants location catalogue compile.
- Inventory, Directions and Hydrants HTML parse without hard structural errors.
- CSS braces are balanced in all three entry points.
- All 67 offline-media assets resolve to existing files.
- Manifest orientation remains `any`.
- Release labels, manifest and service-worker cache identity are aligned to RC2.

## Data integrity

- Inventory JSON is unchanged from RC1.
- Inventory workbook is unchanged from RC1.
- Directions data remains 678 entries and is unchanged from RC1.
- Hydrants catalogue remains unchanged from RC1.
- Offline media catalogue remains unchanged from RC1.

This RC2 change is limited to UBD pan interaction, version metadata and documentation.
