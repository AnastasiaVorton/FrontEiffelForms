/**
 * Created by Nastya on 24.04.2017.
 */
function saveFieldsPage7() {
    localStorage.setItem("formPage7", $("#myForm").serialize());
    localStorage.otherInfo = document.getElementById("otherInfo").value;
}

function constructFields() {
    $("#otherInfo").val(localStorage.otherInfo);
}

function serializedForm() {
    return localStorage.getItem("formPage1") + "&" + localStorage.getItem("formPage2") + "&" +
        localStorage.getItem("formPage3") + "&" + localStorage.getItem("formPage4") + "&" + localStorage.getItem("formPage5")
        + "&" + localStorage.getItem("formPage6") + "&" + localStorage.getItem("formPage7") + "&" + "&coursesTaughtNum=" + localStorage.page2_id1
        + "&examsNum=" + localStorage.page2_id2 + "&supervisedStudentsNum=" + localStorage.page2_id3 + "&studentReportsNum=" + localStorage.page2_id4
        + "&phdThesesNum=" + localStorage.page2_id5 + "&grantsNum=" + localStorage.page3_id1 + "&researchProjectsNum=" + localStorage.page3_id2
        + "&researchCollaborationsNum=" + localStorage.page3_id3 + "&confPublicationsNum=" + localStorage.page3_id4 + "&journalPublicationsNum="
        + localStorage.page3_id5 + "&patentNum=" + localStorage.page4_id1 + "&licenceNum=" + localStorage.page4_id2 +
        "&bestPaperNum=" + localStorage.page5_id1 + "&membershipNum=" + localStorage.page5_id2 + "&prizesNum=" +
        localStorage.page5_id3 + "&industryCollaborationsNum=" + localStorage.page6_id1;
}

$(document).ready(function () {
    constructFields();
    $("#js-back-button").on("click", function () {
        saveFieldsPage7();
        $.ajax({
            type: "POST",
            url: "Page6.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    $("#submit-button").on("click", function () {
        saveFieldsPage7();
        $.ajax({
            type: "POST",
            url: "/saveForm",
            data: (serializedForm()),
            success: function () {
                localStorage.clear();
                $.ajax({
                    type: "POST",
                    url: "FinalPage.html",
                    success: function (html) {
                        $("#container-main-field").html(html);
                    }
                });
            }
        });
    });

});

