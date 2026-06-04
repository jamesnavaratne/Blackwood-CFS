Blackwood Rescue Inventory App

How to use:
1. Keep these files together in the same folder.
2. Open index.html in Chrome, Edge, Safari, or Firefox.
3. Search by item, locker, section, description, category, or tags.
4. Use the locker buttons to show a locker-specific page.

Photo setup:
- Put locker photos in the photos folder.
- Use filenames matching the Photo_File column in the Excel workbook.
- Examples:
  - photos/locker_1.jpg
  - photos/locker_3.jpg
  - photos/cabin_front.jpg
  - photos/cabin_rear.jpg

To update the inventory:
1. Edit the Excel workbook.
2. Send the edited workbook back to ChatGPT.
3. Regenerate the app package.

Current build:
- Appliance: Blackwood Rescue
- Items/rows captured: 162
- Lockers: Cabin, Locker 1, Locker 2, Locker 3, Locker 4, Locker 5, Locker 6
- Built: 2026-05-23 16:26


Included locker photos in this build:
- cabin_front.jpg
- cabin_rear.jpg
- locker_1.jpg
- locker_2.jpg
- locker_3.jpg
- locker_5.jpg
- locker_6.jpg

Locker 4:
- No photo included yet.
- Add photos/locker_4.jpg later and regenerate or replace into the photos folder.


Clean v1.8 rebuild notes:
- Rebuilt from known-good v1.7.5 collapsible-headings build.
- Added smaller stats.
- Added local per-device favourites/starred items.
- Added Locker 2 custom section order.
- Data record count preserved from v1.7.5.


v1.8.1 notes:
- Added Locker 5 section order: Top, Middle, Bottom.


v1.8.4 notes:
- Added All Items heading card.
- All/search results now sort by physical locker order: Cabin, Locker 1, Locker 2 custom order, etc.


v1.8.9 notes:
- Added selectable colour palettes in hamburger menu: Rescue Blue, Safe Green, CFS Yellow, Brick Red.
- Palettes work in light and dark mode and save locally on the device.
- Added extra bottom/safe-area spacing and unclipped neon heading edges.


v1.8.9.1 notes:
- Fixed hamburger menu text contrast in light and dark modes.
- Compact dark/light toggle text and pill size.
- Rescue Blue light mode now uses blue accents rather than red.


v1.9.0 notes:
- Added prototype item detail modal for Locker 1 items only.
- Tap a Locker 1 item tile to open floating details.
- Item photo placeholder included. Future item images can go in photos/items/ and be referenced by Extra_Photo_File in Excel.


v1.9.1 notes:
- Locker 1 item detail modal now includes editable description textbox.
- Added local in-service/out-of-service toggle in modal.
- Prototype edits save locally in browser localStorage only and do not alter the Excel source.


v1.9.2 notes:
- Moved in/out-of-service toggle into the status/pill area of the Locker 1 item modal.
- Description now displays directly from the Excel Description column and is read-only in the modal.
- Local status overrides remain device-only.


v1.9.4 notes:
- Applied floating item detail modal to Cabin items as well as Locker 1.


v1.9.5 notes:
- Applied floating item detail modal to all lockers/items.


v1.9.6 notes:
- Stats strip now appears only on All page.


v1.9.7 notes:
- Renamed All tab to Home; Home page heading remains All Items.
- Renamed status notes to Out of Service.
- Out of Service stat now acts as a button and opens a filtered Out of Service list.


v1.9.8 notes:
- Moved Out of Service tab to end after lockers.
- Home Out of Service stat now green-tinted if zero, red-tinted if above zero.


v1.9.9 notes:
- App now always starts on the Home tab.


v1.10.0 notes:
- Removed top-row Starred tab.
- Replaced Home locker/location groups stat with Starred Items stat button.
- Starred list is now accessible from the Home page Starred Items pill.


v1.10.6 notes:
- Clean rebuild from latest Excel workbook.
- Tab order restored: Home, Cabin, Locker 1, Locker 2, etc.
- Record count: 149.
- Lockers: Cabin, Locker 1, Locker 2, Locker 3, Locker 4, Locker 5, Locker 6.


v1.10.7 notes:
- Removed duplicate modal description textbox.
- Kept the Excel description field in the item detail grid only.


v1.10.8 notes:
- Added Home dashboard pill: Expand All / Collapse All.
- Toggles all Home page item-list sections.


v1.10.9 notes:
- Modal service buttons now visibly highlight to match the item state when opened.
- Added modal Star/Starred toggle pill beside service controls.


v1.10.10 notes:
- Modal Star button now visually matches item tile star icon.
- Modal service buttons restyled as compact status pills matching item tile service status language.


v1.10.11 notes:
- Modal In service / Out of service buttons now clearly reflect active status.
- Active modal service button uses same green/red pill styling as tile status pill; inactive option remains neutral.


v1.10.12 notes:
- Modal service pills now use centred uppercase labels.
- Improved pill alignment and spacing.
- Star icon vertically centred and sized consistently.


v1.10.14 notes:
- Modal service status controls now match the tile status pill sizing, padding, font, fill, and colour behaviour.


v1.11.0 notes:
- Added Item Location Quiz under hamburger menu > Training.
- Quiz selects truck inventories, generates 10 random item/location cards, supports flip-to-answer and self-marking.


v1.11.1 notes:
- Fixed quiz launcher by making quiz modal top-level and initialising the button listener safely.


v1.11.11 notes:
- Modal cards can now expand downward for longer descriptions.
- Modal still has a safe maximum height and scrolls internally only when needed.


v1.12.0 stable notes:
- Promoted v1.11.11 UI/features to stable baseline.
- Refreshed embedded inventory from latest uploaded Excel workbook.
- Record count: 145.
- Locker order: Cabin, Locker 1, Locker 2, Locker 3, Locker 4, Locker 5, Locker 6.


v1.12.1 notes:
- Preserves manually expanded/collapsed Home sections when service/star changes re-render item tiles from within a modal.
- Fixes Home section collapsing behind open modal after status/star toggles.
