v1.13.0
- App icon added
- Install to Home Screen support
- Manifest added
- Offline service worker added
- Version displayed in hamburger menu
- GitHub Pages ready structure

v1.13.2
- Photos/data/app assets now prefer newest pushed versions via network-first service worker.
- App shortcut name changed to Blackwood CFS.
- Hamburger icon alignment refined.
- Cabin/locker photos are smaller on page and tap to enlarge in a photo modal.

v1.13.3
- Fixed desktop hamburger icon optical centering.

v1.13.4
- Added long-press item issue reporting workflow with copyable/email-ready report.
- Added issue types: Not in service, Damaged, Missing, Other.
- Added quiz Hint pill showing the appliance/truck for the current item.

v1.13.5
- Removed long-press issue reporting.
- Added ISSUE pill directly to every item tile.
- Issue reports now address james.navaratne@gmail.com by default.

v1.13.6
- Removed issue reporting from item cover tiles.
- Added Report Issue button inside each item detail modal.
- All selected issue type pills now use red selected styling for consistency.

v1.13.7
- Moved Report Issue to the bottom of the item detail modal.
- Fixed Report Issue linking so it opens the issue workflow from the current item.

v1.13.8
- Fixed issue modal stacking so it opens above the item modal.
- Issue type selected pills now use consistent red active styling.
- Removed Copy Report button; issue workflow now has Send Email only.

v1.13.9
- Issue type buttons now visually match the compact red Out of Service pill style.

v1.13.10
- Active issue type pill now uses the same service-out class and exact sizing as the Out of Service pill.

v1.13.11
- Issue email text rewritten to be more user-friendly and readable.
- Email subject now includes item and issue type.

v1.13.12
- Removed greeting/intro sentence from issue email body.
- Updated issue email subject to a cleaner format.

v1.13.13
- Cleaned leftover hidden issue-tile CSS/reference from prior experiment.
- Confirmed Report Issue lives only inside the item modal.

v1.13.14
- Item modals now automatically try photos/items/<item_name>.jpg when extraPhoto is blank.
- This enables convention-based item photos such as photos/items/rcr_crew_composition_x_4_roof.jpg.

v1.13.15
- Locker/cabin thumbnail previews now anchor to the top of the photo instead of the centre.

v1.13.16
- Item photo preview now fills horizontally, crops from the top, and can be tapped to enlarge.
- Item tiles now show a small image indicator beside the star when an item photo exists.

v1.13.17
- Cabin front and rear photos now display side-by-side.
- Tile photo indicator now sits in line with the favourite star.
- Item photo thumbnail now fits neatly in the item modal and crops from the top.
- Enlarged photo modal now appears above the item modal.

v1.13.18
- Added photo preload before opening enlarged photo modal.
- Added subtle loading spinner to reduce first-open modal flashing.

v1.13.19
- Fixed Cabin side-by-side thumbnails so the tapped image opens, not always the first image.
- Added double-tap/double-click zoom for enlarged photos.

v1.13.20
- Generalised double-tap/double-click zoom behaviour to the shared enlarged photo modal.
- All enlarged locker, cabin and item photos now use the same photo-modal behaviour.
- Zoom resets and scroll position resets when a new enlarged photo opens.

v1.13.21
- Added a minimum visible photo loading spinner before enlarged photo modal opens.
- Smoothed enlarged photo modal fade-in to reduce flashing.
- Changed double-tap zoom to a scrollable width-based zoom so users can pan around the image properly.
