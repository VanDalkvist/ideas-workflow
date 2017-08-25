var CACHE_NAME = 'ideas';

// todo:
var resourcesToCache = [
    '/',
    '/app/css/style.css',
    '/vendors/babel.js',
    '/vendors/pouchdb.js',
    '/app/register-service-worker.js',
    '/app/store.js',
    '/app/app.js',
];

self.addEventListener('install', function (event) {
    console.info('Installing service worker...');

    var opener = caches.open(CACHE_NAME);
    event.waitUntil(
        opener.then(function (cache) {
            console.info('Cache opened');

            return cache.addAll(resourcesToCache);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.info('Service worker was activated.');
});

self.addEventListener('fetch', function (event) {
    var request = event.request;
    var matcher = caches.match(request);

    event.respondWith(
        matcher.then(function (response) {
            if (response) {
                console.info('Get cached response for request: ', request);
                return response;
            }

            console.info('Fetching ' + request);
            return fetch(request);
        })
    );
});