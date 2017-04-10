/**
 * Created by Nastya on 31.03.2017.
 */

function saveFieldsPage3() {
    localStorage.setItem("formPage3", $("#myForm").serialize());
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
    for (var i = 1; i < (parseInt(localStorage.page3_id3)); i++) {
        localStorage.setItem("country" + i, document.getElementById("country" + i).value);
        localStorage.setItem("name" + i, document.getElementById("name" + i).value);
        localStorage.setItem("name-of-principal" + i, document.getElementById("name-of-principal" + i).value);
        localStorage.setItem("nature" + i, document.getElementById("nature" + i).value);
    }
}

function saveConferencePublicationsFields() {
    for (var i = 1; i < (parseInt(localStorage.page3_id4)); i++) {
        localStorage.setItem("stud-name" + i, document.getElementById("stud-name" + i).value);
        localStorage.setItem("publications" + i, document.getElementById("publications" + i).value);
    }
}

function saveJournalPublicationsFields() {
    for (var i = 1; i < (parseInt(localStorage.page3_id5)); i++) {
        localStorage.setItem("journal-publications" + i, document.getElementById("journal-publications" + i).value);
    }
}

function constructGrantsFields() {
    var wrapper1 = $(".grants-wrap");
    for (var i = 1; i < (parseInt(localStorage.page3_id1)); i++) {
        if (i == 1) {
            $("#title1").val(localStorage.getItem("title1"));
            $("#agency1").val(localStorage.getItem("agency1"));
            $("#period1").val(localStorage.getItem("period1"));
            $("#amount1").val(localStorage.getItem("amount1"));
        } else {
            $(wrapper1).append('<div><hr><p>Title: </p><input type="text" name="title' + i + '" id="title' + i + '"/> <p>Granting agency:</p><input type="text" name="agency' + i + '" id="agency' + i + '"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="text" name="period' + i + '" id="period' + i + '"> <p>Amount:</p><input type="number" name="amount' + i + '" id="amount' + i + '"></div>');
            $("#title" + i).val(localStorage.getItem("title" + i));
            $("#agency" + i).val(localStorage.getItem("agency" + i));
            $("#period" + i).val(localStorage.getItem("period" + i));
            $("#amount" + i).val(localStorage.getItem("amount" + i));
        }
    }
}

function constructResearchFields() {
    var wrapper2 = $(".research-projects-wrap");
    for (var i = 1; i < (parseInt(localStorage.page3_id2)); i++) {
        if (i == 1) {
            $("#proj-title1").val(localStorage.getItem("proj-title1"));
            $("#personnel1").val(localStorage.getItem("personnel1"));
            $("#dates1").val(localStorage.getItem("dates1"));
        } else {
            $(wrapper2).append('<div><hr><p>Title:</p><input type="text" name="proj-title' + i + '" id="proj-title' + i + '"> <p>Personnel involved:</p><input type="text" name="personnel' + i + '" id="personnel' + i + '"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="text" name="dates' + i + '" id="dates' + i + '"></div> ');
            $("#proj-title" + i).val(localStorage.getItem("proj-title" + i));
            $("#personnel" + i).val(localStorage.getItem("personnel" + i));
            $("#dates" + i).val(localStorage.getItem("dates" + i));
        }
    }
}

function constructCollaborationsFields() {
    var wrapper3 = $(".collaborations-wrap");
    for (var i = 1; i < (parseInt(localStorage.page3_id3)); i++) {
        if (i == 1) {
            $("#country1").val(localStorage.getItem("country1"));
            $("#name1").val(localStorage.getItem("name1"));
            $("#name-of-principal1").val(localStorage.getItem("name-of-principal1"));
            $("#nature1").val(localStorage.getItem("nature1"));
        } else {
            $(wrapper3).append('<div><hr><p>Country:</p><input type="text" name="country' + i + '" id="country' + i + '" > <p>Name of institution:</p><input type="text" name="name' + i + '" id="name' + i + '" > <p>Name of principal contact</p><input type="text" name="name-of-principal' + i + '" id="name-of-principal' + i + '"> <p>Nature:</p><input type="text" name="nature' + i + '" id="nature' + i + '" ></div>');
            $("#country" + i).val(localStorage.getItem("country" + i));
            $("#name" + i).val(localStorage.getItem("name" + i));
            $("#name-of-principal" + i).val(localStorage.getItem("principal" + i));
            $("#nature" + i).val(localStorage.getItem("nature" + i));
        }
    }
}

function constructConferencePublicationsFields() {
    var wrapper4 = $(".conference-publications-wrap");
    for (var i = 1; i < (parseInt(localStorage.page3_id4)); i++) {
        if (i == 1) {
            $("#stud-name1").val(localStorage.getItem("stud-name1"));
            $("#publications1").val(localStorage.getItem("publications1"));
        } else {
            $(wrapper4).append('<div><hr><p>Name of the student:</p><input type="text" name="stud-name' + i + '" id="stud-name' + i + '" size="40"> <p>Publications:</p><input type="text" name="publications' + i + '" id="publications' + i + '" size="40"></div>');
            $("#stud-name" + i).val(localStorage.getItem("stud-name" + i));
            $("#publications" + i).val(localStorage.getItem("publications" + i));
        }
    }
}

function constructJournalPublicationsFields() {
    var wrapper5 = $(".journal-publications-wrap");
    for (var i = 1; i < (parseInt(localStorage.page3_id5)); i++) {
        if (i == 1) {
            $("#journal-publications1").val(localStorage.getItem("journal-publications1"));
        } else {
            $(wrapper5).append('<div><hr><p>Publications:</p><input type="text" name="journal-publications' + i + '" id="journal-publications' + i + '" size="40"></div>');
            $("#journal-publications" + i).val(localStorage.getItem("journal-publications" + i));
        }
    }
}

function checkFieldsPage3() {
    if (fields1IsEmpty() || fields2IsEmpty()) {
        alert("Fill in all the obligatory fields!");
        return true;
    } else {
        return false;
    }
}

function fields1IsEmpty() {
    for (var i = 1; i < (parseInt(localStorage.page3_id1)); i++) {
        // alert(localStorage.getItem("title" + i) === "");
        if (localStorage.getItem("title" + i) === "" || localStorage.getItem("agency" + i) === "" ||
            localStorage.getItem("period" + i) === "" || localStorage.getItem("amount" + i) === "") {
            return true;
        }
    }
    return false;
}

function fields2IsEmpty() {
    for (var i = 1; i < (parseInt(localStorage.page3_id2)); i++) {
        if (localStorage.getItem("proj-title" + i) === "" || localStorage.getItem("personnel" + i) === "" ||
            localStorage.getItem("dates" + i) === "") {
            return true;
        }
    }
    return false;
}

function serializedForm() {
    alert(localStorage.getItem("formPage1")+"&"+localStorage.getItem("formPage2")+"&"+localStorage.getItem("formPage3")+"&coursesTaughtNum="+localStorage.page2_id1+"&examsNum="+localStorage.page2_id2+"&supervisedStudentsNum="+localStorage.page2_id3+"&studentReportsNum="+localStorage.page2_id4+"&phdThesesNum="+localStorage.page2_id5+"&grantsNum="+localStorage.page3_id1+"&researchProjectsNum="+localStorage.page3_id2+"&researchCollaborationsNum="+localStorage.page3_id3+"&confPublicationsNum="+localStorage.page3_id4+"&journalPublicationsNum="+localStorage.page3_id5);
    return localStorage.getItem("formPage1")+"&"+localStorage.getItem("formPage2")+"&"+localStorage.getItem("formPage3")+"&coursesTaughtNum="+localStorage.page2_id1+"&examsNum="+localStorage.page2_id2+"&supervisedStudentsNum="+localStorage.page2_id3+"&studentReportsNum="+localStorage.page2_id4+"&phdThesesNum="+localStorage.page2_id5+"&grantsNum="+localStorage.page3_id1+"&researchProjectsNum="+localStorage.page3_id2+"&researchCollaborationsNum="+localStorage.page3_id3+"&confPublicationsNum="+localStorage.page3_id4+"&journalPublicationsNum="+localStorage.page3_id5;
}


$(document).ready(function () {
    if (localStorage.page3_id1 == null) {
        localStorage.page3_id1 = 2;
    }
    if (localStorage.page3_id2 == null) {
        localStorage.page3_id2 = 2;
    }
    if (localStorage.page3_id3 == null) {
        localStorage.page3_id3 = 2;
    }
    if (localStorage.page3_id4 == null) {
        localStorage.page3_id4 = 2;
    }
    if (localStorage.page3_id5 == null) {
        localStorage.page3_id5 = 2;
    }
    constructFields();
    $("#submit-button").on("click", function () {
        saveFieldsPage3();
        if (checkFieldsPage3()) {
            return;
        } else if (checkFieldsPage3() === false) {
            $.ajax({
                type: "POST",
                url: "/saveForm",
                data: (serializedForm()),
                success: function (html) {
                    $(".section_name").html(html);
                }
            });
        }
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

    var max_fields = 10;
    var wrapper1 = $(".grants-wrap");
    var wrapper2 = $(".research-projects-wrap");
    var wrapper3 = $(".collaborations-wrap");
    var wrapper4 = $(".conference-publications-wrap");
    var wrapper5 = $(".journal-publications-wrap");
    var add_button1 = $(".add-field-button1");
    var add_button2 = $(".add-field-button2");
    var add_button3 = $(".add-field-button3");
    var add_button4 = $(".add-field-button4");
    var add_button5 = $(".add-field-button5");

    var x1 = 1;
    $(add_button1).on("click", function (e) {
        e.preventDefault();
        if (x1 < max_fields) {
            x1++;
            $(wrapper1).append('<div><hr><p>Title:</p><input type="text" name="title' + localStorage.page3_id1 + '" id="title' + localStorage.page3_id1 + '" size="40"> <p>Granting agency:</p><input type="text" name="agency' + localStorage.page3_id1 + '" id="agency' + localStorage.page3_id1 + '" size="40"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="text" name="period' + localStorage.page3_id1 + '" id="period' + localStorage.page3_id1 + '"size="40"> <p>Amount:</p><input type="number" name="amount' + localStorage.page3_id1 + '" id="amount' + localStorage.page3_id1 + '" size="40"><button class="remove_field1">Remove</button></div>');
            localStorage.page3_id1 = (parseInt(localStorage.page3_id1)) + 1;
        }
    });

    $(wrapper1).on("click", ".remove_field1", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x1--;
        localStorage.page3_id1 = (parseInt(localStorage.page3_id1)) - 1;
    });

    var x2 = 1;
    $(add_button2).on("click", function (e) {
        e.preventDefault();
        if (x2 < max_fields) {
            x2++;
            $(wrapper2.append('<div><hr><p>Title:</p><input type="text" name="proj-title' + localStorage.page3_id2 + '" id="proj-title' + localStorage.page3_id2 + '" size="40"> <p>Personnel involved:</p><input type="text" name="personnel' + localStorage.page3_id2 + '" id="personnel' + localStorage.page3_id2 + '" size="40"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="text" name="dates' + localStorage.page3_id2 + '" id="dates' + localStorage.page3_id2 + '" size="40"><button class="remove_field2">Remove</button></div>'));
            localStorage.page3_id2 = (parseInt(localStorage.page3_id2)) + 1;
        }
    });

    $(wrapper2).on("click", ".remove_field2", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x2--;
        localStorage.page3_id2 = (parseInt(localStorage.page3_id2)) - 1;
    });

    var x3 = 1;
    $(add_button3).on("click", function (e) {
        e.preventDefault();
        if (x3 < max_fields) {
            x3++;
            $(wrapper3).append('<div><hr><p>Country:</p><input type="text" name="country' + localStorage.page3_id3 + '"  id="country' + localStorage.page3_id3 + '"  size="40"> <p>Name of institution:</p><input type="text" name="name' + localStorage.page3_id3 + '"  id="name' + localStorage.page3_id3 + '"  size="40"> <p>Name of principal contact</p><input type="text" name="name-of-principal' + localStorage.page3_id3 + '"  id="name-of-principal' + localStorage.page3_id3 + '"  size="40"> <p>Nature:</p><input type="number" name="nature' + localStorage.page3_id3 + '"  id="nature' + localStorage.page3_id3 + '"  size="40"><button class="remove_field3">Remove</button></div>');
            localStorage.page3_id3 = (parseInt(localStorage.page3_id3)) + 1;
        }
    });

    $(wrapper3).on("click", ".remove_field3", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x3--;
        localStorage.page3_id3 = (parseInt(localStorage.page3_id3)) - 1;
    });

    var x4 = 1;
    $(add_button4).on("click", function (e) {
        e.preventDefault();
        if (x4 < max_fields) {
            x4++;
            $(wrapper4).append('<div> <p>Name of the student:</p><input type="text" name="stud-name' + localStorage.page3_id4 + '" id="stud-name' + localStorage.page3_id4 + '" size="40"> <p>Publications:</p><input type="text" name="publications' + localStorage.page3_id4 + '" id="publications' + localStorage.page3_id4 + '" size="40"><button class="remove_field4">Remove</button></div>');
            localStorage.page3_id4 = (parseInt(localStorage.page3_id4)) + 1;
        }
    });

    $(wrapper4).on("click", ".remove_field4", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x4--;
        localStorage.page3_id4 = (parseInt(localStorage.page3_id4)) - 1;
    });

    var x5 = 1;
    $(add_button5).on("click", function (e) {
        e.preventDefault();
        if (x5 < max_fields) {
            x5++;
            $(wrapper5).append(' <div><hr><p>Publications:</p><input type="text" name="journal-publications' + localStorage.page3_id5 + '" id="journal-publications' + localStorage.page3_id5 + '" size="40"><button class="remove_field5">Remove</button></div>');
            localStorage.page3_id5 = (parseInt(localStorage.page3_id5)) + 1;
        }
    });

    $(wrapper5).on("click", ".remove_field5", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x5--;
        localStorage.page3_id5 = (parseInt(localStorage.page3_id5)) - 1;
    });
});
