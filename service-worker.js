const CACHE_NAME = 'blackwood-cfs-v2-8-0-volunteer-options-offline-light-20260729';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  './icon.png',
  './content-metadata.json',
  './offline-assets.json',
  './data/inventory.json',
  './directions/index.html',
  './directions/maps/ubd/maps.js'
];

const OFFLINE_STATUS_URL = new URL('./__offline_status__', self.registration.scope).href;

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
  ));
  self.clients.claim();
});

function updatePreferred(request) {
  const url = new URL(request.url);
  return request.mode === 'navigate' ||
    /\.(html|json|js|css|jpg|jpeg|png|webp|gif|svg|xlsx)$/i.test(url.pathname);
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request, { cache: 'no-cache' });
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw e;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) await cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(updatePreferred(event.request) ? networkFirst(event.request) : cacheFirst(event.request));
});

async function readOfflineStatus() {
  const cache = await caches.open(CACHE_NAME);
  const response = await cache.match(OFFLINE_STATUS_URL);
  if (!response) return null;
  try { return await response.json(); } catch (e) { return null; }
}

async function writeOfflineStatus(status) {
  const cache = await caches.open(CACHE_NAME);
  const response = new Response(JSON.stringify(status), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
  await cache.put(OFFLINE_STATUS_URL, response);
}

function normaliseAssetList(assets) {
  const scope = new URL(self.registration.scope);
  const seen = new Set();
  const output = [];
  for (const asset of Array.isArray(assets) ? assets : []) {
    try {
      const url = new URL(String(asset), scope);
      if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) continue;
      if (seen.has(url.href)) continue;
      seen.add(url.href);
      output.push(url.href);
    } catch (e) {}
  }
  return output;
}

async function prepareOffline(data, port) {
  const urls = normaliseAssetList(data.assets);
  if (!urls.length) throw new Error('No offline assets were supplied.');

  const cache = await caches.open(CACHE_NAME);
  const failed = [];
  let completed = 0;

  for (const url of urls) {
    try {
      const request = new Request(url, { method: 'GET', cache: 'reload', credentials: 'same-origin' });
      const response = await fetch(request);
      if (!response || !response.ok) throw new Error(`HTTP ${response ? response.status : 'error'}`);
      await cache.put(request, response.clone());
    } catch (error) {
      failed.push({ url, message: error && error.message ? error.message : 'Fetch failed' });
    }

    completed += 1;
    if (port) port.postMessage({
      type: 'progress',
      completed,
      total: urls.length,
      failedCount: failed.length,
      url
    });
  }

  const status = {
    version: String(data.version || ''),
    contentUpdatedUtc: String(data.contentUpdatedUtc || ''),
    preparedAtUtc: new Date().toISOString(),
    complete: failed.length === 0,
    assetCount: urls.length,
    failed
  };
  await writeOfflineStatus(status);
  return status;
}

self.addEventListener('message', event => {
  const data = event.data || {};
  const port = event.ports && event.ports[0];
  if (!port) return;

  if (data.type === 'GET_OFFLINE_STATUS') {
    event.waitUntil(readOfflineStatus()
      .then(status => port.postMessage({ type: 'status', status }))
      .catch(error => port.postMessage({ type: 'error', message: error.message || 'Could not read offline status.' })));
    return;
  }

  if (data.type === 'PREPARE_OFFLINE') {
    event.waitUntil(prepareOffline(data, port)
      .then(status => port.postMessage({ type: 'complete', status }))
      .catch(error => port.postMessage({ type: 'error', message: error.message || 'Offline preparation failed.' })));
  }
});
