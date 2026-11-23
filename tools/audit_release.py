#!/usr/bin/env python3
"""Read-only Blackwood CFS release audit.
Usage: python tools/audit_release.py path/to/full_app.zip
       python tools/audit_release.py path/to/extracted_full_app_directory
"""
import json, re, sys, zipfile
from pathlib import Path
src = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parents[1]
archive = zipfile.ZipFile(src) if src.is_file() and zipfile.is_zipfile(src) else None
names = set(archive.namelist()) if archive else None
errors = []
def read(name):
    return (archive.read(name) if archive else (src/name).read_bytes()).decode('utf8')
def exists(name):
    name = name.split('?', 1)[0].removeprefix('./')
    if not name: name = 'index.html'  # a './' URL refers to the start page
    return name in names if archive else (src/name).is_file()
def expect(condition, message):
    if not condition: errors.append(message)
try:
    meta = json.loads(read('content-metadata.json'))
    paths = json.loads(read('offline-assets.json'))
    if isinstance(paths, dict):
        choices = [v for v in paths.values() if isinstance(v,list) and all(isinstance(x,str) for x in v)]
        paths = max(choices,key=len) if choices else []
    expect(bool(paths), 'Offline manifest is empty')
    expect(len(paths) == len(set(paths)), 'Duplicate offline paths')
    for name in paths: expect(exists(name), 'Missing offline asset: '+name)
    expect(meta.get('offlineAssetCount') == len(paths), 'Offline asset count mismatch')
    release = read('shared/release.js')
    html = read('index.html')
    expect(meta['appVersion'] in release, 'Visible release mismatch')
    expect(meta['appVersion'] in html, 'Embedded release mismatch')
    sw = read('service-worker.js')
    expect(bool(re.search(r"CACHE_NAME\s*=\s*['\"]", sw)), 'Cache name missing')
    for name in ('index.html','directions/index.html','maps/index.html','hydrants/index.html','beta/live-incidents.html','shared/ribbon.css','shared/home-final.js'):
        expect(exists(name), 'Missing app entry: '+name)
except Exception as exc: errors.append('Unable to complete audit: '+str(exc))
print('Blackwood CFS static release audit:', 'PASS' if not errors else 'FAIL')
if 'meta' in locals(): print('Version:',meta.get('appVersion'),'| Offline asset paths:',len(paths))
for err in errors: print(' -',err)
if archive: archive.close()
sys.exit(bool(errors))
