$(document).ready(function () {
    $(window).scroll(function (event) {
        const scroll = $(this).scrollTop();
        const width = $(this).outerWidth();
        const heightContent = $('.content').outerHeight();
        const heightParallax = $('.parallax').outerHeight();
        const p = scroll / heightContent * 100;
        const pParallax = scroll / heightParallax * 100;
        const opacity = 1 - 1 / 100 * pParallax;

        const zoom1 = 1 + (width / 10000 * pParallax);

        $('.parallax__smoke').css('transform', 'scale('+ zoom1 +')')
        $('.parallax__smoke').css('opacity', opacity);

        const zoom2 = 1 + (width / 5000000 * p)
        $('.parallax__item_1').css('transform', 'scale('+ zoom2 +')')

        const hr = width / 2000 * pParallax
        const zoom3 = 1 + (width * 0.000005 * pParallax)
        $('.parallax__item_2').css('transform', 'translate3d('+ hr +'px,0,0) scale('+ zoom3 +')')

        const hr2 = width / 1500 * pParallax
        const zoom4 = 1 + (width * 0.00001 * pParallax)
        $('.parallax__item_3').css('transform', 'translate3d('+ hr2 +'px,0,0) scale('+ zoom4 +')')

    })
})