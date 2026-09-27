# Blackwood CFS v2.9.4 Operational Workspace Test RC4

Date: 2026-09-27  
Status: Test release candidate  
Based on: `Blackwood_CFS_v2.9.4_OPERATIONAL_TASKBAR_TEST_RC3_GITHUB.zip`

## Operational workflow

The taskbar now behaves as a three-part operational workspace:

1. Find a street in Directions and open its directions modal.
2. Open the required UBD map and leave it at the useful zoom and pan position.
3. Switch to Hydrants, inspect the selected street and move the map as required.
4. Switch to Inventory, choose an appliance or locker and run an item search.
5. Move between all three tabs and resume each workspace where it was left.

## State retained during the current app session

- Directions entry, search, street modal, UBD list/viewer, selected map, zoom and pan.
- Hydrants selected street, map centre and zoom.
- Inventory System Home state, appliance, locker/filter, search text and page position.

The Directions modal Hydrants pill still opens the selected street. The taskbar tabs then act only as workspace switches, so they do not reset another tab's saved position.

## Preserved

- RC3 modal-safe full-width taskbar.
- RC2 circular Android live-location dot and safe direct-open map default.
- 678 Directions entries, 677 active stored hydrant coordinates and one fallback.
- Inventory data, storage-first photos, UBD/reference maps, Training module and offline preparation workflow.
