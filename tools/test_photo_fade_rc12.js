// RC12 regression test for the inline Inventory photo-fade helper.
// Run: node tools/test_photo_fade_rc12.js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync(require('node:path').join(__dirname, '..', 'index.html'), 'utf8');
const match = html.match(/<script>\s*(\/\/ v2\.0 safer photo fade:[\s\S]*?)<\/script>/);
assert(match, 'Photo-fade helper script missing');
const handlers = {};
let timers = [], scans = 0, loadBindings = 0;
const img = {
  dataset: {}, id: 'lockerPhotoExample', classList: { added: new Set(), add(x){this.added.add(x)}, remove(x){this.added.delete(x)} },
  closest(){ return null }, complete: false, naturalWidth: 0,
  addEventListener(type, fn, opts){ assert.equal(opts.once,true); loadBindings++; handlers['img:'+type] = fn; }
};
const document = {
  addEventListener(type, fn){handlers[type] = fn},
  querySelectorAll(selector){ assert(selector.includes('.photo-modal img')); scans++; return [img] }
};
vm.runInNewContext(match[1], {document, setTimeout(fn,delay){assert.equal(delay,40);timers.push(fn)}}, {timeout:1000});
assert(handlers.DOMContentLoaded, 'DOMContentLoaded handler missing');
handlers.DOMContentLoaded();
assert(handlers.click, 'Click handler missing');
for (let i=0;i<20;i++) handlers.click();
assert.equal(timers.length,1,'20 rapid clicks should schedule only one scan');
timers.shift()();
assert.equal(scans,1);
assert.equal(loadBindings,2,'One load and one error listener per image');
assert(handlers['img:load']);
handlers['img:load']();
assert(img.classList.added.has('photo-ready'));
handlers.click();
assert.equal(timers.length,1,'Click after previous scan must schedule another');
timers.shift()();
assert.equal(scans,2);
assert.equal(loadBindings,2,'Existing image must not be rebound');
console.log('RC12 photo fade regression: PASS (20 clicks -> 1 scan; subsequent click -> new scan)');
