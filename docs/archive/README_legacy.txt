Blackwood CFS v2.0 Stable Baseline
Pre-Directions-fidelity release

How to use:
1. Keep these files and folders together in the same repository/folder.
2. Open index.html in Chrome, Edge, Safari, or Firefox, or deploy the full folder to GitHub Pages.
3. Use the system home or hamburger menu to switch between appliances, Directions Book, Global Search, Theme Palette, and Training.

Included modules:
- Blackwood Rescue inventory
- Blackwood 34P inventory
- CAFS 24 inventory
- Directions Book
- UBD Maps inside Directions Book
- Global Search across appliances
- Item Location Quiz

Source of truth:
- Inventory workbook: Blackwood_CFS_Master_Inventory.xlsx
- Directions source documents: directions/source/
- UBD map images: directions/maps/ubd/
- Appliance photos: photos/

Inventory update workflow:
1. Edit Blackwood_CFS_Master_Inventory.xlsx.
2. Regenerate the app data from the workbook.
3. Confirm Rescue, 34P, CAFS 24 and CAFS 24 P4 still behave correctly.
4. Deploy the regenerated package.

Directions update workflow:
1. Edit the relevant Word document in directions/source/.
2. Sync only the changed Directions Book content into the app.
3. Preserve the current Directions Book interface unless a separate UI change is requested.
4. Run fidelity checks before calling the Directions data final.

Photo and map update workflow:
- Appliance photos live under photos/<appliance>/lockers/ and photos/<appliance>/items/.
- UBD map images live under directions/maps/ubd/.
- Replace an existing UBD map by keeping the same filename.
- Add new UBD maps by adding the image and updating directions/maps/ubd/maps.js.

Current stable features:
- Dark Rescue Blue default theme with selectable dark palettes.
- Multi-appliance inventory switching.
- CAFS 24 P4 appears in order between P3 and D-Tube.
- Hamburger menu has separate Appliances, Search, Directions, Theme Palette, and Training sections.
- Directions Book search bar stays pinned while scrolling.
- Street modal has UBD button, favourite star, and close button.
- UBD split-panel view keeps street directions visible above maps.
- UBD map viewer supports zooming and scrolling.

Release name:
Blackwood CFS v2.0 Stable Baseline before Directions fidelity checks
