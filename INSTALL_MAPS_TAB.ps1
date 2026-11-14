# Blackwood CFS Maps integration — applies to the user's CURRENT checkout; no baseline overwrite.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
function ReadUtf8($path) { [System.IO.File]::ReadAllText($path) }
function WriteUtf8($path, $value) { [System.IO.File]::WriteAllText($path, $value, (New-Object System.Text.UTF8Encoding($false))) }
function AssertContains($value,$needle,$file) { if (-not $value.Contains($needle)) { throw "Can't find expected element in $file ($needle). Nothing has been published." } }
$files = @('index.html','directions/index.html','hydrants/index.html','service-worker.js','offline-assets.json')
foreach($f in $files){ if(-not (Test-Path (Join-Path $root $f))){throw "Missing $f. Extract this update into the root of your existing Blackwood-CFS repository."} }
if(-not(Test-Path (Join-Path $root 'maps/maps-data.js'))){throw 'Missing maps folder; extract entire ZIP first.'}
$original=@{};$edited=@{}
foreach($f in $files){$original[$f]=ReadUtf8 (Join-Path $root $f);$edited[$f]=$original[$f]}
$mapIcon = '<svg class="primary-bottom-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20z"></path><path d="M9 4v13.5M15 6.5V20"></path></svg>'
$turnIcon = '<svg class="primary-bottom-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z"></path><path d="M8 15v-4a3 3 0 0 1 3-3h5"></path><path d="m13 5 3 3-3 3"></path></svg>'
# Update only the primary navigation HTML, preserving everything else in the live inventory.
foreach($f in @('index.html','directions/index.html')) {
  $v=$edited[$f]
  AssertContains $v '<nav class="primary-bottom-nav"' $f
  $navPattern='(?s)(<nav class="primary-bottom-nav"[^>]*>)(.*?)(</nav>)'
  $match=[regex]::Match($v,$navPattern)
  if(-not $match.Success){throw "Could not find complete navigation in $f"}
  $body=$match.Groups[2].Value
  if($body -notmatch 'primaryMapsLink|href="(?:\.\./)?maps/index\.html"') {
    $href=if($f -eq 'index.html'){'maps/index.html'}else{'../maps/index.html'}
    $add='  <a class="primary-bottom-link" id="primaryMapsLink" href="'+$href+'" aria-label="Open Maps">'+"`n    "+$mapIcon+'<span>Maps</span></a>'+"`n"
    $at=[regex]::Match($body,'(?s)<a\b[^>]*href="(?:\.\./)?hydrants/index\.html"')
    if(-not $at.Success){throw "Could not identify Hydrants button in $f"}
    $body=$body.Insert($at.Index,$add)
  }
  # Directions gets a turn-arrow/signpost icon; Maps inherits the former folding-map icon.
  $dir=[regex]::Match($body,'(?s)<a\b[^>]*href="(?:\.\./)?directions/index\.html"[^>]*>.*?</a>')
  if($dir.Success){$newDir=[regex]::Replace($dir.Value,'(?s)<svg\b.*?</svg>',$turnIcon,1);$body=$body.Substring(0,$dir.Index)+$newDir+$body.Substring($dir.Index+$dir.Length)}
  if($f -eq 'directions/index.html') { $body=[regex]::Replace($body,'(?s)(<a\b[^>]*id="primaryDirectionsLink"[^>]*>\s*)<svg\b.*?</svg>','$1'+$turnIcon,1) }
  $newNav=$match.Groups[1].Value+$body+$match.Groups[3].Value
  $v=$v.Substring(0,$match.Index)+$newNav+$v.Substring($match.Index+$match.Length)
  $style='<style id="maps-four-tab-patch">.primary-bottom-nav{grid-template-columns:repeat(4,minmax(0,1fr))!important}@media(max-width:410px){.primary-bottom-link{font-size:10px!important;letter-spacing:-.015em}}</style>'
  if(-not $v.Contains('id="maps-four-tab-patch"')) {$v=$v.Replace('</head>',$style+"`n"+'</head>')}
  $edited[$f]=$v
}
# Add a Maps launcher on BOTH System Home render paths (static startup and dynamic fallback).
# Reuse the existing module classes so the pill inherits the exact active theme, typography and spacing.
$main=$edited['index.html']
$homeMaps='      <section class="home-module" aria-label="Maps"><a class="home-module-link home-maps" href="maps/index.html"><span class="home-module-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16M15 5v16"/></svg></span><span class="home-module-label">Maps</span><span class="home-module-arrow" aria-hidden="true"><svg viewBox="0 0 12 24" aria-hidden="true"><path d="M3 5l6 7-6 7"/></svg></span></a></section>'
$beforeHome=([regex]::Matches($main,'<section class="home-module" aria-label="Live Hydrants">')).Count
if($beforeHome -lt 1){throw 'Could not identify System Home module list. No changes written.'}
# Insert immediately BEFORE Hydrants, and only in home lists missing a Maps entry.
$homePattern='(?s)(<section class="home-module" aria-label="Directions Book">.*?</section>\s*)(<section class="home-module" aria-label="Live Hydrants">)'
$main=[regex]::Replace($main,$homePattern,{param($m) $m.Groups[1].Value+$homeMaps+"`n"+$m.Groups[2].Value})
$afterHome=([regex]::Matches($main,'<section class="home-module" aria-label="Maps">')).Count
if($afterHome -lt $beforeHome){throw "Could not install Maps pill into all System Home render paths. Expected $beforeHome, got $afterHome. No changes written."}
# Update the system-home summary line without altering visual styles or the rest of the app.
$main=$main.Replace('Inventory <span aria-hidden="true">|</span> Directions <span aria-hidden="true">|</span> Hydrants','Inventory <span aria-hidden="true">|</span> Directions <span aria-hidden="true">|</span> Maps <span aria-hidden="true">|</span> Hydrants')
$edited['index.html']=$main

# Hydrants footer uses its own .bottom-nav and .tab-btn selectors.
$v=$edited['hydrants/index.html']
AssertContains $v '<nav class="bottom-nav"' 'hydrants/index.html'
if($v -notmatch 'id="mapsNavLink"|href="\.\./maps/index\.html"') {
  $at=[regex]::Match($v,'(?s)<(?:button|a)\b[^>]*id="hydrantsNavButton"')
  if(-not $at.Success){throw 'Hydrants footer is different than expected; no changes written.'}
  $add='      <a class="tab-btn" id="mapsNavLink" href="../maps/index.html" aria-label="Open Maps"><svg class="tab-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20z"></path><path d="M9 4v13.5M15 6.5V20"></path></svg><span>Maps</span></a>'+"`n"
  $v=$v.Insert($at.Index,$add)
}
$v=[regex]::Replace($v,'(?s)(<a\b[^>]*id="directionsNavLink"[^>]*>\s*)<svg\b.*?</svg>','$1<svg class="tab-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z"></path><path d="M8 15v-4a3 3 0 0 1 3-3h5"></path><path d="m13 5 3 3-3 3"></path></svg>',1)
$style='<style id="maps-four-tab-patch">.bottom-nav{grid-template-columns:repeat(4,minmax(0,1fr))!important}@media(max-width:410px){.bottom-nav .tab-btn{font-size:10px!important;letter-spacing:-.01em}}</style>'
if(-not $v.Contains('id="maps-four-tab-patch"')) {$v=$v.Replace('</head>',$style+"`n"+'</head>')}
$edited['hydrants/index.html']=$v
# Keep Maps shell and original DEWNR pages available with Prepare for Offline Use.
$sw=$edited['service-worker.js']
AssertContains $sw 'const APP_SHELL' 'service-worker.js'
if(-not $sw.Contains("'./maps/index.html'")) { $sw=$sw.Replace("  './hydrants/index.html',", "  './maps/index.html',`n  './maps/maps-data.js',`n  './hydrants/index.html',") }
if(-not $sw.Contains("relativePath.startsWith('maps/assets/dewnr/')")){$sw=$sw.Replace("relativePath.startsWith('directions/maps/ubd/') ||", "relativePath.startsWith('directions/maps/ubd/') ||`n    relativePath.startsWith('maps/assets/dewnr/') ||")}
$sw=[regex]::Replace($sw,"(?m)(const CACHE_NAME = ')([^']+)(';)",{param($m)$m.Groups[1].Value+($m.Groups[2].Value -replace '-maps-tab-r1$','')+'-maps-tab-r1'+$m.Groups[3].Value},1)
$edited['service-worker.js']=$sw
# Append paths to the live offline manifest, without replacing inventory photo lists or timestamps.
$manifest=$edited['offline-assets.json'] | ConvertFrom-Json
if($null -eq $manifest.assets){throw 'offline-assets.json missing assets list'}
$assets=New-Object 'System.Collections.Generic.List[string]'
foreach($a in $manifest.assets){$assets.Add([string]$a)}
foreach($a in @('./maps/index.html','./maps/maps-data.js')){if(-not $assets.Contains($a)){$assets.Add($a)}}
Get-ChildItem (Join-Path $root 'maps/assets/dewnr') -Filter '*.jpg' -File | Sort-Object Name | ForEach-Object { $a='./maps/assets/dewnr/'+$_.Name; if(-not $assets.Contains($a)){$assets.Add($a)} }
$manifest.assets=@($assets)
# New content version forces re-preparation of offline maps; leave timestamps from current live data alone.
if($manifest.version -notmatch '-maps-r1$'){$manifest.version=[string]$manifest.version+'-maps-r1'}
$edited['offline-assets.json']=($manifest|ConvertTo-Json -Depth 15)
# Save original files outside the repo and write only after all validation succeeded.
$backup=Join-Path ([IO.Path]::GetTempPath()) ('BlackwoodMapsBackup-'+(Get-Date -Format 'yyyyMMdd-HHmmss'))
New-Item -ItemType Directory -Force -Path $backup | Out-Null
foreach($f in $files){$source=Join-Path $root $f;$dest=Join-Path $backup $f;$parent=Split-Path -Parent $dest;New-Item -ItemType Directory -Force -Path $parent|Out-Null;Copy-Item -LiteralPath $source -Destination $dest}
foreach($f in $files){if($edited[$f] -ne $original[$f]){WriteUtf8 (Join-Path $root $f) $edited[$f]}}
Write-Host "Maps integration complete. Original live files backed up to: $backup" -ForegroundColor Green
Write-Host 'Commit and push changed files and the new maps folder in GitHub Desktop.' -ForegroundColor Cyan
