# Rebuild Troubleshooting

## Python was not found

Error:

```text
Python was not found; run without arguments to install from the Microsoft Store
```

Fix:

1. Install Python.
2. Reopen Command Prompt or GitHub Desktop.
3. Try the bat file again.

A common install command is:

```text
winget install Python.Python.3.13
```

If Windows still opens the Microsoft Store, go to:

```text
Settings → Apps → Advanced app settings → App execution aliases
```

Turn off:

```text
python.exe
python3.exe
```

## Excel file is open

If the rebuild fails while Excel is open, save and close:

```text
Blackwood_CFS_Master_Inventory.xlsx
```

Then run the bat file again.

## Rebuild fails because CAFS 24 order changed

The script protects the CAFS 24 locker order.

Expected:

```text
Cabin, P1, P2, Pump Panel, P-Tube, P3, P4, D-Tube, D1, D2, Rear
```

Fix the `Appliance_Config` sheet, save, and rebuild again.

## Git conflict

Normal rebuild should now avoid the old timestamp-report conflicts.

For routine edits, only commit:

```text
Blackwood_CFS_Master_Inventory.xlsx
index.html
data/inventory.json
```

If you accidentally generated report files with the report bat, they are optional. Do not worry if Git ignores them.

## App does not show latest change on phone

After GitHub Pages deploys:

1. Open the app in Chrome once.
2. Hard refresh if needed.
3. For installed Android app issues, remove and reinstall the home-screen app if it still shows cached old behaviour.
