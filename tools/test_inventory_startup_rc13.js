// RC13 timer coalescing regression. Run: node tools/test_inventory_startup_rc13.js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
function block(start, stop) {
  const i = html.indexOf(start); assert(i >= 0, `missing ${start}`);
  const end = html.indexOf('</script>', i); assert(end >= 0);
  let source = html.slice(i, end);
  if (stop) source = source.slice(0, source.indexOf(stop));
  return source;
}
function environment() {
  const events = new Map(), timers = new Map(); let sequence = 1;
  const setTimeout = (fn, delay) => { const id = sequence++; timers.set(id, {fn, delay}); return id; };
  const clearTimeout = id => timers.delete(id);
  const run = delay => { for (const [id, t] of [...timers]) if (t.delay === delay) {timers.delete(id);t.fn();} };
  const document = {addEventListener(type, fn){events.set(type, fn)},getElementById(){return null},querySelectorAll(){return []},body:{classList:{contains(){return false}}}};
  return {events,timers,setTimeout,clearTimeout,run,document};
}
{
  const e=environment();
  let cleanupPasses=0;
  const root = {querySelectorAll(sel){cleanupPasses++; return []}};
  e.document.getElementById=id=>id==='lockerPhoto'?root:null;
  vm.runInNewContext(block('// v2.0 remove locker/cabin metadata text from main page only'), {document:e.document,setTimeout:e.setTimeout,clearTimeout:e.clearTimeout,Node:{TEXT_NODE:3}}, {timeout:2000});
  e.events.get('DOMContentLoaded')();
  assert.equal(cleanupPasses,2,'startup cleanup changed');
  assert.equal(e.timers.size,2,'startup passes at 100 and 400 ms required');
  e.run(100);e.run(400);
  assert.equal(cleanupPasses,6,'both startup sweeps required');
  for(let i=0;i<20;i++)e.events.get('click')();
  assert.equal(e.timers.size,1,'20 rapid clicks should schedule one final cleanup');
  e.run(80);
  assert.equal(cleanupPasses,8,'last queued cleanup must execute once');
  e.events.get('click')();e.run(80);
  assert.equal(cleanupPasses,10,'later clicks must still run cleanup');
}
{
  const e=environment();
  let titleScans=0;
  e.document.querySelectorAll=selector=>{if(selector.includes('h1'))titleScans++;return []};
  vm.runInNewContext(block('// v2.0 34P display title fix','// v2.0 remove legacy light/dark button'), {document:e.document,setTimeout:e.setTimeout,clearTimeout:e.clearTimeout}, {timeout:2000});
  e.events.get('DOMContentLoaded')();
  assert.equal(titleScans,1,'immediate startup title check must remain');
  const irrelevant={target:{closest(){return null}}};
  e.events.get('click')(irrelevant);
  assert.equal(e.timers.size,1,'irrelevant click should not schedule work');
  const truck={target:{closest(){return {}}}};
  for(let i=0;i<20;i++)e.events.get('click')(truck);
  assert.equal([...e.timers.values()].filter(x=>x.delay===120).length,1,'rapid appliance clicks should have one timer');
  e.run(120);assert.equal(titleScans,2,'final title must be corrected');
  e.run(250);assert.equal(titleScans,3,'startup delayed correction must remain');
  e.events.get('click')(truck);e.run(120);assert.equal(titleScans,4,'subsequent appliance change must still work');
}
console.log('PASS: RC13 locker-caption and title corrections coalesce without missing startup or later passes');
