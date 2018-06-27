(function () {

    $(document).ready(function () {
        $('.slider').slick({
            autoplay: true,
            dots: false,
            infinite: true,
            fade: true,
            autoplaySpeed: 7000,
            cssEase: 'ease'
        });

        // $('.fade').slick({
        //     dots: true,
        //     infinite: true,
        //     speed: 5000,
        //     fade: true,
        //     cssEase: 'linear'
        // });
    });
}());