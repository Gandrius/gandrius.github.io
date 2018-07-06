function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function(){
    $(".dropdown-min").click(function(event){
        $(".drop-links").toggleClass("show-me");
                
    });

    $('.closebtn').on('click', function() {
        $('.drop-links').removeClass("show-me");
    });
});