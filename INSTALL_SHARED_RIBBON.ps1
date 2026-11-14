$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$targets = @(
  @{ Name='inventory'; File='index.html'; Needle='<nav\s+class="primary-bottom-nav[^\"]*"[^>]*>[\s\S]*?</nav>' },
  @{ Name='directions'; File='directions/index.html'; Needle='<nav\s+class="primary-bottom-nav[^\"]*"[^>]*>[\s\S]*?</nav>' },
  @{ Name='maps'; File='maps/index.html'; Needle='<nav\s+aria-label="Primary"[^>]*>[\s\S]*?</nav>|<nav\s+class="primary-bottom-nav[^\"]*"[^>]*>[\s\S]*?</nav>' },
  @{ Name='hydrants'; File='hydrants/index.html'; Needle='<nav\s+class="bottom-nav[^\"]*"[^>]*>[\s\S]*?</nav>|<nav\s+class="primary-bottom-nav[^\"]*"[^>]*>[\s\S]*?</nav>' }
)
$utf8 = New-Object System.Text.UTF8Encoding($false)
# Preflight everything before modifying files.
$changes = @()
foreach ($target in $targets) {
  $file = Join-Path $root $target.File
  if (-not (Test-Path -LiteralPath $file)) { throw "Missing operational page: $($target.File). Extract this package into your GitHub repository root." }
  $text = [System.IO.File]::ReadAllText($file)
  $matches = [regex]::Matches($text,$target.Needle,'IgnoreCase')
  if ($matches.Count -ne 1) { throw "Expected exactly one navigation ribbon in $($target.File); found $($matches.Count). No files have been changed." }
  $nav = [System.IO.File]::ReadAllText((Join-Path $root "shared/ribbon-$($target.Name).html"))
  $text = [regex]::Replace($text,$target.Needle,[System.Text.RegularExpressions.MatchEvaluator]{param($m) $nav},'IgnoreCase')
  $cssPath = if ($target.Name -eq 'inventory') { 'shared/ribbon.css' } else { '../shared/ribbon.css' }
  if ($text -notmatch 'data-cfs-ribbon-style') {
    $text = $text.Replace('</head>',"<link rel=`"stylesheet`" data-cfs-ribbon-style href=`"$cssPath`">`n</head>")
  }
  if ($target.Name -eq 'inventory' -and $text -notmatch 'data-cfs-home-icons') {
    $text = $text.Replace('</body>',"<script data-cfs-home-icons src=`"shared/home-icons.js`"></script>`n</body>")
  }
  $changes += @{File=$file; Text=$text; Name=$target.Name}
}
# Keep backups outside the repository so they do not appear in GitHub Desktop.
$backupFolder = Join-Path (Split-Path -Parent $root) "Blackwood-CFS-Ribbon-Backup-$stamp"
New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null
foreach ($change in $changes) {
  Copy-Item -LiteralPath $change.File -Destination (Join-Path $backupFolder ($change.Name + '-index.html')) -Force
}
foreach ($change in $changes) { [System.IO.File]::WriteAllText($change.File,$change.Text,$utf8); Write-Host "Updated $($change.Name) ribbon" }
Write-Host "SUCCESS: All four pages share the same ribbon. Backups: $backupFolder"
Write-Host 'Review four modified HTML files and shared/ files in GitHub Desktop.'
