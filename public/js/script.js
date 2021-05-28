$(document).ready(function() {
    $('.dropdown').on('click', function() {
        $(this).parent().next().toggleClass('hidden');
        let el = $(this);
        window.setTimeout(function() {
            el.parent().next().toggleClass('opacity-100');
        }, 200);
    })
});