# Blackwood CFS v2.5 Inventory Native Swipe Reset Test

Base: `Blackwood_CFS_v2.4.2_DIRECTIONS_REPORT_PILL_SOURCE_ROW_TEST.zip`

Purpose:
- Stop the stacked animation problem properly.
- Remove the double flash/move-down caused by layered render animations.
- Rebuild locker movement from a clean inventory base.
- Make swipe between lockers feel more native.
- Leave Directions Book untouched.

Changed:
- `index.html`
- `.nojekyll`
- `service-worker.js` cache name only
- release/verification notes

Removed/disabled:
- Old `v2-content-enter` inventory animation.
- Staged fade-out/render/fade-in experiment.
- View Transition API experiment.
- MutationObserver render smoothing experiment.
- Any vertical move-down inventory transition.

New approach:
- Normal rendering is direct and still.
- Locker tab changes use one controlled horizontal main-panel transition.
- Swipe tracks the user's finger horizontally with resistance.
- On release, if the threshold is met, the old locker slides slightly away, content is rendered off-centre/dimmed, then the new locker settles to centre.
- If the swipe threshold is not met, it snaps back.
- Buttons, inputs, drawer, and modals are excluded from swipe capture.

Photo cards:
- Attached-photo item card backgrounds are retained.
- They are applied during the initial item-card render.
- Background-only CSS; no pseudo-elements or z-index/child-position changes.

Unchanged:
- Directions Book HTML/data/fidelity.
- Inventory data.
- Photos.
- UBD map files.
- Inventory rebuild tools.
