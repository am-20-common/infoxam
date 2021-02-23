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
    "revision": "7dc61d7940318755b29eb4477f60b7da"
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
    "url": "assets/js/11.7e6104fa.js",
    "revision": "6e6627afb0a784a8a723bdb55b9147fd"
  },
  {
    "url": "assets/js/12.d767c84b.js",
    "revision": "323ec5e5cc629505632aaf578061e123"
  },
  {
    "url": "assets/js/13.40ce9c61.js",
    "revision": "5788e1f6201be092bf235c14028f2b1f"
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
    "url": "assets/js/app.8f3829fe.js",
    "revision": "5cfb4fae564e885fdd1736d79b11a650"
  },
  {
    "url": "call-schedule.html",
    "revision": "8ae703a682aed5dee26b815d58698b86"
  },
  {
    "url": "computer-logic.html",
    "revision": "d38c3b6670ef1e4deb558a64e4f47c5e"
  },
  {
    "url": "discrete-computing.html",
    "revision": "6e101285b5220cf4b18d84a730c8f221"
  },
  {
    "url": "english.html",
    "revision": "659d6540f7bcd17c7cc65cb19670612c"
  },
  {
    "url": "favicon.svg",
    "revision": "393aa766dd6d8544bc8a30c3b8b92145"
  },
  {
    "url": "further-math.html",
    "revision": "95fd2837581df8024f7e2458039ec0f5"
  },
  {
    "url": "google-touch-icon.png",
    "revision": "38fdcf0a07d70c006af2a641ceb1bb69"
  },
  {
    "url": "index.html",
    "revision": "3fc4f487663ad9c541031463f34a64c9"
  },
  {
    "url": "mask-icon.svg",
    "revision": "28660ceee156adf60ade4f0ffd2ea6b6"
  },
  {
    "url": "pe.html",
    "revision": "67f96d01cb2c67137e1f0dfb511df6d2"
  },
  {
    "url": "physics.html",
    "revision": "4ababc264029805f0b2a55b32dce3eaa"
  },
  {
    "url": "programming.html",
    "revision": "e8b53388571cb87895b85bf4b0b2920a"
  },
  {
    "url": "web-programming.html",
    "revision": "cbd67431c1d583b5492d6cba88ce3cca"
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
