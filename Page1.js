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

function fieldsIsEmpty() {
    // alert(isEmptyObject(localStorage.getItem("title").value));
    alert(localStorage.getItem("unitName").value === "");
    if (localStorage.getItem("unitName").value === "" || localStorage.getItem("headName").value === "") {
        alert("Fill in all the obligatory fields!")
    }
}


$(document).ready(function () {
    loadFieldsPage1();
    $("#js-next-button").on("click", function () {
        saveFieldsPage1();
        fieldsIsEmpty();
        $.ajax({
            type: "POST",
            url: "Page2.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });
    // $("#js-back-button").on("click", function () {
    //
    //     saveFieldsPage2();
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