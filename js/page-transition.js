/* Cover pic text animation using funnytext.js*/
$(document).ready(function () {

    $("#home-navbar-link").click(function () {

        $("#story-page").slideUp("slow");
        $("#skills-page").slideUp("slow");

    });


    $("#bio-navbar-link").click(function () {

        $("#my-story-content-row").css("margin-left", "10%");

        $("#story-page").slideDown("slow");

        $('#my-story-label').letterDrop();

    });


    $("#skills-navbar-link").click(function () {

        $("#skills-page").slideDown("slow");

    });

});