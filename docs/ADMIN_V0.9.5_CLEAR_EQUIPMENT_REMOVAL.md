# Blackwood CFS Admin v0.9.5 — Clear Equipment Removal

Update-only files: `admin/index.html`, `admin/sw.js` and this document.

- Existing-item removal is saved immediately as a local draft, with an explicit confirmation, visible success banner and directions to GitHub submission.
- Draft Changes expands automatically and displays a per-removal **Undo removal** control. Other drafts are unaffected.
- Publishing submission displays why it is disabled (signed out or no drafts). A valid GitHub session is required to submit; removal is not deployed until reconciliation, validation and PR merge.
- The Add new equipment control is right-aligned and given more spacing, including in the compact inventory view.
- The Excel reconciliation workflow, live app, and Cloudflare gateway are unchanged.

## Smoke test

1. Select an existing equipment item and choose Propose removal. Confirm the item disappears from the *local draft preview* but not the live app.
2. Verify Draft Changes expands and shows the item marked REMOVE, and GitHub review submission explains whether authentication is needed.
3. Undo removal; verify equipment reappears and draft count decreases.
4. Propose removal again, sign in if needed, submit to GitHub, run the processing workflow with the new PR number, approve workflow if prompted, review Excel and generated app and merge.
5. Refresh the operational app to verify the item has been removed.

Note: Avoid submitting test removals for operational equipment unless the removal is intended.
