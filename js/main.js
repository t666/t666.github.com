(function($) {
    "use strict";
    $('.carousel').carousel({
        interval: false
    });
    $(".navbar").sticky({
        topSpacing: 0,
    });
    $('.nav').singlePageNav({
        currentClass: 'current'
    });
    $('#scroll-to-content').on('click',
    function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('.first-section').offset().top - 70
        },
        600)
    });
    $('.go-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        },
        800);
        return false
    })
})(jQuery);