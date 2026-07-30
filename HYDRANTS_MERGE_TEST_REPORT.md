# Blackwood CFS v2.9.1 Personal UBD Live Hydrants Merge Test RC1

## Source baseline

- `Blackwood_CFS_v2.9.0_PERSONAL_UBD_BASELINE_REVIEWED_NO_GIT`

## Feature donor

- `Blackwood_CFS_v2.9.1_LIVE_HYDRANTS_TEST_RC2_READ_ALOUD_NO_GIT`

## Merged feature

A Hydrants pill is active only for:

- Gorse Avenue — Hawthorndene
- Rosella Avenue — Glenalta
- Hannaford Road — Blackwood
- Keith Road — Blackwood
- Nama Drive — Hawthorndene

The link opens the live Location SA Roads viewer at zoom 18 with hydrant layer UID 334 and no pin. No live hydrant content is cached offline.

## Explicitly preserved from the reviewed personal baseline

- Directions Read Aloud
- all 678 Directions entries and wording
- Super UBD
- Blackwood CFS Response Zone
- Belair National Park map and nine UBD pages
- complete inventory workbook, generated inventory and photos
- offline preparation assets and update workflow
- Excel local rebuild wrappers and GitHub Actions rebuild workflow

## Rebuild behaviour

The normal rebuild wrappers first reapply accepted official hydrant coordinates with `tools/rebuild_directions_hydrants.py --geocode-missing`, then rebuild inventory and offline metadata.

## Validation completed

- 678 Directions records retained; all non-hydrant fields match the reviewed baseline.
- Exactly five Hydrants links active; all five contain accepted numeric Location SA coordinates.
- Read Aloud speech implementation retained.
- Master Excel workbook, generated inventory JSON and embedded inventory data unchanged.
- Complete photos tree unchanged.
- Complete reviewed UBD/reference-map tree unchanged, including the 41,169,738-byte Super UBD.
- Offline manifest regenerated with 65 operational assets and includes Super UBD, Blackwood CFS Response Zone and Belair National Park Map.
- Integrated hydrant and inventory rebuilds completed successfully.
- Python and inline JavaScript syntax checks passed.
