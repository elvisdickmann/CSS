$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        loop:true,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
                
            },
            600:{
                items:4,
                dots: false,
            }
        }
    });
});