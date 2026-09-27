# Blackwood CFS v2.9.4 In-App Live Hydrants Test RC2

Date: 2026-09-27  
Status: Test release candidate  
Based on: `Blackwood_CFS_v2.9.4_IN_APP_LIVE_HYDRANTS_TEST_RC1_GITHUB.zip`

## Layout corrections

- The live user-location marker is now an explicit 18×18 block, producing a blue circular dot with a white rim on Android.
- Inventory, Directions Book and Hydrants now use the same fixed, full-screen-width bottom taskbar.
- The taskbar has square outer edges and no desktop-width cap or side gaps.
- The Hydrants map reserves taskbar space so its lower controls and attribution remain visible.

## Direct-open correction

A Hydrants page opened without street query parameters now defaults to Blackwood CFS. Missing latitude and longitude values are no longer interpreted as zero.

## Preserved

- 678 Directions entries, 677 active stored hydrant coordinates and one fallback.
- Official Location SA hydrant layer UID 334 and roads basemap.
- Inventory, storage-first photos, UBD maps, Training module and all RC1 Directions behaviour.
