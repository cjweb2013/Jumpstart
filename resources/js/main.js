$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    var amountScrolled = 0;

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop - amountScrolled > 50) {
            var navHeight = $('.navbar').css('height');
            $('.navbar').animate({ top: '-' + navHeight }, 150);
            amountScrolled = scrollTop;
        } else if (amountScrolled - scrollTop > 50) {

            $('.navbar').animate({ top: '0px' }, 150);
            amountScrolled = scrollTop;
        }
    });
});