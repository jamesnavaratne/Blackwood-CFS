# How to Add or Update Photos

## Folder pattern

Locker photos:

```text
photos/<appliance>/lockers/
```

Item photos:

```text
photos/<appliance>/items/
```

Appliance folder names:

```text
rescue
34p
cafs24
```

## Examples

```text
photos/34p/lockers/34p_p4.jpg
photos/cafs24/lockers/cafs24_rear.jpg
photos/rescue/items/example_item_photo.jpg
```

## Updating a locker photo

1. Put the new photo in the correct `photos/.../lockers/` folder.
2. Open `Blackwood_CFS_Master_Inventory.xlsx`.
3. Update the relevant location photo sheet if needed:
   - `Locker Photos`
   - `34P Location Photos`
   - `CAFS 24 Location Photos`
4. Save and close Excel.
5. Run:

```text
tools\rebuild_inventory_from_excel.bat
```

6. Open `index.html` and check the locker.

## Updating an item photo

1. Put the new photo in the correct `photos/.../items/` folder.
2. In `Master Inventory`, update the `Photo` or `ExtraPhoto` column.
3. Use the relative path/filename expected by the current app data.
4. Save and close Excel.
5. Run the rebuild bat file.
6. Check the item in the app.

## Photo naming tips

Use simple lowercase names where possible:

```text
cafs24_p4_nozzle.jpg
34p_pump_panel.jpg
rescue_locker_3.jpg
```

Avoid spaces if possible.

## Important

Adding the photo file alone is not always enough. The Excel workbook needs to point to it, then the app needs to be rebuilt.
