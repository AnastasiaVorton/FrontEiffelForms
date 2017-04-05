/**
 * Created by Nastya on 31.03.2017.
 */
$(document).ready(function () {

    $("#js-next-button").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Page4.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });

    $("#js-back-button").on("click", function () {
        $.ajax({
            type: "POST",
            url: "Page2.html",
            success: function (html) {
                $("#container-main-field").html(html);
            }
        });
    });
});
