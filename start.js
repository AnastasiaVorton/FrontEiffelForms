/**
 * Created by Nastya on 07.04.2017.
 */
$(document).ready(function () {
    $("#form-btn").on("click", function () {
        $.ajax({
            type: "POST",
            url: "index.html",
            success: function (html) {
                $("#start").html(html);
            }
        });
    });
});