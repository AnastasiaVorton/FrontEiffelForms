/**
 * Created by Nastya on 16.04.2017.
 */
function saveFieldsPage4() {
    localStorage.setItem("formPage4", $("#myForm").serialize());
    savePatentsFields();
    saveLicencingFields();
}

function constructFields() {
    constructPatentsFields();
    constructLicencingFields();
}

function savePatentsFields() {
    for (var i = 1; i < (parseInt(localStorage.page4_id1)); i++) {
        localStorage.setItem("patent" + i, document.getElementById("patent" + i).value);
        localStorage.setItem("patentCountry" + i, document.getElementById("patentCountry" + i).value);
    }
}

function saveLicencingFields() {
    for (var i = 1; i < (parseInt(localStorage.page4_id2)); i++) {
        localStorage.setItem("licence" + i, document.getElementById("licence" + i).value);
    }
}

function constructPatentsFields() {
    var wrapper1 = $(".patents-wrap");
    for (var i = 1; i < (parseInt(localStorage.page4_id1)); i++) {
        if (i == 1) {
            $("#patent1").val(localStorage.getItem("patent1"));
            $("#patentCountry1").val(localStorage.getItem("patentCountry1"));
        } else {
            $(wrapper1).append('<div><p>Patent:</p><input type="text" name="patent' + i + '" id="patent' + i + '" size="40"> <p>Country:</p><input type="text" name="patentCountry' + i + '" id="patentCountry' + i + '" size="40"><button class="remove_field1">Remove</button></div>');
            $("#patent" + i).val(localStorage.getItem("patent" + i));
            $("#patentCountry" + i).val(localStorage.getItem("patentCountry" + i));
        }
    }
}

function constructLicencingFields() {
    var wrapper2 = $(".licenses-wrap");
    for (var i = 1; i < (parseInt(localStorage.page4_id2)); i++) {
        if (i == 1) {
            $("#licence1").val(localStorage.getItem("licence1"));
        } else {
            $(wrapper2.append('<div> <p>License:</p><input type="text" name="licence' + i + '"  id="licence' + i + '"  size="40"><button class="remove_field2">Remove</button></div>'));
            $("#licence" + i).val(localStorage.getItem("licence" + i));
        }
    }
}

$(document).ready(function () {
    if (localStorage.page4_id1 == null) {
        localStorage.page4_id1 = 2;
    }
    if (localStorage.page4_id2 == null) {
        localStorage.page4_id2 = 2;
    }
    constructFields();
    $("#js-next-button").on("click", function () {
        saveFieldsPage4();
        $.ajax({
            type: "POST",
            url: "Page5.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    $("#js-back-button").on("click", function () {
        saveFieldsPage4();
        $.ajax({
            type: "POST",
            url: "Page3.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    var max_fields = 10;
    var wrapper1 = $(".patents-wrap");
    var wrapper2 = $(".licenses-wrap");

    var add_button1 = $(".add-field-button1");
    var add_button2 = $(".add-field-button2");


    var x1 = 1;
    $(add_button1).on("click", function (e) {
        e.preventDefault();
        if (x1 < max_fields) {
            x1++;
            $(wrapper1).append('<div><hr><p>Patent:</p><input type="text" name="patent' + localStorage.page4_id1 + '"  id="patent' + localStorage.page4_id1 + '"  size="40"> <p>Country:</p><input type="text" name="patentCountry' + localStorage.page4_id1 + '" id="patentCountry' + localStorage.page4_id1 + '" size="40"><button class="remove_field1">Remove</button></div>');
            localStorage.page4_id1 = (parseInt(localStorage.page4_id1)) + 1;
        }
    });

    $(wrapper1).on("click", ".remove_field1", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x1--;
        localStorage.page4_id1 = (parseInt(localStorage.page4_id1)) - 1;
    });

    var x2 = 1;
    $(add_button2).on("click", function (e) {
        e.preventDefault();
        if (x2 < max_fields) {
            x2++;
            $(wrapper2.append('<div><hr><p>License:</p><input type="text" name="licence' + localStorage.page4_id2 + '" id="licence' + localStorage.page4_id2 + '" size="40"><button class="remove_field2">Remove</button></div>'));
            localStorage.page4_id2 = (parseInt(localStorage.page4_id2)) + 1;
        }
    });

    $(wrapper2).on("click", ".remove_field2", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x2--;
        localStorage.page4_id2 = (parseInt(localStorage.page4_id2)) - 1;
    });

});