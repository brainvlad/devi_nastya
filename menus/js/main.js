$(document).ready(function(){
    $("#first_step").click(function () {
        if($('.sub-menu-vertical__list').css('display') == "none"){
            $(".sub-menu-vertical__list").show(300);
        } else {
            $(".sub-menu-vertical__list").hide(300);
            $(".sub-sub-menu-vertical__list").hide(300);
        }
    })
    $("#second_step").click(function () {
        if($('.sub-sub-menu-vertical__list').css('display') == "none"){
            $(".sub-sub-menu-vertical__list").show(300);
        } else {
            $(".sub-sub-menu-vertical__list").hide(300);
        }
    })
});