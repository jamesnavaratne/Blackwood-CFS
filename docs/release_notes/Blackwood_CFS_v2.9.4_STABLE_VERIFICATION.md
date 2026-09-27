# Blackwood CFS v2.9.4 Stable — Verification

Verified: 2026-09-27

## Automated and static checks

- Inventory rebuild check passed from `Blackwood_CFS_Master_Inventory.xlsx`.
- Directions/Hydrants offline rebuild validation passed from stored official results.
- All inline and external first-party JavaScript units compiled successfully.
- All JSON files parsed successfully.
- HTML entry points have unique IDs, valid local links and protected new-tab links.
- Manifest icons exist and match their declared dimensions.
- Service-worker app-shell files are present in the offline asset manifest.
- All 67 offline asset paths exist and are unique.
- Embedded Inventory data matches `data/inventory.json` exactly.
- All 403 inventory item IDs are unique and every record uses a configured appliance location.
- All generated locker-photo references resolve to existing files.
- All 678 Directions IDs and Hydrants IDs are unique and aligned in order, label, suburb, coordinates and fallback state.
- Hydrants coordinates are finite and remain within the South Australia safety bounds used by the release audit.
- All 12 configured UBD/operational map files exist and are unique.
- Runtime source contains no debugger statements or console logging.
- Release tree contains no temporary Python caches or editor/system artifacts.

## Operational state assertions

- Directions restoration still respects saved `streetOpen` state.
- A closed street modal returns to the saved Directions list rather than reopening.
- Explicit new Directions links still open the requested street.
- UBD outside taps close only the enlarged viewer and exclude the persistent taskbar.
- Inventory workspace state includes open item details and photo zoom/pan state.
- Hydrants explicit street targets take priority over saved Hydrants workspace state.
- All three active taskbar tabs remain no-op controls and do not reload their current workspace.

## Field-check boundary

The RC6 interaction behaviour was checked by the user before promotion. Live Location SA availability, browser/PWA update timing, device geolocation permission and final GitHub Pages deployment remain environment-dependent checks after deployment.

