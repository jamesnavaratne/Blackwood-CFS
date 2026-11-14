# Blackwood CFS System Home only — preserves ribbon, inventory, maps and hydrants.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$index = Join-Path $root 'index.html'
$css = Join-Path $root 'shared/home-final.css'
$js = Join-Path $root 'shared/home-final.js'
if (-not (Test-Path -LiteralPath $index)) { throw 'index.html missing. Extract ZIP into the Blackwood-CFS repository root.' }
if (-not (Test-Path -LiteralPath $css) -or -not (Test-Path -LiteralPath $js)) { throw 'Missing shared/home-final files. Extract the entire update ZIP first.' }
$source = [System.IO.File]::ReadAllText($index)
if ($source -notmatch 'class="v2-appliance-home' -or $source -notmatch 'class="home-modules"' -or $source -notmatch 'home-module-label') {
  throw 'System Home structure not recognised. No files changed. Please share your latest index.html.'
}
if ($source -notmatch 'primary-bottom-nav' -or -not (Test-Path -LiteralPath (Join-Path $root 'shared/ribbon.css'))) {
  throw 'Shared ribbon not detected. Install the previously validated shared ribbon update first.'
}
if ($source -notmatch '</head>' -or $source -notmatch '</body>') { throw 'Invalid index.html; no changes made.' }
$updated = $source
# Use stable element identifiers so subsequent installs replace rather than duplicate.
$updated = [regex]::Replace($updated, '<link\b[^>]*\bdata-cfs-final-home\b[^>]*>\s*', '', 'IgnoreCase')
$updated = [regex]::Replace($updated, '<script\b[^>]*\bdata-cfs-final-home\b[^>]*>\s*</script>\s*', '', 'IgnoreCase')
$updated = $updated.Replace('</head>', '  <link rel="stylesheet" data-cfs-final-home href="shared/home-final.css?v=1">' + "`n" + '</head>')
$updated = $updated.Replace('</body>', '  <script data-cfs-final-home src="shared/home-final.js?v=1"></script>' + "`n" + '</body>')
$backupDir = Join-Path (Split-Path -Parent $root) ('Blackwood-CFS-SystemHome-Backup-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
Copy-Item -LiteralPath $index -Destination (Join-Path $backupDir 'index.html') -Force
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($index,$updated,$utf8)
Write-Host 'SUCCESS: System Home styling and approved icons installed.' -ForegroundColor Green
Write-Host 'Existing shared ribbon and operational app files were preserved.'
Write-Host "Backup: $backupDir"
Write-Host 'Commit index.html plus shared/home-final.css and shared/home-final.js in GitHub Desktop.'
