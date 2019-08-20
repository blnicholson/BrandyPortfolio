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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-d79e01517b7d6dfb71d3.js"
  },
  {
    "url": "app-ae64b56fb270f3843a1c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-f5bc740674f3f94ccec8.js"
  },
  {
    "url": "index.html",
    "revision": "7e689f8403a486666d79766191e0cb0b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5f1ead1d6b32fe7b538d6e023aa30153"
  },
  {
    "url": "styles.93b9fb149307ff260113.css"
  },
  {
    "url": "google-fonts/s/luckiestguy/v9/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2",
    "revision": "c4ae5565ab9ac437142d1c22ddc2cee0"
  },
  {
    "url": "google-fonts/s/opensans/v16/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    "revision": "33543c5cc5d88f5695dd08c87d280dfd"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    "revision": "33543c5cc5d88f5695dd08c87d280dfd"
  },
  {
    "url": "google-fonts/s/rakkas/v6/Qw3cZQlNHiblL3jPkdFO.woff2",
    "revision": "83a6e6e431e1df385237a0d7fb92e967"
  },
  {
    "url": "google-fonts/s/rakkas/v7/Qw3cZQlNHiblL3jPkdFO.woff2",
    "revision": "83a6e6e431e1df385237a0d7fb92e967"
  },
  {
    "url": "google-fonts/s/righteous/v7/1cXxaUPXBpj2rGoU7C9WiHGF.woff2",
    "revision": "2669249f36607a740d21ff026caca825"
  },
  {
    "url": "styles-863a45bf06c0c7b7c3f9.js"
  },
  {
    "url": "component---src-pages-index-js-20d47586f30fce41799c.js"
  },
  {
    "url": "static/d/140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8.json",
    "revision": "02094403799cfe9d216f51de06d00d63"
  },
  {
    "url": "1-b2ea825cda328b0c957f.js"
  },
  {
    "url": "component---src-pages-404-js-228a1cc1f763153544b3.js"
  },
  {
    "url": "static/d/285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8.json",
    "revision": "02094403799cfe9d216f51de06d00d63"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json",
    "revision": "e0f3b054b6dcf2c5a113801b73f75867"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});