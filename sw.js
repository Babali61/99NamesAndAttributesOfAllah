// Service worker : permet l'utilisation hors ligne de l'application
const CACHE_NAME = 'asma-al-husna-v4';

const FICHIERS_APP = [
    './',
    'index.html',
    'nombres_allah.html',
    'quiz.html',
    'noms.js',
    'details.js',
    'i18n.js',
    'manifest.json',
    'icon.svg'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(FICHIERS_APP);
        }).then(function() {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cles) {
            return Promise.all(
                cles.filter(function(cle) { return cle !== CACHE_NAME; })
                    .map(function(cle) { return caches.delete(cle); })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

// Stratégie : réseau d'abord (pour toujours voir la dernière version),
// cache en secours quand on est hors ligne.
self.addEventListener('fetch', function(event) {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request).then(function(reponseReseau) {
            if (reponseReseau && reponseReseau.status === 200) {
                const copie = reponseReseau.clone();
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(event.request, copie);
                });
            }
            return reponseReseau;
        }).catch(function() {
            return caches.match(event.request, { ignoreSearch: true });
        })
    );
});
