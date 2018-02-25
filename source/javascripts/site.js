$(document).ready(function () {
// Get carousel elements

    var tLeftButton = $("#testimonials-l");
    var tRightButton = $("#testimonials-r");

// Get number of <li> elements in carousel

    var tItemCount = document.getElementById('testimonials-ul').querySelectorAll('li').length;
    //console.log(tItemCount);

// Set length based on that

    var tWidth = tItemCount * 100 + "vw";
    $(".slider ul").css("width", tWidth);

// Button functionality

    var tPosition = 0;
    //console.log(tPosition);

    tRightButton.click(function() {
        if (tPosition < (tItemCount - 1)) {
            tPosition++;
            var m = "-" + (100 * tPosition) + "vw";
            $(".slider ul").animate({
                "left": m
            }, 500);
            greyButton();
        }
    });

    tLeftButton.click(function() {
        if (tPosition > 0) {
            tPosition--;
            var m = "-" + (100 * tPosition) + "vw";
            $(".slider ul").animate({
                "left": m
            }, 500);
            greyButton();
        }
    });

// Grey out buttons if not useable

    var greyButton = function() {
        if (tPosition == 0) {
            tLeftButton.css("opacity", "0.3");
            tLeftButton.css("cursor", "default");
        } else if (tPosition == (tItemCount - 1)) {
            tRightButton.css("opacity", "0.3");
            tRightButton.css("cursor", "default");
        } else {
            tRightButton.css("opacity", "1");
            tRightButton.css("cursor", "pointer");
            tLeftButton.css("opacity", "1");
            tLeftButton.css("cursor", "pointer");
        }
    }

    greyButton();

// And finally, if there's only one quote, kill the buttons altogether

    if ( tItemCount == 1 ) {
        $('.testimonials-control').css('display','none');
    }



    //script hide navigation menu
    var $header = $('#nav');
    var $hHeight = $header.height();
    var prevTop = $(window).scrollTop();


    $(window).on('scroll', function (e) {
        if (prevTop >= 500) {
            $("#nav").addClass("scroll-color");
            $("#nav").removeClass("navigation");
        } else {
            $("#nav").removeClass("scroll-color");
            $("#nav").addClass("navigation");
        }
        $('#mobile_menu').removeClass('open');
        $header.removeClass('open');
        st = $(this).scrollTop();
        if (st > prevTop && st > $hHeight) {
            $header.addClass('js-global-header-scrolling');
            $header.removeClass('js-global-header-scrolling-show');
        } else {
            $header.removeClass('js-global-header-scrolling');
            $header.addClass('js-global-header-scrolling-show');

        }
        prevTop = st;
    });


    // script for open and close menu in mobile version
    $('#nav').click(function () {
        $('#mobile_menu').toggleClass('open');
        $('#nav').toggleClass('open');
    });

    //scroll animation for section
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });


    $("#h1").lettering();


});