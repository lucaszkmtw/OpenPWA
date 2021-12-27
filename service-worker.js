let cacheName = "OpenGithubPWA";// 👈 any unique name

let filesToCache = [
  "/OpenPWA/", // 👈 your repository name , both slash are important
  "service-worker.js",
  "manifest.json",
  "js/main.js",
  "js/install-handler.js",
  "js/settings.js",
  "js/materialize.min.js",
  "js/script.js",
  "css/main.css",
  "css/materialize.min.css",
  "css/styles.css",
  "assets/icons/atendido.png",
  "assets/icons/banner_up.png",
  "assets/icons/color-fondo.png",
  "assets/icons/footer_fechas.png",
  "assets/icons/icon.png",
  "assets/icons/qr.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(cacheName).then((cache) => {
    console.log('installed successfully')
    return cache.addAll(filesToCache)
  }));
});

self.addEventListener('fetch', function (event) {

  if (event.request.url.includes('clean-cache')) {
    caches.delete(cacheName);
    console.log('Cache cleared')
  }

  event.respondWith(caches.match(event.request).then(function (response) {
    if (response) {
      console.log('served form cache')
    } else {
      console.log('Not serving from cache ', event.request.url)
    }
    return response || fetch(event.request);
  })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          console.log('service worker: Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
