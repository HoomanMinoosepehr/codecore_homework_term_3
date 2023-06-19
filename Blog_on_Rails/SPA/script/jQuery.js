$(document).ready(() => {
    $(".navb a").click(function(e){
        $('.navb a').removeClass('current_selected');
        $(this).addClass('current_selected')
    })
});