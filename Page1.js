/**
 * Created by Nastya on 31.03.2017.
 */
function loadFieldsPage1() {
    $("#unitName").val(localStorage.unitName);
    $("#headName").val(localStorage.headName);
    if (localStorage.startDate != null) {
        $("#startDate").val(localStorage.startDate);
    }
    if (localStorage.endDate != null) {
        $("#endDate").val(localStorage.endDate);
    }
}

function saveFieldsPage1() {
    localStorage.setItem("formPage1", $("#myForm").serialize());
    localStorage.unitName = document.getElementById("unitName").value;
    localStorage.headName = document.getElementById("headName").value;
    localStorage.startDate = document.getElementById("startDate").value;
    localStorage.endDate = document.getElementById("endDate").value
}
function fieldsIsEmpty() {
    if (localStorage.getItem("unitName") === "" || localStorage.getItem("headName") === "") {
        alert("Fill in all the obligatory fields!")
        return true;
    }
    return false;
}

function isFalseDate() {
    var startDate = new Date(this.document.getElementById("startDate").value);
    var endDate = new Date(this.document.getElementById("endDate").value);
    if (startDate.getFullYear() < 2012 || endDate.getFullYear() < 2012 || startDate.getFullYear() > 2020
        || endDate.getFullYear() > 2020) {
        alert("Dates must fit in the range 2012 - 2020");
        return true;
    }
    return false;
}

function isFalseYear(){
    var startDate = new Date(this.document.getElementById("startDate").value);
    var endDate = new Date(this.document.getElementById("endDate").value);
    if (endDate.getFullYear() - startDate.getFullYear() > 1){
        alert("The report must cover a period of one year")
        return true;
    }
    return false;
}

$(document).ready(function () {
    $("#startDate").val("2016-01-01");
    $("#endDate").val("2016-12-31");
    loadFieldsPage1();
    $("#js-next-button").on("click", function () {
        if (isFalseDate() || isFalseYear()) {
            return;
        }
        saveFieldsPage1();
        if (fieldsIsEmpty()) {
            return;
        } else if (fieldsIsEmpty() === false) {
            $.ajax({
                type: "POST",
                url: "Page2.html",
                success: function (html) {
                    $("#container-main-field").html(html);
                }
            });
        }
    });

});