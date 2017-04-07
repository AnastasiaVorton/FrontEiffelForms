
/**
 * Created by Nastya on 31.03.2017.
 */

function saveFieldsPage1(){
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
    for (var i = 1; i < (parseInt(localStorage.page1_id1)); i++) {
        localStorage.setItem("courseName"+i, document.getElementById("courseName"+i).value);
        localStorage.setItem("semester"+i, document.getElementById("semester"+i).value);
        localStorage.setItem("level"+i, document.getElementById("level"+i).value);
        localStorage.setItem("num-students"+i, document.getElementById("num-students"+i).value);
    }
}

function saveExamFields(){
    for (var i = 1; i < (parseInt(localStorage.page1_id2)); i++) {
        localStorage.setItem("courseNameExam"+i, document.getElementById("courseNameExam"+i).value);
        localStorage.setItem("semesterExam"+i, document.getElementById("semesterExam"+i).value);
        localStorage.setItem("kindOfExam"+i, document.getElementById("kindOfExam"+i).value);
        localStorage.setItem("num-studentsExam"+i, document.getElementById("num-studentsExam"+i).value);
    }
}

function saveStudentsFields() {
    for (var i = 1; i < (parseInt(localStorage.page1_id3)); i++) {
        localStorage.setItem("supervisedStudentName"+i, document.getElementById("supervisedStudentName"+i).value);
        localStorage.setItem("natureOfWork"+i, document.getElementById("natureOfWork"+i).value);
    }
}

function saveStudentReportsFields() {
    for (var i = 1; i < (parseInt(localStorage.page1_id4)); i++) {
        localStorage.setItem("reportStudentName"+i, document.getElementById("reportStudentName"+i).value);
        localStorage.setItem("reportTitle"+i, document.getElementById("reportTitle"+i).value);
    }
}

function savePhDThesesFields() {
    for (var i = 1; i < (parseInt(localStorage.page1_id5)); i++) {
        localStorage.setItem("PhDThesesStudentName"+i, document.getElementById("PhDThesesStudentName"+i).value);
        localStorage.setItem("PhDThesesDegree"+i, document.getElementById("PhDThesesDegree"+i).value);
        localStorage.setItem("PhDThesesSupervisorName"+i, document.getElementById("PhDThesesSupervisorName"+i).value);
        localStorage.setItem("PhDThesesCommitteeNames"+i, document.getElementById("PhDThesesCommitteeNames"+i).value);
        localStorage.setItem("PhDThesesInstitutionName"+i, document.getElementById("PhDThesesInstitutionName"+i).value);
        localStorage.setItem("PhDThesesTitle"+i, document.getElementById("PhDThesesTitle"+i).value);
    }
}

function constructCourseFields() {
    var wrapper1 = $(".input-fields-wrap1");
    for (var i = 1; i < (parseInt(localStorage.page1_id1)); i++) {
        if (i == 1) {
            $("#courseName1").val(localStorage.getItem("courseName1"));
            $("#semester1").val(localStorage.getItem("semester1"));
            $("#level1").val(localStorage.getItem("level1"));
            $("#num-students1").val(localStorage.getItem("num-students1"));
        } else {
            $(wrapper1).append('<div><p>Course name:</p><input type="text" name="courseName' + i + '" id="courseName' + i + '"/><p>Semester:</p><input type="text" name="semester' + i + '" id="semester' + i + '"/> <p>Level:</p><input type="text" name="level' + i + '" id="level' + i + '"/> <p>Number of students:</p><input type="number" name="num-students' + i + '" id="num-students' + i + '"/><hr></div>');
            $("#courseName" + i).val(localStorage.getItem("courseName" + i));
            $("#semester" + i).val(localStorage.getItem("semester" + i));
            $("#level" + i).val(localStorage.getItem("level" + i));
            $("#num-students" + i).val(localStorage.getItem("num-students" + i));
        }
    }
}

function constructExamFields() {
    var wrapper2 = $(".input-fields-wrap2");
    for (var i = 1; i < (parseInt(localStorage.page1_id2)); i++) {
        if (i == 1) {
            $("#courseNameExam1").val(localStorage.getItem("courseNameExam1"));
            $("#semesterExam1").val(localStorage.getItem("semesterExam1"));
            $("#kindOfExam1").val(localStorage.getItem("kindOfExam1"));
            $("#num-studentsExam1").val(localStorage.getItem("num-studentsExam1"));
        } else {
            $(wrapper2).append('<div><p>Course name:</p><input type="text"  name="courseNameExam'+i+'" id="courseNameExam'+i+'" size="40"><p>Semester:</p><input type="text" name="semesterExam'+i+'" id="semesterExam'+i+'" size="40"><p>Kind of exam:</p><input type="text" name="kindOfExam'+i+'" id="kindOfExam'+i+'" size="40"> <p>Number of students:</p><input type="number" name="num-studentsExam'+i+'" id="num-studentsExam'+i+'" size="30"></div>');
            $("#courseNameExam" + i).val(localStorage.getItem("courseNameExam" + i));
            $("#semesterExam" + i).val(localStorage.getItem("semesterExam" + i));
            $("#kindOfExam" + i).val(localStorage.getItem("kindOfExam" + i));
            $("#num-studentsExam" + i).val(localStorage.getItem("num-studentsExam" + i));
        }
    }
}

function constructStudentsFields() {
    var wrapper3 = $(".input-fields-wrap3");
    for (var i = 1; i < (parseInt(localStorage.page1_id3)); i++) {
        if (i == 1) {
            $("#supervisedStudentName1").val(localStorage.getItem("supervisedStudentName1"));
            $("#natureOfWork1").val(localStorage.getItem("natureOfWork1"));
        } else {
            $(wrapper3).append('<div><p>Student name:</p><input type="text"  name="supervisedStudentName'+i+'" id="supervisedStudentName'+i+'" size="40"><p>Nature of work:</p><input type="text" name="natureOfWork'+i+'" id="natureOfWork'+i+'" size="40"></div>');
            $("#supervisedStudentName" + i).val(localStorage.getItem("supervisedStudentName" + i));
            $("#natureOfWork" + i).val(localStorage.getItem("natureOfWork" + i));
        }
    }
}

function constructStudentReportsFields() {
    var wrapper4 = $(".input-fields-wrap4");
    for (var i = 1; i < (parseInt(localStorage.page1_id4)); i++) {
        if (i == 1) {
            $("#reportStudentName1").val(localStorage.getItem("reportStudentName1"));
            $("#reportTitle1").val(localStorage.getItem("reportTitle1"));
        } else {
            $(wrapper4).append('<div><p>Student name:</p><input type="text"  name="reportStudentName'+i+'" id="reportStudentName'+i+'" size="40"> <p>Title:</p><input type="text"  name="reportTitle'+i+'" id="reportTitle'+i+'" size="40"></div>');
            $("#reportStudentName" + i).val(localStorage.getItem("reportStudentName" + i));
            $("#reportTitle" + i).val(localStorage.getItem("reportTitle" + i));
        }
    }
}

function constructPhDThesesFields() {
    var wrapper5 = $(".input-fields-wrap5");
    for (var i = 1; i < (parseInt(localStorage.page1_id5)); i++) {
        if (i == 1) {
            $("#PhDThesesStudentName1").val(localStorage.getItem("PhDThesesStudentName1"));
            $("#PhDThesesDegree1").val(localStorage.getItem("PhDThesesDegree"));
            $("#PhDThesesSupervisorName1").val(localStorage.getItem("PhDThesesSupervisorName1"));
            $("#PhDThesesCommitteeNames1").val(localStorage.getItem("PhDThesesCommitteeNames1"));
            $("#PhDThesesInstitutionName1").val(localStorage.getItem("PhDThesesInstitutionName1"));
            $("#PhDThesesTitle1").val(localStorage.getItem("PhDThesesTitle1"));
        } else {
            $(wrapper5).append('<div><p>Student name:</p><input type="text"  name="PhDThesesStudentName'+i+'" id="PhDThesesStudentName'+i+'" size="40"> <p>Degree:</p><input type="text"  name="PhDThesesDegree'+i+'" id="PhDThesesDegree'+i+'" size="40"> <p>Name of supervisor:</p><input type="text"  name="PhDThesesSupervisorName'+i+'" id="PhDThesesSupervisorName'+i+'" size="40"> <p>Names of other comittee members:</p><input type="text"  name="PhDThesesCommitteeNames'+i+'" id="PhDThesesCommitteeNames'+i+'" size="40"> <p>Name of institution:</p><input type="text"  name="PhDThesesInstitutionName'+i+'" id="PhDThesesInstitutionName'+i+'" size="40"> <p>Title:</p><input type="text"  name="PhDThesesTitle'+i+'" id="PhDThesesTitle'+i+'" size="40"></div>');
            $("#PhDThesesStudentName" + i).val(localStorage.getItem("PhDThesesStudentName" + i));
            $("#PhDThesesDegree" + i).val(localStorage.getItem("PhDThesesDegree" + i));
            $("#PhDThesesSupervisorName" + i).val(localStorage.getItem("PhDThesesSupervisorName" + i));
            $("#PhDThesesCommitteeNames" + i).val(localStorage.getItem("PhDThesesCommitteeNames" + i));
            $("#PhDThesesInstitutionName" + i).val(localStorage.getItem("PhDThesesInstitutionName" + i));
            $("#PhDThesesTitle" + i).val(localStorage.getItem("PhDThesesTitle" + i));
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
    $("#js-next-button").on("click", function () {
        saveFieldsPage1();
        $.ajax({
            type: "POST",
            url: "Page3.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    $("#js-back-button").on("click", function () {
        saveFieldsPage1();
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
        if (x1 < max_fields){
            x1++;
            $(wrapper1).append('<div><hr><p>Course name:</p><input type="text" name="courseName'+localStorage.page1_id1+'" id="courseName'+localStorage.page1_id1+'"/><p>Semester:</p><input type="text" name="semester'+localStorage.page1_id1+'" id="semester'+localStorage.page1_id1+'"/> <p>Level:</p><input type="text" name="level'+localStorage.page1_id1+'" id="level'+localStorage.page1_id1+'"/> <p>Number of students:</p><input type="number" name="num-students'+localStorage.page1_id1+'" id="num-students'+localStorage.page1_id1+'"/></div>');
            localStorage.page1_id1 = (parseInt(localStorage.page1_id1)) + 1;
        }
    });

    var x2 = 1;
    $(add_button2).on("click", function (e) {
        e.preventDefault();
        if (x2 < max_fields){
            x2++;
            $(wrapper2).append('<div><hr><p>Course name:</p><input type="text"  name="courseNameExam'+localStorage.page1_id2+'" id="courseNameExam'+localStorage.page1_id2+'" size="40"><p>Semester:</p><input type="text" name="semesterExam'+localStorage.page1_id2+'" id="semesterExam'+localStorage.page1_id2+'" size="40"><p>Kind of exam:</p><input type="text" name="kindOfExam'+localStorage.page1_id2+'" id="kindOfExam'+localStorage.page1_id2+'" size="40"> <p>Number of students:</p><input type="number" name="num-studentsExam'+localStorage.page1_id2+'" id="num-studentsExam'+localStorage.page1_id2+'" size="30"></div>');
            localStorage.page1_id2 = (parseInt(localStorage.page1_id2)) + 1;
        }
    });

    var x3 = 1;
    $(add_button3).on("click", function (e) {
        e.preventDefault();
        if (x3 < max_fields){
            x3++;
            $(wrapper3).append('<div><hr><p>Student name:</p><input type="text"  name="supervisedStudentName'+localStorage.page1_id3+'" id="supervisedStudentName'+localStorage.page1_id3+'" size="40"><p>Nature of work:</p><input type="text" name="natureOfWork'+localStorage.page1_id3+'" id="natureOfWork'+localStorage.page1_id3+'" size="40"></div>');
            localStorage.page1_id3 = (parseInt(localStorage.page1_id3)) + 1;
        }
    });

    var x4 = 1;
    $(add_button4).on("click", function (e) {
        e.preventDefault();
        if (x4 < max_fields){
            x4++;
            $(wrapper4).append('<div><hr><p>Student name:</p><input type="text"  name="reportStudentName'+localStorage.page1_id4+'" id="reportStudentName'+localStorage.page1_id4+'" size="40"> <p>Title:</p><input type="text"  name="reportTitle'+localStorage.page1_id4+'" id="reportTitle'+localStorage.page1_id4+'" size="40"></div>');
            localStorage.page1_id4 = (parseInt(localStorage.page1_id4)) + 1;
        }
    });

    var x5 = 1;
    $(add_button5).on("click", function (e) {
        e.preventDefault();
        if (x5 < max_fields){
            x5++;
            $(wrapper5).append('<div><hr><p>Student name:</p><input type="text"  name="PhDThesesStudentName'+localStorage.page1_id5+'" id="PhDThesesStudentName'+localStorage.page1_id5+'" size="40"> <p>Degree:</p><input type="text"  name="PhDThesesDegree'+localStorage.page1_id5+'" id="PhDThesesDegree'+localStorage.page1_id5+'" size="40"> <p>Name of supervisor:</p><input type="text"  name="PhDThesesSupervisorName'+localStorage.page1_id5+'" id="PhDThesesSupervisorName'+localStorage.page1_id5+'" size="40"> <p>Names of other comittee members:</p><input type="text"  name="PhDThesesCommitteeNames'+localStorage.page1_id5+'" id="PhDThesesCommitteeNames'+localStorage.page1_id5+'" size="40"> <p>Name of institution:</p><input type="text"  name="PhDThesesInstitutionName'+localStorage.page1_id5+'" id="PhDThesesInstitutionName'+localStorage.page1_id5+'" size="40"> <p>Title:</p><input type="text"  name="PhDThesesTitle'+localStorage.page1_id5+'" id="PhDThesesTitle'+localStorage.page1_id5+'" size="40"></div>');
            localStorage.page1_id5 = (parseInt(localStorage.page1_id5)) + 1;
        }
    });

});
