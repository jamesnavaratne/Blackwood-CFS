#!/usr/bin/env python3
"""Check critical Inventory inline JS structure against accidental regression.
Usage: python tools/test_inventory_scripts.py path/to/full-app.zip
"""
import re, sys, zipfile
from pathlib import Path
p=Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parents[1]
if p.is_file():
    with zipfile.ZipFile(p) as z: html=z.read('index.html').decode('utf-8')
else: html=(p/'index.html').read_text(encoding='utf-8')
scripts=re.findall(r'<script\b[^>]*>(.*?)</script\s*>',html,flags=re.S|re.I)
inline=[x for x in scripts if x.strip()]
checks={
    'obsolete search diagnostic absent': 'v2GlobalSearchDebugCounts' not in html,
    '34P title handler retained once': html.count('function fix34PTitleText()')==1,
    'theme toggle removal retained once': html.count('function removeThemeModeToggle()')==1,
    'approved home menu handler retained': html.count("getElementById('homeRescueMenu')")==1,
    'offline preparation handler retained': 'Prepare for Offline Use' in html,
    '34P and toggle handlers share one block': any('function fix34PTitleText()' in x and 'function removeThemeModeToggle()' in x for x in inline),
}
for name,ok in checks.items(): print(('PASS' if ok else 'FAIL')+' '+name)
if not all(checks.values()):sys.exit(1)
print(f'PASS script structure ({len(scripts)} total script tags; {len(inline)} inline scripts)')
