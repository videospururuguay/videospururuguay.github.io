// Videos PUR Uruguay - Service Worker básico
// Cachea el esqueleto de la web para que cargue instantáneo y funcione offline

const CACHE_NAME = 'videos-pur-v2-fix-6h';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/contacto.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-192x192.png',
  '/favicon-512x512.png'
];

// Instalación: guarda los archivos base en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activación: borra cachés viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

// Fetch: intenta red, si falla usa caché (estrategia stale-while-revalidate simple)
self.addEventListener('fetch', event => {
  // No cachear YouTube, API de Google, Adsense, Analytics - FIX para cache 6h
  if (event.request.url.includes('youtube') || 
      event.request.url.includes('googleapis.com') ||
      event.request.url.includes('google.com') ||
      event.request.url.includes('googletagmanager') ||
      event.request.url.includes('googlesyndication') ||
      event.request.url.includes('google-analytics')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        // Guardar copia nueva en caché
        if (networkResponse.ok && event.request.method === 'GET') {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
        }
        return networkResponse;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
