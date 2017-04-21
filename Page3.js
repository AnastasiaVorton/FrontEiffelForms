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
        localStorage.setItem("startPeriod" + i, document.getElementById("startPeriod" + i).value);
        localStorage.setItem("endPeriod" + i, document.getElementById("endPeriod" + i).value);
        localStorage.setItem("continuation" + i, document.getElementById("continuation" + i).value);
        localStorage.setItem("amount" + i, document.getElementById("amount" + i).value);
    }
}

function saveResearchFields() {
    for (var i = 1; i < (parseInt(localStorage.page3_id2)); i++) {
        localStorage.setItem("proj-title" + i, document.getElementById("proj-title" + i).value);
        localStorage.setItem("personnel" + i, document.getElementById("personnel" + i).value);
        localStorage.setItem("startDates" + i, document.getElementById("startDates" + i).value);
        localStorage.setItem("endDates" + i, document.getElementById("endDates" + i).value);
        localStorage.setItem("externalPersonnel" + i, document.getElementById("externalPersonnel" + i).value);
        localStorage.setItem("financing" + i, document.getElementById("financing" + i).value);
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
            $("#startPeriod1").val(localStorage.getItem("startPeriod1"));
            $("#endPeriod1").val(localStorage.getItem("endPeriod1"));
            $("#continuation1").val(localStorage.getItem("continuation1"));
            $("#amount1").val(localStorage.getItem("amount1"));
        } else {
            $(wrapper1).append('<div><hr><p>Title: </p><input type="text" name="title' + i + '" id="title' + i + '"/> <p>Granting agency:</p><input type="text" name="agency' + i + '" id="agency' + i + '"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="date" name="startPeriod' + i + '" id="startPeriod' + i + '"><input type="date" name="endPeriod' + i + '" id="endPeriod' + i + '"><p>Continuation of other grant:</p><input type="text" name="continuation' + i + '" id="continuation' + i + '"><p>Amount:</p><input type="number" name="amount' + i + '" id="amount' + i + '"><button class="remove_field1">Remove</button></div>');
            $("#title" + i).val(localStorage.getItem("title" + i));
            $("#agency" + i).val(localStorage.getItem("agency" + i));
            $("#startPeriod" + i).val(localStorage.getItem("startPeriod" + i));
            $("#endPeriod" + i).val(localStorage.getItem("endPeriod" + i));
            $("#continuation" + i).val(localStorage.getItem("continuation" + i));
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
            $("#startDates1").val(localStorage.getItem("startDates1"));
            $("#endDates1").val(localStorage.getItem("endDates1"));
            $("#externalPersonnel1").val(localStorage.getItem("externalPersonnel1"));
            $("#financing1").val(localStorage.getItem("financing1"));
        } else {
            $(wrapper2.append('<div><hr><p>Title:</p><input type="text" name="proj-title' + i + '" id="proj-title' + i + '" size="40"> <p>Personnel involved:</p><input type="text" name="personnel' + i + '" id="personnel' + i + '" size="40"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="date" name="startDates' + i + '" id="startDates' + i + '" size="40"><input type="date" name="endDates' + i + '" id="endDates' + i + '" size="40"><p>External personnel involved:</p><input type="text" name="externalPersonnel' + i + '" id="externalPersonnel' + i + '" size="40"><p>Financing:</p><input type="text" name="financing' + i + '" id="financing' + i + '" size="40"><button class="remove_field2">Remove</button></div>'));
            $("#proj-title" + i).val(localStorage.getItem("proj-title" + i));
            $("#personnel" + i).val(localStorage.getItem("personnel" + i));
            $("#startDates" + i).val(localStorage.getItem("startDates" + i));
            $("#endDates" + i).val(localStorage.getItem("endDates" + i));
            $("#externalPersonnel" + i).val(localStorage.getItem("externalPersonnel" + i));
            $("#financing" + i).val(localStorage.getItem("financing" + i));
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
            $(wrapper3).append('<div><hr><p>Country:</p><input type="text" name="country' + i + '" id="country' + i + '" > <p>Name of institution:</p><input type="text" name="name' + i + '" id="name' + i + '" > <p>Name of principal contact</p><input type="text" name="name-of-principal' + i + '" id="name-of-principal' + i + '"> <p>Nature:</p><input type="text" name="nature' + i + '" id="nature' + i + '" ><button class="remove_field3">Remove</button></div>');
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
            // $("#stud-name1").val(localStorage.getItem("stud-name1"));
            $("#publications1").val(localStorage.getItem("publications1"));
        } else {
            $(wrapper4).append('<div><hr><p>Publications:</p><input type="text" name="publications' + i + '" id="publications' + i + '" size="40"><button class="remove_field4">Remove</button></div>');
            // $("#stud-name" + i).val(localStorage.getItem("stud-name" + i));
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
            $(wrapper5).append('<div><hr><p>Publications:</p><input type="text" name="journal-publications' + i + '" id="journal-publications' + i + '" size="40"><button class="remove_field5">Remove</button></div>');
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
            localStorage.getItem("startPeriod" + i) === "" || localStorage.getItem("endPeriod" + i) === "" ||
            localStorage.getItem("continuation" + i) === "" || localStorage.getItem("amount" + i) === "") {
            return true;
        }
    }
    return false;
}

function fields2IsEmpty() {
    for (var i = 1; i < (parseInt(localStorage.page3_id2)); i++) {
        if (localStorage.getItem("proj-title" + i) === "" || localStorage.getItem("personnel" + i) === "" ||
            localStorage.getItem("startDates" + i) === "" || localStorage.getItem("endDates" + i) === "" ||
            localStorage.getItem("externalPersonnel" + i) === "" || localStorage.getItem("financing" + i) === "") {
            return true;
        }
    }

    return false;
}

function checkDatesPage3() {
    if (isFalseGrantsDate() || isFalseResearchDate()) {
        return true;
    } else {
        return false;
    }
}

function isFalseGrantsDate() {
    for (var i = 1; i < (parseInt(localStorage.page3_id1)); i++) {
        var startDate = new Date(this.document.getElementById("startPeriod" + i).value);
        if (startDate.getFullYear() < 2012) {
            alert("Year must not be less than 2012");
            return true;
        }
    }
    return false;
}

function isFalseResearchDate() {
    for (var i = 1; i < (parseInt(localStorage.page3_id2)); i++) {
        var startDate = new Date(this.document.getElementById("startDates" + i).value);
        if (startDate.getFullYear() < 2012) {
            alert("Year must not be less than 2012");
            return true;
        }
    }
    return false;
}

function serializedForm() {
    // alert(localStorage.getItem("formPage1")+"&"+localStorage.getItem("formPage2")+"&"+localStorage.getItem("formPage3")+"&coursesTaughtNum="+localStorage.page2_id1+"&examsNum="+localStorage.page2_id2+"&supervisedStudentsNum="+localStorage.page2_id3+"&studentReportsNum="+localStorage.page2_id4+"&phdThesesNum="+localStorage.page2_id5+"&grantsNum="+localStorage.page3_id1+"&researchProjectsNum="+localStorage.page3_id2+"&researchCollaborationsNum="+localStorage.page3_id3+"&confPublicationsNum="+localStorage.page3_id4+"&journalPublicationsNum="+localStorage.page3_id5);
    return localStorage.getItem("formPage1") + "&" + localStorage.getItem("formPage2") + "&" + localStorage.getItem("formPage3") + "&coursesTaughtNum=" + localStorage.page2_id1 + "&examsNum=" + localStorage.page2_id2 + "&supervisedStudentsNum=" + localStorage.page2_id3 + "&studentReportsNum=" + localStorage.page2_id4 + "&phdThesesNum=" + localStorage.page2_id5 + "&grantsNum=" + localStorage.page3_id1 + "&researchProjectsNum=" + localStorage.page3_id2 + "&researchCollaborationsNum=" + localStorage.page3_id3 + "&confPublicationsNum=" + localStorage.page3_id4 + "&journalPublicationsNum=" + localStorage.page3_id5;
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
    $("#js-next-button").on("click", function () {
        saveFieldsPage3();
        if (checkFieldsPage3() | checkDatesPage3()) {
            return;
        } else {
            $.ajax({
                type: "POST",
                url: "Page4.html",
                success: function (html) {
                    $("#container-main-field").html(html);
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
            $(wrapper1).append('<div><hr><p>Title:</p><input type="text" name="title' + localStorage.page3_id1 + '" id="title' + localStorage.page3_id1 + '" size="40"> <p>Granting agency:</p><input type="text" name="agency' + localStorage.page3_id1 + '" id="agency' + localStorage.page3_id1 + '" size="40"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="date" name="startPeriod' + localStorage.page3_id1 + '" id="startPeriod' + localStorage.page3_id1 + '"size="40"><input type="date" name="endPeriod' + localStorage.page3_id1 + '" id="endPeriod' + localStorage.page3_id1 + '"size="40"><p>Continuation of other grant:</p><input type="text" name="continuation' + localStorage.page3_id1 + '" id="continuation' + localStorage.page3_id1 + '"size="40"><p>Amount:</p><input type="number" name="amount' + localStorage.page3_id1 + '" id="amount' + localStorage.page3_id1 + '" size="40"><button class="remove_field1">Remove</button></div>');
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
            $(wrapper2.append('<div><hr><p>Title:</p><input type="text" name="proj-title' + localStorage.page3_id2 + '" id="proj-title' + localStorage.page3_id2 + '" size="40"> <p>Personnel involved:</p><input type="text" name="personnel' + localStorage.page3_id2 + '" id="personnel' + localStorage.page3_id2 + '" size="40"> <p>Period(in format dd.mm.yyyy - dd.mm.yyyy)</p><input type="date" name="startDates' + localStorage.page3_id2 + '" id="startDates' + localStorage.page3_id2 + '" size="40"><input type="date" name="endDates' + localStorage.page3_id2 + '" id="endDates' + localStorage.page3_id2 + '" size="40"><p>External personnel involved:</p><input type="text" name="externalPersonnel' + localStorage.page3_id2 + '" id="externalPersonnel' + localStorage.page3_id2 + '" size="40"><p>Financing:</p><input type="text" name="financing' + localStorage.page3_id2 + '" id="financing' + localStorage.page3_id2 + '" size="40"><button class="remove_field2">Remove</button></div>'));
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
            $(wrapper4).append('<div><p>Publications:</p><input type="text" name="publications' + localStorage.page3_id4 + '" id="publications' + localStorage.page3_id4 + '" size="40"><button class="remove_field4">Remove</button></div>');
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
