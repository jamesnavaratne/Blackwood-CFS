// Blackwood CFS Admin GitHub OAuth gateway (Cloudflare Workers + KV).
// Deploy independently. Never place CLIENT_SECRET, GitHub OAuth access tokens or session IDs in the public app.
const json = (obj,status=200,h={}) => new Response(JSON.stringify(obj),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...h}});
function originHeaders(env){return {'Access-Control-Allow-Origin':env.ADMIN_ORIGIN,'Access-Control-Allow-Headers':'Authorization, Content-Type','Access-Control-Allow-Methods':'GET, POST, OPTIONS','Vary':'Origin'};}
const githubHeaders=(token)=>({'Accept':'application/vnd.github+json','Authorization':'Bearer '+token,'X-GitHub-Api-Version':'2022-11-28','User-Agent':'blackwood-cfs-admin-gateway'});
async function gh(token,path,options={}){const r=await fetch('https://api.github.com'+path,{...options,headers:{...githubHeaders(token),...(options.headers||{})}});const body=await r.json().catch(()=>({}));if(!r.ok)throw Error('GitHub '+r.status+': '+String(body.message||'Request failed').slice(0,250));return body;}
function key(){return crypto.randomUUID()+crypto.randomUUID().replaceAll('-','');}
function validOrigin(url,env){try{return new URL(url).origin===env.ADMIN_ORIGIN}catch{return false}}
function validRequestOrigin(req,env){const o=req.headers.get('Origin');return !o||o===env.ADMIN_ORIGIN}
function adminRedirect(env,fragment){return new URL(env.ADMIN_URL+(fragment?'#'+fragment:''));}
async function authorised(req,env){const token=(req.headers.get('Authorization')||'').match(/^Bearer ([0-9a-f-]{60,100})$/i)?.[1];if(!token)return null;const raw=await env.SESSIONS.get('session:'+token);if(!raw)return null;const session=JSON.parse(raw);if(!env.ALLOWED_LOGINS.split(',').map(x=>x.trim().toLowerCase()).includes(session.login.toLowerCase()))return null;return {key:token,...session};}
const reject=(message,status=400)=>json({error:message},status);
function validateChangePackage(x){
 if(!x||x.format!=='blackwood-admin-change-package'||x.version!==1||!Array.isArray(x.changes)||x.changes.length<1||x.changes.length>50)throw Error('Invalid change package (1–50 edits permitted).');
 let ids=new Set();for(const c of x.changes){if(!['update','add','remove'].includes(c.op)||typeof c.id!=='string'||!/^(?:BR|34P|CAFS|NEW)[-\w]{1,80}$/i.test(c.id))throw Error('Invalid operation or item ID');if(ids.has(c.id))throw Error('Duplicate ID in change package');ids.add(c.id);
 if(c.op!=='remove'){if(!c.data||c.data.id!==c.id||!['Blackwood Rescue','34P','CAFS 24'].includes(c.data.appliance)||typeof c.data.item!=='string'||!c.data.item.trim())throw Error('Invalid appliance or equipment record');for(const [field,val] of Object.entries(c.data)){if(typeof val!=='string'||val.length>6000)throw Error('Invalid field: '+field)} }
 if(c.photo!=null){if(!/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(c.photo.data||'')||c.photo.data.length>5*1024*1024)throw Error('Photo must be optimised JPEG under 3.75 MB');}
 }
}
export default {async fetch(req,env){
 const u=new URL(req.url),cors=originHeaders(env);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 try{
 if(!env.ADMIN_ORIGIN||!env.ADMIN_URL||!env.GITHUB_CLIENT_ID||!env.GITHUB_CLIENT_SECRET||!env.GITHUB_REPO||!env.ALLOWED_LOGINS||!env.SESSIONS)return reject('Gateway is not configured',503);
 if(!validOrigin(env.ADMIN_URL,env)||!/^[-\w]+\/[-\w.]+$/.test(env.GITHUB_REPO))return reject('Invalid gateway configuration',503);
 if(u.pathname==='/auth/start'&&req.method==='GET'){
  const nonce=key();await env.SESSIONS.put('state:'+nonce,'1',{expirationTtl:600});
  const target=new URL('https://github.com/login/oauth/authorize');target.searchParams.set('client_id',env.GITHUB_CLIENT_ID);target.searchParams.set('redirect_uri',new URL('/auth/callback',u.origin).href);target.searchParams.set('scope','repo');target.searchParams.set('state',nonce);return Response.redirect(target.href,302);
 }
 if(u.pathname==='/auth/callback'&&req.method==='GET'){
  const state=u.searchParams.get('state'),code=u.searchParams.get('code');if(!state||!code||!await env.SESSIONS.get('state:'+state))return reject('OAuth state expired or invalid',403);await env.SESSIONS.delete('state:'+state);
  const tok=await fetch('https://github.com/login/oauth/access_token',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({client_id:env.GITHUB_CLIENT_ID,client_secret:env.GITHUB_CLIENT_SECRET,code,redirect_uri:new URL('/auth/callback',u.origin).href})});const t=await tok.json();if(!t.access_token)throw Error('GitHub OAuth token exchange unsuccessful');
  const who=await gh(t.access_token,'/user');const allowed=env.ALLOWED_LOGINS.split(',').map(x=>x.trim().toLowerCase());if(!allowed.includes(who.login.toLowerCase()))return reject('GitHub account not permitted',403);
  // Check that the authenticated account has repository access before creating a session.
  await gh(t.access_token,'/repos/'+env.GITHUB_REPO);
  const ticket=key();await env.SESSIONS.put('ticket:'+ticket,JSON.stringify({login:who.login,token:t.access_token}),{expirationTtl:90});return Response.redirect(adminRedirect(env,'ticket='+encodeURIComponent(ticket)).href,302);
 }
 if(u.pathname==='/auth/exchange'&&req.method==='POST'){
  if(!validRequestOrigin(req,env))return reject('Origin not permitted',403);
  const data=await req.json(),ticket=data.ticket;if(typeof ticket!=='string'||ticket.length>120)return reject('Invalid ticket');const raw=await env.SESSIONS.get('ticket:'+ticket);if(!raw)return reject('Ticket expired',403);await env.SESSIONS.delete('ticket:'+ticket);
  const session=key();await env.SESSIONS.put('session:'+session,raw,{expirationTtl:3600});return json({session},200,cors);
 }
 if(u.pathname==='/api/me'&&req.method==='GET'){
  if(!validRequestOrigin(req,env))return reject('Origin not permitted',403);const a=await authorised(req,env);return a?json({login:a.login},200,cors):json({error:'Not signed in'},401,cors);
 }
 if(u.pathname==='/api/logout'&&req.method==='POST'){
  if(!validRequestOrigin(req,env))return reject('Origin not permitted',403);const a=await authorised(req,env);if(a)await env.SESSIONS.delete('session:'+a.key);return json({ok:true},200,cors);
 }
 if(u.pathname==='/api/submit'&&req.method==='POST'){
  if(!validRequestOrigin(req,env))return json({error:'Origin not permitted'},403,cors);
  const a=await authorised(req,env);if(!a)return json({error:'Not signed in'},401,cors);
  if(Number(req.headers.get('Content-Length')||0)>7*1024*1024)return json({error:'Submission too large'},413,cors);
  const body=await req.text();if(body.length>7*1024*1024)return json({error:'Submission too large'},413,cors);
  const payload=JSON.parse(body);validateChangePackage(payload);
  const repo='/repos/'+env.GITHUB_REPO, branch=env.DEFAULT_BRANCH||'main';const base=await gh(a.token,repo+'/git/ref/heads/'+encodeURIComponent(branch));
  const name='admin-review/'+Date.now()+'-'+crypto.randomUUID().slice(0,8);await gh(a.token,repo+'/git/refs',{method:'POST',body:JSON.stringify({ref:'refs/heads/'+name,sha:base.object.sha})});
  const path='admin/submissions/'+name.split('/')[1]+'.json';const packageText=JSON.stringify({...payload,submittedBy:a.login,submittedVia:'blackwood-admin-gateway',reviewStatus:'proposal-only'},null,2)+'\n';
  const rawBytes=new TextEncoder().encode(packageText);let binary='';for(let i=0;i<rawBytes.length;i+=16384)binary+=String.fromCharCode(...rawBytes.subarray(i,i+16384));
  await gh(a.token,repo+'/contents/'+path,{method:'PUT',body:JSON.stringify({message:'Admin: proposed inventory changes by '+a.login,branch:name,content:btoa(binary)})});
  const pr=await gh(a.token,repo+'/pulls',{method:'POST',body:JSON.stringify({title:'Admin review: '+payload.changes.length+' proposed inventory change(s)',head:name,base:branch,draft:true,body:'Submitted from Blackwood CFS Admin by @'+a.login+'.\n\n**PROPOSAL ONLY — Do not merge this submission directly.** Review the edits and photographs, reconcile them into the Excel master using the verified reconciliation workflow, and rebuild the inventory on this branch before making the PR ready for review.\n\nNo operational files are modified by this submission.'})});
  return json({number:pr.number,url:pr.html_url},200,cors);
 }
 return json({error:'Not found'},404,cors);
 }catch(e){return json({error:String(e.message||e).slice(0,350)},500,cors)}
}};
