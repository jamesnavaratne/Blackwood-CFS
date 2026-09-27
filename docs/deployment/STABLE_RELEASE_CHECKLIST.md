# Blackwood CFS v2.0 Stable Release Checklist

Use this as a quick smoke-test before treating this package as the stable baseline.

## Inventory

- [ ] System home loads.
- [ ] Blackwood Rescue opens.
- [ ] Blackwood 34P opens.
- [ ] CAFS 24 opens.
- [ ] CAFS 24 P4 appears between P3 and D-Tube.
- [ ] CAFS 24 P4 contains its expected inventory items.
- [ ] Locker/location tabs switch correctly.
- [ ] Home tab returns to the appliance home page.
- [ ] Starred items works.
- [ ] Out of Service view works.
- [ ] Item detail modal opens and closes.
- [ ] Appliance photos display where expected.

## Hamburger menu

- [ ] Hamburger menu opens.
- [ ] Appliances section shows Blackwood Rescue, Blackwood 34P, CAFS 24.
- [ ] Search section shows Global Search.
- [ ] Directions section shows Directions Book.
- [ ] Theme Palette changes the current theme.
- [ ] Training section opens Item Location Quiz.
- [ ] Version footer is visible and not cluttered.

## Global Search

- [ ] Global Search opens from hamburger menu.
- [ ] Search input accepts text.
- [ ] Results route to the correct appliance/item.
- [ ] Close button is centred and closes the modal.

## Directions Book

- [ ] Directions Book opens from hamburger menu.
- [ ] Search bar stays pinned while scrolling.
- [ ] Search results update as text is changed.
- [ ] Alphabet rail navigation works.
- [ ] Street modal opens.
- [ ] Street modal closes.
- [ ] Favourite star works.
- [ ] UBD button appears beside the favourite star.
- [ ] UBD button opens lower split-panel map list.
- [ ] Lower UBD panel has a clear fixed gap from the street modal.
- [ ] Short street entries do not leave an excessive gap before the UBD panel.
- [ ] Selecting a UBD map opens the map viewer.
- [ ] Map zoom controls work.
- [ ] Map viewer close returns to the UBD map list.
- [ ] UBD list close returns to the street modal.
- [ ] Header UBD Maps pill still opens the full-screen map list.
- [ ] Light/Dark toggle still works within Directions Book.
- [ ] Home button returns from Directions Book to the main app.

## Source files

- [ ] `Blackwood_CFS_Master_Inventory.xlsx` is present.
- [ ] Directions source Word documents are present in `directions/source/`.
- [ ] UBD map images are present in `directions/maps/ubd/`.
- [ ] Appliance photos are present in `photos/`.

## Deployment

- [ ] GitHub Actions Pages deployment succeeds.
- [ ] Site loads after hard refresh.
- [ ] Mobile layout checked.
- [ ] Browser cache/service-worker refresh checked if old content appears.
- [ ] Optional offline/PWA quick check completed.
