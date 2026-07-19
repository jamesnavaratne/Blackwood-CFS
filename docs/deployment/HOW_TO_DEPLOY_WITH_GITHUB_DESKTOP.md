# How to Deploy with GitHub Desktop

## Normal inventory update

1. Open GitHub Desktop.
2. Click `Fetch origin`.
3. If available, click `Pull`.
4. Edit `Blackwood_CFS_Master_Inventory.xlsx`.
5. Save and close Excel.
6. Run:

```text
tools\rebuild_inventory_from_excel.bat
```

7. Open `index.html` locally and check the change.
8. In GitHub Desktop, review changed files.
9. Commit with a clear message, for example:

```text
Update CAFS 24 P4 inventory
```

10. Click `Push origin`.

## Expected changed files

For a normal inventory edit you should usually see:

```text
Blackwood_CFS_Master_Inventory.xlsx
index.html
data/inventory.json
```

If you added photos, you should also see files under:

```text
photos/
```

## GitHub Action

This repo includes:

```text
.github/workflows/rebuild_inventory_from_excel.yml
```

It can rebuild automatically when Excel changes are pushed. The local bat file is still useful because it lets you test before pushing.

## Before calling a version stable

Check:

```text
Rescue opens
34P opens
CAFS 24 opens
CAFS 24 P4 appears
Directions Book opens
Search still works
Photos still open
```
