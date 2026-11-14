BLACKWOOD CFS - MAPS TAB HTML TRIAL (NOT A PRODUCTION RELEASE)

1. Extract the ENTIRE ZIP to a normal folder (not inside the live GitHub repository).
2. Double-click OPEN_MAPS_TEST.html. Chrome opens Maps.
3. Use the map list on desktop or dropdown on phone. UBD maps appear first, then six original-titled DEWNR plan PDFs (rendered into 18 continuous, high-detail pages).
4. Scroll downward through a plan (no page switching), zoom + / -, Fit, Ctrl+wheel; scroll horizontally when zoomed. On touchscreens use touch scroll/pinch.
5. Test switching between Inventory / Directions Book / Maps / Hydrants using the bottom ribbon and returning to Maps. Its map selection and scroll/zoom persist in sessionStorage for this browser tab.
6. Maps tab contains the ORIGINAL existing 12 UBD/reference entries and six new plan entries.
7. This is a design/functional prototype constructed from an earlier full working app baseline, not the current live published app. DO NOT copy its index.html, inventory workbook or other root contents into your GitHub repo. Your current published Admin changes are newer.
8. The original Directions Book maps modal remains separate; the Maps tab is a dedicated viewer. Original PDF sources are included under maps/assets/pdf, with rendered high-resolution JPEGs under maps/assets/dewnr for reliable continuous scrolling and offline packaging.
9. DEWNR plans date to 2013-2014 and may include obsolete contacts/tracks/standpipe details. Verify against current operational sources before reliance. No adjustments were made to the map artwork.

When approved, prepare a production integration patch against the current live repository to avoid overwriting newer changes.
