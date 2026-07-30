Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

# Optional report rebuild:
# Also updates timestamped local report files.
python tools/rebuild_inventory_from_excel.py --write-report

Write-Host ""
Write-Host "Rebuild complete."
Write-Host "Updated index.html, data/inventory.json, and local rebuild reports."
