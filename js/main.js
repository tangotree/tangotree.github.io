var dp = jQuery;
dp.noConflict();
dp(document).ready(function() {

    //SMOOTH SCROLL 
    dp('.sscroll').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        dp('html,body').animate({
            scrollTop: dp(this.hash).offset().top
        }, 1200);
    });
    //RESPONSIVE VIDEO
    if(dp.fn.fitVids){
        dp('.fitvids').fitVids();
    }
    //BIG SLIDE
    dp('#home-slide').superslides({
        animation: 'fade', // You can choose either fade or slide
        play: 6000,
        pagination: false
    });
    //SERVICES SLIDER
    dp("#slider-services").sudoSlider({
        speed: 650,
        auto: true,
        pause: 3000,
        prevNext: false,
        responsive: true,
        useCSS: true,
        continuous: true,
        effect: "slide",
        updateBefore: true
    });
    //BACK TO TOP
    dp("#backtotop").backToTop();
    //CALL TO ACTION
    /*
    var bg_img = dp(".call-ta").attr('data-background');
    dp(".call-ta").backstretch(bg_img);
    */
    //JQUERY Mobile Devices Responsive
    dp('body').mobileResponsive();

    //Bootstrap Tooltip
    dp('a[data-toggle="tooltip"]').tooltip();
    //NIVOLightbox
    if(dp.fn.nivoLightbox){
        dp('.popup').nivoLightbox({
            effect: 'fall'
        });
    }
});
dp(window).load(function() {
    dp('#loader').fadeOut(1000, "linear");
});
