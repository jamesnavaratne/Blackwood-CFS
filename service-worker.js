const CACHE_NAME = 'blackwood-cfs-v2-9-0-directions-speech-20260730';
const OFFLINE_CACHE_NAME = 'blackwood-cfs-offline-content-v1';
const STATUS_CACHE_NAME = 'blackwood-cfs-offline-status-v1';
const CACHE_PREFIX = 'blackwood-cfs-';

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
  // Deliberately do not skip waiting here. An existing installation should show
  // the in-app update prompt and let the volunteer choose when to refresh.
});

async function migrateLegacyOfflineData() {
  const keys = await caches.keys();
  const keep = new Set([CACHE_NAME, OFFLINE_CACHE_NAME, STATUS_CACHE_NAME]);
  const legacyKeys = keys.filter(key => key.startsWith(CACHE_PREFIX) && !keep.has(key));
  if (!legacyKeys.length) return;

  const offlineCache = await caches.open(OFFLINE_CACHE_NAME);
  const statusCache = await caches.open(STATUS_CACHE_NAME);

  for (const key of legacyKeys) {
    const legacy = await caches.open(key);

    // v2.8.2 and earlier stored readiness status inside the replaceable app cache.
    const legacyStatus = await legacy.match(OFFLINE_STATUS_URL);
    if (legacyStatus && !(await statusCache.match(OFFLINE_STATUS_URL))) {
      await statusCache.put(OFFLINE_STATUS_URL, legacyStatus.clone());
    }

    // Preserve previously prepared photos/maps while the app shell is replaced.
    for (const request of await legacy.keys()) {
      if (request.url === OFFLINE_STATUS_URL) continue;
      if (await offlineCache.match(request)) continue;
      const response = await legacy.match(request);
      if (response) await offlineCache.put(request, response.clone());
    }
  }

  await Promise.all(legacyKeys.map(key => caches.delete(key)));
}

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await migrateLegacyOfflineData();
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && ![CACHE_NAME, OFFLINE_CACHE_NAME, STATUS_CACHE_NAME].includes(key))
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

function updatePreferred(request) {
  const url = new URL(request.url);
  return request.mode === 'navigate' ||
    /\.(html|json|js|css|jpg|jpeg|png|webp|gif|svg|xlsx)$/i.test(url.pathname);
}

async function cachedFallback(request) {
  const appCache = await caches.open(CACHE_NAME);
  const appMatch = await appCache.match(request);
  if (appMatch) return appMatch;
  const offlineCache = await caches.open(OFFLINE_CACHE_NAME);
  return offlineCache.match(request);
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request, { cache: 'no-cache' });
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cachedFallback(request);
    if (cached) return cached;
    throw e;
  }
}

async function cacheFirst(request) {
  const cached = await cachedFallback(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Connectivity and update probes must be genuinely network-only; a cached
  // response would incorrectly report current connectivity/content.
  if (url.origin === self.location.origin && url.searchParams.get('connectivity') === '1') {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
    return;
  }

  event.respondWith(updatePreferred(event.request) ? networkFirst(event.request) : cacheFirst(event.request));
});

async function readOfflineStatus() {
  const statusCache = await caches.open(STATUS_CACHE_NAME);
  const response = await statusCache.match(OFFLINE_STATUS_URL);
  if (!response) return null;
  try { return await response.json(); } catch (e) { return null; }
}

async function writeOfflineStatus(status) {
  const statusCache = await caches.open(STATUS_CACHE_NAME);
  const response = new Response(JSON.stringify(status), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
  await statusCache.put(OFFLINE_STATUS_URL, response);
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

  const cache = await caches.open(OFFLINE_CACHE_NAME);
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

  if (failed.length === 0) {
    const wanted = new Set(urls);
    for (const request of await cache.keys()) {
      if (!wanted.has(request.url)) await cache.delete(request);
    }
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

  if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }

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
