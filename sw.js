const STATIC_CACHE = 'grulya-fm-static-v5';
const DYNAMIC_CACHE = 'grulya-fm-dynamic-v5';
const IMAGE_CACHE = 'grulya-fm-images-v5';
const OFFLINE_URL = '/offline.html';

const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  '/favicon.ico',
  '/icon-72.png',
  '/icon-96.png',
  '/icon-144.png',
  '/icon-192.png',
  '/icon-512.png',
  OFFLINE_URL
];

// Install event - cache static resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static resources');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName !== IMAGE_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stale-while-revalidate helper
async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);

  const fetchPromise = fetch(request).then(response => {
    if (response && response.status === 200) {
      const copy = response.clone();
      caches.open(cacheName).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => cached);

  return cached || fetchPromise;
}

// Fetch event - advanced caching strategies
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle GET over http/https
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) return;

  // Skip radio streams - never cache audio streams
  if (url.pathname.includes('/stream') ||
      url.pathname.includes('/radio') ||
      url.pathname.endsWith('.m3u') ||
      url.pathname.endsWith('.pls') ||
      url.pathname.endsWith('.m3u8') ||
      request.headers.get('accept')?.includes('audio/')) {
    return; // Let it go directly to network
  }

  const accepts = request.headers.get('accept') || '';
  const dest = request.destination;
  const isHTML = request.mode === 'navigate' || accepts.includes('text/html') || dest === 'document';
  const isCSSorJS = dest === 'style' || dest === 'script';
  const isImage = dest === 'image' || accepts.includes('image/');

  // Network-first for HTML and critical assets (CSS/JS) with offline fallback
  if (isHTML || isCSSorJS) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(STATIC_CACHE).then(cache => {
            const key = isHTML ? '/index.html' : request;
            cache.put(key, copy);
          });
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;

          // Return offline page for navigation requests
          if (isHTML) {
            return caches.match(OFFLINE_URL) || new Response(
              '<h1>Offline</h1><p>No internet connection. Please check your network.</p>',
              { headers: { 'Content-Type': 'text/html' } }
            );
          }
          return cached;
        })
    );
    return;
  }

  // Stale-while-revalidate for images (album art, station logos)
  if (isImage) {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
    return;
  }

  // Cache-first for other assets (icons, fonts)
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(networkResp => {
        if (networkResp && networkResp.status === 200) {
          const copy = networkResp.clone();
          caches.open(DYNAMIC_CACHE).then(cache => cache.put(request, copy));
        }
        return networkResp;
      });
    })
  );
});

// Handle background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
    // Handle offline actions when connection is restored
  }
});

// Handle push notifications (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192.png',
      badge: '/icon-72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Open App',
          icon: '/icon-192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-192.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
