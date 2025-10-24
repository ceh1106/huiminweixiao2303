$(function () {
    $(".nav-list>li").mouseenter(function () {
        $(this).children(".nav-down").stop(true, true).show();
    }).mouseleave(function () {
        $(this).children(".nav-down").stop(true, true).hide();
    });
});
jQuery(".slider-img").slide({
    titCell: ".slider2 ul li",
    mainCell: ".slider1 ul",
    autoPlay: true,
    effect: 'leftLoop',
    trigger: "click",interTime:3500,

});
$(".right1 li").hover(function () {
    var i = $(this).index();
    $(".left1 .tab").eq(i).show().siblings().hide();
});


$('.nav-click').click(function () {
    if ($(this).next(".left-down2").is(":hidden")) {
        $(this).next(".left-down2").slideDown("slow");
        console.log(this)
    } else {
        $(this).next(".left-down2").slideUp("slow");
    }
})

$('.left-down2 .nav-click').click(function () {
    if ($(this).next(".left-down3").is(":hidden")) {
        $(this).next(".left-down3").slideDown("slow");
        console.log(this)
    } else {
        $(this).next(".left-down3").slideUp("slow");
    }
})
$('.left-down3 .nav-click').click(function () {
    if ($(this).next(".left-down4").is(":hidden")) {
        $(this).next(".left-down4").slideDown("slow");
        console.log(this)
    } else {
        $(this).next(".left-down4").slideUp("slow");
    }

})
$('.yy').click(function () {
    if ($(this).find(".en").is(":hidden")) {
        $(this).find(".en").slideDown("slow");
        console.log(this)
    } else {
        $(this).find(".en").slideUp("slow");
    }

})
$(".lbhz>li.hover3 .left-down2").slideDown();
$(".lbhz>li .left-down2>li.erji").children('ul').slideDown().siblings('ul').slideUp();
$(".lbhz>li .left-down3 .sanji").children(".left-down4").slideDown();

$(".right1 li:first").css("padding-top", "0");
$(".new1-bot li:nth-child(2n)").css("margin-right", "0")
/*$(".nav1 lilast").css("border-radius", "0 0 20px 0");
$(".nav2 li:last").css("border-radius", "0 0 20px 0");
$(".nav3 li:last").css("border-radius", "0 0 20px 0");
$(".nav4 li:last").css("border-radius", "0 0 20px 0");
$(".nav5 li:last").css("border-radius", "0 0 20px 0");*/