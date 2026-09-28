# Blackwood CFS v2.9.4.5 Stable — Verification

Verified on 2026-09-29.

## Release identity

- Inventory menu shows `v2.9.4.5 Stable`.
- Hydrants runtime build identity shows `v2.9.4.5 Stable`.
- Service-worker cache identity is unique to v2.9.4.5.
- Release manifest, README, START HERE, changelog and release notes identify v2.9.4.5.

## Requested mobile fixes

- Inventory hamburger drawer ends above the persistent taskbar.
- Directions alphabet rail dynamically starts below the rendered sticky header.
- Hydrants heading contains only `Blackwood CFS` and `Live Hydrants`; build jargon is absent from the visible heading.

## Integrity and syntax checks

- Inline JavaScript syntax passed for Inventory, Directions Book and Hydrants.
- Service-worker JavaScript syntax passed.
- JSON parsing passed for the release manifest, PWA manifest, offline asset manifest and content metadata.
- Inventory contains 403 records: Blackwood Rescue 146, 34P 142 and CAFS 24 115.
- Directions contains 678 entries.
- Hydrants contains 678 stored entries with the single established fallback retained.
- Inventory data, Directions data, Hydrants location data, geocodes and the master Excel workbook are byte-identical to the verified v2.9.4.4 Stable Mobile Safe Area Fix source package.

No existing application behaviour or operational data was intentionally changed during the v2.9.4.5 version promotion.
