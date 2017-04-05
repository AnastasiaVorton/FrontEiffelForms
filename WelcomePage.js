/**
 * Created by Nastya on 28.03.2017.
 */
// function funSuc(data) {
//     $("#container-main-field").html(data);
// }

$(document).ready(function () {

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

// $("#js-next-button").on("click", function () {
//     $("#container-main-field").load("Page1.html");
// });

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