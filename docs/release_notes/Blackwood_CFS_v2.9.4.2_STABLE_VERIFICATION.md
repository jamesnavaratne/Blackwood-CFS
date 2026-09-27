# Blackwood CFS v2.9.4.2 Stable — Verification

Verified: 2026-09-27

- All Directions/UBD backdrop handlers route through `closeTopWorkspaceLayer`.
- The close function checks enlarged viewer, map list and street modal in that order.
- Each branch returns after closing one layer, preventing a single click from collapsing multiple layers.
- The street modal X remains bound directly to `closeModal`.
- The UBD list X remains bound directly to `closeMapList`.
- The enlarged UBD X remains bound directly to `closeMapViewer`.
- Street modal controls and the Hydrants pill remain outside backdrop handling.
- Escape-key handling already follows the same viewer/list/street reverse order.
- JavaScript syntax, generated inventory, Directions/Hydrants data, offline assets and ZIP integrity were revalidated.

