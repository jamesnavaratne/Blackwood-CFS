#!/usr/bin/env node
// Blackwood CFS RC10 service-worker concurrency regression test.
// Tests only read coalescing; it does not simulate Android Cache Storage.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const code = fs.readFileSync(path.join(__dirname, '..', 'service-worker.js'), 'utf8');
let statusReads = 0, manifestReads = 0;
const scope = {
  URL, Promise, Set, Response, Request,
  self: { registration: { scope:'https://example.test/cfs/' }, location:{origin:'https://example.test'},
          addEventListener(){} },
  caches: {
    async open(key) {
      if (key.includes('status')) return {async match(){ statusReads++; await new Promise(r=>setTimeout(r,15));
        return new Response(JSON.stringify({complete:true,version:'v'})); }};
      return {async match(){ manifestReads++; await new Promise(r=>setTimeout(r,15));
        return new Response(JSON.stringify({version:'v'})); }};
    }
  },
  fetch(){ throw new Error('unexpected network fetch') },
};
vm.createContext(scope);
vm.runInContext(code, scope);
(async()=>{
  const batch = await Promise.all(Array.from({length:20},()=>vm.runInContext('getMediaReadiness()',scope)));
  assert.equal(statusReads,1,'Concurrent checks should read status once');
  assert.equal(manifestReads,1,'Concurrent checks should read manifest once');
  assert.equal(batch[0][0].complete,true);
  await vm.runInContext('getMediaReadiness()',scope);
  assert.equal(statusReads,2,'Later checks must reread status rather than reuse a stale answer');
  assert.equal(manifestReads,2,'Later checks must reread the manifest');
  process.stdout.write('PASS: 20 parallel requests share one read; later requests check afresh.\n');
})().catch(err=>{console.error(err);process.exitCode=1});
