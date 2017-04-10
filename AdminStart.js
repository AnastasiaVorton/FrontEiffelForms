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
        url: "/load/query1/" + document.getElementById("query1Year").value,
        success: function (result) {
            query1output(result);
        }
    });
});

var wrapper1 = $(".query1-additional");
var wrapper2 = $(".query2-additional");
var wrapper3 = $(".query3-additional");

function query1output(input) {
    var temp = input.split("&");
    var text = "";
    for (var i = 0; i < temp.length; i++) {
        text += '<h3>' + temp[i] + '<br>';
    }
    $(wrapper1).html(text);
}

$("#query2").on("click", function () {
    $.ajax({
        type: "POST",
        url: "Query2.html",
        success: function (html) {
            $("#container-main-field").html(html);
        }
    });
});

$("#loadQuery2").on("click", function () {
    $.ajax({
        type: "POST",
        url: "/load/query2/" + document.getElementById("query2Unit").value + "&" + document.getElementById("query2StartYear").value + "&" + document.getElementById("query2FinalYear"),
        success: function (result) {
            query2output(result);
        }
    });
});

function query2output(input) {
    var temp = input.split("&");
    for (var i = 0; i < temp.length; i++) {
        var out = "";
        var text = temp[i].split("/s/");
        for (var j = 0; j < text.length; j++) {
            out += '<h3>' + text[j] + '<br>';
        }
        out += '<br>'
    }
    $(wrapper2).html(out);
}

$("#query3").on("click", function () {
    $.ajax({
        type: "POST",
        url: "Query3.html",
        success: function (html) {
            $("#container-main-field").html(html);
        }
    });
});

$("#loadQuery3").on("click", function () {
    alert(document.getElementById("query3StartSem").value);
    $.ajax({
        type: "POST",
        url: "/load/query3/" + document.getElementById("query3Lab").value + "&" + document.getElementById("query3StartYear").value + "&" + document.getElementById("query3StartSem").value + "&" + document.getElementById("query3FinalYear").value + "&" + document.getElementById("query3FinalSem").value,
        success: function (result) {
            query3output(result);
        }
    });
});

function query3output(input) {
    var temp = input.split("&");
    for (var i = 0; i < temp.length; i++) {
        var out = "";
        var text = temp[i].split("/s/");
        for (var j = 0; j < text.length; j++) {
            out += '<h3>' + text[j] + '<br>';
        }
        out += '<br>'
    }
    $(wrapper3).html(out);
}
