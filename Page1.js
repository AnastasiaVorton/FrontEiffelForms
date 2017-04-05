/**
 * Created by Nastya on 31.03.2017.
 */
function loadFieldsPage1() {
    $("#unitName").val(localStorage.unitName);
    $("#headName").val(localStorage.headName);
    $("#startDate").val(localStorage.startDate);
    $("#endDate").val(localStorage.endDate);
}

function saveFieldsPage1() {
    localStorage.unitName = document.getElementById("unitName").value;
    localStorage.headName = document.getElementById("headName").value;
    localStorage.startDate = document.getElementById("startDate").value;
    localStorage.endDate = document.getElementById("endDate").value
}

$(document).ready(function () {
    loadFieldsPage1();
    $("#js-next-button").on("click", function () {
        alert($("#myForm").serialize());
        saveFieldsPage1();
        $.ajax({
            type: "POST",
            url: "Page2.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });
    // $("#js-back-button").on("click", function () {
    //     alert($("myForm").serialize());
    //     saveFieldsPage1();
    //     $.ajax({
    //         type: "POST",
    //         url: "WelcomePage.html",
    //         data: ($("#myForm").serialize()),
    //         success: function (html) {
    //             $("#container-main-field").html(html);
    //         }
    //     });
    // });
});