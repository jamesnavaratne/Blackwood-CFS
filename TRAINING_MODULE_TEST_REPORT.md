# Blackwood CFS v2.9.3 - Training Module Test RC2

## Baseline

Built directly from the user-supplied running/stable package uploaded on 10 August 2026.

The supplied app identifies itself as `v2.9.3 Personal UBD Hydrants Second-Pass Test RC1` and retains the expected v2.9.3 operational state:

- 677 active stored-coordinate Hydrants pills.
- 1 grey fallback: GOVERNMENT ROAD — SPRINGFIELD.
- UBD viewer maximum zoom 8x.
- Personal UBD / reference maps and Directions Book preserved.
- Read Aloud implementation preserved.
- Inventory totals: Blackwood Rescue 146, 34P 142, CAFS 24 115.

No inventory rebuild was run for this Training update.

## Training changes

### Item Location Quiz

- Appliance hint is now always visible during each question.
- Question count can be selected as 5, 10, 15, 20, 25, 50 or All available.
- Revealing the answer also shows the existing mapped locker/location photo.
- Cabin questions use the existing front/rear cabin photo metadata, selecting the rear photo for rear-seat sections and the front photo otherwise.
- Existing appliance selection and self-marking flow is preserved.

### Learner Guide Links

Added a second pill under the hamburger-menu TRAINING section. It opens a themed modal containing the user-supplied SA CFS Volunteer links for:

1. Basic Firefighting
2. Breathing Apparatus
3. Defensive Fire Suppression

These links remain online resources and are not added to Prepare for Offline Use.

## Preservation / validation

Byte-for-byte unchanged during this update:

- `Blackwood_CFS_Master_Inventory.xlsx`
- `data/inventory.json`
- `directions/index.html`
- `content-metadata.json`
- `offline-assets.json`
- all 46 supplied files under `photos/`

Quiz photo mapping validation:

- Blackwood Rescue: 146/146 eligible records map to an existing photo.
- 34P: 142/142 eligible records map to an existing photo.
- CAFS 24: 115/115 eligible records map to an existing photo.
- Missing quiz locker-photo mappings: 0.
- Missing mapped quiz locker-photo files: 0.

All inline JavaScript blocks and the service worker passed syntax validation. HTML ID checks found no duplicate IDs.

## App shell update

The service-worker app-shell cache name was bumped so an installed app can detect this Training RC as a new shell version while preserving prepared offline content caches.

This is a test RC built from the user's stable package; it should not replace the stable designation until device testing is accepted.


## RC2 refinements

- Generate Quiz button given stronger theme-aware emphasis while retaining the existing visual language.
- Learner Guide modal description simplified to the approved wording.
- All learner-guide link sub-descriptions standardised to `Open learner guide`.
- Hamburger TRAINING pills use the same 8 px vertical separation as the appliance pills.
- No inventory, Directions, hydrant, UBD, photo, workbook or offline-content data changes were made for RC2.
