# Blackwood CFS v2.1 Directions New Source Update — Full App Test

This package is generated from the current stable full app with only the Directions Book source data replaced by the v2.1 new-source test.

## Base app

- `Blackwood_CFS_v2.0_STABLE_UBD_BACKDROP_CLOSE_FIX.zip`

## Directions generation source set

Retained existing source:

- `directions/source/BLACKWOOD CORO EDEN HILLS ETC STREETS 122016.docx`
  - Used for: Blackwood main / retained unchanged main direction set

New replacement sources:

- `directions/source/CORO STREETS.doc`
  - Replaces previous `CORO STREETS 122016.doc`
  - Used for updated Coromandel Valley / CORO streets

- `directions/source/BLACKWOOD PARK STREETS1.doc`
  - Replaces previous `BLACKWOOD PARK STREETS.doc`
  - Used for updated Craigburn Farm / Blackwood Park streets

- `directions/source/CORO EAST & CHERRY STREETS.doc`
  - Replaces previous `CORO EAST & CHERRY STREETS 122016.doc`
  - Used for updated Coro East / Cherry Gardens / Chandlers Hill etc streets

Previous 2016 sources are retained under:

- `directions/source/archive_previous_2016_sources/`

## Entry count

- Current stable Directions Book: 641 entries
- v2.1 new-source Directions test: 678 entries

## Important notes

- This is a full-app test package, not final stable yet.
- Inventory data, appliance photos, gesture behaviour, theme/photo polish, extra maps, and UBD close fix are retained from the current stable app.
- Updated/new Directions entries are generated from the new uploaded source files.
- Exact Word bold-run fidelity should be rerun before declaring this source update as a new stable release.

See also:

- `directions/source/SOURCE_GENERATION_MANIFEST.md`
- `directions/source/SOURCE_GENERATION_MANIFEST.json`

## Search behaviour patch

Directions Book search now matches the primary street entry title/name only.

It no longer searches:
- route/directions text
- suburb/area text
- map references
- response codes
- source file names

This avoids noisy results for common road names such as `MAIN ROAD`, which are frequently mentioned inside directions for other streets.

## Fidelity pass

Generated: `2026-07-19T11:53:13Z`

The v2.1 Directions source update has now had a fidelity pass against the tracked source files.

Results:

- Total Directions entries: `678`
- Replacement-source entries checked: `202`
- Missing source entries in app: `0`
- Extra app entries versus source: `0`
- Street name / suburb-area / directions / map ref / code mismatches: `0`
- Source-derived Word bold-run HTML entries applied: `202`
- Source-derived bold segments applied: `2691`
- Directions search remains street-name-only.

This package remains a full-app test package until field testing confirms the update.

