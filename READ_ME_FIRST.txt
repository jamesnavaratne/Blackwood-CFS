BLACKWOOD CFS — SYSTEM HOME (APPROVED HTML) UPDATE

Install after the SHARED RIBBON update that is already working.
This patch brings the real System Home layout and icons into line with the
user's supplied Blackwood_CFS_Directions_Arrow_Maps_Folded_Preview(1).html.

1. Extract ALL files from this ZIP into your Blackwood-CFS repository folder.
2. Run INSTALL_SYSTEM_HOME.cmd from that folder.
3. The script checks for the known System Home and shared ribbon structures.
4. GitHub Desktop: review and commit these files:
   - index.html (two references inserted by the installer)
   - shared/home-final.css
   - shared/home-final.js
5. Push and refresh the main app (and installed Android PWA if applicable).

WHAT IT DOES
- Directions Book: exact approved diamond right-turn arrow SVG from the supplied HTML.
- Maps: exact existing folded-map SVG from the supplied HTML.
- System Home: same pill and appliance arrangement, spacing, typography,
  and Default Blue colours as the approved visual reference.
- Adds a Maps pill if any System Home render path is missing it.
- Preserves functional appliance, search and Directions buttons, and existing Maps/Hydrants links.
- Preserves the already-installed shared four-tab ribbon without touching it.
- Respects System Home re-rendering and refreshes icons on the recreated home screen.

FILES INCLUDED
  shared/home-final.css
  shared/home-final.js
  INSTALL_SYSTEM_HOME.ps1
  INSTALL_SYSTEM_HOME.cmd
  READ_ME_FIRST.txt

No replacement index.html is supplied: it is patched against YOUR current version.
No inventory, Excel, Admin, Directions Book, Maps, Hydrants or service worker files are replaced.
Backups of index.html are made outside the repository, beside the Blackwood-CFS folder.

TESTS TO PERFORM
- System Home startup and Home button both show Directions Book, Maps, Live Hydrants in order.
- Diamond arrow on Directions Book, folded-map icon on Maps.
- All home pills still navigate correctly.
- Appliance selection and global search still work.
- Shared ribbon still stays at identical height and icon size across tabs.
- Test on Android PWA and desktop after deployment.
