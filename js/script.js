$(document).ready(function(){
    $(".background1").click(function(){
        $(this).find("i").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
        $(".toggleDiv").slideToggle(300);
        $(".toggleDiv").addClass("color_green").removeClass("color_red color_dark");
    });

    $(".background2").click(function(){
        $(this).find("i").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
        $(".toggleDiv").slideToggle(300);
        $(".toggleDiv").addClass("color_red").removeClass("color_green color_dark");
    });

    $(".background3").click(function(){
        $(this).find("i").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
        $(".toggleDiv").slideToggle(300);
        $(".toggleDiv").addClass("color_dark").removeClass("color_green color_red");
    });

});
