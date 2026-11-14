# Blackwood CFS cleanup candidate — 15 November 2026

**Release status:** test candidate; stable baseline remains unchanged.

## Changes
- One canonical map list in `maps/maps-data.js` (18 maps). Directions now uses it directly.
- Street Directions button renamed UBD → Maps.
- Directions map modal supports previous/next page for six multi-page DEWNR collections, preserving old zoom controls and workspace state.
- Removed legacy 12-entry map catalogue and transient root-level installation/test artefacts. Historical `docs/`, operational hydrant datasets, admin records, GitHub workflows, master Excel and rebuild tools retained.
- DEWNR JPEGs tested individually at full pixel resolution with JPEG quality 88, 4:4:4; originals retained when savings were under 2%.
- Updated offline dependency list to include new maps and shared assets; more comprehensive offline/menu review is deferred to next phase.
- Updated inventory rebuild tool to retain canonical map assets on regeneration.

## Byte totals for new DEWNR pages
Before: 37987733 bytes; after: 35981045 bytes; saved: 2006688 bytes.

## Removed root files
- `INSTALL_SYSTEM_HOME.ps1`
- `INSTALL_SYSTEM_HOME.cmd`
- `INSTALL_SHARED_RIBBON.ps1`
- `INSTALL_SHARED_RIBBON.cmd`
- `INSTALL_MAPS_TAB.cmd`
- `OPEN_MAPS_TEST.html`
- `MAPS_TRIAL_README.txt`
- `MAPS_UPDATE_README.txt`
- `UPLOAD_THESE_FILES_TO_GITHUB.txt`
- `READ_ME_FIRST.txt`
- `HYDRANTS_MERGE_TEST_REPORT.md`
- `HYDRANTS_SECOND_PASS_TEST_REPORT.md`
- `FULL_HYDRANTS_ROLLOUT_TEST_REPORT.md`
- `TRAINING_MODULE_TEST_REPORT.md`
- `START_HERE.md`
- `directions/maps/ubd/maps.js`

## Validate before deployment
- Open each of the 18 collections from Maps and from a street Directions modal.
- For all six DEWNR collections, page through every page and test 8× zoom, pinch, modal dismissal and reopen.
- Confirm directions, Live Hydrants, inventory, home, admin, ribbon and device back behaviour.
- Prepare for Offline Use and test all tabs/map pages in airplane mode (still requires real-device validation).
- Confirm in-app update prompt and preserved prepared media after SW upgrade.
