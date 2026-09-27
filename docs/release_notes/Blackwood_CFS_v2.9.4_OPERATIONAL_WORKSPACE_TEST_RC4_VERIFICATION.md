# v2.9.4 Operational Workspace Test RC4 — Verification

Verified: 2026-09-27

- Full-width taskbar is exempt from every System Home hide/show path.
- System Home reserves safe space above the fixed taskbar.
- Inventory workspace uses session storage for appliance, locker/filter, search, scroll and System Home state.
- Hydrants workspace uses session storage for selected street, map centre and zoom.
- An explicit street opened from Directions takes priority over an older Hydrants workspace.
- Directions Hydrants pill targets the selected street; the Directions taskbar Hydrants tab resumes the saved Hydrants workspace.
- Hydrants taskbar Directions tab prefers the saved Directions workspace rather than replacing it with the current map picker selection.
- Inventory taskbar Directions link reopens the saved Directions entry so RC3 can restore its modal and UBD state.
- Active Inventory, Directions and Hydrants tabs do not reload their current page.
- Taskbar stacking remains above the Directions, UBD, inventory, photo and loading overlays.
- Data integrity remains 678 Directions entries, 677 active hydrant locations and one fallback.
