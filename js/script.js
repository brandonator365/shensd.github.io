$(document).ready(function() {
    var height = ($(window).height() - 20) + "px";
    $(".jumbotron-top, .about, .contact").css("height", height);


    $("#btn-top").click(function() {scrollTo("#top")});
    $("#btn-languages").click(function() {scrollTo("#languages")});
    $("#btn-about").click(function() {scrollTo("#about")});
    $("#btn-contact").click(function() {scrollTo("#contact")});
});

function scrollTo(place) {
    var offset = $(place).offset();
    offset.left -= 20;
    offset.top -=20;
    $("html, body").animate({
        scrollTop: offset.top,
        scrollLeft: offset.left
    }, 800);
}