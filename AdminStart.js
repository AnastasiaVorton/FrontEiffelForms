/**
 * Created by Nastya on 10.04.2017.
 */
$("#query1").on("click", function () {
    $.ajax({
        type: "POST",
        url: "Query1.html",
        success: function (html) {
            $("#container-main-field").html(html);
        }
    });
});


$("#loadQuery1").on("click", function () {
    $.ajax({
        type: "POST",
        url: "/load/query1/"+document.getElementById("query1Year").value,
        success: function (result) {
            query1output(result);
        }
    });
});

var wrapper = $(".query1-additional");

function query1output(input) {
    var temp = input.split("&");
    var text =  "";
    for (var i = 0; i < temp.length; i++) {
        text.append('<p>' + temp[i] + '<br>');
    }
    $(wrapper).html(text);
}


//
// $("#js-back-button").on("click", function () {
//     saveFieldsPage2();
//     $.ajax({
//         type: "POST",
//         url: "Page1.html",
//         success: function (html) {
//             $("#container-main-field").html(html);
//         }
//     });
// });