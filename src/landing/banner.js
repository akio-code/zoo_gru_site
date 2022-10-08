import 'glider-js/glider';

window.addEventListener('load', function(){
    let bannerElement = document.getElementById('zoo-banner').querySelector('.zoo-carousel');
    console.log(bannerElement);

    new Glider(bannerElement, {
        slidesToShow: 1,
        // dots: '.dots',
        draggable: true,
        scrollLock: true,
        arrows: {
            prev: '.btn.prev',
            next: '.btn.next'
        }
    });
})
