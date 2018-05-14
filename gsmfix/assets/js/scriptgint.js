jQuery(function ($) {
    // (function () {

    $('#mymenulist li').click(gotoid);
    function gotoid() {
        event.preventDefault();
        var x = document.getElementById("mymenulist");
        x.className = "menu-list flex-horizontaliai";
        // $('html, body').animate({scrollTop: $("#"+this.attr("alt")).offset().top-45}, 1000);
        var nav = $("#" + $(this).attr("alt"));
        if (nav.length) {
            var contentNav = nav.offset().top;
            $('html, body').animate({ scrollTop: contentNav }, 800);
        }

    }

    $('.logo-holder').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // document.getElementsByTagName("BODY")[0].onresize = function() {
    $(window).bind('resize', function () {
        // $( window ).resize(function() {
        var x = document.getElementById("mymenulist");
        var y = document.getElementById("icon-id");

        // if (document.getElementsByTagName("BODY")[0].width()>850) {
        //console.log($('body').width());
        // if ($('body').width()>850) {
        // if ($( screen ).width()>850) {
        if ($(window).innerWidth() > 830) {
            x.className = "menu-list flex-horizontaliai";
            y.className = "icon";
            console.log($(window).innerWidth());
        } else {
            x.className = "menu-list";
            y.className = "icon";
            // $('body').addClass('big-screen').removeClass('small-screen');
        }
    });

    $('.icon').click(showmenu);
    function showmenu() {
        event.preventDefault();
        var x = document.getElementById("mymenulist");
        var y = document.getElementById("icon-id");
        if (x.className === "menu-list flex-horizontaliai") {
            x.className = "menu-list";
        }
        //alert(x.className);
        if (x.className === "menu-list") {
            x.className += " responsive";
            y.className += " responsive";
        } else {
            x.className = "menu-list";
            y.className = "icon";
        }
    }

});