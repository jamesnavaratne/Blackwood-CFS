BLACKWOOD CFS — MAPS TAB FOLDER UPDATE (TEST RELEASE)

Adds a dedicated Maps tab, 12 existing UBD/reference map selections, six new DEWNR response-plan documents (18 continuous pages), and a new Maps pill on System Home.

INSTALL INTO YOUR CURRENT GITHUB CHECKOUT — DO NOT REPLACE YOUR EXISTING INDEX.HTML WITH THE OLD PROTOTYPE.

1. In GitHub Desktop, ensure your current Blackwood-CFS changes are committed and pushed. Back up your current repository if desired.
2. Open the Blackwood-CFS folder in Windows Explorer.
3. Extract the entire contents of this ZIP directly INTO that folder. You should see maps/, INSTALL_MAPS_TAB.cmd, and INSTALL_MAPS_TAB.ps1 at the repository root.
4. Double-click INSTALL_MAPS_TAB.cmd. This edits the existing files IN PLACE, preserving your live inventory and Admin app. Original edited files are backed up outside the repo to a temporary BlackwoodMapsBackup folder, path printed by installer.
5. Review changed files in GitHub Desktop. Expected updated files: index.html, directions/index.html, hydrants/index.html, service-worker.js, offline-assets.json, plus new maps/ files. Do not commit the installer CMD/PS1 unless you want to retain them as documentation.
6. Commit and push. Confirm GitHub Pages deployment, then refresh installed app and choose Refresh now if prompted.
7. Check System Home Maps pill, all four bottom tabs, Maps desktop/mobile rendering, zoom, continuous PDFs, map selection persistence, Reset, and existing Directions map popups & Layer 6 live hydrants.

IMPORTANT: Reset inside Maps clears ALL saved map zoom/scroll positions, not the inventory or other tabs.
These DEWNR response plans are from 2013–2014 and must be verified against current operating conditions, closures, water points and contact details. Do not rely on old plans without validation.

Only standalone map images and map source manifests are distributed with the ZIP, not a replacement workbook or inventory.
