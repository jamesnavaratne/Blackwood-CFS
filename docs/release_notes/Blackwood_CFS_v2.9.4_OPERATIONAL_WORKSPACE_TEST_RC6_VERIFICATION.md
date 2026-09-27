# v2.9.4 Operational Workspace Test RC6 — Verification

Verified: 2026-09-27

- Directions restoration reads and respects the saved `streetOpen` state.
- A matching saved entry no longer causes `openEntry` when its street modal was closed.
- New or unmatched explicit Directions links still open their requested street normally.
- Directions list scroll position is stored and restored independently of modal state.
- Enlarged UBD outside taps close the viewer and stop propagation before underlying modals can close.
- Taskbar taps are excluded from outside-close interception so workspace state remains intact during navigation.
- RC5 Inventory and RC4 Hydrants workspace state logic remains unchanged.
- JavaScript, CSS, markup IDs, source-data counts and packaged archive are validated before release.
