
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}


const APPLIANCES = {"Blackwood Rescue":{"appliance":"Blackwood Rescue","records":[{"id":"BR-0136","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Driver","subsection":"","item":"DRIVERS LOG BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Driver"},{"id":"BR-0137","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Driver","subsection":"","item":"ISUZU OWNER MANUAL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Driver"},{"id":"BR-0138","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Driver","subsection":"","item":"APPLIANCE SERVICE BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Driver"},{"id":"BR-0139","appliance":"Blackwood Rescue","locker":"Cabin","section":"Console","subsection":"","item":"MAGLIGHT x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"BR-0140","appliance":"Blackwood Rescue","locker":"Cabin","section":"Console","subsection":"","item":"GRN Radio - Portable","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"BR-0141","appliance":"Blackwood Rescue","locker":"Cabin","section":"Console","subsection":"","item":"VHF RADIO - Portable","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"BR-0142","appliance":"Blackwood Rescue","locker":"Cabin","section":"Console","subsection":"","item":"RESCUE Vests x 2 (Officer and Driver)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"BR-0143","appliance":"Blackwood Rescue","locker":"Cabin","section":"Console","subsection":"","item":"Rescue Gloves","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"BR-0144","appliance":"Blackwood Rescue","locker":"Cabin","section":"Console","subsection":"","item":"Nitrile Gloves","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"BR-0145","appliance":"Blackwood Rescue","locker":"Cabin","section":"Console","subsection":"","item":"Glasses","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"BR-0146","appliance":"Blackwood Rescue","locker":"Cabin","section":"Console","subsection":"","item":"Dust Mask","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"BR-0147","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"Black Center Pouch","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0148","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"GRN Battery x 1","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0149","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"OIC NOTEBOOK \u2013 Red","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0150","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"MULTI CHARGER PACK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0151","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"CAMERA","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0152","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"RED POUCH with RING CUTTER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0153","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"BP Fuel Card (center consol slot)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0154","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"Shell Fuel Card (center consol slot)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0155","appliance":"Blackwood Rescue","locker":"Cabin","section":"Above Officer","subsection":"","item":"PENCIL CASE","quantity":"","category":"","description":"Chinagraph pencil\nPoint Marker Pen\nT-Cards\nMatches\nAirbag Warning stickers\nVHF Quick reference guide\nSite attendance book A5\nSturt Group calling cards\nMitcham Council Keys\nOnko Park Keys\nNPWS Keys\nSIMS Key\nRED CFS Key","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"BR-0169","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"RCR CREW COMPOSITION x 4 (roof)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0170","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"VHF Battery x 4","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0171","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"VHF RADIO \u2013 Portable x 3","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0172","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"MAGLIGHT CONES x 3","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0173","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"Rural TIC & spare Battery","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0174","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"BIO WASTE DISPOSAL BAGS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0175","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"RESCUE Vests x 4 (Rear)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0176","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"Rescue Gloves","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0177","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"Nitrile Gloves","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0178","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"Glasses","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0179","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"Dust Mask","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0180","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"RADIO BELT w/ working torch","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0181","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"BOX OF NITRILE GLOVES","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0182","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"BOX OF SURGICAL MASKS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0183","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"JACK WHEEL BRACE w/ Handles","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0184","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"PRIMARY ENTRY KIT [x2]","quantity":"","category":"","description":"Rescue Knife\nEmergency Hammer\n200mm Adjustable Spanner\nPhilips Head Screwdriver\nFlat Blade Screwdriver\nCable Cutters\nSeat belt webbing\nUniversal Shears\nTrim Removal tool [x3 total]","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0194","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"YELLOW POUCH LAMINATED MAPS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0195","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"UBD STREET DIRECTORY","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0196","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"DIRECTIONS BOOK \u2013 White, A5","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0197","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"DANGEROUS GOODS GUIDE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0198","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"RESCUERS GUIDE TO AIRBAGS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0199","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"A3 LAMINATED NATIONAL PARKS MAP","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0200","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"CFS MAP BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0201","appliance":"Blackwood Rescue","locker":"Cabin","section":"Rear Seats","subsection":"","item":"BAG, CLEAR SAFETY GLASSES","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seats"},{"id":"BR-0001","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"BOLT CUTTERS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0002","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"SLEDGEHAMMER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0003","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"SHOVEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0004","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"JEMMY BAR","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0005","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"SIDE STABILISER w/ratchets in bag","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0006","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"SHADE WINDER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0007","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"HALLIGAN TOOL [x1]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0008","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"STABFAST KIT, BAGS x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0009","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"STOP/SLOW BAT- w/ handles [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0010","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"ACCESS TOOL KIT","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0011","appliance":"Blackwood Rescue","locker":"Locker 1","section":"","subsection":"","item":"BATTERY POWERED LIGHTS [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 1"},{"id":"BR-0012","appliance":"Blackwood Rescue","locker":"Locker 2","section":"TOP","subsection":"","item":"BAG OF ROPE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > TOP"},{"id":"BR-0013","appliance":"Blackwood Rescue","locker":"Locker 2","section":"TOP","subsection":"","item":"BAG w/ BLANKETS & Trauma Teddies x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > TOP"},{"id":"BR-0014","appliance":"Blackwood Rescue","locker":"Locker 2","section":"TOP","subsection":"","item":"AIRBAG RESTRAINT SYSTEM","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > TOP"},{"id":"BR-0015","appliance":"Blackwood Rescue","locker":"Locker 2","section":"TOP","subsection":"","item":"GLASS MANAGER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > TOP"},{"id":"BR-0016","appliance":"Blackwood Rescue","locker":"Locker 2","section":"TOP","subsection":"","item":"SOFT PROTECTION SHEETS x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > TOP"},{"id":"BR-0017","appliance":"Blackwood Rescue","locker":"Locker 2","section":"TOP","subsection":"","item":"Disposable line - red","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > TOP"},{"id":"BR-0018","appliance":"Blackwood Rescue","locker":"Locker 2","section":"TOP","subsection":"","item":"Clear Windscreen Protection Roll x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > TOP"},{"id":"BR-0019","appliance":"Blackwood Rescue","locker":"Locker 2","section":"MIDDLE","subsection":"","item":"BAG, SOFT & PVC SHARPS PROTECTION","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > MIDDLE"},{"id":"BR-0020","appliance":"Blackwood Rescue","locker":"Locker 2","section":"MIDDLE","subsection":"","item":"FIRST AID KIT 02, DEFIB","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > MIDDLE"},{"id":"BR-0021","appliance":"Blackwood Rescue","locker":"Locker 2","section":"MIDDLE","subsection":"","item":"PVC GLOVES x2 pr (In decon. bag)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > MIDDLE"},{"id":"BR-0022","appliance":"Blackwood Rescue","locker":"Locker 2","section":"MIDDLE","subsection":"","item":"DECONTAMINATION BAG","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > MIDDLE"},{"id":"BR-0023","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Tray 1","subsection":"","item":"Step Wedges - blue x4","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Tray 1"},{"id":"BR-0024","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Tray 1","subsection":"","item":"Wheel Chocks - red x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Tray 1"},{"id":"BR-0025","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Trays 2, 3, 4","subsection":"","item":"GREEN STAGING SHEET X1","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Trays 2, 3, 4"},{"id":"BR-0026","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Trays 2, 3, 4","subsection":"","item":"90 x 90 Blocks- purple x2 each","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Trays 2, 3, 4"},{"id":"BR-0027","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Trays 2, 3, 4","subsection":"","item":"90 x 45 Blocks- yellow x3 each","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Trays 2, 3, 4"},{"id":"BR-0028","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Trays 2, 3, 4","subsection":"","item":"Large Wedges - red x3 each","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Trays 2, 3, 4"},{"id":"BR-0029","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Trays 2, 3, 4","subsection":"","item":"Small Wedges - Green x3 each","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Trays 2, 3, 4"},{"id":"BR-0030","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Trays 2, 3, 4","subsection":"","item":"Hardwood Wedges x5 each","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Trays 2, 3, 4"},{"id":"BR-0031","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Trays 2, 3, 4","subsection":"","item":"Rubber Mallet x2 total","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Trays 2, 3, 4"},{"id":"BR-0032","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Metal Box","subsection":"","item":"90 x 90 Blocks- purple x9","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Metal Box"},{"id":"BR-0033","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Metal Box","subsection":"","item":"90 x 45 Blocks - yellow x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Metal Box"},{"id":"BR-0034","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Metal Box","subsection":"","item":"Small Wedges - green x1","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Metal Box"},{"id":"BR-0035","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Metal Box","subsection":"","item":"Large Wedge - red x1","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Metal Box"},{"id":"BR-0036","appliance":"Blackwood Rescue","locker":"Locker 2","section":"Metal Box","subsection":"","item":"LARGE RATCHET STRAPS [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 2 > Metal Box"},{"id":"BR-0037","appliance":"Blackwood Rescue","locker":"Locker 3","section":"","subsection":"","item":"LONG HARDWOOD CHOCKS x6","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 3"},{"id":"BR-0038","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"CROWBAR (behind botton drawer)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0039","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HYDRAULIC HOSE [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0040","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"RED & GREEN SALVAGE SHEETS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0041","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"LITTLE GIANT LADDER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0042","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"STOKES LITTER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0043","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"EXTRICATION BOARD","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0044","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"EXTRICATION BOARD STRAPS [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0045","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"SCENE SCREEN IN BLACK BAG","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0046","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"LIGHT TRIPODS WITH CABLES [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0047","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HYDRAULIC FLUID","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0048","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"FUEL CONTAINER \u201310lt, UNLEADED (RED)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0049","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"SPOUT \u2013 for fuel containers [x1]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0050","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"FUNNEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0051","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"CHAINSAW BAR OIL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0052","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"PEDAL CUTTER (LUCAS IN BOX)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0053","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HARD PROTECTION BOARDS [x6]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0054","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HOLMATRO LARGE RAM (1510mm)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0055","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HOLMATRO SMALL RAM (1285mm)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0056","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HAND PUMP","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0057","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HOLMATRO CUTTERS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0058","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HOLMATRO SPREADERS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0059","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"MINI CUTTERS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0060","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"MAIN RESCUE PUMP","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0061","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"AUXILIARY RESCUE PUMP","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0062","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"HOLMATRO CHAINS (ORANGE BOX)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0063","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"BLACK PLASTIC CASE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0064","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"AIRBAG CONTROLS","quantity":"","category":"","description":"HOSES, red & yellow x 1 of each\nSHORT HOSE w/ shut off valves x2\nSMALL AIR BAG\nLARGE AIR BAGS x2","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0069","appliance":"Blackwood Rescue","locker":"Locker 4","section":"","subsection":"","item":"BA CYLINDER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 4"},{"id":"BR-0082","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Top Drawer","subsection":"","item":"RECIP SAW & CORDLESS DRILL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Top Drawer"},{"id":"BR-0083","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Top Drawer","subsection":"","item":"DRILL BIT SET RED Milwaukee","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Top Drawer"},{"id":"BR-0084","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Top Drawer","subsection":"","item":"DRILL BIT SET RED 25 PIECE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Top Drawer"},{"id":"BR-0085","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Top Drawer","subsection":"","item":"DREMEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Top Drawer"},{"id":"BR-0086","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Top Drawer","subsection":"","item":"SOCKET SET","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Top Drawer"},{"id":"BR-0087","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Top Drawer","subsection":"","item":"SILICON SPRAY CAN & WD40 SPRAY CAN","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Top Drawer"},{"id":"BR-0088","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"CHAINSAW BOX containing","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0089","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"Chaps","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0090","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"Helmet w/ earmuffs","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0091","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"Ear Plugs","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0092","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"Chainsaw spanner","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0093","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"Spare Chain [x1]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0094","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"File and guide","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0095","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"EXTENSION CORD & RCD","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0096","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"CHAINSAW (Electric) with Battery","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0097","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"QUICKCUT (Electric) with Battery","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0098","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Middle Drawer","subsection":"","item":"Stihl Box with 2x Batteries and charger","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Middle Drawer"},{"id":"BR-0099","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Bottom Drawer","subsection":"","item":"TOOLBOX (orange) containing","quantity":"","category":"","description":"Cold Chisel\nAllen Key Set\nPhilips Head Screwdrivers [x3]\nFlat Blade Screwdrivers [x4]\nLarge Tapered Spikes [x2]\nSmall Tapered Spikes [x2]\nadjustable Spanner 375mm\nadjustable Spanner 300mm\nadjustable spanner 250mm\nadjustable spanner 150mm\nwire cutter\nUniversal Shears\nCombination Pliers\nMulti Grips\nStanley Knife\nSpare blades \u2013 Stanley knife\nRoll Duct Tape\nSpeed Brace\nChainsaw Spanner\nClaw Hammer\nHacksaw & spare blade\nSockets (27mm, 30mm, 32mm)\nRoll of Webbing\nroll of electrical tape\nCable cutter\nneedle nose pliers\nWindscreen Knife\nMini Jimmy Bar\n11 piece Torx set\nHolmatro line pressure release tool","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Bottom Drawer"},{"id":"BR-0130","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Bottom Drawer","subsection":"","item":"WINCH w/ lever","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Bottom Drawer"},{"id":"BR-0131","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Bottom Drawer","subsection":"","item":"WINCH CABLE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Bottom Drawer"},{"id":"BR-0132","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Bottom Drawer","subsection":"","item":"WINCH STRAPS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Bottom Drawer"},{"id":"BR-0133","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Bottom Drawer","subsection":"","item":"RAM SUPPORT/SILL CLAMP","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Bottom Drawer"},{"id":"BR-0134","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Bottom Drawer","subsection":"","item":"GO JACKS [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Bottom Drawer"},{"id":"BR-0135","appliance":"Blackwood Rescue","locker":"Locker 5","section":"Bottom Drawer","subsection":"","item":"WHEEL CHOCKS [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 5 > Bottom Drawer"},{"id":"BR-0070","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"DEBRIS BAGS w/ cable ties","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0071","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"DRUM OF ABSORBENT","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0072","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"BAG OF ABSORBENT","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0073","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"HAZARD TAPE [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0074","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"PLUG & DIKE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0075","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"TRAFFIC CONES [x10]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0076","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"BAG OF E-FLARES [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0077","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"CO2 EXTINGUISHER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0078","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"DRY CHEM EXTINGUISHER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0079","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"FOAM EXTINGUISHER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0080","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"RAIN COAT PANTS x 6","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"},{"id":"BR-0081","appliance":"Blackwood Rescue","locker":"Locker 6","section":"","subsection":"","item":"BROOM [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Locker 6"}],"lockers":["Cabin","Locker 1","Locker 2","Locker 3","Locker 4","Locker 5","Locker 6"],"lockerPhotos":{"Cabin":{"photo":"cabin.jpg","title":"Cabin","description":"Main photo shown at top of this locker page"},"Locker 1":{"photo":"locker_1.jpg","title":"Locker 1","description":"Main photo shown at top of this locker page"},"Locker 2":{"photo":"locker_2.jpg","title":"Locker 2","description":"Main photo shown at top of this locker page"},"Locker 3":{"photo":"locker_3.jpg","title":"Locker 3","description":"Main photo shown at top of this locker page"},"Locker 4":{"photo":"locker_4.jpg","title":"Locker 4","description":"Main photo shown at top of this locker page"},"Locker 5":{"photo":"locker_5.jpg","title":"Locker 5","description":"Main photo shown at top of this locker page"},"Locker 6":{"photo":"locker_6.jpg","title":"Locker 6","description":"Main photo shown at top of this locker page"},"Locker 7":{"photo":"locker_7.jpg","title":"Locker 7","description":"Main photo shown at top of this locker page"}},"built":"2026-06-07 18:28","version":"v2.0 RC1 - Excel gospel rebuild"},"34P":{"appliance":"34P","records":[{"id":"34P-0001","appliance":"34P","locker":"Cabin","section":"Above Driver","subsection":"","item":"DRIVERS LOG BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Driver"},{"id":"34P-0002","appliance":"34P","locker":"Cabin","section":"Above Driver","subsection":"","item":"ISUZU OWNER MANUAL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Driver"},{"id":"34P-0003","appliance":"34P","locker":"Cabin","section":"Above Driver","subsection":"","item":"APPLIANCE SERVICE BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Driver"},{"id":"34P-0004","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"FIRE EXTINGUISHER \u2013 2kg Dry Chemical","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0005","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"GUIDE FOR AIRCRAFT","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0006","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"GRN RADIO \u2013 Portable","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0007","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"BP CARD & SHELL CARD - in dash","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0008","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"SUNSCREEN","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0009","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"RADIO CONTROL CARD","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0010","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"MAGLIGHT CONES [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0011","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"OIC NOTEBOOK \u2013 Red","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0012","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"ROLLER DOOR REMOTE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0013","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"GRN BATTERY","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0014","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"VHF BATTERIES [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0015","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"VHF RADIO \u2013 Portable x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0016","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"MAGLIGHT TORCH","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0017","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"MULTI CHARGER PACK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0018","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"POUCH","quantity":"","category":"","description":"Keys [A, R, S]\nSquare Key\nRed CFS Key\n003 Key\nST Johns Gate Key\nTelstra Key Card \nLift Key (round top)","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0024","appliance":"34P","locker":"Cabin","section":"Console","subsection":"","item":"PENCIL CASE","quantity":"","category":"","description":"Chinagraph pencil\nT-Cards\nSturt Group Calling Cards\nCompass\nAirbag warning stickers\nMatches","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"34P-0030","appliance":"34P","locker":"Cabin","section":"Above Officer","subsection":"","item":"FIRST ARRIVAL OFFICERS FORMS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"34P-0031","appliance":"34P","locker":"Cabin","section":"Above Officer","subsection":"","item":"SITE HANDOVER FORMS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"34P-0032","appliance":"34P","locker":"Cabin","section":"Above Officer","subsection":"","item":"BINOCULARS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"34P-0033","appliance":"34P","locker":"Cabin","section":"Above Officer","subsection":"","item":"A6 SITE ATTENDANCE BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"34P-0034","appliance":"34P","locker":"Cabin","section":"Above Officer","subsection":"","item":"TABARD PANELS POUCH","quantity":"","category":"","description":"Incident Controller/Media Liaison [x2]\nIncident Controller / Sector Commander\nSafety Officer [x1]\nSector Commander / Operations Officer [x2]\nStrike Team Leader / Divisional Commander [x2]\nHLO (Helicopter Landing Officer)","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"34P-0040","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"VHF RADIO \u2013 Portable [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0041","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"MAGLIGHT TORCH","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0042","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"BA TORCHES x4","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0043","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"CONTAINER w/ P2 Masks","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0044","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"NITRILE GLOVES in CONTAINER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0045","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"IN-CAB BREATHING MASKS [x6] \u2013 in bags","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0046","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"SMOKE GOGGLES AND P2 MASK [x6] - in BA bags","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0047","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"PERSONAL PROTECTION BLANKET - Red","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0048","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"DIRECTIONS BOOK \u2013 White, A5","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0049","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"UBD STREET DIRECTORY","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0050","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"CFS MAP BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0051","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"A3 LAMINATED NATIONAL PARKS MAP","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0052","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"HAZMAT ACTION GUIDE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0053","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"DANGEROUS GOODS GUIDE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0054","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"MULTI RAY ATMOSPHERIC MONITOR","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0055","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"THERMAL IMAGING CAMERA","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0056","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"RADIO BELT w/ working torch","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0057","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"TYRE BAR","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0058","appliance":"34P","locker":"Cabin","section":"Rear Seat","subsection":"","item":"JACK HANDLE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Rear Seat"},{"id":"34P-0059","appliance":"34P","locker":"P1","section":"","subsection":"","item":"BLANK CAP (HYDRANT FILL)","quantity":"","category":"","description":"Hydrant fill below Locker P1","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P1"},{"id":"34P-0060","appliance":"34P","locker":"P1","section":"","subsection":"","item":"SUCTION HOSE\u201364mm w/storz couplings [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P1"},{"id":"34P-0061","appliance":"34P","locker":"P1","section":"","subsection":"","item":"CROWBAR\u201332mm X 1.8m","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P1"},{"id":"34P-0062","appliance":"34P","locker":"P2","section":"","subsection":"","item":"RECIP SAW - w/ Battery & Blades","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0063","appliance":"34P","locker":"P2","section":"","subsection":"","item":"DRILL SET\u2013w/ 25 piece drill bit set and battery","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0064","appliance":"34P","locker":"P2","section":"","subsection":"","item":"BATTERY PORTABLE SCENE LIGHTS [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0065","appliance":"34P","locker":"P2","section":"","subsection":"","item":"CHAINSAW BOX","quantity":"","category":"","description":"Chaps\nSafety glasses\nHelmet w/ earmuffs\nSpare Chain [x2]\nEar Plugs\nFile and guide\nWedge [x2]\nSparkplug\nChainsaw spanner","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0074","appliance":"34P","locker":"P2","section":"","subsection":"","item":"SPARE BLADES for QUICK CUT SAW [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0075","appliance":"34P","locker":"P2","section":"","subsection":"","item":"QUICK CUT SAW","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0076","appliance":"34P","locker":"P2","section":"","subsection":"","item":"CHAINSAW","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0077","appliance":"34P","locker":"P2","section":"","subsection":"","item":"FUNNEL - Red (in two parts)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0078","appliance":"34P","locker":"P2","section":"","subsection":"","item":"BAR AND CHAIN OIL \u2013 1ltr","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0079","appliance":"34P","locker":"P2","section":"","subsection":"","item":"PPV FAN","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0080","appliance":"34P","locker":"P2","section":"","subsection":"","item":"FUEL CONTAINER \u201310lt, RED UNLEADED","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0081","appliance":"34P","locker":"P2","section":"","subsection":"","item":"FUEL CONTAINER \u201310lt, GREY 2-STROKE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0082","appliance":"34P","locker":"P2","section":"","subsection":"","item":"FUEL CONTAINER \u201310lt, GREEN FIRELIGHTER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0083","appliance":"34P","locker":"P2","section":"","subsection":"","item":"SPOUTS \u2013 for fuel containers [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"34P-0084","appliance":"34P","locker":"P3","section":"","subsection":"","item":"PVC GLOVES [x1 pair]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0085","appliance":"34P","locker":"P3","section":"","subsection":"","item":"DISPOSABLE LINE\u2013thin and BLUE, 60m","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0086","appliance":"34P","locker":"P3","section":"","subsection":"","item":"BA GUIDELINE BAG\u2013Green, 60m","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0087","appliance":"34P","locker":"P3","section":"","subsection":"","item":"BA ENTRY CONTROL EASEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0088","appliance":"34P","locker":"P3","section":"","subsection":"","item":"SHORT LINE \u2013 16mm x15m (Blue)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0089","appliance":"34P","locker":"P3","section":"","subsection":"","item":"GENERAL PURPOSE LINE \u2013 16mm x 30m (Green)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0090","appliance":"34P","locker":"P3","section":"","subsection":"","item":"FIRE BLANKET \u2013 1.8m x 1.2m","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0091","appliance":"34P","locker":"P3","section":"","subsection":"","item":"Whiteboard","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0092","appliance":"34P","locker":"P3","section":"","subsection":"","item":"MIRROR","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0093","appliance":"34P","locker":"P3","section":"","subsection":"","item":"SPARE BA CYLINDERS [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0094","appliance":"34P","locker":"P3","section":"","subsection":"","item":"CABA SETS\u2013 w/cylinder [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0095","appliance":"34P","locker":"P3","section":"","subsection":"","item":"BA ENTRY CONTROL BOARD","quantity":"","category":"","description":"ECO Tabard\nPen\nWhiteboard marker\nEntry Control sheets A4\nAtmospheric Monitoring log book sheets A4\nClock\nLight","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"34P-0164","appliance":"34P","locker":"P4","section":"","subsection":"","item":"DELIVERY HOSE \u2013 38mm w/ Wayjax couplings [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P4"},{"id":"34P-0165","appliance":"34P","locker":"P4","section":"","subsection":"","item":"DELIVERY HOSE \u2013 64mm w/storz [x1]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P4"},{"id":"34P-0166","appliance":"34P","locker":"P4","section":"","subsection":"","item":"DEFENSIVE HOSE BAG - green - [x2] w/","quantity":"","category":"","description":"Delivery Hose\u201325mmx30m [x2]\nStrap and Carabiner clips\nWater Thieves [x2]\n25mm Wayjax to Hose theft fitting [x2]","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P4"},{"id":"34P-0170","appliance":"34P","locker":"P5","section":"","subsection":"","item":"COMBINATION KEY [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0171","appliance":"34P","locker":"P5","section":"","subsection":"","item":"COUPLING KEY\u2013storz, 64mm [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0172","appliance":"34P","locker":"P5","section":"","subsection":"","item":"COUPLING KEY \u2013 storz, 100mm [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0173","appliance":"34P","locker":"P5","section":"","subsection":"","item":"BRANCH \u2013 B Class Foam, w/ induction tube","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0174","appliance":"34P","locker":"P5","section":"","subsection":"","item":"BRANCH \u2013 TFT 50-350, w/ Storz coupling [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0175","appliance":"34P","locker":"P5","section":"","subsection":"","item":"BREECHING PIECE \u2013 64mm Storz","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0176","appliance":"34P","locker":"P5","section":"","subsection":"","item":"ADAPTOR 38mm Wayjax \u2013 64mm Storz [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0177","appliance":"34P","locker":"P5","section":"","subsection":"","item":"ADAPTOR 64mm storz \u2013 64mm SA Round (female) [x3]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0178","appliance":"34P","locker":"P5","section":"","subsection":"","item":"ADAPTOR 64mm storz \u2013 64mm SA Round (male) [x3]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0179","appliance":"34P","locker":"P5","section":"","subsection":"","item":"DIVIDING Y-PIECE \u2013 25mm Wayjax","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0180","appliance":"34P","locker":"P5","section":"","subsection":"","item":"GATED Y PIECE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0181","appliance":"34P","locker":"P5","section":"","subsection":"","item":"HYDRANT WHEEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0182","appliance":"34P","locker":"P5","section":"","subsection":"","item":"BASKET w/ suction strainer and 64mm storz","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0183","appliance":"34P","locker":"P5","section":"","subsection":"","item":"STANDPIPE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P5"},{"id":"34P-0184","appliance":"34P","locker":"P Reel","section":"","subsection":"","item":"PLATE COVER LIFTER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P Reel"},{"id":"34P-0185","appliance":"34P","locker":"P Reel","section":"","subsection":"","item":"TURNOCK KEY & HANDLE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P Reel"},{"id":"34P-0186","appliance":"34P","locker":"P Reel","section":"","subsection":"","item":"BRANCH ON HOSE REEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P Reel"},{"id":"34P-0102","appliance":"34P","locker":"D1","section":"","subsection":"","item":"CEILING HOOK - on pole","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0116","appliance":"34P","locker":"D1","section":"","subsection":"","item":"HALLIGAN TOOL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0117","appliance":"34P","locker":"D1","section":"","subsection":"","item":"BOLTCUTTERS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0118","appliance":"34P","locker":"D1","section":"","subsection":"","item":"SHOVEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0119","appliance":"34P","locker":"D1","section":"","subsection":"","item":"EXTENSION POLE \u2013 1.2m [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0120","appliance":"34P","locker":"D1","section":"","subsection":"","item":"SLEDGEHAMMER \u2013 5kg","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0121","appliance":"34P","locker":"D1","section":"","subsection":"","item":"SHARPS CONTAINER - Yellow","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0122","appliance":"34P","locker":"D1","section":"","subsection":"","item":"AXE \u2013 2.5kg","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0123","appliance":"34P","locker":"D1","section":"","subsection":"","item":"JEMMY BAR \u2013 600mm, 2.5kg","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"34P-0103","appliance":"34P","locker":"D2","section":"","subsection":"","item":"ATTACK HOSE BAG (black) [x4]","quantity":"","category":"","description":"Delivery Hose - 25mm x 30m\nHose Strangler","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"34P-0105","appliance":"34P","locker":"D2","section":"","subsection":"","item":"CLEVELAND LOAD x4 & BRANCH TFT10-125 x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"34P-0106","appliance":"34P","locker":"D2","section":"","subsection":"","item":"SALVAGE SHEET\u20134m x 4m Red","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"34P-0107","appliance":"34P","locker":"D2","section":"","subsection":"","item":"SALVAGE SHEET\u20134m x 4m Green","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"34P-0108","appliance":"34P","locker":"D3","section":"","subsection":"","item":"ARM CORE COOLER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0109","appliance":"34P","locker":"D3","section":"","subsection":"","item":"WOOLLEN BLANKET \u2013 Grey [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0110","appliance":"34P","locker":"D3","section":"","subsection":"","item":"JUMP LEADS - w/ Limiter","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0111","appliance":"34P","locker":"D3","section":"","subsection":"","item":"PLUG AND DYKE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0112","appliance":"34P","locker":"D3","section":"","subsection":"","item":"HOSE WINDER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0113","appliance":"34P","locker":"D3","section":"","subsection":"","item":"GAS CLAMP LARGE & GAS CLAMP SMALL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0114","appliance":"34P","locker":"D3","section":"","subsection":"","item":"FIRST AID KIT, DEFIBRILATOR, OXY VIVA","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0115","appliance":"34P","locker":"D3","section":"","subsection":"","item":"E-FLARE \u2013 Bag of 4","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0124","appliance":"34P","locker":"D3","section":"","subsection":"","item":"RED DECONTAMINATION BAG","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0125","appliance":"34P","locker":"D3","section":"","subsection":"","item":"FLAGGING TAPE CONTAINER","quantity":"","category":"","description":"Fluro Green\nFluro Yellow\nFluro Pink\nFluro Orange\nYellow/Black\nRed/White (CFS)","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0131","appliance":"34P","locker":"D3","section":"","subsection":"","item":"TOOL BOX","quantity":"","category":"","description":"Claw hammer\nNeedle nose pliers\nAllen Key Set\nHacksaw, w/ 6 spare blades\nMulti-grips\nAdjustable spanner, 300mm\nAdjustable spanner, 250mm\nAdjustable spanner, 150mm\nFlatblade screwdrivers [x3]\nPhillips Head screwdrivers [x3]\nCold Chisel\nStanley Knife\nWire cutter\nCable cutters\nUniversal Shears\nRoll Duct Tape\nRoll Electrical Tape\nRoll Plumbers Tape\nTapered Spike - Large [x2]\nTapered Spike - Small [x2]\n38mm Wayjax washer [x2]\n64mm Stortz washer, black [x2]\n64mm Stortz washer, white [x2]\n100mm Stortz washer, white [x2]\n64mm Stortz washer, reinforced [x2]\nFlat nose pliers\nThimble\nSplit chain links [2]","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0159","appliance":"34P","locker":"D3","section":"","subsection":"","item":"WHEEL BRACE, HANDLE & JACK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0160","appliance":"34P","locker":"D3","section":"","subsection":"","item":"SILICON SPRAY CAN & WD40 SPRAY CAN","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0161","appliance":"34P","locker":"D3","section":"","subsection":"","item":"BUCKET - SPILL SWEEP","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0162","appliance":"34P","locker":"D3","section":"","subsection":"","item":"STRIKE TEAM PACK AND TOILET PAPER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0163","appliance":"34P","locker":"D3","section":"","subsection":"","item":"YELLOW RUBBISH BAGS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D3"},{"id":"34P-0198","appliance":"34P","locker":"D4","section":"","subsection":"","item":"DELIVERY HOSE \u2013 64mm [x5]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D4"},{"id":"34P-0199","appliance":"34P","locker":"D4","section":"","subsection":"","item":"FILLER HOSE \u2013 64mm [x1]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D4"},{"id":"34P-0195","appliance":"34P","locker":"D5","section":"","subsection":"","item":"FIRE EXTINGUISHER\u20139kg Dry Chem","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D5"},{"id":"34P-0196","appliance":"34P","locker":"D5","section":"","subsection":"","item":"FIRE EXTINGUISHER\u2013Water","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D5"},{"id":"34P-0197","appliance":"34P","locker":"D5","section":"","subsection":"","item":"KNAPSACK \u2013 Collapsible [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D5"},{"id":"34P-0192","appliance":"34P","locker":"D Reel","section":"","subsection":"","item":"BRANCH ON HOSE REEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D Reel"},{"id":"34P-0193","appliance":"34P","locker":"D Reel","section":"","subsection":"","item":"FOAM CONTAINERS [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D Reel"},{"id":"34P-0194","appliance":"34P","locker":"D Reel","section":"","subsection":"","item":"TRAFFIC CONES [x10]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D Reel"},{"id":"34P-0187","appliance":"34P","locker":"Pump Panel","section":"","subsection":"","item":"LADDER \u2013 3 Stage","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Pump Panel"},{"id":"34P-0188","appliance":"34P","locker":"Pump Panel","section":"","subsection":"","item":"BLANK CAPS \u2013 64mm [x4]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Pump Panel"},{"id":"34P-0189","appliance":"34P","locker":"Pump Panel","section":"","subsection":"","item":"BLANK CAP \u2013 100mm","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Pump Panel"},{"id":"34P-0190","appliance":"34P","locker":"Pump Panel","section":"","subsection":"","item":"BLANK CAP \u2013 38mm","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Pump Panel"},{"id":"34P-0191","appliance":"34P","locker":"Pump Panel","section":"","subsection":"","item":"SUCTION HOSE \u2013 100mm w/storz couplings [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Pump Panel"},{"id":"34P-0200","appliance":"34P","locker":"Crew Deck","section":"","subsection":"","item":"DRIPTORCH \u2013 Firebug [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Crew Deck"},{"id":"34P-0201","appliance":"34P","locker":"Crew Deck","section":"","subsection":"","item":"FOAM DRUMS [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Crew Deck"},{"id":"34P-0202","appliance":"34P","locker":"Crew Deck","section":"","subsection":"","item":"BROOMS [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Crew Deck"},{"id":"34P-0203","appliance":"34P","locker":"Crew Deck","section":"","subsection":"","item":"LADDER - LITTLE GIANT","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Crew Deck"},{"id":"34P-0204","appliance":"34P","locker":"Crew Deck","section":"","subsection":"","item":"RAKEHOES [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Crew Deck"},{"id":"34P-0205","appliance":"34P","locker":"Crew Deck","section":"","subsection":"","item":"STOP/SLOW BAT w/ cover [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Crew Deck"},{"id":"34P-0206","appliance":"34P","locker":"Crew Deck","section":"","subsection":"","item":"CREW PROTECTION LINES w/ branches [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Crew Deck"},{"id":"34P-0207","appliance":"34P","locker":"Crew Deck","section":"","subsection":"","item":"FRIDGE - w/water bottles","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Crew Deck"}],"lockers":["Cabin","P1","P2","P3","P4","P5","P Reel","D1","D2","D3","D4","D5","D Reel","Pump Panel","Crew Deck"],"lockerPhotos":{"Cabin":{"photo":"34p_cabin.jpg","title":"Cabin","description":"Main photo shown at top of this location page"},"P1":{"photo":"34p_p1.jpg","title":"P1","description":"Main photo shown at top of this location page"},"P2":{"photo":"34p_p2.jpg","title":"P2","description":"Main photo shown at top of this location page"},"P3":{"photo":"34p_p3.jpg","title":"P3","description":"Main photo shown at top of this location page"},"D1":{"photo":"34p_d1.jpg","title":"D1","description":"Main photo shown at top of this location page"},"D3":{"photo":"34p_d3.jpg","title":"D3","description":"Main photo shown at top of this location page"},"P4":{"photo":"34p_p4.jpg","title":"P4","description":"Main photo shown at top of this location page"},"P5":{"photo":"34p_p5.jpg","title":"P5","description":"Main photo shown at top of this location page"},"P Reel":{"photo":"34p_p_reel.jpg","title":"P Reel","description":"Main photo shown at top of this location page"},"Pump Panel":{"photo":"34p_pump_panel.jpg","title":"Pump Panel","description":"Main photo shown at top of this location page"},"D Reel":{"photo":"34p_d_reel.jpg","title":"D Reel","description":"Main photo shown at top of this location page"},"D4":{"photo":"34p_d4.jpg","title":"D4","description":"Main photo shown at top of this location page"},"D5":{"photo":"34p_d5.jpg","title":"D5","description":"Main photo shown at top of this location page"},"Crew Deck":{"photo":"34p_crew_deck.jpg","title":"Crew Deck","description":"Main photo shown at top of this location page"},"D2":{"photo":"","title":"D2","description":""}},"built":"2026-06-07 18:28","version":"v2.0 RC1 - Excel gospel rebuild"},"CAFS 24":{"appliance":"CAFS 24","records":[{"id":"CAFS24-0001","appliance":"CAFS 24","locker":"Cabin","section":"Above Driver","subsection":"","item":"DRIVERS LOG BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Driver"},{"id":"CAFS24-0002","appliance":"CAFS 24","locker":"Cabin","section":"Above Driver","subsection":"","item":"APPLIANCE SERVICE BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Driver"},{"id":"CAFS24-0003","appliance":"CAFS 24","locker":"Cabin","section":"Above Officer","subsection":"","item":"SIGHT HANDOVER FORMS (a5)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"CAFS24-0004","appliance":"CAFS 24","locker":"Cabin","section":"Above Officer","subsection":"","item":"TABARD POUCH","quantity":"","category":"","description":"1 x Tabard\nIncident Controller patch\nSector Commander patch\nSafety Officer patch\nHLO patch\nMedia Liaison patch","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Above Officer"},{"id":"CAFS24-0010","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"DCP EXTINGUISHER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0011","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"BP Card - in dash","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0012","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"GRN RADIO \u2013 Portable","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0013","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"P2 MASKS in BOX - under Officers Seat","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0014","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"DIGITAL THERMOMETER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0015","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"MAGLIGHT X2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0016","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"MAGLIGHT CONES x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0017","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"OIC NOTEBOOK \u2013 Red","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0018","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"MONITOR CONTROL WITH X2 SPARE AA BATTERIES","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0019","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"GRN BATTERY","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0020","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"VHF RADIO \u2013 Portable x 1","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0021","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"VHF BATTERIES x 4","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0022","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"MULTI PURPOSE CHARGER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0024","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"TIC BATTERY","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0023","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"POUCH","quantity":"","category":"","description":"Keys [A, R, S]\n003 Keys\nSquare Key\nRed Key\nSt Johns Gate Key\nTelstra keycard","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0029","appliance":"CAFS 24","locker":"Cabin","section":"Console","subsection":"","item":"PENCIL CASE","quantity":"","category":"","description":"T Cards\nTelstra card\nAirbag warning stickers\nHAZMAT guide\nGuide for aircraft\nSturt Group Calling Cards\nBox of matches\nCompass","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Console"},{"id":"CAFS24-0037","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"RED TOOL BOX FLAGGING TAPE","quantity":"","category":"","description":"Fluoro green\nFluoro yellow\nFluoro pink\nFluoro orange\nHazard tape black/yellow\nScene tape red/white","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0043","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"VHF RADIO \u2013 Portable x 3","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0044","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"Tabards x4 (Fire and Rescue)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0045","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"PERSONAL PROTECTION BLANKET (RED) x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0046","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"RADIO BELT","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0047","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"BA Torches x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0048","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"BOX NITRILE GLOVES","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0049","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"BOX SURGICAL MASKS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0050","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"BAG ON RAIL - SAFETY GLASSES/RESCUE GLOVES","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0051","appliance":"CAFS 24","locker":"Cabin","section":"Behind Officer","subsection":"","item":"WET WEATHER JACKETS x 6","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Officer"},{"id":"CAFS24-0052","appliance":"CAFS 24","locker":"Cabin","section":"Behind Driver","subsection":"","item":"BLACK MAP BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Driver"},{"id":"CAFS24-0053","appliance":"CAFS 24","locker":"Cabin","section":"Behind Driver","subsection":"","item":"A3 LAMINATED NATIONAL PARKS MAP","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Driver"},{"id":"CAFS24-0054","appliance":"CAFS 24","locker":"Cabin","section":"Behind Driver","subsection":"","item":"CFS MAP BOOK","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Driver"},{"id":"CAFS24-0055","appliance":"CAFS 24","locker":"Cabin","section":"Behind Driver","subsection":"","item":"YELLOW FOLDER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Driver"},{"id":"CAFS24-0056","appliance":"CAFS 24","locker":"Cabin","section":"Behind Driver","subsection":"","item":"UBD STREET DIRECTORY","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Driver"},{"id":"CAFS24-0057","appliance":"CAFS 24","locker":"Cabin","section":"Behind Driver","subsection":"","item":"DIRECTIONS BOOK \u2013 White, A5","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Driver"},{"id":"CAFS24-0058","appliance":"CAFS 24","locker":"Cabin","section":"Behind Driver","subsection":"","item":"TIC + Battery","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Driver"},{"id":"CAFS24-0059","appliance":"CAFS 24","locker":"Cabin","section":"Behind Driver","subsection":"","item":"DANGEROUS GOODS GUIDE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Cabin > Behind Driver"},{"id":"CAFS24-0160","appliance":"CAFS 24","locker":"P1","section":"","subsection":"","item":"STOKES LITTER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P1"},{"id":"CAFS24-0161","appliance":"CAFS 24","locker":"P1","section":"","subsection":"","item":"HARD SUCTION HOSES x 4","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P1"},{"id":"CAFS24-0162","appliance":"CAFS 24","locker":"P1","section":"","subsection":"","item":"STOP/SLOW BAT \u2013 w/ handles x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P1"},{"id":"CAFS24-0163","appliance":"CAFS 24","locker":"P1","section":"","subsection":"","item":"BROOMS w/ handles x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P1"},{"id":"CAFS24-0164","appliance":"CAFS 24","locker":"P1","section":"","subsection":"","item":"CEILING HOOK w/ handle","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P1"},{"id":"CAFS24-0165","appliance":"CAFS 24","locker":"P2","section":"","subsection":"","item":"CROWBAR","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P2"},{"id":"CAFS24-0166","appliance":"CAFS 24","locker":"Pump Panel","section":"","subsection":"","item":"BLANK CAPS \u2013 64mm Stortz x 5","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Pump Panel"},{"id":"CAFS24-0167","appliance":"CAFS 24","locker":"Pump Panel","section":"","subsection":"","item":"BLANK CAP \u2013 100mm Stortz","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Pump Panel"},{"id":"CAFS24-0168","appliance":"CAFS 24","locker":"Pump Panel","section":"","subsection":"","item":"38MM HOSE \u2013 on reel w/ Straight bore branch","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Pump Panel"},{"id":"CAFS24-0169","appliance":"CAFS 24","locker":"P-Tube","section":"","subsection":"","item":"SPARE BA CYLINDER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P-Tube"},{"id":"CAFS24-0170","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"CABA SETS x 4","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0171","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"BATTERY PORTABLE SCENE LIGHTS [x2]","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0172","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"BA ENTRY CONTROL BOARD","quantity":"","category":"","description":"ECO tabard\nChinagraph pencil\nWhiteboard\nLight\nClock\nEntry Control sheets","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0178","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"PUMP RADIO HEADSET","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0179","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"PVC CHEMICAL GLOVES x2 pair","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0180","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"FOAM SUCTION HOSE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0181","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"FOAM DRUM SPANNER (PURPLE)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0182","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"TYRE INFLATION HOSE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0183","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"25mm PROTECTION LINE & BRANCH","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0184","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"64mm50-350 TFT BRANCH","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0185","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"38mm GATED DIVIDER w/ Forestry coupling","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0186","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"POK straight bore Branch","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0187","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"PROTEK straight bore branch w/Stortz coupling x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0188","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"Hydrant Wheel","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0189","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"PROTEK FOG/JET NOZZLE (#361) x2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0190","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"64mm STORTZ COUPLING HARDENER x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0191","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"GATED WYE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0192","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"COMBINATION KEY x 1","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0193","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"ADAPTORS","quantity":"","category":"","description":"London Round Female to Stortz x 3\nLondon Round Male to Stortz x 2\nStortz to Forestry x 2","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0196","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"DELIVERY HOSE 38mm Hose \u2013 x 6","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0197","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"FILLER HOSE \u2013 64mm w/Stortz couplings x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0198","appliance":"CAFS 24","locker":"P3","section":"","subsection":"","item":"DELIVERY HOSE \u2013 64mm w/Stortz couplings x 5","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"P3"},{"id":"CAFS24-0060","appliance":"CAFS 24","locker":"D-Tube","section":"","subsection":"","item":"38mm HOSE \u2013 on reel w/ Fog branch","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D-Tube"},{"id":"CAFS24-0061","appliance":"CAFS 24","locker":"D-Tube","section":"","subsection":"","item":"BA CYLINDER IN TUBE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D-Tube"},{"id":"CAFS24-0062","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"FORCE AXE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0063","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"HALLIGAN TOOL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0064","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"BOLT CUTTERS","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0065","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"SHOVEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0066","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"SLEDGE HAMMER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0067","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"JEMMY BAR","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0068","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"DRY CHEM EXTINGUISHER 9KG","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0069","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"TRAFFIC CONES x10","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0070","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"FIRE BLANKET","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0071","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"BAG OF WET WEATHER GEAR (Pants only)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0072","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"DEFIBRILLATOR","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0073","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"FIRST AID KIT","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0074","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"LARGE ROPE x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0075","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"WOOLLEN BLANKET (grey) x1","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0076","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"HAZARD TAPE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0077","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"Knapsacks x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0078","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"EQUIP CLEANING KIT - Green bag","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0079","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"WHEEL BRACE w/ Handle","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0080","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"JACK w/ Handle","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0081","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"FRIDGE Full of Water","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0082","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"MANUAL HOSEREEL WINDER","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0083","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"SALVAGE SHEET \u2013 4m x 4m, Green","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0084","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"SALVAGE SHEET \u2013 4m x 4m, Red","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0085","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"DISPOSABLE LINE - RED","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0086","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"PLUG AND DYKE","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0087","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"BAG OF E-FLARES x 4","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0088","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"STRIKE TEAM PACK (BUCKET)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0089","appliance":"CAFS 24","locker":"D1","section":"","subsection":"","item":"D1 TOOLBOX","quantity":"","category":"","description":"Allen Key Set\nUniversal Shears\nPhillips Head Screwdrivers x 3\nFlat Blade Screwdrivers x 3\nTapered Spike small\nLarge Tapered Spike x 2\nAdjustable spanner, 300mm\nAdjustable spanner, 250mm\nAdjustable spanner, 150mm\nNeedle nose pliers\nCombination plier\nwire cutter\nCable cutters\nHacksaw & spare blades\nMulti Grips\nStanley Knife\nCold Chisel\nWashers x 4\nRoll Duct Tape\nClaw Hammer\nSpindle\nThimble","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D1"},{"id":"CAFS24-0111","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"GROUND MONITOR w/Stortz coupling","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0112","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"SABERMASTER BRANCH - Fog / Smooth Bore","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0113","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"BASKET - w/ Suction Strainer","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0114","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"BAR AND CHAIN OIL \u2013 1ltr","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0115","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"D2 TOOLBOX","quantity":"","category":"","description":"Allen Key Set\nUniversal Shears\nPhillips Head Screwdrivers x 3\nFlat Blade Screwdrivers x 3\nTapered Spike small\nLarge Tapered Spike x 2\nAdjustable spanner, 300mm\nAdjustable spanner, 250mm\nAdjustable spanner, 150mm\nNeedle nose pliers\nCombination plier\nwire cutter\nCable cutters\nHacksaw & spare blades\nMulti Grips\nStanley Knife\nCold Chisel\nWashers x 4\nRoll Duct Tape\nClaw Hammer\nSpindle\nThimble","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0137","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"CHAINSAW BOX","quantity":"","category":"","description":"Chaps\nSafety glasses\nHelmet w/ earmuffs\nSpare Chain [x2]\nEar Plugs\nFile and guide\nWedge [x2]\nSparkplug\nChainsaw spanner","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0146","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"CHAINSAW - Stihl","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0147","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"FUEL CONTAINER \u201310lt, UNLEADED (RED)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0148","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"FUEL CONTAINER \u201310lt, 2-STROKE (GREY)","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0149","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"FUNNEL","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0150","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"SPOUT \u2013 for fuel containers","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0151","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"25mm PROTECTION LINE & BRANCH","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0152","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"ATTACK HOSE BAG (black) X2","quantity":"","category":"","description":"Delivery Hose\u201325mmx30m\nHose clamp x1","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0154","appliance":"CAFS 24","locker":"D2","section":"","subsection":"","item":"DELIVERY HOSE 25mm Hose \u2013 x 2","quantity":"","category":"","description":"","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"D2"},{"id":"CAFS24-0155","appliance":"CAFS 24","locker":"Rear","section":"","subsection":"","item":"TROOPER TROLLEY","quantity":"","category":"","description":"Standpipe\nHeavy Plate lifter\nE Flare\nTurncock Key\nLITTLE GIANT LADDER","status":"In service","photo":"","extraPhoto":"","lastChecked":"","checkedBy":"","tags":"","notes":"","location":"Rear"}],"lockers":["Cabin","P1","P2","Pump Panel","P-Tube","P3","D-Tube","D1","D2","Rear"],"lockerPhotos":{"Cabin":{"photo":"IMG_20260519_140942500_HDR.jpg","title":"Cabin","description":"Cabin inventory page"},"Drivers Side 1":{"photo":"IMG_20260519_140924212_HDR.jpg","title":"Drivers Side 1","description":"Driver side first page"},"Drivers Side 2":{"photo":"IMG_20260519_140929826_HDR.jpg","title":"Drivers Side 2","description":"Driver side second page"},"Officers Side":{"photo":"IMG_20260519_140936817_HDR.jpg","title":"Officers Side","description":"Officer side page"},"P1":{"photo":"","title":"P1","description":""},"P2":{"photo":"","title":"P2","description":""},"Pump Panel":{"photo":"","title":"Pump Panel","description":""},"P-Tube":{"photo":"","title":"P-Tube","description":""},"P3":{"photo":"","title":"P3","description":""},"D-Tube":{"photo":"","title":"D-Tube","description":""},"D1":{"photo":"","title":"D1","description":""},"D2":{"photo":"","title":"D2","description":""},"Rear":{"photo":"","title":"Rear","description":""}},"built":"2026-06-07 18:28","version":"v2.0 RC1 - Excel gospel rebuild"}};
let DATA = APPLIANCES["Blackwood Rescue"] || Object.values(APPLIANCES)[0];
window.INVENTORY_DATA = Object.values(APPLIANCES).flatMap(app => app.records || []);
window.APP_DATA = { items: window.INVENTORY_DATA, appliances: APPLIANCES };
const APPLIANCE_PHOTO_ROOTS = {
  "Blackwood Rescue": "photos/rescue",
  "34P": "photos/34p",
  "Blackwood 34P": "photos/34p",
  "CAFS 24": "photos/cafs24",
  "CAFS24": "photos/cafs24"
};

function photoRoot(appliance) {
  return APPLIANCE_PHOTO_ROOTS[appliance || DATA.appliance] || "photos/rescue";
}

function lockerPhotoPath(photo, appliance) {
  if (!photo) return "";
  if (/^photos\//i.test(photo)) return photo;
  return `${photoRoot(appliance)}/lockers/${photo}`;
}

function itemPhotoPath(photoName, appliance) {
  if (!photoName) return "";
  if (/^photos\//i.test(photoName)) return photoName;
  return `${photoRoot(appliance)}/items/${photoName}`;
}

function setActiveAppliance(applianceName) {
  DATA = APPLIANCES[applianceName] || APPLIANCES["Blackwood Rescue"];
  activeLocker = "Home";
  if (searchEl) searchEl.value = "";
  if (title) if (title) title.textContent = DATA.appliance + " Inventory";
  document.querySelectorAll(".truck-option").forEach(b => b.classList.toggle("active", b.dataset.truck === DATA.appliance));
  makeTabs();
  render();
  closeDrawer();
}

let activeLocker = "Home";
// Always start on Home when the app loads.
let homeCollapsed = true;
let groupCollapsedState = {};
let favourites = new Set();

try {
  favourites = new Set(JSON.parse(localStorage.getItem("inventoryFavourites") || "[]"));
} catch(e) {
  favourites = new Set();
}

function saveFavourites() {
  try {
    localStorage.setItem("inventoryFavourites", JSON.stringify([...favourites]));
  } catch(e) {}
}

function itemKey(r) {
  return r.id || [r.locker, r.section, r.subsection, r.item].join("|");
}

function toggleFavourite(key) {
  if (favourites.has(key)) {
    favourites.delete(key);
  } else {
    favourites.add(key);
  }
  saveFavourites();
  render();
}

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const tabsEl = document.getElementById("tabs");
const summaryEl = document.getElementById("summary");
const resultsEl = document.getElementById("results");
const searchEl = document.getElementById("search");
const photoEl = document.getElementById("lockerPhoto");
const clearBtn = document.getElementById("clearBtn");
const darkToggle = document.getElementById("darkToggle");

function setTheme(mode) {
  const dark = mode === "dark";
  document.body.classList.toggle("dark", dark);
  if (darkToggle) darkToggle.textContent = dark ? "Dark" : "Light";
  try { localStorage.setItem("inventoryTheme", mode); } catch(e) {}
}

function setPalette(palette) {
  const valid = ["blue", "green", "yellow", "red"];
  const chosen = valid.includes(palette) ? palette : "blue";
  document.body.classList.remove("palette-blue", "palette-green", "palette-yellow", "palette-red");
  document.body.classList.add("palette-" + chosen);
  document.querySelectorAll(".theme-option").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.palette === chosen);
  });
  try { localStorage.setItem("inventoryPalette", chosen); } catch(e) {}
}

try {
  const savedTheme = localStorage.getItem("inventoryTheme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
} catch(e) {
  setTheme("light");
}

try {
  setPalette(localStorage.getItem("inventoryPalette") || "blue");
} catch(e) {
  setPalette("blue");
}

document.querySelectorAll(".theme-option").forEach(btn => {
  btn.addEventListener("click", () => setPalette(btn.dataset.palette));
});

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    setTheme(document.body.classList.contains("dark") ? "light" : "dark");
  });
}


const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");

function openDrawer() {
  drawer.classList.add("open");
  drawerBackdrop.classList.add("open");
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
}

if (menuBtn) menuBtn.addEventListener("click", openDrawer);
if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

document.querySelectorAll(".truck-option").forEach(btn => {
  btn.addEventListener("click", () => {
    setActiveAppliance(btn.dataset.truck);
  });
});


if (title) title.textContent = DATA.appliance + " Inventory";

function esc(s) {
  return (s || "").toString().replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function norm(s) {
  return (s || "").toString().toLowerCase();
}

function statusClass(s) {
  const n = norm(s);
  if (n.includes("missing")) return "status-missing";
  if (n.includes("damaged")) return "status-damaged";
  if (n.includes("out")) return "status-out";
  if (n.includes("review")) return "status-review";
  if (n.includes("replace")) return "status-replace";
  return "";
}

function isInService(s) {
  const n = norm(s).trim();
  return n === "" || n === "in service";
}

function tileStatusClass(s) {
  return isInService(s) ? "in-service" : "not-in-service";
}

function statusPillClass(s) {
  return isInService(s) ? "in-service" : "not-in-service";
}

function recordMatches(r, q) {
  if (!q) return true;
  const blob = [
    r.item, r.locker, r.section, r.subsection, r.location,
    r.description, r.category, r.status, r.tags, r.notes, r.quantity
  ].join(" ");
  return norm(blob).includes(q);
}

function makeTabs() {
  tabsEl.innerHTML = "";
  ["Home", ...DATA.lockers, "Out of Service"].forEach(locker => {
    const btn = document.createElement("button");
    btn.textContent = locker;
    btn.className = locker === activeLocker ? "active" : "";
    btn.onclick = () => {
      activeLocker = locker;
      searchEl.value = "";
      makeTabs();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
    };
    tabsEl.appendChild(btn);
  });
}

function filteredRecords() {
  const q = norm(searchEl.value.trim());
  return DATA.records.filter(r => {
    const favouriteOk = activeLocker === "★" ? favourites.has(itemKey(r)) : true;
    const outOfServiceOk = activeLocker === "Out of Service" ? !isInService(getEffectiveStatus(r)) : true;
    const lockerOk = activeLocker === "Home" || activeLocker === "★" || activeLocker === "Out of Service" || r.locker === activeLocker;
    return lockerOk && favouriteOk && outOfServiceOk && recordMatches(r, q);
  });
}

function renderSummary(records) {
  if (activeLocker !== "Home") {
    summaryEl.innerHTML = "";
    return;
  }

  const starredCount = records.filter(r => favourites.has(itemKey(r))).length;
  const outOfServiceCount = records.filter(r => {
    const n = norm(getEffectiveStatus(r));
    return n && !isInService(n);
  }).length;
  summaryEl.innerHTML = `
    <button class="stat stat-button" type="button" id="starredStat"><strong>${starredCount}</strong><span>Starred Items</span></button>
    <button class="stat stat-button" type="button" id="expandCollapseStat"><strong>${homeCollapsed ? "＋" : "−"}</strong><span>${homeCollapsed ? "Expand All" : "Collapse All"}</span></button>
    <button class="stat stat-button ${outOfServiceCount === 0 ? "stat-ok" : "stat-alert"}" type="button" id="outOfServiceStat"><strong>${outOfServiceCount}</strong><span>Out of Service</span></button>
  `;

  const starredBtn = document.getElementById("starredStat");
  if (starredBtn) {
    starredBtn.addEventListener("click", () => {
      activeLocker = "★";
      searchEl.value = "";
      makeTabs();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
    });
  }

  const expandBtn = document.getElementById("expandCollapseStat");
  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      homeCollapsed = !homeCollapsed;

      // Clear manual per-group states when user chooses a global Home expand/collapse action.
      Object.keys(groupCollapsedState).forEach(key => {
        if (key.startsWith("Home::")) delete groupCollapsedState[key];
      });

      render();
    });
  }

  const oosBtn = document.getElementById("outOfServiceStat");
  if (oosBtn) {
    oosBtn.addEventListener("click", () => {
      activeLocker = "Out of Service";
      searchEl.value = "";
      makeTabs();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
    });
  }
}

function renderPhoto() {
  photoEl.innerHTML = "";
  if (activeLocker === "Home" || activeLocker === "★" || activeLocker === "Out of Service") return;
  const lp = DATA.lockerPhotos[activeLocker] || {};
  if (!lp.photo) return;
  if (activeLocker === "Cabin" && DATA.appliance === "Blackwood Rescue") {
    const front = lockerPhotoPath("cabin_front.jpg", DATA.appliance);
    const rear = lockerPhotoPath("cabin_rear.jpg", DATA.appliance);
    photoEl.innerHTML = `
      <div class="photo-card cabin-photo-card">
        <div class="cabin-photo-grid">
          <img src="${esc(front)}" alt="Cabin front photo" onerror="this.style.display='none';">
          <img src="${esc(rear)}" alt="Cabin rear photo" onerror="this.style.display='none';">
        </div>
        <div class="photo-text">
          <h2>Cabin</h2>
        </div>
      </div>
    `;
    return;
  }

  const src = lockerPhotoPath(lp.photo, DATA.appliance);
  photoEl.innerHTML = `
    <div class="photo-card">
      <img src="${esc(src)}" alt="${esc(activeLocker)} photo" onerror="this.style.display='none'; this.parentElement.querySelector('.missing-photo').style.display='block';">
      <div class="missing-photo photo-text" style="display:none;">
        <h2>${esc(activeLocker)}</h2>
        <p>File: ${esc(src)}</p>
      </div>
      <div class="photo-text">
        <h2>${esc(lp.title || activeLocker)}</h2>
        ${lp.description ? `<p>${esc(lp.description)}</p>` : ``}
      </div>
    </div>
  `;
}

function groupRecords(records) {
  const groups = {};
  records.forEach(r => {
    const key = r.location || r.locker || "Unspecified";
    if (!groups[key]) groups[key] = [];
    groups[key].push(r);
  });
  return groups;
}

function customGroupSortKey(name) {
  const n = name.toLowerCase();

  // Main physical locker order for All view and search results
  let lockerRank = 99;
  if (n.includes("cabin")) lockerRank = 0;
  else {
    const m = n.match(/locker\s*(\d+)/);
    if (m) lockerRank = Number(m[1]);
  }

  // Section order within lockers
  let sectionRank = 99;

  // Generic top/middle/bottom order
  if (n.includes("top")) sectionRank = Math.min(sectionRank, 0);
  if (n.includes("middle") || n.includes("midd")) sectionRank = Math.min(sectionRank, 1);
  if (n.includes("bottom")) sectionRank = Math.min(sectionRank, 2);

  // Locker 2 desired physical order
  if (n.includes("locker 2")) {
    if (n.includes("top")) sectionRank = 0;
    else if (n.includes("middle") || n.includes("midd")) sectionRank = 1;
    else if (n.includes("tray 1")) sectionRank = 2;
    else if (n.includes("tray 2")) sectionRank = 3;
    else if (n.includes("tray 3")) sectionRank = 4;
    else if (n.includes("tray 4")) sectionRank = 5;
  }

  // Locker 5 desired physical order
  if (n.includes("locker 5")) {
    if (n.includes("top")) sectionRank = 0;
    else if (n.includes("middle") || n.includes("midd")) sectionRank = 1;
    else if (n.includes("bottom")) sectionRank = 2;
  }

  return String(lockerRank).padStart(2, "0") + "-" + String(sectionRank).padStart(2, "0") + "-" + n;
}


const itemModalBackdrop = document.getElementById("itemModalBackdrop");
const itemModal = document.getElementById("itemModal");
const modalClose = document.getElementById("modalClose");
const modalPhoto = document.getElementById("modalPhoto");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalPills = document.getElementById("modalPills");
const modalDetails = document.getElementById("modalDetails");
const modalReportIssueBtn = document.getElementById("modalReportIssueBtn");
const modalInServiceBtn = document.getElementById("modalInServiceBtn");
const modalOutServiceBtn = document.getElementById("modalOutServiceBtn");

let modalCurrentItemKey = null;
let localItemEdits = {};

try {
  localItemEdits = JSON.parse(localStorage.getItem("inventoryItemEdits") || "{}");
} catch(e) {
  localItemEdits = {};
}

function saveLocalItemEdits() {
  try {
    localStorage.setItem("inventoryItemEdits", JSON.stringify(localItemEdits));
  } catch(e) {}
}

function getExcelDescription(r) {
  return r.description ?? "";
}

function getEffectiveStatus(r) {
  const key = itemKey(r);
  return localItemEdits[key]?.status ?? r.status ?? "In service";
}

function setModalServiceStatus(status) {
  if (!modalCurrentItemKey) return;
  if (!localItemEdits[modalCurrentItemKey]) localItemEdits[modalCurrentItemKey] = {};
  localItemEdits[modalCurrentItemKey].status = status;
  saveLocalItemEdits();
  render();
  updateModalServiceButtons(status);
}

function updateModalServiceButtons(status) {
  const inService = isInService(status);
  const inBtn = document.getElementById("modalInServiceBtn");
  const outBtn = document.getElementById("modalOutServiceBtn");

  if (inBtn) {
    inBtn.classList.toggle("service-active", inService);
    inBtn.classList.remove("service-out");
    inBtn.setAttribute("aria-pressed", String(inService));
  }

  if (outBtn) {
    outBtn.classList.toggle("service-out", !inService);
    outBtn.classList.remove("service-active");
    outBtn.setAttribute("aria-pressed", String(!inService));
  }
}

function updateModalStarButton() {
  const starBtn = document.getElementById("modalStarBtn");
  if (!starBtn || !modalCurrentItemKey) return;
  const isFav = favourites.has(modalCurrentItemKey);
  starBtn.classList.toggle("active", isFav);
  starBtn.setAttribute("aria-pressed", String(isFav));
  starBtn.textContent = isFav ? "★" : "☆";
}


function itemPhotoFilenameFromName(name) {
  return (name || "item")
    .toString()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") + ".jpg";
}

function modalField(label, value, full=false) {
  if (!value) return "";
  return `
    <div class="modal-field ${full ? "full" : ""}">
      <div class="modal-field-label">${esc(label)}</div>
      <div class="modal-field-value">${esc(value)}</div>
    </div>
  `;
}

function openItemModal(r) {
  if (!r) return;

  modalCurrentItemKey = itemKey(r);
  const excelDescription = getExcelDescription(r);
  const effectiveStatus = getEffectiveStatus(r);

  modalTitle.textContent = r.item || "Item details";
  modalMeta.textContent = [r.locker, r.section, r.subsection].filter(Boolean).join(" • ");
  updateModalServiceButtons(effectiveStatus);

  const photoName = r.extraPhoto || itemPhotoFilenameFromName(r.item);
  const src = itemPhotoPath(photoName, r.appliance || DATA.appliance);
  modalPhoto.classList.remove("has-photo");
  modalPhoto.dataset.photoSrc = src;
  modalPhoto.dataset.photoTitle = r.item || "Item photo";
  modalPhoto.innerHTML = `<img src="${esc(src)}" alt="${esc(r.item)} photo" onload="this.parentElement.classList.add('has-photo')" onerror="this.parentElement.classList.remove('has-photo'); this.parentElement.innerHTML='<div class=&quot;photo-filename-helper&quot;><div>File:</div><small>${esc(src)}</small></div>';">`;

  const existingToggle = `
    <div class="service-toggle-row">
      <button id="modalInServiceBtn" class="service-toggle" type="button">In service</button>
      <button id="modalOutServiceBtn" class="service-toggle" type="button">Out of service</button>
      <button id="modalStarBtn" class="modal-star-toggle" type="button" aria-label="Star item">☆</button>
    </div>
  `;
  const pillBits = [existingToggle];
  if (r.quantity) pillBits.push(`<span class="badge">Qty ${esc(r.quantity)}</span>`);
  if (r.category) pillBits.push(`<span class="badge">${esc(r.category)}</span>`);
  modalPills.innerHTML = pillBits.join("");
  const inBtn = modalPills.querySelector("#modalInServiceBtn");
  const outBtn = modalPills.querySelector("#modalOutServiceBtn");
  const starBtn = modalPills.querySelector("#modalStarBtn");

  if (inBtn) inBtn.addEventListener("click", () => setModalServiceStatus("In service"));
  if (outBtn) outBtn.addEventListener("click", () => setModalServiceStatus("Out of service"));
  if (starBtn) {
    starBtn.addEventListener("click", () => {
      toggleFavourite(modalCurrentItemKey);
      updateModalStarButton();
    });
  }
updateModalServiceButtons(effectiveStatus);
  updateModalStarButton();

  modalDetails.innerHTML = [
    modalField("Location", r.location, true),
    modalField("Appliance", r.appliance || DATA.appliance),
    modalField("Excel description", r.description, true),
    modalField("Notes", r.notes, true),
    modalField("Search tags", r.tags, true),
    modalField("Last checked", r.lastChecked),
    modalField("Checked by", r.checkedBy),
  ].join("");

  itemModalBackdrop.classList.add("open");
  itemModal.classList.add("open");
}

function closeItemModal() {
  itemModalBackdrop.classList.remove("open");
  itemModal.classList.remove("open");
}


if (modalReportIssueBtn) {
  modalReportIssueBtn.addEventListener("click", () => {
    if (!modalCurrentItemKey) return;
    const item = DATA.records.find(r => itemKey(r) === modalCurrentItemKey);
    if (item && typeof window.openIssueModal === "function") window.openIssueModal(item);
  });
}

if (modalPhoto) {
  modalPhoto.addEventListener("click", () => {
    if (!modalPhoto.classList.contains("has-photo")) return;
    if (typeof window.openPhotoModal === "function") {
      window.openPhotoModal(modalPhoto.dataset.photoSrc, modalPhoto.dataset.photoTitle || "Item photo", "Item photo");
    }
  });
}

if (modalClose) modalClose.addEventListener("click", closeItemModal);
if (itemModalBackdrop) itemModalBackdrop.addEventListener("click", closeItemModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeItemModal();
});

function toggleGroup(section, title) {
  const isCollapsed = section.classList.toggle("collapsed");
  title.setAttribute("aria-expanded", String(!isCollapsed));

  const key = section.dataset.groupKey;
  if (key) {
    groupCollapsedState[key] = isCollapsed;
  }
}

function renderResults(records) {
  resultsEl.innerHTML = "";

  if (activeLocker === "Home" || activeLocker === "★" || activeLocker === "Out of Service") {
    const heading = document.createElement("section");
    heading.className = "photo-card";
    const headingTitle = activeLocker === "★" ? "★ Starred Items" : (activeLocker === "Out of Service" ? "Out of Service" : "All Items");
    heading.innerHTML = `
      <div class="photo-text">
        <h2>${headingTitle}</h2>
        <p>${records.length} item${records.length === 1 ? "" : "s"}</p>
      </div>
    `;
    resultsEl.appendChild(heading);
  }

  if (!records.length) {
    resultsEl.innerHTML = `<div class="empty">No matching items found.</div>`;
    return;
  }
  const groups = groupRecords(records);
  Object.keys(groups)
    .sort((a,b) => customGroupSortKey(a).localeCompare(customGroupSortKey(b), undefined, {numeric:true}))
    .forEach(group => {
    const items = groups[group];
    const section = document.createElement("section");
    section.className = "group";
    const groupStateKey = activeLocker + "::" + group;
    section.dataset.groupKey = groupStateKey;
    section.innerHTML = `
      <div class="group-title" role="button" tabindex="0" aria-expanded="true" title="Tap to collapse/expand">
        <h3>${esc(group)}</h3>
        <small>${items.length} item${items.length === 1 ? "" : "s"}</small>
      </div>
      <div class="items-grid"></div>
    `;
    const title = section.querySelector(".group-title");
    title.addEventListener("click", () => toggleGroup(section, title));
    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleGroup(section, title);
      }
    });
    const hasSavedGroupState = Object.prototype.hasOwnProperty.call(groupCollapsedState, groupStateKey);
    const shouldCollapseGroup = hasSavedGroupState ? groupCollapsedState[groupStateKey] : (activeLocker === "Home" && homeCollapsed);

    if (shouldCollapseGroup) {
      section.classList.add("collapsed");
      title.setAttribute("aria-expanded", "false");
    } else {
      section.classList.remove("collapsed");
      title.setAttribute("aria-expanded", "true");
    }
    const grid = section.querySelector(".items-grid");
    items.forEach(r => {
      const badges = [];
      if (r.category) badges.push(`<span class="badge">${esc(r.category)}</span>`);
      if (r.lastChecked) badges.push(`<span class="badge">Checked ${esc(r.lastChecked)}</span>`);
      if (r.checkedBy) badges.push(`<span class="badge">By ${esc(r.checkedBy)}</span>`);
      const div = document.createElement("div");
      const effectiveStatus = getEffectiveStatus(r);
      const excelDescription = getExcelDescription(r);
      div.className = "item " + tileStatusClass(effectiveStatus) + " clickable";
      div.dataset.itemKey = itemKey(r);
      const favKey = itemKey(r);
      const isFav = favourites.has(favKey);
      div.innerHTML = `
        <button class="fav-btn ${isFav ? "active" : ""}" type="button" title="Favourite item" aria-label="Favourite item">${isFav ? "★" : "☆"}</button>
        <button class="photo-indicator-btn" type="button" title="Item photo available" aria-label="Item photo available" data-photo-url="${esc(itemPhotoPath(r.extraPhoto || itemPhotoFilenameFromName(r.item), r.appliance || DATA.appliance))}"><svg class="photo-indicator-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3.5" y="4.5" width="17" height="15" rx="1.8"></rect>
          <circle cx="16.8" cy="8.2" r="1.8"></circle>
          <path d="M5.8 17.2l5.1-5.4 3.7 3.7 2.1-2.2 3.3 3.9"></path>
        </svg></button>
        ${effectiveStatus ? `<div class="status-pill ${statusPillClass(effectiveStatus)}">${esc(effectiveStatus)}</div>` : `<div class="status-pill in-service">In service</div>`}
        <div class="item-main">
          <div class="item-name">${esc(r.item)}</div>
          ${r.quantity ? `<div class="qty">Qty ${esc(r.quantity)}</div>` : ""}
        </div>
        <div class="meta">${esc([r.locker, r.section, r.subsection].filter(Boolean).join(" • "))}</div>
        ${excelDescription ? `<div class="desc">${esc(excelDescription)}</div>` : ""}
        ${r.notes ? `<div class="notes">${esc(r.notes)}</div>` : ""}
        ${badges.length ? `<div class="badge-row">${badges.join("")}</div>` : ""}
      `;
      div.querySelector(".fav-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavourite(favKey);
      });
      div.addEventListener("click", () => openItemModal(r));
      grid.appendChild(div);
    });
    resultsEl.appendChild(section);
  });
}


const itemPhotoAvailabilityCache = {};

function checkItemPhotoIndicators() {
  document.querySelectorAll(".photo-indicator-btn").forEach(btn => {
    const url = btn.dataset.photoUrl;
    if (!url) return;

    if (itemPhotoAvailabilityCache[url] === true) {
      btn.classList.add("has-photo");
      return;
    }

    if (itemPhotoAvailabilityCache[url] === false) {
      btn.classList.remove("has-photo");
      return;
    }

    const img = new Image();
    img.onload = () => {
      itemPhotoAvailabilityCache[url] = true;
      document.querySelectorAll(`.photo-indicator-btn[data-photo-url="${CSS.escape(url)}"]`).forEach(b => b.classList.add("has-photo"));
    };
    img.onerror = () => {
      itemPhotoAvailabilityCache[url] = false;
      document.querySelectorAll(`.photo-indicator-btn[data-photo-url="${CSS.escape(url)}"]`).forEach(b => b.classList.remove("has-photo"));
    };
    img.src = url;
  });
}

function render() {
  const records = filteredRecords();
  renderSummary(records);
  renderPhoto();
  renderResults(records);
  checkItemPhotoIndicators();
}

searchEl.addEventListener("input", () => {
  activeLocker = "Home";
  makeTabs();
  render();
});
clearBtn.addEventListener("click", () => {
  searchEl.value = "";
  render();
  searchEl.focus();
});




function initialiseQuizFeature() {
  const openQuizBtn = document.getElementById("openQuizBtn");
  const quizBackdrop = document.getElementById("quizBackdrop");
  const quizModal = document.getElementById("quizModal");
  const quizCloseBtn = document.getElementById("quizCloseBtn");
  const quizSetup = document.getElementById("quizSetup");
  const quizRun = document.getElementById("quizRun");
  const quizResults = document.getElementById("quizResults");
  const generateQuizBtn = document.getElementById("generateQuizBtn");
  const quizCard = document.getElementById("quizCard");
  const quizProgress = document.getElementById("quizProgress");
  const quizItemName = document.getElementById("quizItemName");
  const quizLocation = document.getElementById("quizLocation");
const quizHintBtn = document.getElementById("quizHintBtn");
const quizHintValue = document.getElementById("quizHintValue");
  const quizMarking = document.getElementById("quizMarking");
  const quizCorrectBtn = document.getElementById("quizCorrectBtn");
  const quizIncorrectBtn = document.getElementById("quizIncorrectBtn");
  const quizScore = document.getElementById("quizScore");
  const quizStartOverBtn = document.getElementById("quizStartOverBtn");
  const quizRegenerateBtn = document.getElementById("quizRegenerateBtn");

  let quizItems = [];
  let quizIndex = 0;
  let quizCorrect = 0;
  let quizFlipped = false;

  function openQuizModal() {
    if (typeof closeDrawer === "function") closeDrawer();
    quizBackdrop.classList.add("open");
    quizModal.classList.add("open");
    showQuizSetup();
  }

  function closeQuizModal() {
    quizBackdrop.classList.remove("open");
    quizModal.classList.remove("open");
  }

  function showQuizSetup() {
    quizSetup.style.display = "";
    quizRun.style.display = "none";
    quizResults.style.display = "none";
    quizItems = [];
    quizIndex = 0;
    quizCorrect = 0;
    quizFlipped = false;
  }

  function selectedQuizTrucks() {
    return [...document.querySelectorAll(".quiz-truck:checked")].map(x => x.value);
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function generateQuiz() {
    const trucks = selectedQuizTrucks();
    const allRecords = Object.values(APPLIANCES || {}).flatMap(app => app.records || []);
    const pool = allRecords.filter(r =>
      trucks.includes(r.appliance || DATA.appliance) &&
      r.item &&
      r.location
    );

    quizItems = shuffleArray(pool).slice(0, 10);
    quizIndex = 0;
    quizCorrect = 0;

    if (!quizItems.length) {
      quizScore.textContent = "No quiz items available";
      quizSetup.style.display = "none";
      quizRun.style.display = "none";
      quizResults.style.display = "";
      return;
    }

    quizSetup.style.display = "none";
    quizResults.style.display = "none";
    quizRun.style.display = "";
    showQuizCard();
  }

  function showQuizCard() {
    quizFlipped = false;
    quizCard.classList.remove("flipped");
    quizMarking.style.display = "none";

    const item = quizItems[quizIndex];
    quizProgress.textContent = `Question ${quizIndex + 1} of ${quizItems.length}`;
    quizItemName.textContent = item.item;
    quizLocation.textContent = item.location;
  if (quizHintValue) quizHintValue.textContent = "";
  if (quizHintBtn) quizHintBtn.classList.remove("active");
  }

  function flipQuizCard() {
    if (quizFlipped) return;
    quizFlipped = true;
    quizCard.classList.add("flipped");
    quizMarking.style.display = "flex";
  }

  function markQuiz(correct) {
    if (correct) quizCorrect += 1;
    quizIndex += 1;

    if (quizIndex >= quizItems.length) {
      showQuizResults();
    } else {
      showQuizCard();
    }
  }

  function showQuizResults() {
    quizRun.style.display = "none";
    quizSetup.style.display = "none";
    quizResults.style.display = "";
    quizScore.textContent = `${quizCorrect} / ${quizItems.length}`;
  }

  if (openQuizBtn) openQuizBtn.addEventListener("click", openQuizModal);
  if (quizCloseBtn) quizCloseBtn.addEventListener("click", closeQuizModal);
  if (quizBackdrop) quizBackdrop.addEventListener("click", closeQuizModal);
  if (generateQuizBtn) generateQuizBtn.addEventListener("click", generateQuiz);
  if (quizHintBtn) quizHintBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const item = quizItems[quizIndex];
  if (!item) return;
  const truck = item.appliance || DATA.appliance || "Blackwood CFS";
  const showing = quizHintValue && quizHintValue.textContent;
  if (showing) {
    quizHintValue.textContent = "";
    quizHintBtn.classList.remove("active");
  } else {
    quizHintValue.textContent = truck;
    quizHintBtn.classList.add("active");
  }
});
if (quizCard) quizCard.addEventListener("click", flipQuizCard);
  if (quizCorrectBtn) quizCorrectBtn.addEventListener("click", () => markQuiz(true));
  if (quizIncorrectBtn) quizIncorrectBtn.addEventListener("click", () => markQuiz(false));
  if (quizStartOverBtn) quizStartOverBtn.addEventListener("click", showQuizSetup);
  if (quizRegenerateBtn) quizRegenerateBtn.addEventListener("click", generateQuiz);
}

initialiseQuizFeature();


function initialisePhotoModalFeature() {
  const photoModal = document.getElementById("photoModal");
  const photoModalBackdrop = document.getElementById("photoModalBackdrop");
  const photoModalClose = document.getElementById("photoModalClose");
  const photoModalImg = document.getElementById("photoModalImg");
  const photoModalTitle = document.getElementById("photoModalTitle");
  const photoModalCaption = document.getElementById("photoModalCaption");

  function openPhotoModal(src, title, caption) {
    if (!src) return;

    const loader = document.getElementById("photoLoadingOverlay");
    const minimumSpinnerMs = 220;
    const startedAt = Date.now();

    if (loader) loader.classList.add("open");

    function finishOpen() {
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(0, minimumSpinnerMs - elapsed);

      setTimeout(() => {
        photoModalImg.classList.remove("zoomed");
        const wrap = photoModalImg.closest(".photo-modal-image-wrap");
        if (wrap) { wrap.scrollTop = 0; wrap.scrollLeft = 0; }

        photoModalImg.src = src;
        photoModalImg.alt = title || "Expanded photo";
        photoModalTitle.textContent = title || "Photo";
        photoModalCaption.textContent = caption || "";

        photoModalBackdrop.classList.add("open");
        photoModal.classList.add("open");

        requestAnimationFrame(() => {
          if (loader) loader.classList.remove("open");
        });
      }, wait);
    }

    const preloader = new Image();
    preloader.onload = finishOpen;
    preloader.onerror = finishOpen;
    preloader.src = src;
  }

  function closePhotoModal() {
    photoModalBackdrop.classList.remove("open");
    photoModal.classList.remove("open");
    photoModalImg.classList.remove("zoomed");
    const wrap = photoModalImg.closest(".photo-modal-image-wrap");
    if (wrap) { wrap.scrollTop = 0; wrap.scrollLeft = 0; }
    setTimeout(() => { photoModalImg.src = ""; }, 150);
  }

  window.openPhotoModal = openPhotoModal;

  if (photoModalClose) photoModalClose.addEventListener("click", closePhotoModal);
  if (photoModalBackdrop) photoModalBackdrop.addEventListener("click", closePhotoModal);
  let lastPhotoTapTime = 0;

  function togglePhotoZoom() {
    const wrap = photoModalImg.closest(".photo-modal-image-wrap");
    const willZoom = !photoModalImg.classList.contains("zoomed");
    photoModalImg.classList.toggle("zoomed", willZoom);

    if (wrap) {
      setTimeout(() => {
        if (willZoom) {
          wrap.scrollLeft = Math.max(0, (wrap.scrollWidth - wrap.clientWidth) / 2);
          wrap.scrollTop = Math.max(0, (wrap.scrollHeight - wrap.clientHeight) / 3);
        } else {
          wrap.scrollLeft = 0;
          wrap.scrollTop = 0;
        }
      }, 80);
    }
  }

  photoModalImg.addEventListener("dblclick", (event) => {
    event.preventDefault();
    togglePhotoZoom();
  });

  photoModalImg.addEventListener("touchend", (event) => {
    const now = Date.now();
    if (now - lastPhotoTapTime < 320) {
      event.preventDefault();
      togglePhotoZoom();
    }
    lastPhotoTapTime = now;
  }, { passive: false });

  

  document.addEventListener("click", (event) => {
    const card = event.target.closest(".photo-card");
    if (!card) return;

    const clickedImg = event.target.closest("img");
    const img = clickedImg && card.contains(clickedImg) ? clickedImg : card.querySelector("img");

    if (!img || !img.src || img.style.display === "none") return;

    const title = img.alt || card.querySelector("h2")?.textContent || "Photo";
    const caption = `File: ${img.getAttribute("src") || ""}`;
    openPhotoModal(img.currentSrc || img.src, title, caption);
  });
}
initialisePhotoModalFeature();


const ISSUE_REPORT_EMAIL = "james.navaratne@gmail.com";

function initialiseIssueReportingFeature() {
  const issueModal = document.getElementById("issueModal");
  const issueModalBackdrop = document.getElementById("issueModalBackdrop");
  const issueModalClose = document.getElementById("issueModalClose");
  const issueModalTitle = document.getElementById("issueModalTitle");
  const issueNotes = document.getElementById("issueNotes");
  const issueReportText = document.getElementById("issueReportText");
  const emailIssueBtn = document.getElementById("emailIssueBtn");

  let issueItem = null;
  let issueType = "Not in service";

  function buildIssueReport() {
    if (!issueItem) return "";

    const now = new Date();
    const appliance = issueItem.appliance || DATA.appliance || "Blackwood CFS";
    const location = issueItem.location || [issueItem.locker, issueItem.section, issueItem.subsection].filter(Boolean).join(" > ");
    const status = getEffectiveStatus(issueItem) || issueItem.status || "Unknown";
    const notes = issueNotes.value ? issueNotes.value.trim() : "";

    return [
      `Issue: ${issueType}`,
      `Item: ${issueItem.item || "Unknown item"}`,
      `Location: ${location || "Unknown location"}`,
      `Truck/appliance: ${appliance}`,
      `Current app status: ${status}`,
      ``,
      notes ? `Details from reporter:` : `Details from reporter:`,
      notes || `No extra details added.`,
      ``,
      issueItem.description ? `Item description in app: ${issueItem.description}` : ``,
      issueItem.id ? `Inventory reference: ${issueItem.id}` : ``,
      ``,
      `Reported via the Blackwood CFS Inventory app on ${now.toLocaleString()}.`
    ].filter(line => line !== "").join("\n");
  }

  function updateIssueReport() {
    issueReportText.textContent = buildIssueReport();
  }

  function setIssueType(type) {
    issueType = type;
    document.querySelectorAll(".issue-option").forEach(btn => {
      const active = btn.dataset.issueType === issueType;
      btn.classList.toggle("active", active);
      btn.classList.toggle("service-out", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    updateIssueReport();
  }

  function openIssueModal(item) {
    issueItem = item;
    issueType = "Not in service";
    issueNotes.value = "";
    issueModalTitle.textContent = `Report Issue: ${item.item || "Item"}`;
    issueModalBackdrop.classList.add("open");
    issueModal.classList.add("open");
    setIssueType(issueType);
    updateIssueReport();
  }

  function closeIssueModal() {
    issueModalBackdrop.classList.remove("open");
    issueModal.classList.remove("open");
  }

  window.openIssueModal = openIssueModal;

  document.querySelectorAll(".issue-option").forEach(btn => {
    btn.addEventListener("click", () => setIssueType(btn.dataset.issueType));
  });

  if (issueNotes) issueNotes.addEventListener("input", updateIssueReport);
  if (issueModalClose) issueModalClose.addEventListener("click", closeIssueModal);
  if (issueModalBackdrop) issueModalBackdrop.addEventListener("click", closeIssueModal);
if (emailIssueBtn) {
    emailIssueBtn.addEventListener("click", () => {
      const subject = encodeURIComponent(`Inventory issue – ${issueItem?.item || "Item"} (${issueType})`);
      const body = encodeURIComponent(buildIssueReport());
      const to = encodeURIComponent(ISSUE_REPORT_EMAIL || "");
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
}

initialiseIssueReportingFeature();

makeTabs();
render();


// v2.0 locker/item photo anti-flash patch
(function(){
  function prepareModalImages(root){
    const scope = root || document;
    const imgs = scope.querySelectorAll('img');
    imgs.forEach(function(img){
      if (img.dataset.v2AntiFlashBound === "1") return;
      img.dataset.v2AntiFlashBound = "1";
      img.classList.remove('photo-ready');
      img.setAttribute('decoding', 'async');

      const reveal = function(){
        img.classList.add('photo-ready');
      };

      if (img.complete && img.naturalWidth > 0) {
        if (img.decode) {
          img.decode().then(reveal).catch(reveal);
        } else {
          reveal();
        }
      } else {
        img.addEventListener('load', function(){
          if (img.decode) {
            img.decode().then(reveal).catch(reveal);
          } else {
            reveal();
          }
        });
        img.addEventListener('error', reveal);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    prepareModalImages(document);

    const observer = new MutationObserver(function(mutations){
      mutations.forEach(function(mutation){
        mutation.addedNodes.forEach(function(node){
          if (node.nodeType !== 1) return;
          if (node.matches && node.matches('img')) {
            prepareModalImages(node.parentElement || document);
          } else {
            prepareModalImages(node);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
})();


// v2.0 appliance menu labels, quiz mapping, and advanced multi-appliance search patch
(function(){
  const V2_APPLIANCES = [
    { key: "rescue", label: "Blackwood Rescue", short: "Rescue", aliases: ["rescue", "blackwood rescue", "rcr"] },
    { key: "34p", label: "Blackwood 34P", short: "34P", aliases: ["34p", "blackwood 34p", "pumper"] },
    { key: "cafs24", label: "CAFS 24", short: "CAFS 24", aliases: ["cafs24", "cafs 24", "cafs-24"] }
  ];

  function normaliseAppliance(value){
    const v = String(value || "").trim().toLowerCase().replace(/[_-]+/g, " ");
    for (const a of V2_APPLIANCES){
      if (a.aliases.some(alias => v === alias || v.includes(alias))) return a.key;
    }
    return v || "rescue";
  }

  function applianceLabel(key){
    const a = V2_APPLIANCES.find(x => x.key === normaliseAppliance(key));
    return a ? a.label : String(key || "");
  }

  function applianceShort(key){
    const a = V2_APPLIANCES.find(x => x.key === normaliseAppliance(key));
    return a ? a.short : String(key || "");
  }

  function getCurrentApplianceKey(){
    const candidates = [
      window.currentAppliance,
      window.activeAppliance,
      window.selectedAppliance,
      document.body?.dataset?.appliance,
      document.documentElement?.dataset?.appliance
    ];
    for (const c of candidates){
      const n = normaliseAppliance(c);
      if (["rescue","34p","cafs24"].includes(n)) return n;
    }
    const activeText = document.querySelector(".active, .selected, [aria-current='true']")?.textContent || "";
    const n = normaliseAppliance(activeText);
    return ["rescue","34p","cafs24"].includes(n) ? n : "rescue";
  }

  function getInventoryRows(){
    const sources = [
      window.inventoryData,
      window.INVENTORY_DATA,
      window.inventory,
      window.items,
      window.allItems,
      window.APP_DATA && window.APP_DATA.items,
      window.appData && window.appData.items,
      window.APPLIANCES || (typeof APPLIANCES !== "undefined" ? APPLIANCES : null)
    ].filter(Boolean);

    for (const src of sources){
      if (Array.isArray(src)) return src;
      if (typeof src === "object"){
        const values = Object.values(src);
        if (values.every(Array.isArray)) return values.flat();
        if (Array.isArray(src.items)) return src.items;
        if (values.some(v => v && Array.isArray(v.records))) return values.flatMap(v => v.records || []);
      }
    }

    // Try embedded JSON data/inventory copy if it was inlined onto page in a script.
    const scripts = Array.from(document.scripts).map(s => s.textContent || "").join("\n");
    const m = scripts.match(/(?:const|let|var)\s+(?:inventoryData|INVENTORY_DATA|inventory|allItems)\s*=\s*(\[[\s\S]*?\]);/);
    if (m){
      try { return JSON.parse(m[1]); } catch(e){}
    }
    return [];
  }

  function itemAppliance(item){
    return normaliseAppliance(
      item.appliance ?? item.Appliance ?? item.truck ?? item.Truck ?? item.vehicle ?? item.Vehicle ?? item.applianceKey ?? item.appliance_key
    );
  }

  function itemText(item){
    return Object.values(item || {}).filter(v => v !== null && v !== undefined).join(" ").toLowerCase();
  }

  function patchApplianceMenu(){
    const bodyTextTargets = Array.from(document.querySelectorAll("button, a, li, div, span"))
      .filter(el => {
        const txt = (el.textContent || "").trim();
        return /rescue|34p|cafs/i.test(txt) && txt.length < 100;
      });

    bodyTextTargets.forEach(el => {
      let txt = el.textContent || "";
      txt = txt.replace(/\bBlackwood Rescue\b|\bRescue\b/gi, "Blackwood Rescue");
      txt = txt.replace(/\bBlackwood 34P\b|\b34P\b/gi, "Blackwood 34P");
      txt = txt.replace(/\bCAFS\s*24\b|\bCAFS24\b/gi, "CAFS 24");

      // In hamburger appliance rows, enforce the status wording.
      if (/inventory|active|available|ready|unlocked|loaded/i.test(txt) && /blackwood rescue|blackwood 34p|cafs 24/i.test(txt)){
        txt = txt
          .replace(/Inventory\s*(Ready|Available|Active)?/gi, "")
          .replace(/\b(Active|Available|Ready|Unlocked|Loaded)\b/gi, "")
          .trim();
        if (!/Inventory Active/i.test(txt)) txt = txt + " Inventory Active";
      }
      el.textContent = txt.replace(/\s{2,}/g, " ").trim();
    });
  }

  function ensureAdvancedSearch(){
    const search = document.querySelector("input[type='search'], input[placeholder*='Search' i], input[id*='search' i], input[class*='search' i]");
    if (!search) return;
    if (document.querySelector(".v2-advanced-search")) return;

    const panel = document.createElement("div");
    panel.className = "v2-advanced-search";
    panel.innerHTML = `
      <div class="v2-advanced-search-title">Search appliances</div>
      <div class="v2-advanced-search-options">
        ${V2_APPLIANCES.map(a => `
          <label>
            <input type="checkbox" data-v2-search-appliance="${a.key}">
            <span>${a.short}</span>
          </label>
        `).join("")}
      </div>
    `;

    const host = search.closest(".search, .search-wrap, .searchbar, .toolbar, header") || search.parentElement;
    if (host && host.parentNode) {
      host.parentNode.insertBefore(panel, host.nextSibling);
    } else {
      search.insertAdjacentElement("afterend", panel);
    }

    function preselectCurrent(){
      const current = getCurrentApplianceKey();
      panel.querySelectorAll("input[type='checkbox']").forEach(cb => {
        cb.checked = cb.dataset.v2SearchAppliance === current;
      });
    }

    search.addEventListener("focus", function(){
      preselectCurrent();
      panel.classList.add("open");
    });
    search.addEventListener("click", function(){
      if (!panel.classList.contains("open")) preselectCurrent();
      panel.classList.add("open");
    });

    panel.addEventListener("change", function(){
      runAdvancedSearch(search.value || "");
    });

    search.addEventListener("input", function(){
      runAdvancedSearch(search.value || "");
    });
  }

  function selectedSearchAppliances(){
    const checks = Array.from(document.querySelectorAll("[data-v2-search-appliance]"));
    const selected = checks.filter(cb => cb.checked).map(cb => cb.dataset.v2SearchAppliance);
    return selected.length ? selected : [getCurrentApplianceKey()];
  }

  function runAdvancedSearch(query){
    const q = String(query || "").trim().toLowerCase();
    if (!q) return;
    const selected = selectedSearchAppliances();
    const rows = getInventoryRows();
    if (!rows.length) return;

    const matches = rows.filter(item => selected.includes(itemAppliance(item)) && itemText(item).includes(q));

    // Expose for existing quiz/search code and for debugging.
    window.v2AdvancedSearchMatches = matches;

    // If original app has a render/search function, try to hand off without breaking.
    const possibleFns = [
      "renderSearchResults", "showSearchResults", "displaySearchResults",
      "renderItems", "renderInventory", "applySearch"
    ];
    for (const fn of possibleFns){
      if (typeof window[fn] === "function"){
        try {
          window[fn](matches, { appliances: selected, query: q, source: "v2AdvancedSearch" });
          return;
        } catch(e){}
      }
    }
  }

  function patchQuizItemLookup(){
    const rows = getInventoryRows();
    if (!rows.length) return;

    window.v2FindInventoryItem = function(term, appliances){
      const q = String(term || "").trim().toLowerCase();
      const selected = (appliances && appliances.length ? appliances : V2_APPLIANCES.map(a => a.key)).map(normaliseAppliance);
      return rows.filter(item => selected.includes(itemAppliance(item)) && itemText(item).includes(q));
    };

    // Patch common quiz lookup functions if present by wrapping them with cross-appliance fallback.
    ["findQuizItem", "quizFindItem", "getQuizItem", "findItemByName", "findInventoryItem"].forEach(fnName => {
      if (typeof window[fnName] === "function" && !window[fnName].v2Wrapped){
        const original = window[fnName];
        const wrapped = function(){
          const result = original.apply(this, arguments);
          if (result && !(Array.isArray(result) && result.length === 0)) return result;
          const term = arguments[0];
          const fallback = window.v2FindInventoryItem(term);
          return Array.isArray(result) ? fallback : (fallback[0] || result);
        };
        wrapped.v2Wrapped = true;
        window[fnName] = wrapped;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    patchApplianceMenu();
    ensureAdvancedSearch();
    patchQuizItemLookup();

    const obs = new MutationObserver(function(){
      patchApplianceMenu();
      patchQuizItemLookup();
    });
    obs.observe(document.body, { childList: true, subtree: true });
  });
})();
