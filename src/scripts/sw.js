import {precacheAndRoute} from 'workbox-precaching';
import cacheHelper from './utils/cache-helper';

precacheAndRoute(self.__WB_MANIFEST);

const assetsToCache = [
  './',
  './images/icons/maskable_icon/icon-72x72.png',
  './images/icons/maskable_icon/icon-96x96.png',
  './images/icons/maskable_icon/icon-128x128.png',
  './images/icons/maskable_icon/icon-144x144.png',
  './images/icons/maskable_icon/icon-152x152.png',
  './images/icons/maskable_icon/icon-192x192.png',
  './images/icons/maskable_icon/icon-384x384.png',
  './images/icons/maskable_icon/icon-512x512.png',
  './images/partner-page-icon/Group 37010.png',
  './images/partner-page-icon/Rectangle 86.png',
  './images/partner-page-icon/Vector.png',
  './logo/car.png',
  './logo/cards-container/price.png',
  './logo/cards-container/shield.png',
  './logo/cards-container/high.png',
  './images/assets/partner-page/car.jpg',
  './images/assets/partner-page/car-large.jpg',
  './images/assets/partner-page/car-small.jpg',
  './images/assets/about-us/back-end/developer-1.jpg',
  './images/assets/about-us/back-end/developer-2.jpg',
  './images/assets/about-us/front-end/developer-1.jpg',
  './images/assets/about-us/front-end/developer-2.jpg',
  './images/assets/about-us/fullstack/developer-1.jpg',
  './index.html',
  './favicon/favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
  './images/icons/userProfile-page/Rectangle 86.png',
  './images/icons/userProfile-page/Vector.png',
  './images/assets/icons/WhatsApp Button.png',
  './scripts/script.js',
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
