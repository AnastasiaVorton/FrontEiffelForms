/**
 * Created by Nastya on 28.03.2017.
 */

$(document).ready(function () {

    $("#toStart").on("click", function () {
        localStorage.clear();
        $.ajax({
            type: "POST",
            url: "index.html",
            success: function (html) {
                $("body").html(html);
            }
        });
    });

    $("#js-next-button").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Page1.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });
});


// $("#js-back-button").on("click", function () {
//     $.ajax({
//         type: "POST",
//         url: "WelcomeBack.html",
//         success: function (html) {
//             $("#container-main-field").html(html);
//         }
//     });
//
//     // function loadNext(data) {
//     //     $("#next-page").html(data)
//     // }
// });
// })
// ;