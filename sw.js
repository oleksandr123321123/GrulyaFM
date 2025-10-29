const CACHE_NAME = 'grulya-fm-v2';
const STATIC_CACHE = 'grulya-fm-static-v4';
const DYNAMIC_CACHE = 'grulya-fm-dynamic-v4';

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/icon-72.png",
  "/sw.js"
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
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle GET over http/https
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) return;

  const accepts = request.headers.get('accept') || '';
  const dest = request.destination;
  const isHTML = request.mode === 'navigate' || accepts.includes('text/html') || dest === 'document';
  const isCSSorJS = dest === 'style' || dest === 'script';

  // Network-first for HTML and critical assets (CSS/JS) to avoid stale UI
  if (isHTML || isCSSorJS) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Update cached copy
          const copy = response.clone();
          caches.open(STATIC_CACHE).then(cache => {
            const key = isHTML ? '/index.html' : request;
            cache.put(key, copy);
          });
          return response;
        })
        .catch(() => {
          if (isHTML) return caches.match('/index.html');
          return caches.match(request);
        })
    );
    return;
  }

  // Cache-first for other GET requests with network fallback
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(networkResp => {
        if (networkResp && networkResp.status === 200 && networkResp.type === 'basic') {
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
