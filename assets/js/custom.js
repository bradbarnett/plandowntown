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


$(document).ready(function()
    {
        $("#myTable").tablesorter();
    }
); 