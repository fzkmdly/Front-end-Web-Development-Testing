import {precacheAndRoute} from 'workbox-precaching';
import cacheHelper from './utils/cache-helper';

precacheAndRoute(self.__WB_MANIFEST);

const assetsToCache = [
  './',
  './images/icons/icon-72x72.png',
  './images/icons/icon-96x96.png',
  './images/icons/icon-128x128.png',
  './images/icons/icon-144x144.png',
  './images/icons/icon-152x152.png',
  './images/icons/icon-192x192.png',
  './images/icons/icon-384x384.png',
  './images/icons/icon-512x512.png',
  './images/partner-page-icon/Group 37010.png',
  './images/partner-page-icon/Rectangle 86.png',
  './images/partner-page-icon/Vector.png',
  './logo/car.png',
  './logo/cards-container/price.png',
  './logo/cards-container/shield.png',
  './logo/cards-container/high.png',
  './assets/partner-page/car.jpg',
  './assets/partner-page/car-large.jpg',
  './assets/partner-page/car-small.jpg',
  './assets/about-us/back-end/developer-1.jpg',
  './assets/about-us/back-end/developer-2.jpg',
  './assets/about-us/front-end/developer-1.jpg',
  './assets/about-us/front-end/developer-2.jpg',
  './assets/about-us/fullstack/developer-1.jpg',
  './index.html',
  './favicon/favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntill(cacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntill(cacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheHelper.revalidateCache(event.request));
});
