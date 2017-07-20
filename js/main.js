$(document).ready(function(){
    $('.slideshow').slick();
    $('.faq').accordion({
        collapsible: true,
        active: false
    });

    //hanburger menu functions
    $(".nav").removeClass("open");
    $(".toggle-container").click(function() {
        $(".nav").toggleClass("open");
    });
});


