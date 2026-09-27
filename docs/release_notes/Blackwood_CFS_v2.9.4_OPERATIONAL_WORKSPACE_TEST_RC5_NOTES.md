# Blackwood CFS v2.9.4 Operational Workspace Test RC5

Date: 2026-09-27  
Status: Test release candidate  
Based on: `Blackwood_CFS_v2.9.4_OPERATIONAL_WORKSPACE_TEST_RC4_GITHUB.zip`

## Inventory continuity

The Inventory workspace now retains the complete working context when another taskbar tab is selected:

- Selected appliance and locker/filter.
- Search text and inventory page position.
- Open item-details modal and its scroll position.
- Open item photo viewer, image, zoom and relative pan position.

Returning through the Inventory taskbar tab resumes the same item rather than returning only to its search results.

## Preserved

- RC4 independent Inventory, Directions Book and Hydrants workspaces.
- Persistent taskbar on System Home and above all operational modals.
- Directions street/UBD state and Hydrants street/map state.
- 678 Directions entries, 677 active stored hydrant coordinates and one fallback.
- Inventory data, storage-first photos, UBD/reference maps, Training module and offline preparation workflow.
