# Blackwood CFS Admin OAuth gateway — setup and safety

**Status:** Deployment-ready source, **NOT DEPLOYED**. The editor can always export JSON without this gateway. The PIN is a device-only deterrent, not a real security control.

## One-time setup

1. Create a Cloudflare Workers account and install Wrangler (Node.js): `npm install -g wrangler`; `wrangler login`.
2. In GitHub, go to **Settings → Developer settings → OAuth Apps → New OAuth App**. Set the **Homepage URL** to `https://jamesnavaratne.github.io/Blackwood-CFS/admin/` and **Authorization callback URL** to `https://YOUR-WORKER.workers.dev/auth/callback`. Copy the OAuth app Client ID; keep its generated Client Secret private.
3. Copy `wrangler.toml.example` to `wrangler.toml`, set `GITHUB_CLIENT_ID`, `ALLOWED_LOGINS` (exact GitHub usernames, comma-separated), and verify `GITHUB_REPO` and `DEFAULT_BRANCH` against your repository.
4. Run `wrangler kv namespace create SESSIONS`, put its namespace ID into `wrangler.toml`, then deploy: `wrangler deploy`.
5. Save the GitHub OAuth Client Secret as a Worker secret: `wrangler secret put GITHUB_CLIENT_SECRET`. Confirm deployment. Do not commit the secret to a repository.
6. In the Admin app's **GitHub review submission** section, paste ONLY the HTTPS Worker origin (for example `https://blackwood-cfs-admin-gateway.example.workers.dev`), then click **Sign in with GitHub**.
7. Submit a **test** draft from Admin. Verify a **draft pull request** appears in GitHub, containing only an `admin/submissions/*.json` proposal. **Do not merge it yet.** Close the PR and delete its test branch when finished.

## What this pilot does and does not do

- It creates a review-only *draft pull request*, never updates Excel or deploys changes automatically.
- You **must not merge** the proposal-only PR until a separate review/reconciliation process has applied it to the master workbook, assigned permanent equipment IDs, stored and optimised photos and rebuilt/tested the generated inventory on the PR branch.
- Any proposed equipment edit must be reviewed for accuracy; there is no automated operational validation yet.
- Sessions expire after one hour; a new GitHub sign-in is then required. GitHub OAuth access tokens and secrets remain in the Worker/KV, not the public website. The browser retains only a revocable, short-lived session handle.
- The GitHub OAuth `repo` permission is broad for a private repository. Restrict `ALLOWED_LOGINS`, use a dedicated GitHub account with minimal necessary permissions, and prefer a fine-grained GitHub App in a later version. In particular, OAuth grant scope is not narrowed to just one repository.
- PIN stored in local browser storage can be bypassed by clearing site data, and is **not** a credential for GitHub submission.
- Worker/KV is a small external dependency; the main volunteer-facing GitHub Pages app stays static and unchanged.
- Before using with other volunteers, implement a rate limit and tighter content checks, and validate the gateway deployment and CORS behaviour.

## Testing checklist

- Admin URL shows PIN setup on first use and asks for PIN on a fresh browser session.
- Switching appliance clears the editor. Existing saved drafts remain.
- Valid GitHub user can log in; unallowlisted user cannot.
- Try a test inventory draft with no photo; verify a draft PR is created without touching Excel, generated JSON or the live app.
- Verify PIN does not give publishing access when signed out.
- Check expired session and incorrect gateway URL do not lose saved drafts.

## Technical notes

Cloudflare Worker KV `SESSIONS` stores short-lived OAuth state, exchange tickets and session records. The OAuth callback returns a one-use ticket in a URL fragment, redeemed by the browser for a one-hour session. Browser never receives a GitHub OAuth access token. Sessions are invalidated by Sign out or TTL. GitHub branch and PR creation are performed server-side.
