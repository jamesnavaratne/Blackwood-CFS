Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

python tools/rebuild_directions_hydrants.py --geocode-missing
python tools/rebuild_inventory_from_excel.py

Write-Host ""
Write-Host "Rebuild complete."
Write-Host "Updated Directions hydrant links, index.html, data/inventory.json and offline metadata."
