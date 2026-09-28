# Blackwood CFS v2.9.4.4 Tablet Landscape Trial RC1

This is an isolated layout trial based on v2.9.4.3 Stable. It does not replace the stable build.

## Trial changes

- Installed-PWA rotation is enabled with manifest orientation set to `any`.
- Landscape tablet breakpoint: at least 900px wide and 540px high.
- Inventory item cards use three columns at the trial breakpoint.
- Inventory modals and enlarged photos reserve space above the persistent taskbar.
- Directions and UBD use side-by-side panes at the trial breakpoint.
- Hydrants uses a condensed horizontal header at the trial breakpoint.
- The persistent taskbar becomes a compact horizontal icon-and-label bar.
- Left and right safe-area insets are included for supported devices.

## Behaviour deliberately unchanged

- Inventory, Directions and Hydrants workspace state preservation.
- Directions modal opening order and reverse closing order.
- Street directions wording and all stored Hydrants coordinates.
- Offline media preparation and storage-first inventory/UBD loading.
- Inventory workbook data, photo mappings and item counts.

## Suggested device checks

- 1024 × 600 landscape Android tablet.
- 1180 × 820 landscape iPad.
- 1280 × 800 landscape Android/Windows tablet.
- 1366 × 1024 landscape iPad Pro.
