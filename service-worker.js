const CACHE_NAME = 'evolucao-pwa-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './offline.html',
  './manifest.webmanifest',
  './css/style.css',
  './css/dashboard.css',
  './css/charts.css',
  './js/storage.js',
  './js/dashboard.js',
  './js/treino.js',
  './js/dieta.js',
  './js/checklist.js',
  './js/progresso.js',
  './js/panturrilha.js',
  './js/graficos.js',
  './js/app.js',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./offline.html');
        }
      });
    })
  );
});
