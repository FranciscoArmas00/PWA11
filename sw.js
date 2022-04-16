var appShellFiles = [
'/PWA11/styles.css',
'/PWA11/swiper.css',
'/PWA11/bootstrap.css',
'/PWA11/fontawesome-all.css',
'/PWA11/magnific-popup.css',
'/PWA11/index.html',
'/PWA11/article-details.html',
'/PWA11/terms-conditions.html',
'/PWA11/js/bootstrap.min.js',
'/PWA11/js/jquery.countdown.min.js',
'/PWA11/js/jquery.easing.min.js',
'/PWA11/js/jquery.magnific-popup.js',
'/PWA11/js/jquery.min.js',
'/PWA11/js/popper.min.js',
'/PWA11/js/scripts.js',
'/PWA11/js/swiper.min.js',
'/PWA11/js/validator.min.js',
'/PWA11/images/article-details-large.jpg',
'/PWA11/images/article-details-small.jpg',
'/PWA11/images/customer-logo-1.jpg',
'/PWA11/images/customer-logo-2.jpg',
'/PWA11/images/customer-logo-3.jpg',
'/PWA11/images/customer-logo-4.jpg',
'/PWA11/images/customer-logo-5.jpg',
'/PWA11/images/customer-logo-6.jpg',
'/PWA11/images/date-background.jpg',
'/PWA11/images/details-lightbox.jpg',
'/PWA11/images/details-slide-1.jpg',
'/PWA11/images/details-slide-2.jpg',
'/PWA11/images/details-slide-3.jpg',
'/PWA11/images/down-arrow.png',
'/PWA11/images/favicon.png',
'/PWA11/images/header-background.jpg',
'/PWA11/images/instructor.jpg',
'/PWA11/images/students.jpg',
'/PWA11/images/testimonial-1.jpg',
'/PWA11/images/testimonial-2.jpg',
'/PWA11/images/testimonial-3.jpg',
'/PWA11/images/testimonial-4.jpg',
'/PWA11/images/up-arrow.png',
'/PWA11/images/video.jpg',
];

self.addEventListener('install', event => {

    const endInstall = caches.open('box').then(cache => {
        return cache.addAll(appShellFiles);
    });

    event.waitUntil(endInstall);

    self.skipWaiting();
});

self.addEventListener('fetch', e => {

    const respuesta = caches.open('box').then(cache => {

        fetch(e.request).then(newsRes =>
            cache.put(e.request, newsRes));

        return cache.match(e.request);

    });

    e.respondWith(respuesta);
});
