# Blackwood CFS v2.9.4 Operational Workspace Test RC6

Date: 2026-09-27  
Status: Test release candidate  
Based on: `Blackwood_CFS_v2.9.4_OPERATIONAL_WORKSPACE_TEST_RC5_GITHUB.zip`

## Directions closed-state continuity

Directions now distinguishes between the last selected street and whether its modal was actually left open:

- An open street modal and its UBD layers still restore after a taskbar round trip.
- A deliberately closed street modal stays closed.
- The main street list returns with its search and page position preserved.

## UBD modal consistency

Tapping outside an enlarged UBD map now closes that viewer layer, matching the other Directions modals. The outside tap is consumed so only the top layer closes; the underlying UBD list or street modal remains available.

## Preserved

- RC5 Inventory item-details and photo-viewer continuity.
- RC4 independent Inventory, Directions Book and Hydrants workspaces.
- Persistent taskbar on System Home and above all operational modals.
- 678 Directions entries, 677 active stored hydrant coordinates and one fallback.
