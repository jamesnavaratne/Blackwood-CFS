// RC14/15 regression: photo load sequencing and ribbon/opacity invariants.
// Run: node tools/test_modal_reliability_rc14_15.js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const base = html.indexOf('function openItemModal(r) {');
const start = html.indexOf('  // RC14/15: render a stable placeholder', base);
const stop = html.indexOf('  const existingToggle =', start);
assert(start > base && stop > start, 'item preview load code absent');
const itemSource = html.slice(start, stop);
const photoStart = html.indexOf('  function openPhotoModal(src, title, caption) {');
const photoEnd = html.indexOf('  window.openPhotoModal = openPhotoModal;', photoStart);
assert(photoStart >= 0 && photoEnd > photoStart, 'expanded modal logic absent');
const photoSource = html.slice(photoStart, photoEnd);
function cls() { const state=new Set(); return {add(...s){s.forEach(x=>state.add(x));},remove(...s){s.forEach(x=>state.delete(x));},contains(x){return state.has(x)}}; }
const images=[];
class FakeImage {
  constructor(){this.naturalWidth=120;this.classList=cls();images.push(this);}
  decode(){return Promise.resolve();}
  set src(v){this._src=v;}
  get src(){return this._src;}
}
const modalPhoto={classList:cls(),dataset:{},setAttribute(){},replaceChildren(...children){this.children=children}};
const context={Image:FakeImage,modalPhoto,esc:x=>x,itemPhotoRequestToken:0,src:'photo-1.jpg',r:{item:'Photo One'}};
vm.createContext(context);
const applyItem = (src,item) => {
  context.src=src; context.r={item};
  vm.runInContext("(function(){"+itemSource+"})()",context);
};
function ui() {return {classList:cls(), textContent:'', src:'',alt:'',removeAttribute(k){if(k==='src')this.src=''}};}
const photoModal=ui(),photoModalBackdrop=ui(),photoModalImg=ui(),photoModalTitle=ui(),photoModalCaption=ui();
let callbacks=[];
const photoContext={Image:FakeImage,photoModal,photoModalBackdrop,photoModalImg,photoModalTitle,photoModalCaption,
  resetPhotoZoom(){}, requestAnimationFrame(fn){callbacks.push(fn);},window:{},console};
vm.createContext(photoContext);
vm.runInContext('let photoOpenToken = 0;\n'+photoSource+'\nthis.openPhotoModal=openPhotoModal;this.closePhotoModal=closePhotoModal;',photoContext);
const tick=async()=>{for(let i=0;i<6;i++)await Promise.resolve();};
(async()=>{
  applyItem('old.jpg','Old');const oldImg=images.at(-1);
  applyItem('new.jpg','New');const newImg=images.at(-1);
  oldImg.onload(); await tick();
  assert.equal(modalPhoto.children.length,0,'stale item load must not replace newer selection');
  newImg.onload(); await tick();
  assert.equal(modalPhoto.children[0],newImg,'decoded item image must be installed once');
  assert(modalPhoto.classList.contains('has-photo'));
  photoContext.openPhotoModal('first.jpg','First','Caption');const first=images.at(-1);
  photoContext.openPhotoModal('second.jpg','Second','Caption 2');const second=images.at(-1);
  first.onload(); await tick();
  assert.equal(photoModalImg.src,'','stale expanded image must not be shown');
  second.onload(); await tick();
  callbacks.splice(0).forEach(fn=>fn());
  assert.equal(photoModalImg.src,'second.jpg','latest expanded photo selected');
  assert(!photoModal.classList.contains('cfs-photo-pending'));
  photoContext.closePhotoModal();
  assert(!photoModal.classList.contains('open'));
  assert.equal(photoModalImg.src,'');
  assert(html.includes('bottom: calc(84px + env(safe-area-inset-bottom)) !important;'),'ribbon clearance missing');
  assert(html.includes('#modalPhoto.cfs-item-photo-loading::before'),'inline item spinner missing');
  assert(html.includes('cfs-photo-pending .photo-modal-image-wrap::before'),'expanded photo spinner missing');
  console.log('PASS: stale image loads ignored, decoded photos displayed once, loader and ribbon clearances retained');
})().catch(e=>{console.error(e);process.exitCode=1});
