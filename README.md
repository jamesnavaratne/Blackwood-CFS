# Blackwood Rescue Inventory App

Stable release: **v1.12.1**

This is a static, free-hostable inventory web app for the Blackwood Rescue appliance.

## Current status

- Inventory records: **145**
- Locker order: **Cabin, Locker 1, Locker 2, Locker 3, Locker 4, Locker 5, Locker 6**
- Hosting target: **GitHub Pages**
- Server required: **No**
- Internet required after loading: **No server dependency**, but browser/localStorage features depend on the user's device/browser.

## Main features

- Mobile-friendly inventory browser
- Home page starts with collapsed locker headings
- Cabin and Locker tabs
- Collapsible item groups
- Search
- Starred items
- Out of Service tracking
- Floating item detail cards
- In service / Out of service local toggle
- Star/unstar local toggle
- Item descriptions from the Excel source
- Hamburger menu
- Theme palettes
- Item location quiz
- Locker photos and future item photo support

## Folder structure

```text
/
├── index.html
├── photos/
│   └── items/
├── data/
│   └── inventory.embedded-backup.json
├── source/
│   └── Blackwood_Rescue_Master_Inventory.xlsx
├── docs/
├── README.md
└── .nojekyll
```

## Deploying to GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, go to:
   - Settings
   - Pages
   - Build and deployment
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/root`
4. Save.
5. GitHub will provide a public Pages link.

## Updating the inventory

Current workflow:

1. Edit `source/Blackwood_Rescue_Master_Inventory.xlsx`.
2. Rebuild the app from the Excel file.
3. Replace `index.html` and the Excel source file in GitHub.
4. Commit changes.

Future recommended workflow:

- Move the inventory out of embedded JavaScript and into `data/inventory.json`.
- Then inventory updates can be done by replacing a JSON data file rather than rebuilding the whole HTML.

## Local user data

The following are stored locally on each device/browser:

- Starred items
- In service / Out of service overrides
- Theme preference

This means these states do **not** sync between users/devices yet.

## Important note

This is currently a static app. It is excellent for free read-only distribution and lightweight local use, but shared live editing/sync would require a backend or database later.
