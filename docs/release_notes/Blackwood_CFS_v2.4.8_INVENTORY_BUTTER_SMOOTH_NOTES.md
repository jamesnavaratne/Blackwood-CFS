# Blackwood CFS v2.4.8 Inventory Butter Smooth Test

Base: latest v2.4.7/v2.4.6 test package.

Purpose:
- Fix the unacceptable double flash / move-down on locker selection.
- Make left/right locker swipe actually work.
- Keep Directions Book untouched.
- Preserve card structure and the attached-photo background feature.

Key change:
- Removed the staged fade layer that caused the visible double movement.
- Disabled the older `v2-content-enter` animation for inventory.
- Added a single browser-level View Transition API animation for locker changes where supported.
- Added a minimal non-View-Transition fallback without vertical movement.
- Added functional swipe handling on the real `<main>` inventory area.

Swipe:
- Swipe left = next locker.
- Swipe right = previous locker.
- Works within the current appliance.
- Buttons, inputs, drawer, and modals are excluded.
- Starting from Home/Out of Service/Starred swipes into the nearest locker direction.

Smoothness:
- Before locker transition, the app starts preloading the target locker photo and visible item-card photo backgrounds with a short timeout.
- The content change occurs inside one transition rather than multiple stacked fades.
- Search updates are debounced lightly and do not use the locker transition.
- Reduced-motion support preserved.

Unchanged:
- Directions Book HTML/data/fidelity
- Inventory data
- Photos
- UBD map files
- Inventory rebuild tools
