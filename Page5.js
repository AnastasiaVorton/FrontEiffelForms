/**
 * Created by Nastya on 21.04.2017.
 */
function saveFieldsPage5() {
    localStorage.setItem("formPage5", $("#myForm").serialize());
    saveBestPaperFields();
    saveMembershipFields();
    savePrizesFields();
}

function constructFields() {
    constructBestPaperFields();
    constructMembershipFields();
    constructPrizesFields();
}

function saveBestPaperFields() {
    for (var i = 1; i < (parseInt(localStorage.page5_id1)); i++) {
        localStorage.setItem("authors" + i, document.getElementById("authors" + i).value);
        localStorage.setItem("paper_title" + i, document.getElementById("paper_title" + i).value);
        localStorage.setItem("who_awards" + i, document.getElementById("who_awards" + i).value);
        localStorage.setItem("award_word" + i, document.getElementById("award_word" + i).value);
        localStorage.setItem("paper_date" + i, document.getElementById("paper_date" + i).value);
    }
}

function saveMembershipFields() {
    for (var i = 1; i < (parseInt(localStorage.page5_id2)); i++) {
        localStorage.setItem("event_name" + i, document.getElementById("event_name" + i).value);
        localStorage.setItem("member_name" + i, document.getElementById("member_name" + i).value);
        localStorage.setItem("member_date" + i, document.getElementById("member_date" + i).value);
    }
}

function savePrizesFields() {
    for (var i = 1; i < (parseInt(localStorage.page5_id3)); i++) {
        localStorage.setItem("recipient" + i, document.getElementById("recipient" + i).value);
        localStorage.setItem("prize" + i, document.getElementById("prize" + i).value);
        localStorage.setItem("granting_institution" + i, document.getElementById("granting_institution" + i).value);
        localStorage.setItem("prize_date" + i, document.getElementById("prize_date" + i).value);
    }
}

function constructBestPaperFields() {
    var wrapper1 = $(".best-paper-wrap");
    for (var i = 1; i < (parseInt(localStorage.page5_id1)); i++) {
        if (i == 1) {
            $("#authors1").val(localStorage.getItem("authors1"));
            $("#paper_title1").val(localStorage.getItem("paper_title1"));
            $("#who_awards1").val(localStorage.getItem("who_awards1"));
            $("#award_word1").val(localStorage.getItem("award_word1"));
            $("#paper_date1").val(localStorage.getItem("paper_date1"));
        } else {
            $(wrapper1).append('<div><p>Authors:</p><input type="text" name="authors' + i + '" id="authors' + i + '" size="40"> <p>Title:</p><input type="text" name="paper_title' + i + '" id="paper_title' + i + '" size="40"> <p>Awarding conference or journal:</p><input type="text" name="who_awards' + i + '" id="who_awards' + i + '" size="40"> <p>Exact wording of award:</p><input type="text" name="award_word1' + i + '" id="award_word' + i + '" size="40"> <p>Date:</p><input type="date" name="paper_date' + i + '" id="paper_date' + i + '" size="40"><button class="remove_field1">Remove</button></div>');
            $("#authors" + i).val(localStorage.getItem("authors" + i));
            $("#paper_title" + i).val(localStorage.getItem("paper_title" + i));
            $("#who_awards" + i).val(localStorage.getItem("who_awards" + i));
            $("#award_word" + i).val(localStorage.getItem("award_word" + i));
            $("#paper_date" + i).val(localStorage.getItem("paper_date" + i));
        }
    }
}

function constructMembershipFields() {
    var wrapper2 = $(".membership-wrap");
    for (var i = 1; i < (parseInt(localStorage.page5_id2)); i++) {
        if (i == 1) {
            $("#event_name1").val(localStorage.getItem("event_name1"));
            $("#member_name1").val(localStorage.getItem("member_name1"));
            $("#member_date1").val(localStorage.getItem("member_date1"));
        } else {
            $(wrapper2.append('<div><p>Name of the event:</p><input type="text" name="event_name' + i + '" id="event_name' + i + '" size="40"> <p>Name of member:</p><input type="text" name="member_name' + i + '" id="member_name' + i + '" size="40"> <p>Date of membership:</p><input type="date" name="member_date' + i + '" id="member_date' + i + '" size="40"><button class="remove_field2">Remove</button></div>'));
            $("#event_name" + i).val(localStorage.getItem("event_name" + i));
            $("#member_name" + i).val(localStorage.getItem("member_name" + i));
            $("#member_date" + i).val(localStorage.getItem("member_date" + i));
        }
    }
}

function constructPrizesFields() {
    var wrapper3 = $(".prizes-wrap");
    for (var i = 1; i < (parseInt(localStorage.page5_id3)); i++) {
        if (i == 1) {
            $("#recipient1").val(localStorage.getItem("event_name1"));
            $("#prize1").val(localStorage.getItem("prize1"));
            $("#granting_institution1").val(localStorage.getItem("granting_institution1"));
            $("#prize_date1").val(localStorage.getItem("prize_date1"));
        } else {
            $(wrapper3.append('<div><p>Recipient:</p><input type="text" name="recipient' + i + '" id="recipient' + i + '" size="40"> <p>Name of the prize:</p><input type="text" name="prize' + i + '" id="prize' + i + '" size="40"> <p>Granting institution:</p><input type="text" name="granting_institution' + i + '" id="granting_institution' + i + '"size="40"> <p>Date:</p><input type="date" name="prize_date' + i + '" id="prize_date' + i + '" size="40"><button class="remove_field2">Remove</button></div>'));
            $("#recipient" + i).val(localStorage.getItem("recipient" + i));
            $("#prize" + i).val(localStorage.getItem("prize" + i));
            $("#granting_institution" + i).val(localStorage.getItem("granting_institution" + i));
            $("#prize_date" + i).val(localStorage.getItem("prize_date" + i));
        }
    }
}

function checkDatesPage5() {
    if (isFalsePaperDate() || isFalseMembershiphDate() || isFalsePrizesDate()) {
        return true;
    } else {
        return false;
    }
}

function isFalsePaperDate() {
    for (var i = 1; i < (parseInt(localStorage.page5_id1)); i++) {
        var startDate = new Date(this.document.getElementById("paper_date" + i).value);
        if (startDate.getFullYear() < 2012 ) {
            alert("Year must not be less than 2012");
            return true;
        }
    }
    return false;
}

function isFalseMembershiphDate() {
    for (var i = 1; i < (parseInt(localStorage.page5_id2)); i++) {
        var startDate = new Date(this.document.getElementById("member_date" + i).value);
        if (startDate.getFullYear() < 2012) {
            alert("Year must not be less than 2012");
            return true;
        }
    }
    return false;
}

function isFalsePrizesDate() {
    for (var i = 1; i < (parseInt(localStorage.page5_id3)); i++) {
        var startDate = new Date(this.document.getElementById("prize_date" + i).value);
        if (startDate.getFullYear() < 2012) {
            alert("Year must not be less than 2012");
            return true;
        }
    }
    return false;
}

$(document).ready(function () {
    if (localStorage.page5_id1 == null) {
        localStorage.page5_id1 = 2;
    }
    if (localStorage.page5_id2 == null) {
        localStorage.page5_id2 = 2;
    }
    if (localStorage.page5_id3 == null) {
        localStorage.page5_id3 = 2;
    }
    constructFields();
    $("#js-next-button").on("click", function () {
        saveFieldsPage5();
        if (checkDatesPage5()) {
            return;
        } else {
            $.ajax({
                type: "POST",
                url: "Page6.html",
                success: function (html) {
                    $("#container-main-field").html(html);
                }
            });
        }
    });

    $("#js-back-button").on("click", function () {
        saveFieldsPage5();
        $.ajax({
            type: "POST",
            url: "Page4.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    var max_fields = 10;
    var wrapper1 = $(".best-paper-wrap");
    var wrapper2 = $(".membership-wrap");
    var wrapper3 = $(".prizes-wrap");

    var add_button1 = $(".add-field-button1");
    var add_button2 = $(".add-field-button2");
    var add_button3 = $(".add-field-button3");

    var x1 = 1;
    $(add_button1).on("click", function (e) {
        e.preventDefault();
        if (x1 < max_fields) {
            x1++;
            $(wrapper1).append('<div><hr><p>Authors:</p><input type="text" name="authors' + localStorage.page4_id1 + '"   id="authors' + localStorage.page4_id1 + '"   size="40"> <p>Title:</p><input type="text" name="paper_title' + localStorage.page4_id1 + '"   id="paper_title' + localStorage.page4_id1 + '"   size="40"> <p>Awarding conference or journal:</p><input type="text" name="who_awards' + localStorage.page4_id1 + '"   id="who_awards' + localStorage.page4_id1 + '"   size="40"> <p>Exact wording of award:</p><input type="text" name="award_word' + localStorage.page4_id1 + '"   id="award_word' + localStorage.page4_id1 + '"   size="40"> <p>Date:</p><input type="date" name="paper_date' + localStorage.page4_id1 + '"   id="paper_date' + localStorage.page4_id1 + '"   size="40"><button class="remove_field1">Remove</button></div>');
            localStorage.page5_id1 = (parseInt(localStorage.page5_id1)) + 1;
        }
    });

    $(wrapper1).on("click", ".remove_field1", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x1--;
        localStorage.page5_id1 = (parseInt(localStorage.page5_id1)) - 1;
    });

    var x2 = 1;
    $(add_button2).on("click", function (e) {
        e.preventDefault();
        if (x2 < max_fields) {
            x2++;
            $(wrapper2.append('<div><hr><p>Name of the event:</p><input type="text" name="event_name' + localStorage.page4_id1 + '" id="event_name' + localStorage.page4_id1 + '" size="40"> <p>Name of member:</p><input type="text" name="member_name' + localStorage.page4_id1 + '" id="member_name' + localStorage.page4_id1 + '" size="40"> <p>Date of membership:</p><input type="date" name="member_date' + localStorage.page4_id1 + '" id="member_date' + localStorage.page4_id1 + '" size="40"><button class="remove_field2">Remove</button></div>'));
            localStorage.page4_id2 = (parseInt(localStorage.page4_id2)) + 1;
        }
    });

    $(wrapper2).on("click", ".remove_field2", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x2--;
        localStorage.page5_id2 = (parseInt(localStorage.page5_id2)) - 1;
    });

    var x3 = 1;
    $(add_button3).on("click", function (e) {
        e.preventDefault();
        if (x3 < max_fields) {
            x3++;
            $(wrapper3.append('<div><hr><p>Recipient:</p><input type="text" name="recipient' + localStorage.page4_id1 + '"  id="recipient' + localStorage.page4_id1 + '"  size="40"> <p>Name of the prize:</p><input type="text" name="prize' + localStorage.page4_id1 + '"  id="prize' + localStorage.page4_id1 + '"  size="40"> <p>Granting institution:</p><input type="text" name="granting_institution' + localStorage.page4_id1 + '"  id="granting_institution' + localStorage.page4_id1 + '"  size="40"> <p>Date:</p><input type="date" name="prize_date' + localStorage.page4_id1 + '"  id="prize_date' + localStorage.page4_id1 + '"  size="40"><button class="remove_field3">Remove</button></div>'));
            localStorage.page5_id3 = (parseInt(localStorage.page5_id3)) + 1;
        }
    });

    $(wrapper3).on("click", ".remove_field3", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x3--;
        localStorage.page5_id3 = (parseInt(localStorage.page5_id3)) - 1;
    });

});

