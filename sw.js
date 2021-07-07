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