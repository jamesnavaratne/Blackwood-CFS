Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

# Low-conflict normal rebuild:
# Updates index.html and data/inventory.json only.
python tools/rebuild_inventory_from_excel.py

Write-Host ""
Write-Host "Rebuild complete."
Write-Host "Updated index.html and data/inventory.json"
