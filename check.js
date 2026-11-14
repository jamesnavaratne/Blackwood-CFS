
'use strict';const $=id=>document.getElementById(id),KEY='blackwood-admin-v02-drafts';let base=[],records=[],chosen=null,photoData=null,removePhoto=false,drafts={};const fields=['id','appliance','locker','section','subsection','item','quantity','description','notes','tags','status'];
function safe(t){return String(t??'').replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]))}
function loadDrafts(){try{const v=JSON.parse(localStorage.getItem(KEY)||'{}');if(v&&typeof v==='object'&&!Array.isArray(v))drafts=v}catch(e){drafts={}}}function persist(){try{localStorage.setItem(KEY,JSON.stringify(drafts));return true}catch(e){alert('Unable to save locally (device storage may be full). Export your current changes.');return false}}
function refresh(){const m=new Map(base.map(r=>[r.id,{...r}]));Object.values(drafts).forEach(r=>{if(r.op==='remove')m.delete(r.id);else m.set(r.id,{...(m.get(r.id)||{}),...r.data})});records=[...m.values()];renderList();const n=Object.values(drafts).length;$('draftSummary').textContent=n?n+' unpublished draft change(s) saved locally.':'No changes saved.';if($('guideDraftStatus'))$('guideDraftStatus').textContent=n?n+' saved local draft(s). Next: GitHub login and Submit drafts for review.':'Step 1: Edit an item and Save draft.';if($('githubSubmit'))$('githubSubmit').disabled=!gatewaySession||!n;}
function renderList(){let q=$('search').value.toLowerCase(),ap=$('appliance').value;const r=records.filter(x=>(!ap||x.appliance===ap)&&[x.id,x.item,x.locker,x.section].some(v=>String(v||'').toLowerCase().includes(q)));$('summary').textContent=r.length+' matching items • '+records.length+' total (including drafts)';$('list').innerHTML=r.slice(0,130).map(x=>'<button class="item '+(x.id===chosen?'active':'')+'" data-id="'+safe(x.id)+'"><span><strong>'+safe(x.item)+'</strong><small>'+safe(x.appliance)+' · '+safe(x.locker)+' · '+safe(x.id)+'</small></span><span>›</span></button>').join('')||(r.length?'Refine search to see more results.':'No items found');$('list').querySelectorAll('button[data-id]').forEach(b=>b.onclick=()=>select(b.dataset.id));updateQuickEquipment()}
function select(id){chosen=id;photoData=drafts[id]?.photo||null;removePhoto=!!drafts[id]?.removePhoto;let r=records.find(x=>x.id===id);if(!r)return;$('editor').classList.remove('hidden');$('empty').classList.add('hidden');$('editTag').textContent=id;fillLocationOptions(r.appliance,r.locker,r.section,r.subsection);fields.filter(f=>!['id','locker','section','subsection'].includes(f)).forEach(k=>{let el=$('editor').elements.namedItem(k);if(el)el.value=r[k]??''});$('deleteBtn').disabled=id.startsWith('NEW-');$('photoFile').value='';preview();renderList();$('inventoryPanel').classList.remove('hidden');$('editorPanel').classList.remove('hidden');setInventoryCompact(true);setEditorExpanded(true);history.replaceState(null,'','?item='+encodeURIComponent(id))}
function preview(){
 const r=records.find(x=>x.id===chosen);const prefix={'Blackwood Rescue':'rescue','34P':'34p','CAFS 24':'cafs24'}[r?.appliance]||'rescue';
 const original=base.find(x=>x.id===chosen);
 const img=$('photoPreview');let source=null;
 if(photoData?.data)source=photoData.data;
 else if(removePhoto){if(original?.photo)source='../photos/'+prefix+'/items/'+encodeURIComponent(original.photo);}
 else {const filename=r?.extraPhoto||r?.photo; if(filename)source='../photos/'+prefix+'/items/'+encodeURIComponent(filename)}
 img.classList.toggle('hidden',!source); if(source)img.src=source;else img.removeAttribute('src');
 $('photoInfo').textContent=removePhoto?(original?.photo?'Added photo marked for removal; original photo will return.':'Photo marked for removal; no original item photo found.'):(photoData?'Optimised JPEG: '+Math.round((photoData.optimisedBytes||0)/1024)+' KB (original '+Math.round((photoData.originalBytes||0)/1024)+' KB)':(r?.extraPhoto||r?.photo||'No photograph attached'));
 $('removePhotoBtn').disabled=!chosen || (!photoData && !r?.extraPhoto && !drafts[chosen]?.removePhoto);
 $('removePhotoBtn').textContent=removePhoto?'Undo photo removal':'Remove added photo';
 $('photoRemovalNote').textContent=removePhoto?'Photo removal is selected. Choose Save draft to keep it, then follow the publishing checklist.':'Removes the Admin-added replacement and restores the original photo where available. The change only goes live after GitHub review and merge.';
}
function uniqueValues(key,appliance,locker,section){return [...new Set(base.filter(r=>r.appliance===appliance && (!locker||r.locker===locker) && (!section||r.section===section)).map(r=>String(r[key]||'').trim()))].filter(Boolean).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));}
function optionsFor(key,values,chosen){const sel=$('editor').elements.namedItem(key);sel.replaceChildren();const blank=document.createElement('option');blank.value='';blank.textContent=key==='locker'?'Select a locker':'None';sel.append(blank);for(const x of [...new Set([...values,chosen].filter(Boolean))]){const opt=document.createElement('option');opt.value=x;opt.textContent=x;sel.append(opt)}sel.value=chosen||'';}
function fillLocationOptions(ap,locker='',section='',subsection=''){
  optionsFor('locker',uniqueValues('locker',ap),locker);
  optionsFor('section',uniqueValues('section',ap,locker),section);
  optionsFor('subsection',uniqueValues('subsection',ap,locker,section),subsection);
}
$('editor').elements.namedItem('appliance').addEventListener('change',e=>fillLocationOptions(e.target.value));
$('lockerSelect').addEventListener('change',()=>{const ap=$('editor').elements.namedItem('appliance').value,locker=$('lockerSelect').value;optionsFor('section',uniqueValues('section',ap,locker),'');optionsFor('subsection',[],'')});
$('sectionSelect').addEventListener('change',()=>{const ap=$('editor').elements.namedItem('appliance').value,locker=$('lockerSelect').value,sec=$('sectionSelect').value;optionsFor('subsection',uniqueValues('subsection',ap,locker,sec),'')});
$('editor').addEventListener('submit',e=>{e.preventDefault();if(!chosen)return;const data={id:chosen};for(const k of fields.filter(x=>x!=='id'))data[k]=String($('editor').elements.namedItem(k)?.value||'').trim();const previous=drafts[chosen];drafts[chosen]={op:chosen.startsWith('NEW-')?'add':'update',id:chosen,data,photo:removePhoto?null:(photoData||previous?.photo||null),removePhoto:removePhoto===true};if(persist()){refresh();select(chosen);showSavedToast()}});
$('photoFile').addEventListener('change',async e=>{
 const f=e.target.files[0];if(!f)return;
 if(!f.type.startsWith('image/')){alert('Please select an image.');e.target.value='';return;}
 if(f.size>30*1024*1024){alert('Please select a photo smaller than 30 MB.');e.target.value='';return;}
 try {
  const bitmap=await createImageBitmap(f,{imageOrientation:'from-image'});
  const scale=Math.min(1,1600/Math.max(bitmap.width,bitmap.height));
  const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));
  const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();
  const data=canvas.toDataURL('image/jpeg',.78);
  removePhoto=false;photoData={name:f.name.replace(/\.[^/.]+$/,'')+'-optimised.jpg',type:'image/jpeg',data,width:canvas.width,height:canvas.height,originalBytes:f.size,optimisedBytes:Math.floor((data.length-data.indexOf(',')-1)*3/4)};
  preview();
 }catch(err){alert('Photo optimisation failed; please try another picture. '+err.message);e.target.value='';}
});
$('removePhotoBtn').onclick=()=>{if(!chosen)return;removePhoto=!removePhoto;if(removePhoto){photoData=null;$('photoFile').value='';}preview()};
$('deleteBtn').onclick=()=>{if(!chosen||!confirm('Propose removal of this equipment from the master inventory?'))return;drafts[chosen]={op:'remove',id:chosen,base:base.find(x=>x.id===chosen)||null};if(persist()){resetSelection();refresh()}};
$('newBtn').onclick=()=>{const id='NEW-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6);const ap=$('appliance').value||'Blackwood Rescue';drafts[id]={op:'add',id,data:{id,item:'New equipment',appliance:ap,status:'In service'}};if(persist()){refresh();select(id);$('editorPanel').scrollIntoView({behavior:'smooth'})}};
$('exportBtn').onclick=()=>{const changes=Object.values(drafts);if(!changes.length)return alert('No drafts to export.');const content=JSON.stringify({format:'blackwood-admin-change-package',version:1,exportedAt:new Date().toISOString(),source:'Admin v0.4 secure submission pilot',changes},null,2);const blob=new Blob([content],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Blackwood_Admin_Changes_'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),3000)};
function resetSelection(){chosen=null;photoData=null;removePhoto=false;$('editor').reset();$('photoFile').value='';$('editor').classList.add('hidden');$('empty').classList.remove('hidden');$('editTag').textContent='Select item';$('photoPreview').classList.add('hidden');$('photoPreview').removeAttribute('src');$('photoInfo').textContent='';$('editorPanel').classList.add('hidden');$('inventoryPanel').classList.remove('hidden');setInventoryCompact(false);history.replaceState(null,'',location.pathname);renderList();$('inventoryPanel').scrollIntoView({behavior:'smooth',block:'start'});}
$('backToInventoryBtn').onclick=resetSelection;
$('resetEditorBtn').onclick=resetSelection;
$('clearBtn').onclick=()=>{if(!confirm('Discard ALL unpublished drafts on this device?'))return;drafts={};persist();resetSelection();refresh()};$('appliance').onchange=()=>{renderList();updateQuickEquipment()};$('search').oninput=()=>{renderList();updateQuickEquipment()};
(async()=>{loadDrafts();try{const resp=await fetch('../data/inventory.json',{cache:'no-store'});if(!resp.ok)throw Error('HTTP '+resp.status);const data=await resp.json();base=Object.values(data).flatMap(v=>v.records||[]);const appliances=[...new Set(base.map(r=>r.appliance))];for(const a of appliances){for(const sel of [$('appliance'),$('editor').elements.namedItem('appliance')]){let o=document.createElement('option');o.value=a;o.textContent=a;sel.appendChild(o)}}refresh();const id=new URLSearchParams(location.search).get('item');if(id){if(records.some(r=>r.id===id)){select(id);$('editorPanel').scrollIntoView()}else $('summary').textContent+=' · Deep-linked item '+id+' not found'}}catch(e){$('summary').textContent='Inventory could not be loaded. Open from the deployed GitHub Pages site or a local web server. '+e.message;refresh()}})();
// v0.6 shared convenience PIN: public deterrent only, not an authentication boundary.
const PIN_SESSION='blackwood-admin-unlocked', SHARED_PIN='8888';
const pinInput=$('pinEntry');let failures=0, lockedUntil=0;
function pinMessage(t){$('pinStatus').textContent=t}
function unlockAdmin(){sessionStorage.setItem(PIN_SESSION,'yes');localStorage.removeItem('blackwood-admin-pin-v1');$('pinGate').classList.add('hidden');$('adminContent').classList.remove('hidden');$('pinEntry').value=''}
$('pinHeading').textContent='Blackwood Admin PIN';
$('pinInstructions').textContent='Enter the shared four-digit PIN to edit equipment.';
$('pinButton').textContent='Unlock Admin';
$('pinForm').addEventListener('submit',e=>{e.preventDefault();const pin=pinInput.value;if(Date.now()<lockedUntil)return pinMessage('Too many attempts. Try again shortly.');if(pin===SHARED_PIN){failures=0;unlockAdmin()}else{failures++;pinInput.value='';pinInput.focus();if(failures>=5){lockedUntil=Date.now()+30000;failures=0}pinMessage('Incorrect PIN'+(lockedUntil>Date.now()?'. Try again in 30 seconds.':'.'))}});
if(sessionStorage.getItem(PIN_SESSION)==='yes')unlockAdmin();else requestAnimationFrame(()=>{pinInput.focus();pinInput.select()});
// OAuth gateway: users never input GitHub tokens in the browser. Gateway stores OAuth credentials.
const gatewayStore='blackwood-admin-gateway-url';let gatewaySession=sessionStorage.getItem('blackwood-admin-gateway-session')||'';
$('apiUrl').value=localStorage.getItem(gatewayStore)||'https://blackwood-cfs-admin-gateway.blackwood-cfs.workers.dev';
function gatewayOrigin(){const u=$('apiUrl').value.trim().replace(/\/+$/,'');return /^https:\/\/[a-z0-9.-]+(?::443)?$/i.test(u)?u:null}
function showGithubStatus(t){$('githubStatus').textContent=t;$('githubSubmit').disabled=!gatewaySession||!Object.keys(drafts).length}
$('apiUrl').addEventListener('change',()=>{let u=gatewayOrigin();if(u)localStorage.setItem(gatewayStore,u);else showGithubStatus('Enter a valid HTTPS gateway origin, with no path.')});
async function gateway(path,options={}){const base=gatewayOrigin();if(!base)throw Error('Admin gateway is not configured.');const resp=await fetch(base+path,{...options,headers:{...options.headers,...(gatewaySession?{Authorization:'Bearer '+gatewaySession}:{})}});const body=await resp.json().catch(()=>({}));if(!resp.ok)throw Error(body.error||'HTTP '+resp.status);return body}
$('githubSignIn').onclick=()=>{let u=gatewayOrigin();if(!u)return showGithubStatus('Configure gateway HTTPS address first.');localStorage.setItem(gatewayStore,u);setBusy('githubSignIn',true);showGithubStatus('Connecting to GitHub…');location.href=u+'/auth/start'};
$('githubCheck').onclick=async()=>{
 if(!gatewaySession){showGithubStatus('Signed out. Sign in above to publish and track changes.');return;}
 showGithubStatus('Checking GitHub session…');setBusy('githubCheck',true);
 try{const r=await gateway('/api/me');showGithubStatus('Authenticated as GitHub @'+r.login+' — ready to publish');}
 catch(e){gatewaySession='';sessionStorage.removeItem('blackwood-admin-gateway-session');showGithubStatus('Session expired or unavailable: '+e.message);}finally{setBusy('githubCheck',false)}
};
$('githubSignOut').onclick=async()=>{setBusy('githubSignOut',true);showGithubStatus('Signing out…');try{await gateway('/api/logout',{method:'POST'})}catch(e){}gatewaySession='';sessionStorage.removeItem('blackwood-admin-gateway-session');showGithubStatus('Signed out.');setBusy('githubSignOut',false);};
$('githubSubmit').onclick=async()=>{const changes=Object.values(drafts);if(!changes.length)return alert('No draft changes to submit.');if(!confirm('Create a draft GitHub pull request containing '+changes.length+' change(s)? No changes will be published automatically.'))return;showGithubStatus('Submitting review request…');try{const res=await gateway('/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({format:'blackwood-admin-change-package',version:1,source:'Admin v0.4',exportedAt:new Date().toISOString(),changes})});$('githubStatus').replaceChildren(document.createTextNode('Draft pull request created: '));const a=document.createElement('a');a.href=res.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='#'+res.number+' — open GitHub review';$('githubStatus').append(a);$('githubSubmit').disabled=false}catch(e){showGithubStatus('Submission unsuccessful — drafts kept: '+e.message)}};
(async()=>{const hash=new URLSearchParams(location.hash.replace(/^#/,'')),ticket=hash.get('ticket');if(ticket){history.replaceState(null,'',location.pathname+location.search);showGithubStatus('Checking GitHub session…');try{const r=await gateway('/auth/exchange',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ticket})});gatewaySession=r.session;sessionStorage.setItem('blackwood-admin-gateway-session',gatewaySession);$('githubCheck').click()}catch(e){showGithubStatus('Authentication failed: '+e.message)}}else if(gatewaySession){$('githubCheck').click()}})();

// v0.9: continuous selection strip and independent collapsible editor.
let inventoryCompact=false;
function setInventoryCompact(yes){inventoryCompact=!!yes;$('inventoryPanel').classList.toggle('compact-inventory',inventoryCompact);$('expandInventoryBtn').classList.toggle('hidden',!chosen);$('expandInventoryBtn').textContent=inventoryCompact?'Expand inventory':'Collapse inventory';$('expandInventoryBtn').setAttribute('aria-expanded',String(!inventoryCompact));$('compactChooser').classList.toggle('hidden',!inventoryCompact);const item=records.find(r=>r.id===chosen);$('selectionSummary').textContent=item?'Editing '+item.item+' · '+item.appliance+' · '+(item.locker||'Unassigned'):'Choose equipment to begin editing.';updateQuickEquipment();}
function setEditorExpanded(yes){$('editorContents').classList.toggle('hidden',!yes);$('toggleEditorBtn').textContent=yes?'Collapse editor':'Expand editor';$('toggleEditorBtn').setAttribute('aria-expanded',String(yes));}
$('expandInventoryBtn').onclick=()=>setInventoryCompact(!inventoryCompact);
$('toggleEditorBtn').onclick=()=>setEditorExpanded($('editorContents').classList.contains('hidden'));
$('quickEquipment').onchange=e=>{if(e.target.value&&e.target.value!==chosen)select(e.target.value)};
function updateQuickEquipment(){const sel=$('quickEquipment');if(!sel)return;const q=$('search').value.toLowerCase(),ap=$('appliance').value;let matches=records.filter(r=>(!ap||r.appliance===ap)&&[r.id,r.item,r.locker,r.section].some(v=>String(v||'').toLowerCase().includes(q)));if(chosen&&!matches.some(r=>r.id===chosen)){const current=records.find(r=>r.id===chosen);if(current)matches.unshift(current)}const selected=chosen||'';sel.replaceChildren();const defaultOpt=document.createElement('option');defaultOpt.value='';defaultOpt.textContent='Select equipment…';sel.append(defaultOpt);for(const r of matches){const opt=document.createElement('option');opt.value=r.id;opt.textContent=r.item+' · '+r.locker+' · '+r.id;sel.append(opt)}sel.value=selected;}
function showSavedToast(){const e=$('selectionSummary');if(e){e.textContent='✓ Draft saved · '+(records.find(r=>r.id===chosen)?.item||chosen)+' · Continue editing or submit to GitHub.';e.classList.add('saved');setTimeout(()=>e.classList.remove('saved'),3200)}}
// v0.9.3: PR number is retained; publishing instructions are manually followed.
const PR_TRACK_KEY='blackwood-admin-last-pr',PR_HISTORY_KEY='blackwood-admin-pr-history-v092',PR_PAYLOAD_PREFIX='blackwood-admin-submitted-v092-';
let trackedPR=Number(localStorage.getItem(PR_TRACK_KEY)||0);
function readHistory(){try{const v=JSON.parse(localStorage.getItem(PR_HISTORY_KEY)||'[]');return Array.isArray(v)?v:[]}catch(e){return []}}
let submissionHistory=readHistory();
function saveHistory(){try{localStorage.setItem(PR_HISTORY_KEY,JSON.stringify(submissionHistory.slice(0,30)));return true}catch(e){console.warn('Could not save publishing history',e);return false}}
function findHistory(n){return submissionHistory.find(x=>x.number===Number(n))}
function upsertHistory(n,fields){let h=findHistory(n);if(!h){h={number:Number(n),createdAt:new Date().toISOString(),step:2,status:'Submitted',items:[]};submissionHistory.unshift(h)}Object.assign(h,fields);submissionHistory.sort((a,b)=>Date.parse(b.createdAt)-Date.parse(a.createdAt));saveHistory();return h}
function currentHistory(){return trackedPR?findHistory(trackedPR):null}
function showDraftEntries(){
 const target=$('draftEntries');if(!target)return;target.replaceChildren();
 for(const d of Object.values(drafts)){
  const item=document.createElement('div');item.className='draft-entry';const info=document.createElement('div');const label=document.createElement('strong');label.textContent=d.data?.item||d.base?.item||d.id;const detail=document.createElement('small');detail.textContent=(d.op||'update').toUpperCase()+' · '+(d.data?.appliance||d.base?.appliance||'')+' · '+d.id;info.append(label,detail);
  const b=document.createElement('button');b.className='secondary';b.textContent='Open';b.onclick=()=>{if(d.op==='remove'){alert('Removal proposal saved. Discard the draft to undo this removal.');return;}select(d.id);$('editorPanel').scrollIntoView({behavior:'smooth',block:'start'})};item.append(info,b);target.append(item)
 }
}
function showHistory(){const target=$('historyEntries');target.replaceChildren();$('historyCount').textContent=submissionHistory.length;
 if(!submissionHistory.length){const empty=document.createElement('p');empty.className='sub';empty.textContent='No submissions recorded on this device yet.';target.append(empty);return}
 for(const h of submissionHistory.slice(0,20)){
  const row=document.createElement('div');row.className='history-entry';const title=document.createElement('strong');title.textContent='PR #'+h.number+(h.number===trackedPR?' · Tracked':'');const summary=document.createElement('span');summary.className='small-note';summary.textContent=(h.status||'Submitted')+' · '+(h.items||[]).map(i=>i.item).filter(Boolean).slice(0,3).join(', ')+(h.items?.length>3?' + more':'');
  const date=document.createElement('span');date.className='small-note';date.textContent=h.createdAt?new Date(h.createdAt).toLocaleString():'';const actions=document.createElement('div');actions.className='history-actions';const open=document.createElement('a');open.href='https://github.com/jamesnavaratne/Blackwood-CFS/pull/'+h.number;open.target='_blank';open.rel='noopener noreferrer';open.textContent='Open PR ↗';actions.append(open);
  if(h.number!==trackedPR){const track=document.createElement('button');track.type='button';track.textContent='Track this PR';track.onclick=()=>{trackedPR=h.number;localStorage.setItem(PR_TRACK_KEY,String(trackedPR));renderTrackerReference();updatePR();showHistory()};actions.append(track)}
  if(localStorage.getItem(PR_PAYLOAD_PREFIX+h.number)&&h.status!=='Published'){
   const restore=document.createElement('button');restore.type='button';restore.textContent='Restore drafts';restore.onclick=()=>restoreSubmission(h.number);actions.append(restore)
  }
  row.append(title,summary,date,actions);target.append(row)
 }
}
function restoreSubmission(n){const raw=localStorage.getItem(PR_PAYLOAD_PREFIX+n);if(!raw)return alert('This submission has no locally retained draft backup.');let saved;try{saved=JSON.parse(raw)}catch(e){return alert('Stored draft backup could not be read.')}
 if(!confirm('Restore draft changes from PR #'+n+'? Current drafts with the same item IDs will be replaced. No changes will be published.'))return;
 drafts={...drafts,...saved};if(!persist())return;refresh();$('draftDetails').open=true;alert('Drafts restored. Review any existing published changes before submitting them again.')}
function renderTrackerReference(){const el=$('prNumber');el.textContent=trackedPR?'#'+trackedPR:'No PR yet';$('prReference').classList.toggle('has-pr',Boolean(trackedPR));$('copyPr').disabled=!trackedPR;$('trackedPrLink').href=trackedPR?'https://github.com/jamesnavaratne/Blackwood-CFS/pull/'+trackedPR:'https://github.com/jamesnavaratne/Blackwood-CFS/pulls';$('trackedPrLink').textContent=trackedPR?'Open PR #'+trackedPR+' ↗':'Pull requests ↗'}
$('copyPr').onclick=async()=>{if(!trackedPR)return;const value=String(trackedPR);try{await navigator.clipboard.writeText(value);$('copyPr').textContent='Copied #'+value+' ✓';setTimeout(()=>$('copyPr').textContent='Copy number',2200)}catch(e){window.prompt('Copy the PR number for GitHub Actions:',value)}};
function updateConsoleState(){if($('metricEquipment'))$('metricEquipment').textContent=base.length||'—';if($('metricDrafts'))$('metricDrafts').textContent=Object.keys(drafts).length;const n=Object.keys(drafts).length;$('draftCount').textContent=n;showDraftEntries();showHistory();}
// Publishing steps are deliberately static. GitHub reconciliation and approval are manual.
function updatePR(){renderTrackerReference();showHistory()}
const originalRefresh=refresh;
refresh=function(){originalRefresh();updateConsoleState()};
const originalShowGithubStatus=showGithubStatus;
function setGitHubHeaderState(status){
 const badge=$('topGithubState'), signIn=$('githubSignIn'), check=$('githubCheck'), signOut=$('githubSignOut'), hint=$('publishingConnectionHint');
 if(!badge)return;
 const connected=status.startsWith('Authenticated'), checking=/^Checking|^Submitting|^Connecting/i.test(status), broken=/expired|failed|unsuccessful|error|unavailable|not connected/i.test(status);
 badge.textContent=connected?'● GitHub connected':checking?'◌ Checking connection…':broken?'● Connection needs attention':'○ GitHub not connected';
 badge.className='console-badge '+(connected?'state-ok':checking?'state-checking':broken?'state-error':'state-idle');
 signIn.classList.toggle('hidden',connected||(checking&&!signIn.classList.contains('is-busy')));
 check.classList.toggle('hidden',!connected);
 signOut.classList.toggle('hidden',!connected);
 signIn.textContent=broken?'Reconnect GitHub ↗':'Sign in with GitHub ↗';
 if(hint)hint.textContent=connected?'GitHub connected. Submit saved drafts here; follow the publishing instructions.':'Sign in at the top to submit drafts and review your saved PR number. You can still edit and save drafts locally.';
}
showGithubStatus=function(t){originalShowGithubStatus(t);setGitHubHeaderState(t)};
if(!gatewaySession)showGithubStatus('Signed out. Sign in with GitHub when ready to publish.');
else showGithubStatus('Checking GitHub session…');

// v0.9.3: one consistent in-button spinner across network-bound Admin actions.
function setBusy(id,busy){const el=$(id);if(!el)return;el.classList.toggle('is-busy',busy);el.setAttribute('aria-busy',String(busy));el.disabled=busy||(id==='githubSubmit'&&(!gatewaySession||!Object.keys(drafts).length));}

// Successful submission moves active drafts to recoverable local history.
$('githubSubmit').onclick=async()=>{
 const changes=Object.values(drafts);if(!changes.length)return alert('No drafts to submit.');
 if(!confirm('Submit '+changes.length+' draft change(s) to GitHub for review? Nothing will be published automatically.'))return;
 showGithubStatus('Submitting review request…');setBusy('githubSubmit',true);
 try{
  const res=await gateway('/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({format:'blackwood-admin-change-package',version:1,source:'Admin v0.9.2',exportedAt:new Date().toISOString(),changes})});
  trackedPR=Number(res.number);localStorage.setItem(PR_TRACK_KEY,String(trackedPR));
  const backup=Object.fromEntries(changes.map(d=>[d.id,d]));let backedUp=false;
  try{localStorage.setItem(PR_PAYLOAD_PREFIX+trackedPR,JSON.stringify(backup));backedUp=true}catch(e){console.warn('Backup not saved; keeping active drafts',e)}
  upsertHistory(trackedPR,{step:2,status:'Submitted to GitHub',createdAt:new Date().toISOString(),items:changes.map(x=>({id:x.id,item:x.data?.item||x.base?.item||x.id,op:x.op})),lastVerified:new Date().toISOString()});
  if(backedUp){const previous=drafts;drafts={};if(!persist()){drafts=previous;alert('Proposal submitted, but local storage could not be updated. Drafts remain; avoid submitting them twice.')}else{resetSelection();refresh();$('draftDetails').open=false}}
  else alert('PR #'+trackedPR+' was created. Device storage is full, so drafts remain in the active list. Do not submit them again.');
  showGithubStatus('Authenticated as GitHub — PR #'+trackedPR+' submitted');renderTrackerReference();showHistory();
 }catch(e){showGithubStatus('Submission unsuccessful — drafts kept: '+e.message)}finally{setBusy('githubSubmit',false)}
};
if(window.matchMedia('(max-width:1000px)').matches)$('guideDetails').open=false;
updateConsoleState();updatePR();

if('serviceWorker'in navigator&&location.protocol==='https:')navigator.serviceWorker.register('./sw.js').catch(()=>{});
