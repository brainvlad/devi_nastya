$(document).ready(function () {
    $('.spoiler__title').click(function (event) {
        if ($('.spoiler').hasClass('one')) {
            $('.spoiler__title').not($(this)).removeClass('active')
            $('.spoiler__text').not($(this).next()).slideUp('active')
        }
        $(this).toggleClass('active').next().slideToggle(300)
    })
})