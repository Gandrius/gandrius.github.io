$(document).ready(function () {

    var scrollMove = $(".scroll");

    // Smooth scrolling            
    scrollMove.click(function (event) {
        event.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
        $("ul.nav").toggleClass("show");
    });

    // Active menu item switch
    $(window).scroll(function () {
        var scrollBarLocation = $(this).scrollTop();

        scrollMove.each(function () {

            var sectionOffset = $(this.hash).offset().top - 10;

            if (sectionOffset <= scrollBarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        })
    })

    $(".secret").on("click", function () {
        $('.nav').toggleClass("show");
    });
})