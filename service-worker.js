self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-pwa-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/icon.png',
          'https://sheetdb.io/s/f/vvnuioo63q9nw.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
