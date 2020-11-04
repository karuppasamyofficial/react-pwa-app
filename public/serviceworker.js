


const CACHE_NAME = "version-2";
const urlsToCache = ['index.html','offline.html'];




// life cycle of sw 1.register 2.install 3.activate
//install event 
self.addEventListener('install', (event) => {
    console.log("install service worker");
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('sw cache the files');
                return cache.addAll(urlsToCache);
            })
    )
});
//Activate event 
self.addEventListener('install', (event) => {
    console.log("activate service worker");
    //remove the unwanted caches
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    console.log("sw clearing the old cache");
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )

   
});





// fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});



self.addEventListener('push', event => {
    const data = event.data.json()
    console.log('New notification', data)
    const options = {
      body: data.body,
    }
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  })

