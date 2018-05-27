$(document).ready(function(){


    $(".data").click(function(){
        $(".info").find(".container").html($(this).find(".loader").html());
        $(".header").css("border-bottom-color", "#ddd");
        $(".shape").css("background-color", "#ddd");
        $(".panel").css("margin-left", "0vw");
        $(".info").css("margin-left", "15vw");
        $(".info").find(".container").css("margin-left", "3vw");
        $(".info").find(".container").find(".pimg").find("p").css("margin-top", "2vw");
        $(".info").find(".container").find(".others").css("margin-left", "0vw");
        $(".pname").text($(this).find(".mask").find("div").text() + "");
        $(".pl").text($(this).find(".mask").find("p").text() + "");
    });


    $(".backbtn").click(function(){
        $(".header").css("border-bottom-color", "#111");
        $(".shape").css("background-color", "#111");
        $(".panel").css("margin-left", "-17vw");
        $(".info").css("margin-left", "100vw");
        $(".info").find(".container").css("margin-left", "113vw");
        $(".info").find(".container").find(".pimg").find("p").css("margin-top", "-102vw");
        $(".info").find(".container").find(".others").css("margin-left", "100vw");
    });


});