# Blackwood CFS v2.5.1 Zero-Flash Image-Safe Inventory Test

Base: `Blackwood_CFS_v2.5_INVENTORY_NATIVE_SWIPE_RESET_TEST.zip`

Purpose:
- Target the white/pale flashes visible in the locker photo area.
- Keep Directions Book untouched.
- Keep the v2.5 native-style inventory reset and swipe approach.

Changed:
- `index.html`
- `service-worker.js` cache name only
- release/verification notes

Image-safe locker photo fix:
- Locker photo shell now starts as a dark themed placeholder.
- The blurred background layer no longer loads/paints separately before the main image.
- The locker image is hidden until it has loaded/decoded.
- Once the image is ready, the shell receives `photo-ready` and reveals the image/background cleanly.
- Image errors show the missing-photo fallback without leaving a white/light box.

Loading circle decision:
- No obvious loading circle was added.
- A bright/default spinner would likely make the flash more noticeable.
- Instead there is a very subtle dark shimmer in the photo area while the image is not ready.

Unchanged:
- Directions Book HTML/data/fidelity.
- Inventory data.
- Photos.
- UBD map files.
- Inventory rebuild tools.
- Card structure.
