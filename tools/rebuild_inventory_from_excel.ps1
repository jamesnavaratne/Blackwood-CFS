Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")
python tools/rebuild_inventory_from_excel.py
Write-Host ""
Write-Host "Rebuild complete."
Write-Host "Updated index.html, data/inventory.json, and INVENTORY_REBUILD_REPORT.md"
