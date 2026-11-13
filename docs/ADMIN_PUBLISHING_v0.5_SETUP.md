# Blackwood CFS Admin — review-branch Excel publishing v0.5

## What is new

The existing v0.4 Cloudflare/GitHub OAuth gateway continues to create **draft** pull requests containing `admin/submissions/*.json` files. It does not need to be redeployed. This release adds a **review-branch-only** reconciliation action, which is deliberately started manually after you look at the proposal.

## One-time setup

1. Copy this release into the existing Blackwood-CFS repository, commit and push to `main` using GitHub Desktop.
2. In GitHub **Settings → Actions → General → Workflow permissions**, enable **Read and write permissions** for the workflow token if permitted by repository policy. Otherwise the workflow will fail when pushing its reviewed changes.
3. Leave existing Admin PR #1 in **Draft** status and **do not merge it**. Check `Files changed` contains only `admin/submissions/1794506147008-45881d15.json`, with `BR-0081` and the intended description.
4. Open GitHub repository **Actions → Process Blackwood Admin review proposal → Run workflow**, select the `main` branch and enter PR number `1`.
5. After the action succeeds, return to PR #1. It should now include `Blackwood_CFS_Master_Inventory.xlsx`, `data/inventory.json`, `index.html` and the generated metadata. Review these changes and the check results.
6. Verify `BR-0081` has the expected description and all three appliance record counts remain unchanged. Only after you are satisfied: use **Ready for review**, then **Merge**. A merge to `main` invokes the existing main-only inventory rebuild workflow and the usual Pages update.
7. For the first test, **you may close PR #1 instead of merging it**. This verifies the workflow without publishing the test broom description.

## How normal publishing will work

Admin edit → Save Draft → Submit for review → Draft PR → You inspect proposal → Run processing Action → Review Excel/photo/data diffs → Approve and merge → Main app update.

**The PIN is not GitHub security.** Authentication and submission still use the separate Cloudflare gateway.

## Safety behaviour

- The workflow rejects PRs from forks, PRs not based on `main`, non-draft PRs, PRs not under `admin-review/`, and submissions containing files other than a single newly added JSON proposal.
- The processor rejects duplicate IDs, nonexistent inventory IDs, invalid appliance/locker combinations, mismatched data IDs, unknown fields, invalid statuses, oversized/non-JPEG images and proposals with more than 50 operations.
- Existing item IDs and appliance identity do not change. New equipment receives the next available stable ID for that appliance (for example `BR-0147`, subject to actual highest allocated number).
- Existing workbook cells not included in the proposal are not changed; the original workbook's other sheets, styles and relationships are preserved.
- Removed inventory items are cleared in place rather than shifting Excel row numbers.
- Photograph filenames are deterministic and stored in `photos/rescue/items`, `photos/34p/items` or `photos/cafs24/items`. Existing photos remain as historical files to support rollback.
- A processed proposal gets an `admin/processed/` audit report and cannot be applied twice.
- Validation uses the existing Excel rebuilding script and checks photo references and locker configuration.

## Limitations / follow-up improvements

- The processing workflow requires the repository workflow token to be allowed to push; protected branches can require additional repository configuration. Only the review branch is written.
- If the workbook changes on `main` after the proposal was created, review conflicts carefully; this v0.5 pipeline does not perform full three-way field-level conflict detection. Do not merge an outdated review branch.
- Updating existing item's photo retains its previous asset in GitHub for rollback (does not automatically delete it).
- Action remains intentionally manual between proposal creation and processing; no autonomous merges.
- Browser-side Admin drafts persist after submission; clear them only after successful review/merge to avoid submitting duplicates.
- The Admin editor may add a new item without a section; the processor validates the locker but treats section/subsection as free text.
- This doesn't yet include an offline hydrant map.
