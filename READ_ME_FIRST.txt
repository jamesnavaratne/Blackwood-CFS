BLACKWOOD CFS — SHARED BOTTOM RIBBON INTEGRATION TEST

This is an IN-PLACE UPDATE, not a full old app. It updates the
existing repository pages so it preserves newer inventory / Admin /
Hydrants / Maps data and files.

INSTALLATION
1. Make sure GitHub Desktop has no uncommitted personal work that you
   don't want mixed into the update. Commit/back up first.
2. Unzip this ZIP into the ROOT of your live Blackwood-CFS GitHub checkout,
   alongside index.html (keep the shared/ folder).
3. Double-click INSTALL_SHARED_RIBBON.cmd (Windows).
4. Confirm SUCCESS. If preflight fails, no operational pages are touched.
5. Check GitHub Desktop: changes should be limited to index.html,
   directions/index.html, maps/index.html, hydrants/index.html and new
   shared/ribbon.css, shared/home-icons.js. The ribbon template HTML files
   remain under shared/ as the common source for future maintenance.
6. Commit + push and refresh the installed PWA / website after deploy.

CHANGES
- Exact approved v4 diamond right-turn SVG for Directions Book.
- Original folded map SVG from approved preview for Maps.
- Same inventory and hydrants icons on EVERY tab.
- Same CSS sizing, text, spacing, active colour, safe-area space and
  bottom alignment on ALL tabs and System Home.
- Home Directions Book/Maps icons synchronized with the ribbon.
- No changes to inventory, directions entries, PDF maps, hydrant services,
  editing, Admin credentials, or PR publishing.

CHECKS
- Switch repeatedly between Inventory, Directions Book, Maps and
  Hydrants on both desktop and Android: the ribbon geometry should not jump.
- Verify System Home displays the same four tabs and icons.
- Verify active blue vs inactive grey, no icon swapping.
- Confirm switching tabs retains existing workspace behaviour.
- Test older Android cached PWA after normal refresh/update.

BACKUPS
Installer stores four original HTML pages outside the checkout in a
Blackwood-CFS-Ribbon-Backup-<timestamp> folder beside your repository.

NOTE: This is an integration TEST update, not yet a declared stable release.
The script has been structurally checked against the prior integrated app
snapshot, but must be tested on the live repo because it may contain further
personal changes. Nothing is committed or pushed automatically.
