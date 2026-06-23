# Blackwood CFS v2.0 ZIP comparison notes

Compared uploaded working ZIP:

- `current zip.zip`

against last full ZIP generated in this thread:

- `Blackwood_CFS_v2.0_RC1_safe_locker_photo_preview.zip`

## Summary

After normalising the uploaded ZIP's wrapper folder `current zip/`, all common files are identical by SHA-256 hash.

## Key differences

1. The uploaded working ZIP has a top-level wrapper folder:
   - `current zip/`

2. The uploaded working ZIP contains extra photo files not present in the last full generated ZIP:
   - 27 extra photo file(s)

3. The latest full ZIP contains no extra files missing from the uploaded working ZIP after wrapper normalisation:
   - 0 file(s)

4. Changed common files:
   - 0 file(s)

## Extra photo files preserved from uploaded working ZIP

- `photos/34p/lockers/34p_cabin_front.jpg`
- `photos/34p/lockers/34p_cabin_rear.jpg`
- `photos/34p/lockers/34p_crew_deck.jpg`
- `photos/34p/lockers/34p_d2.jpg`
- `photos/34p/lockers/34p_d3.jpg`
- `photos/34p/lockers/34p_d4.jpg`
- `photos/34p/lockers/34p_d5.jpg`
- `photos/34p/lockers/34p_d_reel.jpg`
- `photos/34p/lockers/34p_p1.jpg`
- `photos/34p/lockers/34p_p2.jpg`
- `photos/34p/lockers/34p_p3.jpg`
- `photos/34p/lockers/34p_p_reel.jpg`
- `photos/34p/lockers/34p_pump_panel.jpg`
- `photos/34p/lockers/IMG_20260519_142330032_HDR.jpg`
- `photos/cafs24/lockers/IMG_20260519_142639918_HDR.jpg`
- `photos/cafs24/lockers/IMG_20260519_142849940_HDR.jpg`
- `photos/cafs24/lockers/IMG_20260519_142858818_HDR.jpg`
- `photos/cafs24/lockers/cafs24_d1.jpg`
- `photos/cafs24/lockers/cafs24_d2.jpg`
- `photos/cafs24/lockers/cafs24_p1.jpg`
- `photos/cafs24/lockers/cafs24_p2.jpg`
- `photos/cafs24/lockers/cafs24_p3.jpg`
- `photos/cafs24/lockers/cafs24_p_tube.jpg`
- `photos/cafs24/lockers/cafs24_pump_panel.jpg`
- `photos/cafs24/lockers/cafs24_rear.jpg`
- `photos/rescue/items/IMG_20260531_165414383_HDR.jpg`
- `photos/rescue/lockers/locker_4.jpg`

## Build decision

This patch uses the uploaded working ZIP as the source of truth so your currently working app state and uploaded photos are preserved.
