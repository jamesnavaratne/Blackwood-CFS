# Blackwood CFS v2.4 Safer Inventory Workflow Test

Base: `Blackwood_CFS_v2.3.2_ORGANISED_HOW_TO_TEST.zip`

Purpose:
- Keep simple inventory edits easy.
- Add safer validation before app data is generated.
- Support clear creation of new inventory items.

Normal simple update:

```text
Edit Excel
Run tools\rebuild_inventory_from_excel.bat
```

New item workflow:

```text
Copy/edit a row in Excel
Run tools\validate_inventory_only.bat
Run tools\rebuild_inventory_from_excel.bat
```

Validation now checks:
- duplicate `Item_ID`
- blank `Item_ID`
- blank `Locker`
- blank `Item`
- locker names not listed in `Appliance_Config`
- protected CAFS 24 order
- CAFS 24 `P4`
- unusual status values as warnings

Changed:
- `tools/rebuild_inventory_from_excel.py`
- `tools/validate_inventory_only.bat`
- `tools/validate_inventory_only.ps1`
- `tools/README.md`
- `START_HERE.md`
- inventory/how-to docs
- service-worker cache name only
