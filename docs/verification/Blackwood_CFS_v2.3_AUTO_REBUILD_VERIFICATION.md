# v2.3 Auto-Rebuild Verification

The rebuild script was run against the bundled `Blackwood_CFS_Master_Inventory.xlsx`.

## Script output

```text
Blackwood CFS inventory rebuild OK
- Blackwood Rescue: 145 items, 7 locations, 8 locker photo entries
- 34P: 142 items, 15 locations, 15 locker photo entries
- CAFS 24: 115 items, 11 locations, 11 locker photo entries
```

## Operational data comparison

| Appliance | Records same | Lockers same | Locker photos same | Items before | Items after |
|---|---|---|---|---:|---:|
| Blackwood Rescue | True | True | True | 145 | 145 |
| 34P | True | True | True | 142 | 142 |
| CAFS 24 | True | True | True | 115 | 115 |

## Result

PASS — the current Excel workbook regenerates the same operational inventory data.