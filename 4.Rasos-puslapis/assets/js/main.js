(function () {

    jQuery(document).ready(function ($) {
        $('.slider').slick({
            autoplay: true,
            dots: false,
            fade: true,
           // prevArrow: $(".slick-prev"),
           // nextArrow: $(".slick-next"),
           // appendDots: $(".slick-dots"),
           // dotsClass: $(".slick-dots"),
            autoplaySpeed: 5000
        });
    });
}());