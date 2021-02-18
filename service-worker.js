/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c1ba839ae8e54e1535fc251860c2a807"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "538fcee485b391a2de203f9c31d8bd3e"
  },
  {
    "url": "assets/css/0.styles.3a6889ca.css",
    "revision": "2148013bc683c2a6db1d06527fe4ed1d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5f323c03.js",
    "revision": "5ade57e65f8f482f0daa7c279205b006"
  },
  {
    "url": "assets/js/11.9da8ca8e.js",
    "revision": "ba210e62c4d286d9be72f9b99b4b166e"
  },
  {
    "url": "assets/js/12.d767c84b.js",
    "revision": "323ec5e5cc629505632aaf578061e123"
  },
  {
    "url": "assets/js/13.926f325d.js",
    "revision": "c589c6ed5e4f40a27b6d7402721d31cf"
  },
  {
    "url": "assets/js/14.8ce799bc.js",
    "revision": "39700ad7e6c65f6ed3f0867c0c8b8ce1"
  },
  {
    "url": "assets/js/15.e97f79fd.js",
    "revision": "9ef6172de96ea3e37d15235d4f22dfe2"
  },
  {
    "url": "assets/js/16.65085b4b.js",
    "revision": "f7d76546d4631b7d322950b8ad0c345c"
  },
  {
    "url": "assets/js/17.c20a551d.js",
    "revision": "e51803dd1337d7f3170d02a19283845e"
  },
  {
    "url": "assets/js/18.2df752ea.js",
    "revision": "ce34752dd1d98aeb54ce07d0891ad97b"
  },
  {
    "url": "assets/js/2.28317710.js",
    "revision": "bf9e58505f52d1a90df423f123952453"
  },
  {
    "url": "assets/js/3.24899c24.js",
    "revision": "6e7cd518601384858101dec6116d1b3f"
  },
  {
    "url": "assets/js/4.b5c3da84.js",
    "revision": "bafeedb422c27aacb4b53fcf5ead2599"
  },
  {
    "url": "assets/js/5.9b579c25.js",
    "revision": "82d9820f2353c3e4988cd65fe328b476"
  },
  {
    "url": "assets/js/6.53d36be5.js",
    "revision": "469d5deb802eaf65e640f86ca11a8351"
  },
  {
    "url": "assets/js/7.d9d72c41.js",
    "revision": "2f1543b8d0776e8389d7a57a49d3458a"
  },
  {
    "url": "assets/js/8.3ae9339a.js",
    "revision": "1b47a1bec839eeb9263edce343dc6cbb"
  },
  {
    "url": "assets/js/9.ab882125.js",
    "revision": "7908f7d54a75986ac0761374836d107e"
  },
  {
    "url": "assets/js/app.a574cadc.js",
    "revision": "be44855f543fcb238d706ba205a1f754"
  },
  {
    "url": "call-schedule.html",
    "revision": "d17dbef09e9cfd003b97cc0144e7101a"
  },
  {
    "url": "computer-logic.html",
    "revision": "e48202331a29626104fedfcbb606ac64"
  },
  {
    "url": "discrete-computing.html",
    "revision": "c197a1f6574bc86e2a2e359302a916c8"
  },
  {
    "url": "english.html",
    "revision": "81ce2a193ac09fd7a0c67a831758348e"
  },
  {
    "url": "favicon.svg",
    "revision": "393aa766dd6d8544bc8a30c3b8b92145"
  },
  {
    "url": "further-math.html",
    "revision": "4040c1c78bea24effe77f6e15d3e00a3"
  },
  {
    "url": "google-touch-icon.png",
    "revision": "38fdcf0a07d70c006af2a641ceb1bb69"
  },
  {
    "url": "index.html",
    "revision": "ce55407fa6ff9f397a13e2ed014d0290"
  },
  {
    "url": "mask-icon.svg",
    "revision": "28660ceee156adf60ade4f0ffd2ea6b6"
  },
  {
    "url": "physics.html",
    "revision": "e58e63260c538a909b2e62da71f18d50"
  },
  {
    "url": "programming.html",
    "revision": "e788f3595d3a0a3a1305c43788e43e8f"
  },
  {
    "url": "subjects-schedule.html",
    "revision": "5aa09ba83f2d6e8f039a99d27cd2544a"
  },
  {
    "url": "web-programming.html",
    "revision": "11a6ed38f102ca9376615ba9346940c5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
