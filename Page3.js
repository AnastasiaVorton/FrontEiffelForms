/**
 * Created by Nastya on 31.03.2017.
 */

function saveFieldsPage3() {
    saveGrantsFields();
    saveResearchFields();
    saveCollaborationsFields();
    saveConferencePublicationsFields();
    saveJournalPublicationsFields();
}

function constructFields() {
    constructGrantsFields();
    constructResearchFields();
    constructCollaborationsFields();
    constructConferencePublicationsFields();
    constructJournalPublicationsFields();
}

function saveGrantsFields() {
    for (var i = 1; i < (parseInt(localStorage.page3_id1)); i++) {
        localStorage.setItem("title" + i, document.getElementById("title" + i).value);
        localStorage.setItem("agency" + i, document.getElementById("agency" + i).value);
        localStorage.setItem("period" + i, document.getElementById("period" + i).value);
        localStorage.setItem("amount" + i, document.getElementById("amount" + i).value);
    }
}

function saveResearchFields() {
    for (var i = 1; i < (parseInt(localStorage.page3_id2)); i++) {
        localStorage.setItem("proj-title" + i, document.getElementById("proj-title" + i).value);
        localStorage.setItem("personnel" + i, document.getElementById("personnel" + i).value);
        localStorage.setItem("dates" + i, document.getElementById("dates" + i).value);
    }
}

function saveCollaborationsFields() {
    for (var i = 1; i < (parseInt(localStorage.page1_id3)); i++) {
        localStorage.setItem("country" + i, document.getElementById("country" + i).value);
        localStorage.setItem("name" + i, document.getElementById("name" + i).value);
        localStorage.setItem("name-of-principal" + i, document.getElementById("name-of-principal" + i).value);
        localStorage.setItem("nature" + i, document.getElementById("nature" + i).value);
    }
}

function saveConferencePublicationsFields() {
    for (var i = 1; i < (parseInt(localStorage.page1_id4)); i++) {
        localStorage.setItem("stud-name" + i, document.getElementById("stud-name" + i).value);
        localStorage.setItem("publications" + i, document.getElementById("publications" + i).value);
    }
}

function saveJournalPublicationsFields() {
    for (var i = 1; i < (parseInt(localStorage.page1_id5)); i++) {
        localStorage.setItem("journal-publications" + i, document.getElementById("journal-publications" + i).value);
    }
}

function constructGrantsFields() {
    var wrapper1 = $(".grants-wrap");
    for (var i = 1; i < (parseInt(localStorage.page1_id1)); i++) {
        if (i == 1) {
            $("#title1").val(localStorage.getItem("title1"));
            $("#agency1").val(localStorage.getItem("agency1"));
            $("#period1").val(localStorage.getItem("period1"));
            $("#amount1").val(localStorage.getItem("amount1"));
        } else {
            $(wrapper1).append('<div><p>Title: </p><input type="text" name="title' + i + '" id="title' + i + '"/> <p>Granting agency:</p><input type="text" name="agency' + i + '" id="agency' + i + '"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="text" name="period' + i + '" id="period1' + i + '"> <p>Amount:</p><input type="number" name="amount' + i + '" id="amount' + i + '"> <hr> </div>');
            $("#courseName" + i).val(localStorage.getItem("title" + i));
            $("#semester" + i).val(localStorage.getItem("agency" + i));
            $("#level" + i).val(localStorage.getItem("period" + i));
            $("#num-students" + i).val(localStorage.getItem("amount" + i));
        }
    }
}

function constructResearchFields() {
    var wrapper2 = $(".research-projects-wrap");
    for (var i = 1; i < (parseInt(localStorage.page1_id2)); i++) {
        if (i == 1) {
            $("#proj-title1").val(localStorage.getItem("proj-title1"));
            $("#personnel1").val(localStorage.getItem("personnel1"));
            $("#dates1").val(localStorage.getItem("dates1"));
        } else {
            $(wrapper2).append('<div><p>Title:</p><input type="text" name="proj-title' + i + '" id="proj-title' + i + '"> <p>Personnel involved:</p><input type="text" name="personnel' + i + '" id="personnel' + i + '"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="text" name="dates' + i + '" id="dates' + i + '"></div> ');
            $("#proj-title" + i).val(localStorage.getItem("proj-title" + i));
            $("#personnel" + i).val(localStorage.getItem("personnel" + i));
            $("#dates" + i).val(localStorage.getItem("dates" + i));
        }
    }
}

function constructCollaborationsFields() {
    var wrapper3 = $(".collaborations-wrap");
    for (var i = 1; i < (parseInt(localStorage.page1_id3)); i++) {
        if (i == 1) {
            $("#country1").val(localStorage.getItem("country1"));
            $("#name1").val(localStorage.getItem("name1"));
            $("#name-of-principal1").val(localStorage.getItem("name-of-principal1"));
            $("#nature1").val(localStorage.getItem("nature1"));
        } else {
            $(wrapper3).append('<div><p>Country:</p><input type="text" name="country' + i + '" id="country' + i + '" > <p>Name of institution:</p><input type="text" name="name' + i + '" id="name' + i + '" > <p>Name of principal contact</p><input type="text" name="name-of-principal' + i + '" id="name-of-principal' + i + '"> <p>Nature:</p><input type="number" name="nature' + i + '" id="nature' + i + '" ></div>');
            $("#country" + i).val(localStorage.getItem("country" + i));
            $("#name" + i).val(localStorage.getItem("name" + i));
            $("#principal" + i).val(localStorage.getItem("principal" + i));
            $("#nature" + i).val(localStorage.getItem("nature" + i));
        }
    }
}

function constructConferencePublicationsFields() {
    var wrapper4 = $(".conference-publications-wrap");
    for (var i = 1; i < (parseInt(localStorage.page1_id4)); i++) {
        if (i == 1) {
            $("#stud-name1").val(localStorage.getItem("stud-name1"));
            $("#publications1").val(localStorage.getItem("publications1"));
        } else {
            $(wrapper4).append('<div> <p>Name of the student:</p><input type="text" name="stud-name' + i + '" id="stud-name' + i + '" size="40"> <p>Publications:</p><input type="text" name="publications' + i + '" id="publications' + i + '" size="40"> </div>');
            $("#stud-name" + i).val(localStorage.getItem("stud-name" + i));
            $("#publications" + i).val(localStorage.getItem("publications" + i));
        }
    }
}

function constructJournalPublicationsFields() {
    var wrapper5 = $(".journal-publications-wrap");
    for (var i = 1; i < (parseInt(localStorage.page1_id5)); i++) {
        if (i == 1) {
            $("#journal-publications1").val(localStorage.getItem("journal-publications1"));
        } else {
            $(wrapper5).append('<div> <p>Publications:</p><input type="text" name="journal-publications' + i + '" id="journal-publications' + i + '" size="40"> </div>');
            $("#journal-publications" + i).val(localStorage.getItem("journal-publications" + i));
        }
    }
}

    $(document).ready(function () {
        if (localStorage.getItem("page1_id1") == null) {
            localStorage.page1_id1 = 2;
        }
        if (localStorage.page1_id2 == null) {
            localStorage.page1_id2 = 2;
        }
        if (localStorage.page1_id3 == null) {
            localStorage.page1_id3 = 2;
        }
        if (localStorage.page1_id4 == null) {
            localStorage.page1_id4 = 2;
        }
        if (localStorage.page1_id5 == null) {
            localStorage.page1_id5 = 2;
        }
        constructFields();
        $("#js-next-button").on("click", function (e) {
            $.ajax({
                type: "POST",
                url: "Page4.html",
                success: function (html) {
                    $("#container-main-field").html(html);
                }
            });
        });

        $("#js-back-button").on("click", function () {
            saveFieldsPage3();
            $.ajax({
                type: "POST",
                url: "Page2.html",
                success: function (html) {
                    $("#container-main-field").html(html);
                }
            });
        });
    });
