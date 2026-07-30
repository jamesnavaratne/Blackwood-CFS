Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

python tools/rebuild_directions_hydrants.py --geocode-missing
python tools/rebuild_inventory_from_excel.py --write-report

Write-Host ""
Write-Host "Rebuild complete."
Write-Host "Updated Directions hydrant links, inventory data, offline metadata and local rebuild reports."
