# Blackwood CFS Admin v0.9 — Guided Workspace

## Deployment
Copy `admin/index.html` and `admin/sw.js` into the existing main repository, preserving their paths. Commit and push with GitHub Desktop. No new Cloudflare Worker deployment, GitHub settings or Excel migration is required for these interface changes.

## Improvements
- Dark rescue-blue workspace; green highlighted current publishing action, teal complete stages, blue inactive navigation, red real error statuses.
- Publishing steps remain in their actual sequence: save, submit, process, approve pending workflow if asked, review files and checks, merge, verify live update. No top-of-list current-step duplication.
- At widths up to 1000px, a fixed horizontally scrollable seven-step ribbon replaces the desktop side guide. Current step is automatically scrolled into view.
- Inventory stays present as a compact equipment selector when editing. Expand the full searchable inventory or switch selected equipment using the quick-choice list.
- Editor is its own independently collapsible panel.
- PIN auto-focuses/selects on entry. Removed verbose PIN/GitHub security warnings. GitHub connection and PR status receive distinct colour-coded treatments.
- The existing draft/submit/photo-edit flows, universal PIN 8888, gateway and reconciliation process have not been altered.

## Tests
JavaScript syntax checked with Node.js. Mock inventory tests in Chromium at 1440px and 390px confirmed PIN focus, item selection keeps inventory and editor visible, quick selector populates, draft saving persists and both responsive layouts render. Full GitHub status and deployment require a real connected session and should be verified after pushing.
