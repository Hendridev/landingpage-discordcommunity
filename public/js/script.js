$(document).ready(function() {
    $('.dropdown').on('click', function() {
        $(this).parent().next().toggleClass('hidden');
    })
});