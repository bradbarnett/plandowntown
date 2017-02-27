// /**
//  * Created by Alicia on 2/18/17.
//  */
// var _prevID;
// var _prevCircle;
//
// $("circle").click(function () {
//
//     var same;
//     var circleID = this.id;
//     if (_prevID == circleID) {
//         same = true;
//     }
//     else {
//         same = false;
//     }
//
//     // console.log(circleID);
//     var textID = "text#" + circleID;
//     var text = $(textID)[0];
//     $(".description-text").attr("class", "description-text none");
//     $("circle").attr("class", "unclicked");
//
//     if (same == true) {
//         $(this).attr("class", "unclicked");
//         $(text).attr("class", "description-text none");
//         console.log("true");
//     }
//     else {
//         $(text).attr("class", "description-text selected");
//         console.log("false");
//         $(this).attr("class", "clicked");
//     }
//     _prevID = circleID;
// })




$(document).ready(function () {
    console.log("ready");
    var scroll_start = 0;
    var startchange = $("#banner");
    var offset = startchange.offset();
    if (startchange.length) {
        console.log(offset);
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("body.landing #header").removeClass("unscrolled").addClass("scrolled");
                $("#logo").hide();
                $("#logo").removeClass("unscrolled-logo").addClass("scrolled-logo");
                $("#logo").show();
            } else {
                $('body.landing #header').removeClass("scrolled").addClass("unscrolled");
                $("#logo").hide();
                $("#logo").removeClass("scrolled-logo").addClass("unscrolled-logo");
                $("#logo").show();

            }
        });
    }
});