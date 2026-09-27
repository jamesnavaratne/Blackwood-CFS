# Blackwood CFS v2.9.4 Stable

Date: 2026-09-27  
Status: Stable baseline  
Based on: `Blackwood_CFS_v2.9.4_OPERATIONAL_WORKSPACE_TEST_RC6_GITHUB.zip`

## Operational workspace

- The fixed Inventory / Directions Book / Hydrants taskbar remains available on System Home and above working modals.
- Inventory restores its appliance, locker/filter, search, scroll position, open item details and open photo viewport during the current app session.
- Directions restores its list, selected street and UBD layers only when those layers were left open. A deliberately closed street modal stays closed.
- Hydrants restores its selected street, map centre and zoom. The Directions Hydrants pill still targets the selected street directly.
- Tapping outside an enlarged UBD map closes only that top viewer layer.

## Stability work

- Hardened delegated click handlers against unexpected event targets.
- Removed obsolete generated Rescue photo references without changing the workbook source.
- Future inventory rebuild validation now fails when an explicitly configured item or locker photo file is missing.
- Updated the stable service-worker app-shell cache, visible version labels and release metadata.

## Preserved data

- 403 inventory items: 146 Blackwood Rescue, 142 34P and 115 CAFS 24.
- 678 Directions entries.
- 677 stored-coordinate Hydrants locations and one clearly identified Blackwood CFS fallback.
- 12 UBD and operational map images.
- 67 prepared-offline assets. Live Location SA map tiles and hydrant markers remain online-only.

