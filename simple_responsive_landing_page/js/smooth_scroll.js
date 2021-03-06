$(document).ready(function () {

    var scrollMove = $(".scroll");

    // Smooth scrolling            
    scrollMove.click(function (event) {
        event.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });

    // Active menu item switch
    $(window).scroll(function () {
        var scrollBarLocation = $(this).scrollTop();

        scrollMove.each(function () {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollBarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        })
    })
})