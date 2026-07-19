# How to Create a New Inventory Item

Yes — new items are supported.

The safest method is to copy a similar existing row in Excel, then edit the copied row.

## Quick version

1. Open `Blackwood_CFS_Master_Inventory.xlsx`.
2. Go to `Master Inventory`.
3. Find a similar item in the same appliance/locker.
4. Copy that row.
5. Insert the copied row where it logically belongs.
6. Change the item details.
7. Give it a unique `Item_ID`.
8. Save and close Excel.
9. Run:

```text
tools\validate_inventory_only.bat
```

10. If validation passes, run:

```text
tools\rebuild_inventory_from_excel.bat
```

11. Open `index.html` and check the item appears.

## Required fields

A new item needs at least:

```text
Item_ID
Appliance
Locker
Item
```

Recommended fields:

```text
Quantity
Category
Description
Status
Photo
Tags
Notes
```

## Appliance names must match exactly

Use one of:

```text
Blackwood Rescue
34P
CAFS 24
```

## Locker names must match exactly

The rebuild now protects against accidental locker typos.

The locker used in `Master Inventory` must already exist in the `Appliance_Config` sheet.

Example: if you accidentally type:

```text
P-4
```

instead of:

```text
P4
```

the validation will fail rather than silently creating a bad new tab.

## Item_ID

`Item_ID` must be unique.

Best method:

- copy a nearby item row
- change the last number/identifier
- keep the style consistent with nearby rows

Do not reuse an existing `Item_ID`.

## Photos

Photos are optional.

If the item has no photo yet, leave the photo columns blank.

If adding a photo:

1. Put the image file under the correct `photos/.../items/` folder.
2. Put the filename/path into the `Photo` column.
3. Rebuild the app.
4. Check the photo opens.

## Status

Use normal status values such as:

```text
In service
Out of service
Missing
For repair
Needs check
Needs restock
```

Unusual statuses will generate a warning so you can check spelling.

## If you deliberately need a new locker/tab

1. Add the new locker/location to `Appliance_Config`.
2. Use the same exact locker name in `Master Inventory`.
3. Rebuild.
4. Check the app tabs carefully.

For CAFS 24, do not change the protected order unless we intentionally update the app rules.
