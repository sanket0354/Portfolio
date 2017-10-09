/* Cover pic text animation using funnytext.js*/
$(document).ready(function () {

    $('#name-title-home-page-text').funnyText({
        speed: 400,
        borderColor: 'white',
        activeColor: 'white',
        color: 'white',
        fontSize: '4em',
        direction: 'both'
    });


    $(window).resize(function(){
       $('#name-title-home-page-text').empty();
        $('#name-title-home-page-text').append("SANKET PATEL | FULL STACK DEVELOPER");
        $('#name-title-home-page-text').funnyText({
            speed: 100,
            borderColor: 'white',
            activeColor: 'white',
            color: 'white',
            fontSize: '4em',
            direction: 'both'
        });
    });



    $("#home-navbar-link").click(function () {

        $("#story-page").slideUp("slow");
        ;


    });


    $("#bio-navbar-link").click(function () {

        $("#my-story-content-row").css("margin-left", "10%");
        $("#story-page").slideDown("slow");
        ;
        $('#my-story-label').letterDrop();


    });

});




