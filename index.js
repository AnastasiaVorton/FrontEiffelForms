/**
 * Created by Nastya on 28.03.2017.
 */
function funSuc(data) {
    $("#container-main-field").html(data);

}

$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "WelcomePage.html",
        dataType: "html",
        success: funSuc
    });
});