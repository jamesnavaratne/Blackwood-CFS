# Blackwood CFS v2.1 Stable — Directions Source Update

This package is now the stable baseline for the Blackwood CFS app.

## Stable baseline

- `Blackwood_CFS_v2.1_STABLE_DIRECTIONS_SOURCE_UPDATE.zip`

## Based on

- `Blackwood_CFS_v2.0_STABLE_UBD_BACKDROP_CLOSE_FIX.zip`

## Main changes since v2.0 stable

- Directions Book updated from newer source files:
  - `CORO STREETS.doc`
  - `BLACKWOOD PARK STREETS1.doc`
  - `CORO EAST & CHERRY STREETS.doc`
- Retained main Blackwood source:
  - `BLACKWOOD CORO EDEN HILLS ETC STREETS 122016.docx`
- Directions entry count increased to 678.
- Directions fidelity pass complete:
  - missing source entries: 0
  - extra app entries: 0
  - street-name mismatches: 0
  - suburb/area mismatches: 0
  - direction-text mismatches: 0
  - map/code mismatches: 0
- Word bold-run fidelity applied to the new replacement-source entries.
- Directions search now searches primary street names only, not words inside route descriptions.
- Source manifests retained inside the package.

## Deliberately parked

UBD map pages 179 and 180 are deliberately delayed for a later map-image update. The Directions entries remain present and usable; only the linked map images are not included yet.

## Source tracking files

- `DIRECTIONS_SOURCE_UPDATE_v2.1_NOTES.md`
- `DIRECTIONS_SOURCE_UPDATE_v2.1_BUILD_INFO.json`
- `directions/source/SOURCE_GENERATION_MANIFEST.md`
- `directions/source/SOURCE_GENERATION_MANIFEST.json`
