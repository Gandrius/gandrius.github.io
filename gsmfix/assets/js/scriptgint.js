jQuery(function ($) {
  // (function () {

  function mymenulist(){
    return document.getElementById("mymenulist");
  }
  function iconid(){
    return document.getElementById("icon-id");
  }

  $('#mymenulist li, .button a').click(gotoid);
  function gotoid(event) {
    event.preventDefault();
    mymenulist().className = "menu-list fleksas";
    iconid().className = "icon";
    var nav = $("#" + $(this).attr("alt"));
    if (nav.length) {
      var contentNav = nav.offset().top-$(".header-placeholder").height();
      $('html, body').animate({ scrollTop: contentNav }, 800);
    }
  }

  $('.logo-holder').click(function (event) {
    event.preventDefault();
    mymenulist().className = "menu-list fleksas";
    iconid().className = "icon";
    $('html, body').animate({ scrollTop: 0 }, 800);
  });

  $(window).bind('resize', function (event) {
    event.preventDefault();
    mymenulist().className = "menu-list fleksas";
    iconid().className = "icon";
  });

  $('.icon').click(showmenu1);
  function showmenu1(event) {
    event.preventDefault();
      if (mymenulist().className === "menu-list fleksas") {
        mymenulist().className = "menu-list responsive";
        iconid().className = "icon responsive change";
      }else{
        mymenulist().className = "menu-list fleksas";
        iconid().className = "icon";
      }
  }
})
