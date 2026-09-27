# Blackwood CFS v2.9.4 In-App Live Hydrants Test RC1

Date: 2026-09-26  
Status: Test release candidate  
Based on: `Blackwood_CFS_v2.9.3_TRAINING_MODULE_TEST_RC9_HTTPS_HYDRANTS_GITHUB.zip`

## What changed

- Added an in-app live Hydrants screen backed by the official Location SA hydrant layer (UID 334).
- Added persistent bottom navigation for Inventory, Directions Book and Hydrants.
- Directions Hydrants pills now open the in-app map centred on the selected street.
- Added Selected street, Recently searched and Favourites sections to the location picker.
- Added a direct Location SA hyperlink for the selected street.
- Added a permission-based live location dot and a locate button.
- Aligned locate and zoom controls at the lower right, all at 44 px width.
- Added `hydrants/locations.js` to the normal rebuild and offline preparation manifests.

## Behaviour retained

- 678 Directions entries.
- 677 active stored hydrant coordinates.
- The unresolved Government Road, Springfield entry continues to fall back to Blackwood CFS and is clearly identified.
- Inventory, storage-first locker/item photos, UBD maps, Training module and RC9 photo stability are unchanged.
- Hydrant coordinates are not geocoded at runtime.

## Online requirement

The Hydrants screen shell and street catalogue can be prepared for offline use, but the official hydrant markers, Location SA basemap and Leaflet library require a network connection. User location requires HTTPS and location permission.

## Test focus

1. Open a Directions entry and tap its Hydrants pill; confirm the Hydrants map opens centred on that street.
2. Switch between Inventory, Directions Book and Hydrants using the bottom navigation.
3. Use Locate me on Android, iPhone/iPad and desktop browsers after granting permission.
4. Confirm Selected street, Recently searched and Favourites are correctly separated.
5. Confirm the Location SA pill opens the official map for the selected coordinate.
6. Confirm inventory photos and UBD maps retain their RC9 storage-first behaviour.
