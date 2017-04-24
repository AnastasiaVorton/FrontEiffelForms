/**
 * Created by Nastya on 24.04.2017.
 */
function saveFieldsPage6() {
    localStorage.setItem("formPage6", $("#myForm").serialize());
    saveCollabFields();
}

function constructFields() {
    constructCollabFields();
}

function saveCollabFields() {
    for (var i = 1; i < (parseInt(localStorage.page6_id1)); i++) {
        localStorage.setItem("companyName" + i, document.getElementById("companyName" + i).value);
        localStorage.setItem("collabNature" + i, document.getElementById("collabNature" + i).value);
    }
}

function constructCollabFields() {
    var wrapper1 = $(".industry-collaborations-wrap");
    for (var i = 1; i < (parseInt(localStorage.page6_id1)); i++) {
        if (i == 1) {
            $("#companyName1").val(localStorage.getItem("companyName1"));
            $("#collabNature1").val(localStorage.getItem("collabNature1"));
        } else {
            $(wrapper1).append('<div><p>Company:</p><input type="text" name="companyName' + i + '" id="companyName' + i + '" size="40"> <p>Nature of collaboration:</p><input type="text" name="collabNature' + i + '" id="collabNature' + i + '" size="40"><button class="remove_field1">Remove</button></div>');
            $("#companyName" + i).val(localStorage.getItem("companyName" + i));
            $("#collabNature" + i).val(localStorage.getItem("collabNature" + i));
        }
    }
}

$(document).ready(function () {
    if (localStorage.page6_id1 == null) {
        localStorage.page6_id1 = 2;
    }
    constructFields();
    $("#js-next-button").on("click", function () {
        saveFieldsPage6();
        $.ajax({
            type: "POST",
            url: "Page7.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    $("#js-back-button").on("click", function () {
        saveFieldsPage6();
        $.ajax({
            type: "POST",
            url: "Page5.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    var max_fields = 10;
    var wrapper1 = $(".industry-collaborations-wrap");
    var add_button1 = $(".add-field-button1");

    var x1 = 1;
    $(add_button1).on("click", function (e) {
        e.preventDefault();
        if (x1 < max_fields) {
            x1++;
            $(wrapper1).append('<div><hr><p>Company:</p><input type="text" name="companyName' + localStorage.page4_id1 + '" id="companyName' + localStorage.page4_id1 + '" size="40"> <p>Nature of collaboration:</p><input type="text" name="collabNature' + localStorage.page4_id1 + '" id="collabNature' + localStorage.page4_id1 + '" size="40"><button class="remove_field1">Remove</button></div>');
            localStorage.page5_id1 = (parseInt(localStorage.page5_id1)) + 1;
        }
    });

    $(wrapper1).on("click", ".remove_field1", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x1--;
        localStorage.page6_id1 = (parseInt(localStorage.page6_id1)) - 1;
    });
});
