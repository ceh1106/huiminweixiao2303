$(function () {
//    头部微信二维码显示
    $('.head .share-link li.wx').hover(function () {
        $(this).children('.wxma').stop().fadeIn();
    },function () {
        $(this).children('.wxma').stop().fadeOut();
    });
//头部语言下拉
    $('.yuyan p').click(function (e) {
        e.stopPropagation();
        $(this).siblings("ul").stop().slideToggle();
    });
    $(document).click(function () {
        $('.yuyan ul').stop().slideUp();
    });
//头部搜索弹出
    $(".search").click(function () {
        $(".tansou").stop().fadeIn();
    });
    $(".tansouc").click(function () {
        $(".tansou").stop().fadeOut();
    });

//    头部导航下拉
    $('.pc-nav >.content .li').hover(function () {
        $(this).children('.nav-down1').stop().fadeIn();
        // $(this).siblings('.nav-down1').stop().fadeOut();
    },function () {
        $(this).children('.nav-down1').stop().fadeOut();
    });

    //友情链接
    $('.frindlink p').click(function (event) {
        event.stopPropagation();
        $(this).toggleClass("act");
        if($(this).hasClass("act")){
            $('.xs').stop().slideDown();
        }else{
            $('.xs').stop().slideUp();
        }
    });
    //友情链接点击空白
    $(document).click(function () {
        if( $('.frindlink p').hasClass('act')){
            $(".xs").slideUp();
            $('.frindlink p').removeClass("act");
        }
    });
    var scrollInertiaNum;
    if(/firefox/.test(navigator.userAgent.toLowerCase())){
        scrollInertiaNum = 50;
    } else {
        scrollInertiaNum = 50;
    }
    $(".xs").mCustomScrollbar({
        theme:'dark',
        scrollInertia:scrollInertiaNum,
        horizontalScroll:false,
        axis:"y",
    });
// header 水平滚动 absolute效果
   /* window.onscroll=function(){
        var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
        document.getElementById('fixed').style.left=sl+'px';
        document.getElementById('fixed1').style.left=sl+'px';
    }*/
});