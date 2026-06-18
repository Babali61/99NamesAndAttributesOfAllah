// Service worker : permet l'utilisation hors ligne de l'application
const CACHE_NAME = 'asma-al-husna-v5';

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
    const requete = event.request;

    if (requete.method !== 'GET') return;

    // On n'intercepte que les ressources de notre propre origine.
    // Les requêtes externes (polices Google, etc.) passent directement
    // au navigateur, sans interception ni mise en cache.
    const url = new URL(requete.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        fetch(requete).then(function(reponseReseau) {
            if (reponseReseau && reponseReseau.status === 200) {
                const copie = reponseReseau.clone();
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(requete, copie);
                });
            }
            return reponseReseau;
        }).catch(function() {
            // Hors ligne : on renvoie la version en cache, ou la page d'accueil
            // en dernier recours, afin de toujours fournir une vraie Response.
            return caches.match(requete, { ignoreSearch: true }).then(function(cache) {
                return cache || caches.match('index.html');
            });
        })
    );
});
