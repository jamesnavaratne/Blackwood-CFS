Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

python tools/rebuild_inventory_from_excel.py --check-only

Write-Host ""
Write-Host "Validation passed. No app files were changed."
