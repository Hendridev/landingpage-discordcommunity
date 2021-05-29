$(document).ready(function() {
    $('.dropdown').on('click', function() {
        $(this).parent().next().toggleClass('hidden');
        let el = $(this);
        window.setTimeout(function() {
            el.parent().next().toggleClass('opacity-100');
        }, 200);
    });
    $('#password').on('focus', function() {
        $('.eye').addClass('hidden');
    });
    $('#password').on('focusout', function() {
        $('.eye').removeClass('hidden');
    });
});