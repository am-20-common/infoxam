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
    "revision": "74e40f70e123d6efb791ff4f6689424f"
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
    "url": "assets/js/11.3d65495a.js",
    "revision": "36c8853c1c76bf2036eb31c9e86b14a7"
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
    "url": "assets/js/17.fdf2064a.js",
    "revision": "76008b570bde62959e3b2902df7e4c39"
  },
  {
    "url": "assets/js/18.07867167.js",
    "revision": "329b5911e72ac7f3f56c2f82a162a90d"
  },
  {
    "url": "assets/js/19.0f7aa7b2.js",
    "revision": "7ee88e9db42dc73295e3b158f183b790"
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
    "url": "assets/js/4.8c85a7d1.js",
    "revision": "0a314fa4fd2cc06f3192493d4a2d0187"
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
    "url": "assets/js/app.66d40acb.js",
    "revision": "02bf7d00da0c95d644b538e368fb688f"
  },
  {
    "url": "call-schedule.html",
    "revision": "fd82db4748b7c6767761effe02e975c6"
  },
  {
    "url": "computer-logic.html",
    "revision": "cd8f7b7518c708f401433f7e812c6fdb"
  },
  {
    "url": "discrete-computing.html",
    "revision": "feda6de965a7a164326a4bc7076278e5"
  },
  {
    "url": "english.html",
    "revision": "f9c438edaebcd47842ed4aa96849e127"
  },
  {
    "url": "favicon.svg",
    "revision": "393aa766dd6d8544bc8a30c3b8b92145"
  },
  {
    "url": "further-math.html",
    "revision": "118fed91de98e85d774ee572d7d0d793"
  },
  {
    "url": "google-touch-icon.png",
    "revision": "38fdcf0a07d70c006af2a641ceb1bb69"
  },
  {
    "url": "index.html",
    "revision": "a944fbd8efd0fa00372fdcb6e45674c0"
  },
  {
    "url": "mask-icon.svg",
    "revision": "28660ceee156adf60ade4f0ffd2ea6b6"
  },
  {
    "url": "pe.html",
    "revision": "7308688f92e438fda9eb60c3dcddbc44"
  },
  {
    "url": "physics.html",
    "revision": "373795f0461243caef6711d1b6b4ed56"
  },
  {
    "url": "programming.html",
    "revision": "54580942588bdb501816f43e308ebaac"
  },
  {
    "url": "subjects-schedule.html",
    "revision": "9001576a8d129a4c8151d6fe80a3b407"
  },
  {
    "url": "web-programming.html",
    "revision": "4d80034ed7189f90e0b439f4a7518feb"
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
