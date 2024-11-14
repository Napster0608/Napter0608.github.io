'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b4e24f90a2f13343c99582ae71105a06",
"assets/AssetManifest.bin.json": "6fd6191a3bdc40d9020274a3fea7ce0d",
"assets/AssetManifest.json": "a0d569ab06e9747ff84282685e05272b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1d51363fb7cc13a25a23fd61768cf799",
"assets/images/2x2.png": "4caa9e2395a443236750d467a1cf7810",
"assets/images/2x4.png": "0416ee5fc2cc3c8cc5522c4fc3d60170",
"assets/images/2x6.png": "978baf24a3475d3e51efb059ca8baa08",
"assets/images/arduino.png": "c5b5d2319027f0d282228306076f0f77",
"assets/images/bateria_lego.png": "50f3d48271333033a35e3dcad8b2669b",
"assets/images/brick.png": "f9fd58c1bda00b3f57b09c46fb9ecb76",
"assets/images/buzzer.png": "ab21bc794aedb298d5e17f61da47d1e0",
"assets/images/cables_lego.png": "7c153a0a8842f99d06da46501b1e491d",
"assets/images/cable_mini.png": "6775f81a2b51b8aff2a4e870b40e52a0",
"assets/images/cadena.png": "e513f4391d4c195c52d5525acbf82030",
"assets/images/casquilla.png": "8231c90a505d8adba9f650359154e47e",
"assets/images/conector.png": "1f998e81a35b4f053e9c078ffeab66aa",
"assets/images/conector_doble.png": "49d31bab98e2d5296cec97dc667f45d1",
"assets/images/control.png": "6618b5890e173b949fb20109e1b845d9",
"assets/images/disco.png": "ed9f5dc7acd7140cc9b9c123aac886c6",
"assets/images/eje2.png": "a5a1771556c15a522c5afbfaa7aa5a9d",
"assets/images/eje4.png": "f3fc4aa1d3aafb0f69c5f96659a3b2a8",
"assets/images/engranaje24.png": "9a2bd7680dd702e98b0d4c788199f67f",
"assets/images/engranaje40.png": "11028dd5639b6720824193fcdadc57ed",
"assets/images/jumpers.png": "8d87dea5cd9048d6bb8ba550b7711f87",
"assets/images/kit_resistencia.png": "8f635c4c3e75a1c1235fbeec169cd748",
"assets/images/lcd.png": "accaf61fe776c09d5eb92ad65b459cf9",
"assets/images/led_azul.png": "08820651c273a2689f169fa5570d0688",
"assets/images/led_rgb.png": "6b6b71d7a1dbc1e51cbdac3007a00967",
"assets/images/led_rojo.png": "88398d30d5a7f549f1b478b3bc31fcb0",
"assets/images/led_verde.png": "d894e2f9b7a2d5435d2d86efb4e80b14",
"assets/images/lego.png": "d2da6a20ddca0c81ccba343c7e2c3c07",
"assets/images/llantas.png": "95fd8f9ce09c8a6496f86a29d45f496f",
"assets/images/logo.png": "d951099149395aabd0232495a93e9083",
"assets/images/modulo_bluetooth.png": "a4bc1de09bb709b6d0b374f9c11b0a21",
"assets/images/modulo_gps.png": "13e7e724b592d85221ecfdcdc6cfc36f",
"assets/images/modulo_receptor.png": "056aff787544369080dc8402fd38d4fc",
"assets/images/modulo_rele.png": "24e0ed972ddcfd9f53d2e5a62e72284f",
"assets/images/modulo_sd.png": "b89c7f504e0ab9137991b7c4cf329252",
"assets/images/motor.png": "d8fcd1b6f6d5f98f7e509b1c032abd00",
"assets/images/motor_largo.png": "c38609227bd0c815232f06fae04b8138",
"assets/images/motor_mediano.png": "1278071ecb778d694ccd1a3094972ae8",
"assets/images/potenciometro.png": "bf2c374ef3b8bc0cbe58748ffbd0527a",
"assets/images/protoboard.png": "3f2d0ac31152d85ada74b7f0fb30da27",
"assets/images/robostock.png": "5bd5a6fa39cfbae9ca3e2abbeae01dc7",
"assets/images/rueda_bola.png": "d9e5851939852d45e01578d4202473c7",
"assets/images/sensor_cardiaco.png": "58ce3f5b1bfa75a2fb5ae8f34fee047e",
"assets/images/sensor_color_lego.png": "1c5bcb4a060a57ced9694b32fbb006d5",
"assets/images/sensor_fuerza_lego.png": "e3ff7d7a5b16abe418b4be642ad3b27e",
"assets/images/sensor_gas.png": "6259891a61828a4bec798466da63fff8",
"assets/images/sensor_giratorio_lego.png": "6f788d6f01a1676a8bdc44c60d4c0971",
"assets/images/sensor_luz.png": "27b3d164b5c15247861f53039f6e9c22",
"assets/images/sensor_movimiento.png": "c394eb7be51fa74a7e9f62cef187f0cc",
"assets/images/sensor_temp.png": "08053385487c32cacb9a25322bb8311c",
"assets/images/servomotor.png": "1a4cb7b3ff28732515108f55ca3fe8a2",
"assets/images/ultrasonico.png": "4b07ebb7badad9a26b98b09fe43ce753",
"assets/images/ultrasonico_lego.png": "7a94efe9360cac8dbda4dd8941edb5fc",
"assets/images/uno.png": "5abf1b836bce9d4eb62bc458f23dc3e7",
"assets/images/viga7.png": "0bbd7384fae26569bb953b94cb6a901d",
"assets/NOTICES": "263ad7e3384f4be08460e380910863e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "69b5b7a0fd7579e6607e8455bdffe49c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5666b30d576f174a358321a88a59c688",
"/": "5666b30d576f174a358321a88a59c688",
"main.dart.js": "c04461add5c317653427f3a28126aa30",
"manifest.json": "f4926f6e67daec07b4115b1348c3dac4",
"version.json": "a4ff762358a925c63083de17b7a70691"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
