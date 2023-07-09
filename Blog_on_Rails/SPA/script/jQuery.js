$(document).ready(() => {
    $("a").click(function(e){
        $('a').removeClass('current_selected');
        $(this).addClass('current_selected')
    })
});