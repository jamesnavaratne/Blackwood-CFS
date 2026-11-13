#!/usr/bin/env python3
"""Review-branch-only Blackwood Admin submission reconciler.

Updates the existing XLSX OpenXML cells without replacing unrelated workbook sheets,
styles, tables, relationships or unedited fields. Always run the established rebuild
and its validation afterwards. Do not merge proposal-only pull requests.
"""
from __future__ import annotations
import argparse, base64, binascii, copy, datetime, hashlib, json, re, sys, tempfile, zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

M='http://schemas.openxmlformats.org/spreadsheetml/2006/main'
ET.register_namespace('x', M)
NS={'x':M}
APPS={'Blackwood Rescue':'BR','34P':'34P','CAFS 24':'CAFS'}
PHOTO_DIR={'Blackwood Rescue':'rescue','34P':'34p','CAFS 24':'cafs24'}
COLUMNS={'id':'A','appliance':'B','locker':'C','section':'D','subsection':'E','item':'F','quantity':'G','category':'H','description':'I','status':'J','photo':'K','extraPhoto':'L','lastChecked':'M','checkedBy':'N','tags':'O','notes':'P'}
FIELD_SET=set(COLUMNS)
VALID_STATUS={'In service','Out of service','Missing','For repair','Needs check','Needs restock',''}

def text(cell, shared):
    kind=cell.get('t'); val=cell.find('x:v',NS)
    if kind=='inlineStr':
        v=cell.find('x:is',NS)
        return ''.join(t.text or '' for t in v.iter(f'{{{M}}}t')) if v is not None else ''
    if val is None:return ''
    if kind=='s':return shared[int(val.text)]
    return val.text or ''

def set_text(cell, value):
    # inline strings avoid modifying sharedStrings, preserving all other workbook content.
    for child in list(cell):cell.remove(child)
    cell.set('t','inlineStr')
    el=ET.SubElement(cell,f'{{{M}}}is')
    t=ET.SubElement(el,f'{{{M}}}t')
    t.text=str(value)
    if value and (value[0].isspace() or value[-1].isspace()):t.set('{http://www.w3.org/XML/1998/namespace}space','preserve')

def serialise(root):return ET.tostring(root,encoding='utf-8',xml_declaration=True)

def fail(msg):raise ValueError(msg)

def run(repo:Path, proposal:Path,check:bool=False):
    p=json.loads(proposal.read_text(encoding='utf8'))
    changes=p.get('changes')
    if p.get('format')!='blackwood-admin-change-package' or p.get('version')!=1 or not isinstance(changes,list) or not 1<=len(changes)<=50:fail('Invalid proposal format or number of changes')
    if p.get('reviewStatus') not in (None,'proposal-only'):fail('Unexpected review status')
    wbpath=repo/'Blackwood_CFS_Master_Inventory.xlsx'
    generated=json.loads((repo/'data/inventory.json').read_text(encoding='utf8'))
    lockers={app:set(info['lockers']) for app,info in generated.items()}
    with zipfile.ZipFile(wbpath) as z:
        shared=[]
        if 'xl/sharedStrings.xml' in z.namelist():
            sr=ET.fromstring(z.read('xl/sharedStrings.xml'))
            shared=[''.join(x.text or '' for x in si.iter(f'{{{M}}}t')) for si in sr.findall('x:si',NS)]
        sheet_path='xl/worksheets/sheet1.xml'
        # This workbook's Master Inventory is sheet1; explicit guard against later reordering.
        book=ET.fromstring(z.read('xl/workbook.xml'))
        first=book.find('x:sheets',NS)[0]
        if first.get('name')!='Master Inventory':fail('Master Inventory is no longer the first worksheet; stop for review')
        root=ET.fromstring(z.read(sheet_path))
        sheet=root.find('x:sheetData',NS)
        rows=sheet.findall('x:row',NS)
        if not rows:fail('Empty master inventory sheet')
        indices={}
        for row in rows[1:]:
            cells={re.match(r'[A-Z]+',c.get('r','')).group():c for c in row.findall('x:c',NS) if re.match(r'[A-Z]+',c.get('r',''))}
            ident=text(cells['A'],shared) if 'A' in cells else ''
            if ident:
                if ident in indices:fail('Duplicate existing ID '+ident)
                indices[ident]=(row,cells)
        existing=set(indices)
        seen=set(); edits=[]; photos=[]; removed_photos=[]; assigned={}; photo_paths={}; maxid={x:0 for x in APPS.values()}
        for ident in existing:
            for prefix in maxid:
                mt=re.fullmatch(re.escape(prefix)+r'-(\d+)',ident)
                if mt:maxid[prefix]=max(maxid[prefix],int(mt.group(1)))
        for ci,ch in enumerate(changes,1):
            op=ch.get('op'); ident=ch.get('id'); data=ch.get('data',{})
            if op not in ('add','update','remove') or not isinstance(ident,str) or ident in seen:fail(f'Change {ci}: invalid/duplicate operation or ID')
            seen.add(ident)
            if op=='add':
                if not ident.startswith('NEW-') or ident in existing:fail('New records must use a NEW- temporary ID')
            elif ident not in existing:fail(f'Unknown existing item ID: {ident} (possible stale proposal)')
            if op=='remove':
                edits.append((op,ident,None,None));continue
            if not isinstance(data,dict) or data.get('id')!=ident:fail('Missing data or ID mismatch for '+ident)
            app=data.get('appliance')
            if app not in APPS:fail('Unknown appliance for '+ident)
            if op=='update':
                row,cells=indices[ident]
                current_app=text(cells.get('B'),shared) if cells.get('B') is not None else ''
                if current_app!=app:fail('Cannot change an existing item appliance; create a new item instead')
            if data.get('locker') not in lockers[app]:fail(f'{ident}: locker {data.get("locker")!r} is not configured for {app}')
            if not isinstance(data.get('item'),str) or not data['item'].strip():fail('Blank item name')
            if data.get('status','In service') not in VALID_STATUS:fail('Invalid status')
            if not set(data).issubset(FIELD_SET):fail(f'{ident}: unknown column(s) in edit')
            for k,v in data.items():
                if not isinstance(v,str) or len(v)>6000:fail(f'{ident}: invalid value for {k}')
            new_id=ident
            if op=='add':
                prefix=APPS[app];maxid[prefix]+=1;new_id=f'{prefix}-{maxid[prefix]:04d}'
                assigned[ident]=new_id
            remove_photo=ch.get('removePhoto',False)
            if not isinstance(remove_photo,bool):fail('Invalid photo removal flag')
            if remove_photo and (op!='update' or ch.get('photo') is not None):fail('Cannot remove a photo on add or simultaneously upload a photo')
            photo=ch.get('photo')
            if remove_photo:
                # Clear the preferred Admin override while retaining the legacy Photo.
                data={**data,'extraPhoto':''}
                previous_extra=text(cells.get('L'),shared) if cells.get('L') is not None else ''
                if previous_extra.startswith('admin-') and re.fullmatch(r'admin-[a-z0-9-]+-[a-f0-9]{12}\.jpg',previous_extra):
                    old_path=repo/'photos'/PHOTO_DIR[app]/'items'/previous_extra
                    # Do not delete an image reused by another inventory record.
                    used_elsewhere=any(old_ident!=ident and any(text(other_cells.get(col),shared)==previous_extra for col in ('K','L') if other_cells.get(col) is not None) for old_ident,(_,other_cells) in indices.items())
                    if old_path.exists() and not used_elsewhere:removed_photos.append(old_path)
            if photo is not None:
                if not isinstance(photo,dict) or photo.get('type')!='image/jpeg':fail('Photo must be an optimised JPEG')
                encoded=photo.get('data','')
                if not isinstance(encoded,str) or not encoded.startswith('data:image/jpeg;base64,') or len(encoded)>5*1024*1024:fail('Invalid photo format or size')
                try:pic=base64.b64decode(encoded.split(',',1)[1],validate=True)
                except (binascii.Error,ValueError):fail('Invalid base64 photo data')
                if not pic.startswith(b'\xff\xd8\xff') or not pic.endswith(b'\xff\xd9') or len(pic)>4*1024*1024:fail('Invalid JPEG bytes')
                filename=f'admin-{new_id.lower()}-{hashlib.sha256(pic).hexdigest()[:12]}.jpg'
                target=repo/'photos'/PHOTO_DIR[app]/'items'/filename
                photos.append((target,pic))
                photo_paths[new_id]=target.relative_to(repo).as_posix()
                # The operational item modal renders extraPhoto first; the legacy 'photo'
                # column is not the displayed override. Preserve existing Photo and
                # update ExtraPhoto so the rebuild embeds the uploaded image reference.
                data={**data,'extraPhoto':filename}
                # A replacement is additional to the original Photo column; do not
                # clear that field merely because the Admin form exports it blank.
                if op=='update' and not data.get('photo'):
                    data.pop('photo',None)
            edits.append((op,ident,data,new_id))
        # Validate all new image paths before mutating anything.
        if len({str(p) for p,_ in photos})!=len(photos):fail('Duplicate photo paths')
        for op,ident,data,new_id in edits:
            if op=='add':
                number=max(int(r.get('r')) for r in sheet.findall('x:row',NS))+1
                template=rows[-1]
                new=ET.Element(f'{{{M}}}row',{'r':str(number)})
                for key,col in COLUMNS.items():
                    cell=ET.SubElement(new,f'{{{M}}}c',{'r':f'{col}{number}','s':'6'})
                    val=new_id if key=='id' else data.get(key,'In service' if key=='status' else '')
                    if val:set_text(cell,val)
                sheet.append(new)
                rows.append(new)
            else:
                row,cells=indices[ident]
                if op=='remove':
                    # Clear in place rather than shifting other worksheet row references.
                    for cell in cells.values():
                        for child in list(cell):cell.remove(child)
                        cell.attrib.pop('t',None)
                else:
                    for key,col in COLUMNS.items():
                        if key not in data or key in ('id','appliance'):continue
                        cell=cells.get(col)
                        if cell is None:
                            cell=ET.Element(f'{{{M}}}c',{'r':f'{col}{row.get("r")}','s':'6'})
                            row.append(cell)
                        set_text(cell,data[key])
        report={'status':'validated' if check else 'applied','changes':len(edits),'added':sum(x[0]=='add' for x in edits),'updated':sum(x[0]=='update' for x in edits),'removed':sum(x[0]=='remove' for x in edits),'assigned_ids':assigned,'photos':len(photos),'removed_photos':[x.relative_to(repo).as_posix() for x in removed_photos],'photo_paths':photo_paths,'source':proposal.name}
        if check:return report
        # Existing file member metadata and every other XML part are unchanged.
        targetbytes=serialise(root)
        with tempfile.NamedTemporaryFile(prefix='blackwood-master-',suffix='.xlsx',dir=repo,delete=False) as tmp:
            temppath=Path(tmp.name)
        try:
            with zipfile.ZipFile(temppath,'w') as out:
                for info in z.infolist():
                    out.writestr(info,targetbytes if info.filename==sheet_path else z.read(info.filename))
            for path,content in photos:
                path.parent.mkdir(parents=True,exist_ok=True)
                if path.exists() and path.read_bytes()!=content:fail('Photo filename collision')
                path.write_bytes(content)
            temppath.replace(wbpath)
            for old_path in removed_photos:
                old_path.unlink(missing_ok=True)
        finally:
            temppath.unlink(missing_ok=True)
    return report

if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('--repo-root',default='.');ap.add_argument('--proposal',required=True);ap.add_argument('--check-only',action='store_true');args=ap.parse_args()
    try:print(json.dumps(run(Path(args.repo_root).resolve(),Path(args.proposal).resolve(),args.check_only),indent=2))
    except Exception as e:print('ADMIN RECONCILIATION FAILED: '+str(e),file=sys.stderr);sys.exit(2)
