# Blackwood CFS v2.9.4.2 Stable

Date: 2026-09-27  
Status: Stable hotfix  
Based on: `Blackwood_CFS_v2.9.4.1_STABLE_UBD_LAYERING_FIX_GITHUB.zip`

## Reverse-order modal closing

The Directions workspace now treats its layered modals as a stack when an outside backdrop is selected:

1. enlarged UBD viewer;
2. UBD map list;
3. street Directions modal.

Each outside click closes only the current top layer. Controls inside the street modal—including Hydrants—remain interactive and do not count as outside clicks.

The explicit X buttons keep their existing scoped behaviour, and all saved workspace restoration remains unchanged.

