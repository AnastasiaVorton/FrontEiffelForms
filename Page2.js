/**
 * Created by Nastya on 31.03.2017.
 */

function saveFieldsPage2() {
    localStorage.setItem("formPage2", $("#myForm").serialize());
    saveCourseFields();
    saveExamFields();
    saveStudentsFields();
    saveStudentReportsFields();
    savePhDThesesFields();
}

function constructFields() {
    constructCourseFields();
    constructExamFields();
    constructStudentsFields();
    constructStudentReportsFields();
    constructPhDThesesFields();
}


function saveCourseFields() {
    for (var i = 1; i < (parseInt(localStorage.page2_id1)); i++) {
        localStorage.setItem("courseName" + i, document.getElementById("courseName" + i).value);
        localStorage.setItem("semester" + i, document.getElementById("semester" + i).value);
        localStorage.setItem("level" + i, document.getElementById("level" + i).value);
        localStorage.setItem("num-students" + i, document.getElementById("num-students" + i).value);
    }
}

function saveExamFields() {
    for (var i = 1; i < (parseInt(localStorage.page2_id2)); i++) {
        localStorage.setItem("courseNameExam" + i, document.getElementById("courseNameExam" + i).value);
        localStorage.setItem("semesterExam" + i, document.getElementById("semesterExam" + i).value);
        localStorage.setItem("kindOfExam" + i, document.getElementById("kindOfExam" + i).value);
        localStorage.setItem("num-studentsExam" + i, document.getElementById("num-studentsExam" + i).value);
    }
}

function saveStudentsFields() {
    for (var i = 1; i < (parseInt(localStorage.page2_id3)); i++) {
        localStorage.setItem("supervisedStudentName" + i, document.getElementById("supervisedStudentName" + i).value);
        localStorage.setItem("natureOfWork" + i, document.getElementById("natureOfWork" + i).value);
    }
}

function saveStudentReportsFields() {
    for (var i = 1; i < (parseInt(localStorage.page2_id4)); i++) {
        localStorage.setItem("reportStudentName" + i, document.getElementById("reportStudentName" + i).value);
        localStorage.setItem("reportTitle" + i, document.getElementById("reportTitle" + i).value);
        localStorage.setItem("publicationPlans" + i, document.getElementById("publicationPlans" + i).value);
    }
}

function savePhDThesesFields() {
    for (var i = 1; i < (parseInt(localStorage.page2_id5)); i++) {
        localStorage.setItem("PhDThesesStudentName" + i, document.getElementById("PhDThesesStudentName" + i).value);
        localStorage.setItem("PhDThesesDegree" + i, document.getElementById("PhDThesesDegree" + i).value);
        localStorage.setItem("PhDThesesSupervisorName" + i, document.getElementById("PhDThesesSupervisorName" + i).value);
        localStorage.setItem("PhDThesesCommitteeNames" + i, document.getElementById("PhDThesesCommitteeNames" + i).value);
        localStorage.setItem("PhDThesesInstitutionName" + i, document.getElementById("PhDThesesInstitutionName" + i).value);
        localStorage.setItem("PhDThesesTitle" + i, document.getElementById("PhDThesesTitle" + i).value);
    }
}

function constructCourseFields() {
    var wrapper1 = $(".input-fields-wrap1");
    for (var i = 1; i < (parseInt(localStorage.page2_id1)); i++) {
        if (i == 1) {
            $("#courseName1").val(localStorage.getItem("courseName1"));
            $("#semester1").val(localStorage.getItem("semester1"));
            $("#level1").val(localStorage.getItem("level1"));
            $("#num-students1").val(localStorage.getItem("num-students1"));
        } else {
            $(wrapper1).append('<div><hr><p>Course name:</p><input type="text" name="courseName' + i + '" id="courseName' + i + '"/><p>Semester:</p><select name="semester'+i+'" id="semester'+i+'"> <option disabled>Select semester:</option> <option value="Fall">Fall</option> <option selected value="Spring">Spring</option> </select><p>Level:</p><select name="level' + i + '" id="level' + i + '"/><option disabled>Select level:</option> <option value="Bachelor">Bachelor</option> <option selected value="Master">Master</option> <option selected value="PhD">PhD</option></select><p>Number of students:</p><input type="number" name="num-students' + i + '" id="num-students' + i + '"/><button class="remove_field1">Remove</button></div>');
            $("#courseName" + i).val(localStorage.getItem("courseName" + i));
            $("#semester" + i).val(localStorage.getItem("semester" + i));
            $("#level" + i).val(localStorage.getItem("level" + i));
            $("#num-students" + i).val(localStorage.getItem("num-students" + i));
        }
    }
}

function constructExamFields() {
    var wrapper2 = $(".input-fields-wrap2");
    for (var i = 1; i < (parseInt(localStorage.page2_id2)); i++) {
        if (i == 1) {
            $("#courseNameExam1").val(localStorage.getItem("courseNameExam1"));
            $("#semesterExam1").val(localStorage.getItem("semesterExam1"));
            $("#kindOfExam1").val(localStorage.getItem("kindOfExam1"));
            $("#num-studentsExam1").val(localStorage.getItem("num-studentsExam1"));
        } else {
            $(wrapper2).append('<div><hr><p>Course name:</p><input type="text"  name="courseNameExam' + i + '" id="courseNameExam' + i + '" size="40"><p>Semester:</p><input type="text" name="semesterExam' + i + '" id="semesterExam' + i + '" size="40"><p>Kind of exam:</p><input type="text" name="kindOfExam' + i + '" id="kindOfExam' + i + '" size="40"> <p>Number of students:</p><input type="number" name="num-studentsExam' + i + '" id="num-studentsExam' + i + '" size="30"><button class="remove_field2">Remove</button></div>');
            $("#courseNameExam" + i).val(localStorage.getItem("courseNameExam" + i));
            $("#semesterExam" + i).val(localStorage.getItem("semesterExam" + i));
            $("#kindOfExam" + i).val(localStorage.getItem("kindOfExam" + i));
            $("#num-studentsExam" + i).val(localStorage.getItem("num-studentsExam" + i));
        }
    }
}

function constructStudentsFields() {
    var wrapper3 = $(".input-fields-wrap3");
    for (var i = 1; i < (parseInt(localStorage.page2_id3)); i++) {
        if (i == 1) {
            $("#supervisedStudentName1").val(localStorage.getItem("supervisedStudentName1"));
            $("#natureOfWork1").val(localStorage.getItem("natureOfWork1"));
        } else {
            $(wrapper3).append('<div><hr><p>Student name:</p><input type="text"  name="supervisedStudentName' + i + '" id="supervisedStudentName' + i + '" size="40"><p>Nature of work:</p><input type="text" name="natureOfWork' + i + '" id="natureOfWork' + i + '" size="40"><button class="remove_field3">Remove</button></div>');
            $("#supervisedStudentName" + i).val(localStorage.getItem("supervisedStudentName" + i));
            $("#natureOfWork" + i).val(localStorage.getItem("natureOfWork" + i));
        }
    }
}

function constructStudentReportsFields() {
    var wrapper4 = $(".input-fields-wrap4");
    for (var i = 1; i < (parseInt(localStorage.page2_id4)); i++) {
        if (i == 1) {
            $("#reportStudentName1").val(localStorage.getItem("reportStudentName1"));
            $("#reportTitle1").val(localStorage.getItem("reportTitle1"));
            $("#publicationPlans1").val(localStorage.getItem("publicationPlans1"));
        } else {
            $(wrapper4).append('<div><hr><p>Student name:</p><input type="text"  name="reportStudentName' + i + '" id="reportStudentName' + i + '" size="40"> <p>Title:</p><input type="text"  name="reportTitle' + i + '" id="reportTitle' + i + '" size="40"><p>Publication plans:</p><input type="text"  name="publicationPlans' + i + '" id="publicationPlans' + i + '"><button class="remove_field4">Remove</button></div>');
            $("#reportStudentName" + i).val(localStorage.getItem("reportStudentName" + i));
            $("#reportTitle" + i).val(localStorage.getItem("reportTitle" + i));
            $("#publicationPlans" + i).val(localStorage.getItem("publicationPlans" + i));
        }
    }
}

function constructPhDThesesFields() {
    var wrapper5 = $(".input-fields-wrap5");
    for (var i = 1; i < (parseInt(localStorage.page2_id5)); i++) {
        if (i == 1) {
            $("#PhDThesesStudentName1").val(localStorage.getItem("PhDThesesStudentName1"));
            $("#PhDThesesDegree1").val(localStorage.getItem("PhDThesesDegree1"));
            $("#PhDThesesSupervisorName1").val(localStorage.getItem("PhDThesesSupervisorName1"));
            $("#PhDThesesCommitteeNames1").val(localStorage.getItem("PhDThesesCommitteeNames1"));
            $("#PhDThesesInstitutionName1").val(localStorage.getItem("PhDThesesInstitutionName1"));
            $("#PhDThesesTitle1").val(localStorage.getItem("PhDThesesTitle1"));
        } else {
            $(wrapper5).append('<div><hr><p>Student name:</p><input type="text"  name="PhDThesesStudentName' + i + '" id="PhDThesesStudentName' + i + '" size="40"> <p>Degree:</p><input type="text"  name="PhDThesesDegree' + i + '" id="PhDThesesDegree' + i + '" size="40"> <p>Name of supervisor:</p><input type="text"  name="PhDThesesSupervisorName' + i + '" id="PhDThesesSupervisorName' + i + '" size="40"> <p>Names of other comittee members:</p><input type="text"  name="PhDThesesCommitteeNames' + i + '" id="PhDThesesCommitteeNames' + i + '" size="40"> <p>Name of institution:</p><input type="text"  name="PhDThesesInstitutionName' + i + '" id="PhDThesesInstitutionName' + i + '" size="40"> <p>Title:</p><input type="text"  name="PhDThesesTitle' + i + '" id="PhDThesesTitle' + i + '" size="40"><button class="remove_field5">Remove</button></div>');
            $("#PhDThesesStudentName" + i).val(localStorage.getItem("PhDThesesStudentName" + i));
            $("#PhDThesesDegree" + i).val(localStorage.getItem("PhDThesesDegree" + i));
            $("#PhDThesesSupervisorName" + i).val(localStorage.getItem("PhDThesesSupervisorName" + i));
            $("#PhDThesesCommitteeNames" + i).val(localStorage.getItem("PhDThesesCommitteeNames" + i));
            $("#PhDThesesInstitutionName" + i).val(localStorage.getItem("PhDThesesInstitutionName" + i));
            $("#PhDThesesTitle" + i).val(localStorage.getItem("PhDThesesTitle" + i));
        }
    }
}

function field1isEmpty() {
    for (var i = 1; i < (parseInt(localStorage.page2_id1)); i++) {
        if (localStorage.getItem("courseName" + i) === "" || localStorage.getItem("semester" + i) === "" ||
            localStorage.getItem("level" + i) === "" || localStorage.getItem("num-students" + i) === "") {
            return true;
        }
    }
    return false;
}

function field2isEmpty() {
    for (var i = 1; i < (parseInt(localStorage.page2_id2)); i++) {
        if (localStorage.getItem("courseNameExam" + i) === "" || localStorage.getItem("semesterExam" + i) === "" ||
            localStorage.getItem("kindOfExam" + i) === "" || localStorage.getItem("num-studentsExam" + i) === "") {
            return true;
        }
    }
    return false;
}

function field3isEmpty() {
    for (var i = 1; i < (parseInt(localStorage.page2_id3)); i++) {
        if (localStorage.getItem("supervisedStudentName" + i) === "" || localStorage.getItem("natureOfWork" + i) === "") {
            return true;
        }
    }
    return false;
}

function field4isEmpty() {
    for (var i = 1; i < (parseInt(localStorage.page2_id4)); i++) {
        if (localStorage.getItem("reportsStudentName" + i) === "" || localStorage.getItem("reportTitle" + i) === "" ||
        localStorage.getItem("publicationPlans" + i) === "") {
            return true;
        }
    }
    return false;
}

function checkFields() {
    if (field1isEmpty() || field2isEmpty() || field3isEmpty() || field4isEmpty()) {
        alert("Fill in all the obligatory fields!");
        return true;
    } else {
        return false;
    }
}

$(document).ready(function () {
    if (localStorage.getItem("page2_id1") == null) {
        localStorage.page2_id1 = 2;
    }
    if (localStorage.page2_id2 == null) {
        localStorage.page2_id2 = 2;
    }
    if (localStorage.page2_id3 == null) {
        localStorage.page2_id3 = 2;
    }
    if (localStorage.page2_id4 == null) {
        localStorage.page2_id4 = 2;
    }
    if (localStorage.page2_id5 == null) {
        localStorage.page2_id5 = 2;
    }
    constructFields();
    $("#js-next-button").on("click", function () {
        saveFieldsPage2();
        if (checkFields()) {
            return;
        } else if (checkFields() === false)
            $.ajax({
                type: "POST",
                url: "Page3.html",
                success: function (html) {
                    $("#container-main-field").html(html);
                }
            });
    });

    $("#js-back-button").on("click", function () {
        saveFieldsPage2();
        $.ajax({
            type: "POST",
            url: "Page1.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    var max_fields = 10;
    var wrapper1 = $(".input-fields-wrap1");
    var wrapper2 = $(".input-fields-wrap2");
    var wrapper3 = $(".input-fields-wrap3");
    var wrapper4 = $(".input-fields-wrap4");
    var wrapper5 = $(".input-fields-wrap5");
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
            $(wrapper1).append('<div><hr><p>Course name:</p><input type="text" name="courseName' + localStorage.page2_id1 + '" id="courseName' + localStorage.page2_id1 + '"/><p>Semester:</p><select name="semester' + localStorage.page2_id1 + '" id="semester' + localStorage.page2_id1 + '"> <option disabled>Select semester:</option> <option value="Fall">Fall</option> <option selected value="Spring">Spring</option> </select><p>Level:</p><select name="level' + localStorage.page2_id1 + '" id="level' + localStorage.page2_id1 + '"> <option disabled>Select level:</option> <option value="Bachelor">Bachelor</option> <option selected value="Master">Master</option> <option selected value="PhD">PhD</option> </select><p>Number of students:</p><input type="number" name="num-students' + localStorage.page2_id1 + '" id="num-students' + localStorage.page2_id1 + '"/><button class="remove_field1">Remove</button></div>');
            localStorage.page2_id1 = (parseInt(localStorage.page2_id1)) + 1;
        }
    });

    $(wrapper1).on("click", ".remove_field1", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x1--;
        localStorage.page2_id1 = (parseInt (localStorage.page2_id1)) - 1;
    });

    var x2 = 1;
    $(add_button2).on("click", function (e) {
        e.preventDefault();
        if (x2 < max_fields) {
            x2++;
            $(wrapper2).append('<div><hr><p>Course name:</p><input type="text"  name="courseNameExam' + localStorage.page2_id2 + '" id="courseNameExam' + localStorage.page2_id2 + '" size="40"><p>Semester:</p><input type="text" name="semesterExam' + localStorage.page2_id2 + '" id="semesterExam' + localStorage.page2_id2 + '" size="40"><p>Kind of exam:</p><input type="text" name="kindOfExam' + localStorage.page2_id2 + '" id="kindOfExam' + localStorage.page2_id2 + '" size="40"> <p>Number of students:</p><input type="number" name="num-studentsExam' + localStorage.page2_id2 + '" id="num-studentsExam' + localStorage.page2_id2 + '" size="30"><button class="remove_field2">Remove</button></div>');
            localStorage.page2_id2 = (parseInt(localStorage.page2_id2)) + 1;
        }
    });

    $(wrapper2).on("click", ".remove_field2", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x2--;
        localStorage.page2_id2 = (parseInt(localStorage.page2_id2)) - 1;
    });

    var x3 = 1;
    $(add_button3).on("click", function (e) {
        e.preventDefault();
        if (x3 < max_fields) {
            x3++;
            $(wrapper3).append('<div><hr><p>Student name:</p><input type="text"  name="supervisedStudentName' + localStorage.page2_id3 + '" id="supervisedStudentName' + localStorage.page2_id3 + '" size="40"><p>Nature of work:</p><input type="text" name="natureOfWork' + localStorage.page2_id3 + '" id="natureOfWork' + localStorage.page2_id3 + '" size="40"><button class="remove_field3">Remove</button></div>');
            localStorage.page2_id3 = (parseInt(localStorage.page2_id3)) + 1;
        }
    });

    $(wrapper3).on("click", ".remove_field3", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x3--;
        localStorage.page2_id3 = (parseInt(localStorage.page2_id3)) - 1;
    });

    var x4 = 1;
    $(add_button4).on("click", function (e) {
        e.preventDefault();
        if (x4 < max_fields) {
            x4++;
            $(wrapper4).append('<div><hr><p>Student name:</p><input type="text"  name="reportStudentName' + localStorage.page2_id4 + '" id="reportStudentName' + localStorage.page2_id4 + '" size="40"> <p>Title:</p><input type="text"  name="reportTitle' + localStorage.page2_id4 + '" id="reportTitle' + localStorage.page2_id4 + '" size="40"><p>Publication plans:</p><input type="text"  name="publicationPlans' + localStorage.page2_id4 + '" id="publicationPlans' + localStorage.page2_id4 + '" size="40"><button class="remove_field4">Remove</button></div>');
            localStorage.page2_id4 = (parseInt(localStorage.page2_id4)) + 1;
        }
    });

    $(wrapper4).on("click", ".remove_field4", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x4--;
        localStorage.page2_id4 = (parseInt(localStorage.page2_id4)) - 1;
    });

    var x5 = 1;
    $(add_button5).on("click", function (e) {
        e.preventDefault();
        if (x5 < max_fields) {
            x5++;
            $(wrapper5).append('<div><hr><p>Student name:</p><input type="text"  name="PhDThesesStudentName' + localStorage.page2_id5 + '" id="PhDThesesStudentName' + localStorage.page2_id5 + '" size="40"> <p>Degree:</p><input type="text"  name="PhDThesesDegree' + localStorage.page2_id5 + '" id="PhDThesesDegree' + localStorage.page2_id5 + '" size="40"> <p>Name of supervisor:</p><input type="text"  name="PhDThesesSupervisorName' + localStorage.page2_id5 + '" id="PhDThesesSupervisorName' + localStorage.page2_id5 + '" size="40"> <p>Names of other comittee members:</p><input type="text"  name="PhDThesesCommitteeNames' + localStorage.page2_id5 + '" id="PhDThesesCommitteeNames' + localStorage.page2_id5 + '" size="40"> <p>Name of institution:</p><input type="text"  name="PhDThesesInstitutionName' + localStorage.page2_id5 + '" id="PhDThesesInstitutionName' + localStorage.page2_id5 + '" size="40"> <p>Title:</p><input type="text"  name="PhDThesesTitle' + localStorage.page2_id5 + '" id="PhDThesesTitle' + localStorage.page2_id5 + '" size="40"><button class="remove_field5">Remove</button></div>');
            localStorage.page2_id5 = (parseInt(localStorage.page2_id5)) + 1;
        }
    });

    $(wrapper5).on("click", ".remove_field5", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x5--;
        localStorage.page2_id5 = (parseInt(localStorage.page2_id5)) - 1;
    });

});
