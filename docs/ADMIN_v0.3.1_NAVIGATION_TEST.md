# Admin v0.3.1 navigation patch — test build

Only `admin/index.html` and `admin/sw.js` were modified from the approved v0.3 test ZIP.

- Selecting an equipment record switches from Inventory list to the editor view (never both at once).
- Visible `Back to inventory / Start over` and `Clear selection` controls reset the editor view without deleting saved drafts.
- Changing the appliance filter clears any selected record; no stale Rescue item carries into 34P or CAFS 24.
- Removal and Clear All Drafts now also return to the inventory view.
- Photo compression, locker/section dropdowns, all original inventory, Directions, Hydrants RC2, and existing publishing-disabled state remain unchanged.
- Android install: two PWAs under the same GitHub Pages origin can still be collapsed by Android/Chrome depending on prior install identity and browser behavior. A *reliably separate* installation may need a distinct origin (for example a dedicated admin subdomain). This has not been changed in this patch.
- Do not deploy test inventory changes from the November 12 JSON; none included.
