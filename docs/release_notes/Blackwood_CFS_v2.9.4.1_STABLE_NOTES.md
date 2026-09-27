# Blackwood CFS v2.9.4.1 Stable

Date: 2026-09-27  
Status: Stable hotfix  
Based on: `Blackwood_CFS_v2.9.4_STABLE_GITHUB.zip`

## UBD layering correction

The enlarged UBD viewer no longer installs a document-wide capture listener. Its outside-close action is now bound directly to the viewer backdrop.

This means:

- clicking the visible backdrop still closes a full-screen enlarged UBD map;
- the street Directions modal remains interactive during the split-panel UBD workflow;
- the Hydrants pill can be used without its click being intercepted;
- taskbar navigation and saved workspace state are unchanged.

All v2.9.4 Stable inventory, Directions, Hydrants, offline and state-restoration behaviour is preserved.

