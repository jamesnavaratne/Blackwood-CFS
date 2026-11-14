# Blackwood CFS Admin v0.9.1 — Connected Workspace

A focused interface update built on the working v0.9 Guided Workspace. The Excel reconciliation, GitHub validation workflows, operational app, and photo editing logic are unchanged.

## Changed files

- `admin/index.html` — Moves the existing GitHub sign-in/check/sign-out controls and status into the top Admin Console header; colour-coded connection state; session recheck and expired-session handling; clearer guide copy; gateway default URL when no saved configuration exists.
- `admin/sw.js` — bumps Admin PWA cache name to `blackwood-admin-v091` for updated interface assets.

## Behaviour

1. Enter the existing shared PIN 8888 to edit inventory locally (no GitHub login needed).
2. Use the green **Sign in with GitHub** button near the top when ready to publish or inspect tracked PR status.
3. An existing session is checked on page load; on success the header displays green **GitHub connected**, and shows refresh connection/sign out controls.
4. An expired session prompts reconnection. The publishing section only handles draft submission; connection controls no longer appear twice.
5. The publishing guide continues to track the latest PR from local storage and polls on explicit Refresh. PR updates still require the existing gateway status endpoint.

## Deployment

Extract these two files into your existing `Blackwood-CFS` repo, commit and push with GitHub Desktop. No new Cloudflare Worker deploy, GitHub secret, repo settings or rebuild required.

## Validation notes

Static JavaScript syntax and existing headless browser smoke tests for PIN, equipment selection, inventory compact state, and saving passed. Actual GitHub OAuth session transitions need to be verified on the deployed site with an authenticated session.
