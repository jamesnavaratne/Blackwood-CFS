# Home Hamburger RC8 — 23 November 2026

**Foundation:** Blackwood CFS v2.9.4.33 Live Incidents Beta 1 RC6 (the last working baseline before the rejected RC7 overlays).

## Changes
- Copied the user-approved `Blackwood_CFS_System_Home_RC6_Clean_Hamburger_PREVIEW.html` Home hamburger exactly, apart from synchronising the embedded release label.
- Added one isolated Home-card hamburger button. It switches to Rescue through the existing Home appliance button, then opens the actual Inventory drawer. No drawer overlays on Home.
- Home-only visibility CSS hides underlying Inventory header/search while Home is open.
- Preserved approved preview System Home tile wording: `Hydrants`.
- Updated release label in `shared/release.js`, embedded metadata and `content-metadata.json`; refreshed service-worker app-shell cache key.
- Kept persistent offline media cache and contentVersion unchanged; no media or offline preparation behaviour changed.

## Fidelity note
The approved preview was generated directly from RC6 and is used exactly for the Home interface. This intentionally excludes the rejected RC7 overlay logic while preserving the approved preview appearance. This is intentional to avoid the rejected RC7 overlay implementation. If required, change the tile label separately after review.

## Verification
Static code syntax, ZIP integrity, content file parity and asset reference checks. Browser/device validation remains required.
