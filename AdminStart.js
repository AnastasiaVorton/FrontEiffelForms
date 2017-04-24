/**
 * Created by Nastya on 10.04.2017.
 */
function invalidYearsQuery1() {
    var date = new Date(this.document.getElementById("query1Year").value);
    if (date.getFullYear() < 2012 || date.getFullYear() > 2017) {
        alert("Year must not be less than 2012 or bigger than 2017!");
        return true;
    } else {
        return false;
    }
}

function invalidYearsQuery2() {
    var date1 = new Date(this.document.getElementById("query2StartYear").value);
    var date2 = new Date(this.document.getElementById("query2FinalYear").value);
    if (date1.getFullYear() < 2012 || date1.getFullYear() > 2016 || date2.getFullYear() < 2013 || date2.getFullYear() > 2017) {
        alert("Year must not be less than 2012 or bigger than 2017!");
        return true;
    } else {
        return false;
    }
}

function invalidYearsQuery3() {
    var date1 = new Date(this.document.getElementById("query3StartYear").value);
    var date2 = new Date(this.document.getElementById("query3FinalYear").value);
    if (date1.getFullYear() < 2012 || date1.getFullYear() > 2016 || date2.getFullYear() < 2013 || date2.getFullYear() > 2017) {
        alert("Year must not be less than 2012 or bigger than 2017!");
        return true;
    } else {
        return false;
    }
}

$(document).ready(function () {

    var wrapper1 = $(".query1-additional");
    var wrapper2 = $(".query2-additional");
    var wrapper3 = $(".query3-additional");
    var wrapper4 = $(".query4-additional");
    var wrapper5 = $(".query5-additional");
    var wrapper6 = $(".query6-additional");
    var wrapper7 = $(".query7-additional");

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

    /*query1*/
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
        if (invalidYearsQuery1()) {
            return;
        } else {
            $.ajax({
                type: "POST",
                url: "/load/query1/" + document.getElementById("query1Year").value,
                success: function (result) {
                    query1output(result);
                }
            });
        }
    });

    function query1output(input) {
        var temp = input.split("&");
        var text = "";
        for (var i = 0; i < temp.length; i++) {
            text += '<h3>' + temp[i] + '<br>';
        }
        $(wrapper1).html(text);
    }

    /*query2*/
    function loadUnits() {
        $.ajax({
            type: "POST",
            url: "/load/units/get",
            success: function (input) {
                var select = $("#query2Unit");
                var temp = input.split("&");
                for (var i = 0; i < temp.length - 1; i++) {
                    select.append('<option value="' + temp[i] + '">' + temp[i] + ' </option>');
                }
            }
        });
    }

    $("#query2").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Query2.html",
            success: function (html) {
                $("#container-main-field").html(html);
                loadUnits();
            }
        });
    });

    $("#loadQuery2").on("click", function () {
        if (invalidYearsQuery2()) {
            return;
        } else {
            $.ajax({
                type: "POST",
                url: "/load/query2/" + document.getElementById("query2Unit").value + "&" + document.getElementById("query2StartYear").value + "&" + document.getElementById("query2FinalYear").value,
                success: function (result) {
                    query2output(result);
                }
            });
        }
    });

    function query2output(input) {
        var temp = input.split("/s/");
        var out = "";
        for (var i = 0; i < temp.length; i++) {
            var text = temp[i].split("&");
            for (var j = 0; j < text.length; j++) {
                out += '<h3>' + text[j] + '<br>';
            }
            out += '<br>';
        }
        $(wrapper2).html(out);
    }

    /*query3*/

    function loadLabs3() {
        $.ajax({
            type: "POST",
            url: "/load/units/get",
            success: function (input) {
                var select = $("#query3Lab");
                var temp = input.split("&");
                for (var i = 0; i < temp.length - 1; i++) {
                    select.append('<option value="' + temp[i] + '">' + temp[i] + ' </option>');
                }
            }
        });
    }

    $("#query3").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Query3.html",
            success: function (html) {
                $("#container-main-field").html(html);
                loadLabs3();
            }
        });
    });

    $("#loadQuery3").on("click", function () {
        if (invalidYearsQuery3()) {
            return;
        } else {
            $.ajax({
                type: "POST",
                url: "/load/query3/" + document.getElementById("query3Lab").value + "&" + document.getElementById("query3StartYear").value + "&" + document.getElementById("query3StartSem").value + "&" + document.getElementById("query3FinalYear").value + "&" + document.getElementById("query3FinalSem").value,
                success: function (result) {
                    query3output(result);
                }
            });
        }
    });

    function query3output(input) {
        var temp = input.split("/s/");
        var out = "";
        for (var i = 0; i < temp.length; i++) {
            var text = temp[i].split("&");
            for (var j = 0; j < text.length; j++) {
                out += '<h3>' + text[j] + '<br>';
            }
            out += '<br>'
        }
        $(wrapper3).html(out);
    }

    /*query4*/

    function loadLabs4() {
        $.ajax({
            type: "POST",
            url: "/load/units/get",
            success: function (input) {
                var select = $("#query4Lab");
                var temp = input.split("&");
                for (var i = 0; i < temp.length - 1; i++) {
                    select.append('<option value="' + temp[i] + '">' + temp[i] + ' </option>');
                }
            }
        });
    }

    $("#query4").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Query4.html",
            success: function (html) {
                $("#container-main-field").html(html);
                loadLabs4();
            }
        });
    });

    $("#loadQuery4").on("click", function () {
        $.ajax({
            type: "POST",
            url: "/load/query4/" + document.getElementById("query4Lab").value,
            success: function (result) {
                query4output(result);
            }
        });
    });

    function query4output(input) {
        var temp = input.split("/s/");
        var out = "";
        for (var i = 0; i < temp.length; i++) {
            var text = temp[i].split("&");
            for (var j = 0; j < text.length; j++) {
                out += '<h3>' + text[j] + '<br>';
            }
            out += '<br>'
        }
        $(wrapper4).html(out);
    }

    /*query5*/
    function loadLabs5() {
        $.ajax({
            type: "POST",
            url: "/load/units/get",
            success: function (input) {
                var select = $("#query5Lab");
                var temp = input.split("&");
                for (var i = 0; i < temp.length - 1; i++) {
                    select.append('<option value="' + temp[i] + '">' + temp[i] + ' </option>');
                }
            }
        });
    }

    $("#query5").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Query5.html",
            success: function (html) {
                $("#container-main-field").html(html);
                loadLabs5();
            }
        });
    });

    $("#loadQuery5").on("click", function () {
        $.ajax({
            type: "POST",
            url: "/load/query5/" + document.getElementById("query5Lab").value,
            success: function (result) {
                query5output(result);
            }
        });
    });

    function query5output(input) {
        var temp = input.split("/s/");
        var out = "";
        for (var i = 0; i < temp.length; i++) {
            var text = temp[i].split("&");
            for (var j = 0; j < text.length; j++) {
                out += '<h3>' + text[j] + '<br>';
            }
            out += '<br>'
        }
        $(wrapper5).html(out);
    }

    /*query6*/
    function loadUnits6() {
        $.ajax({
            type: "POST",
            url: "/load/units/get",
            success: function (input) {
                var select = $("#query6Unit");
                var temp = input.split("&");
                for (var i = 0; i < temp.length; i++) {
                    select.append('<option value="' + temp[i] + '">' + temp[i] + ' </option>');
                }
            }
        });
    }

    $("#query6").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Query6.html",
            success: function (html) {
                $("#container-main-field").html(html);
                loadUnits6();
            }
        });
    });

    $("#loadQuery6").on("click", function () {
        $.ajax({
            type: "POST",
            url: "/load/query6/" + document.getElementById("query6Unit").value,
            success: function (result) {
                query6output(result);
            }
        });
    });

    function query6output(input) {
        var temp = input.split("/s/");
        var out = "";
        for (var i = 0; i < temp.length; i++) {
            var text = temp[i].split("&");
            for (var j = 0; j < text.length; j++) {
                out += '<h3>' + text[j] + '<br>';
            }
            out += '<br>'
        }
        $(wrapper6).html(out);
    }

    /*query7*/
    function loadUnits7() {
        $.ajax({
            type: "POST",
            url: "/load/units/get",
            success: function (input) {
                var select = $("#query7Unit");
                var temp = input.split("&");
                for (var i = 0; i < temp.length; i++) {
                    select.append('<option value="' + temp[i] + '">' + temp[i] + ' </option>');
                }
            }
        });
    }

    $("#query7").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Query7.html",
            success: function (html) {
                $("#container-main-field").html(html);
                loadUnits7();
            }
        });
    });

    $("#loadQuery7").on("click", function () {
        $.ajax({
            type: "POST",
            url: "/load/query7/" + document.getElementById("query7Lab").value + "&" + document.getElementById("query7InitDate").value + "&" + document.getElementById("query7FinalDate").value,
            success: function (result) {
                query7output(result);
            }
        });
    });

    function query7output(input) {
        var temp = input.split("/s/");
        var out = "";
        for (var i = 0; i < temp.length; i++) {
            var text = temp[i].split("&");
            for (var j = 0; j < text.length; j++) {
                out += '<h3>' + text[j] + '<br>';
            }
            out += '<br>'
        }
        $(wrapper7).html(out);
    }
});

