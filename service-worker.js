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
    "revision": "948f7dbe46a58e61872d63468dbd20a3"
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
    "url": "assets/js/10.f3206a23.js",
    "revision": "17ffa6ffdf345032ea0076afeb289619"
  },
  {
    "url": "assets/js/11.7da48e85.js",
    "revision": "7526f21bbc7433c8a5db28842ac28f3e"
  },
  {
    "url": "assets/js/12.d767c84b.js",
    "revision": "323ec5e5cc629505632aaf578061e123"
  },
  {
    "url": "assets/js/13.16b03110.js",
    "revision": "f1b0503deeb762291573aebe1c41ecc9"
  },
  {
    "url": "assets/js/14.10193a17.js",
    "revision": "1aab8a0537c2dfea600b8c4cb2ba862b"
  },
  {
    "url": "assets/js/15.6d00cc25.js",
    "revision": "5845bd77cf4c7545fdd54083f960e9e5"
  },
  {
    "url": "assets/js/16.39b9526b.js",
    "revision": "1198c6dfb7096e6fc0115f899afda1b7"
  },
  {
    "url": "assets/js/17.c40f6ad6.js",
    "revision": "b79f1da6ea0e5202167b4f43755513d3"
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
    "url": "assets/js/8.3d38a756.js",
    "revision": "5750650fa61ba84d66a7a8f0c5670e91"
  },
  {
    "url": "assets/js/9.ab882125.js",
    "revision": "7908f7d54a75986ac0761374836d107e"
  },
  {
    "url": "assets/js/app.97a7b686.js",
    "revision": "233fcb755fa7f434e55ac597a90ce0d6"
  },
  {
    "url": "call-schedule.html",
    "revision": "a1e770c78ae9cf48f5270a0d6528e568"
  },
  {
    "url": "computer-logic.html",
    "revision": "01a50f6047b3f2e27a31c9861df98590"
  },
  {
    "url": "discrete-computing.html",
    "revision": "eb8b61bc4f790021e0a06457067a8e9e"
  },
  {
    "url": "english.html",
    "revision": "f9a68c92e456fa1c51a55e0010213d6e"
  },
  {
    "url": "favicon.svg",
    "revision": "393aa766dd6d8544bc8a30c3b8b92145"
  },
  {
    "url": "further-math.html",
    "revision": "34909c1b62ce7a5c56bd67fc3e429da6"
  },
  {
    "url": "google-touch-icon.png",
    "revision": "38fdcf0a07d70c006af2a641ceb1bb69"
  },
  {
    "url": "index.html",
    "revision": "5819de3492d2f0565f6b50301d067c2a"
  },
  {
    "url": "mask-icon.svg",
    "revision": "28660ceee156adf60ade4f0ffd2ea6b6"
  },
  {
    "url": "pe.html",
    "revision": "376cf456d1627d2c650f58506b69dc2e"
  },
  {
    "url": "physics.html",
    "revision": "fb3bd46e92db4872168a9e88f3f9845f"
  },
  {
    "url": "programming.html",
    "revision": "e3ced6466e1617e2e1b83139bf862abd"
  },
  {
    "url": "web-programming.html",
    "revision": "bd947c0b3636433d108f5c2c003f0228"
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
