const CACHE_NAME = "next-app-cache-v1";
const urlsToCache = [
  "/", 
  "/favicon.ico",
  "/site.webmanifest",
];

// Install event → cache essential files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event → cache-first strategy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // ✅ Serve from cache if available
      }

      // Fetch from network & store in cache
      return fetch(event.request)
        .then((response) => {
          // Only cache valid responses (status 200, type basic = same-origin)
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Optional: fallback page when offline
          if (event.request.mode === "navigate") {
            return caches.match("/");
          }
        });
    })
  );
});

// Activate event → cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
