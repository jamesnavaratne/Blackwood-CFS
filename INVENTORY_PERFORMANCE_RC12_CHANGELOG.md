# Blackwood CFS — RC12 Inventory Performance

Source: v2.9.4.38 RC11 full app ZIP. New version: v2.9.4.39 RC12.

## Code change
The Inventory image-fade helper previously created a new 40 ms timer after every document click, each scanning the modal image selectors. Rapid clicks could therefore duplicate work. RC12 allows just one pending scan; the timer clears its pending state before scanning, so subsequent clicks can trigger another scan. Existing image selection, `photo-ready` class, load/error handling, and once-per-image binding are unchanged.

## Safety scope
The RC8-approved System Home hamburger, ribbon, navigation, offline-readiness logic, map catalogues, hydrants, training, CFSScan feed and all photos are unchanged. No legacy script removal was attempted without a proven equivalence test.

## Test coverage
`tools/test_photo_fade_rc12.js` uses a stubbed DOM and virtual timer to verify rapid-click coalescing, later-click rescanning and image-ready listener idempotency. `tools/audit_release.py` checks version and offline asset consistency. The ZIP has been compared against RC11 for its exact changed-file set.

## Device validation still required
Check opening several Inventory items and zoomed photos, repeated taps, returning to Inventory, both themes and offline preparation. Automated static tests cannot prove Android visual behaviour.
