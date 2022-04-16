var userImages = [];
userImages.push('/img/Tab_icon.png');

var appShellFiles = ['/index.html', '/cart.html', '/payment.html', '/shop.html'];
var contentToCache = appShellFiles.concat(userImages);

//console.log(userImages);

self.addEventListener('install', event => {
    caches.open('box-1');

    caches.open('box').then(cache => {

        //cache.add('/index.html');
        //cache.add('/about.html');

        //cache.addAll([ '/index.html', '/about.html', '/portfolio.html' ]);

        cache.addAll(contentToCache);

        cache.match('/index.html')
            .then(res => {
                res.text().then(console.log);
            });
    });


    self.skipWaiting();
});