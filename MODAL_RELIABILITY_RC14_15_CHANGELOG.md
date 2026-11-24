# RC14/15 — Modal reliability (24 November 2026)

Built from RC13. The visual design, approved System Home hamburger, inventory data, offline cache policy, and other tabs are unchanged.

## Changes
- Item photographs now have a dedicated inline loader. A decoded image is inserted once, only if the corresponding item is still selected. Missing images show a clear fallback.
- The expanded photo opens with a stable frame and local loader; stale image requests are ignored, and image opacity/entry animations are disabled in the Inventory photo components.
- Retired the full-screen photo-loading overlay from Inventory markup.
- Item and expanded-photo modals are confined to the space above the persistent navigation ribbon; captions remain accessible.
- Kept pinch/double-tap zoom, item modal interactions and RC13 performance changes.

## Validation limitation
Automated syntax, cache/reference and source invariants are checked. Real device visual testing (including Android low-memory, rapid switching and both themes) is required before promoting to stable. Android Back-button history is intentionally deferred to RC16.
