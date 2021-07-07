self.addEventListener('install', () => {
    console.log(`installing service worker`);
})

self.addEventListener('activate', () => {
    console.log(`activating service worker`);
})

self.addEventListener('fetch', event => {
    console.log(`fetching...
    ${event.request.url}`);
})

// var CACHE_NAME = 'syazarilasyraf-cache-v2';
// var urlsToCache = [
//   'index.html',
//   './',
//   'assets/css/main.css',
//   'icons/logo.ico'
// ];

// self.addEventListener('install', function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });


// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// });


// self.addEventListener('activate', function(event) {
//   console.log('Updating Service Worker...')
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function(cacheName) {
//           // Return true if you want to remove this cache,
//           // but remember that caches are shared across
//           // the whole origin
//           return true
//         }).map(function(cacheName) {
//           return caches.delete(cacheName);
//         })
//       );
//     })
//   );
// });

// self.addEventListener('install', function(event) {
//     event.waitUntill(
//         caches.open(sw-cache).then(function(cache) {

//             return cache.add('index.html');
//         })
//     );
// });

// self.addEventListener('fetch', function(event) {
//     event.respondWith(

//         caches.match(event.request).then(function(response {

//             return response || fetch(event.request);
//         })
//     );
// });