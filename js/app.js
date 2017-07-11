$(document).foundation().ready(function(){
    $(document).scroll(function() {
        var alpha = Math.min(0.10 + 0.4 / $(this).scrollTop() * 1000, 0.9);
        var channel = Math.round(alpha * 250);
        $("body").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
    });
    $(document).scroll(function() {
        var alpha = Math.min(0.10 + 0.4 * $(this).scrollTop() / 1000, 0.9);
        var channel = Math.round(alpha * 250);
        $(".text").css('color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
    });
});
