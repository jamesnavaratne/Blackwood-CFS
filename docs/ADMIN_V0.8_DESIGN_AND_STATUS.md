# Admin v0.8 — Design and publishing status

Changes: darker rescue-blue console, summary metrics, consistent navigation, draft reopen controls, PR-specific read-only status tracker, highlighted next step, and a validation action that fails on proposal-only changes. Shared PIN 8888, all inventory/photo routines, master workbook, Main App, Directions and Hydrants are unchanged.

## Deployment
Copy the update ZIP contents into your existing repository; commit/push. Keep the existing Cloudflare OAuth credentials. **Gateway status tracking requires separately redeploying** `tools/admin-gateway/worker.js` with `npx wrangler deploy` from that folder. The normal GitHub submission works even if the Worker has not been updated, but PR status will show unavailable.

## Preventing accidental merges
The validation Action rejects unprocessed Admin PRs. **A failed check alone does NOT block merging.** GitHub Settings → Rules → Rulesets (or branch protection) must make the `validate` check required on `main`. Test the rule using a proposal-only draft PR before relying on it. Branch rule availability and enforcement depend on repository/plan.

## Status semantics
The panel reports one last-submitted PR number saved in this browser, fetches live PR/file/check state only on demand, and does not automatically claim deployed/verified after merge. After merge, verify Pages deployment and live equipment manually. GitHub source is authoritative, local drafts are still local and not automatically cleared.
