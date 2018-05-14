(function () {

    $(document).ready(function () {
        $('.slider').slick({
            autoplay: true,
            dots: true,
            fade: true,
            prevArrow: $(".slick-prev"),
            nextArrow: $(".slick-next"),
            appendDots: $(".slick-dots"),
            dotsClass: $(".slick-dots"),
            autoplaySpeed: 7000
        });
    });

}())