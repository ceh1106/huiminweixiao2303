$(function () {
    var w = $(window).width();
    // banner 和 主体的滑动效果
    if (navigator.userAgent.indexOf("MSIE 10.0") > 0 || w > 1024) {
        var t = true;

        function index_up() {
            $(".head").stop(true, false).animate({
                "top": "-150px"
            }, 500);
            $(".index").stop(true, false).animate({
                "top": 0
            }, 800, function () {
                $(".head").addClass("head_wit");
                $(".head").stop(true, false).animate({
                    "top": "0"
                }, 500);


                $(".index").css("position", "static");
                $(".banner").css({
                    "position": "fixed",
                    "z-index": "-1"
                })

                $("html, body").stop().animate({ scrollTop: "1" }, 1, function () {
                    $("html, body").stop().animate({ scrollTop: 0 }, 1)

                })
            });
            t = false;
            $(".fixed-r").addClass("on")
            return false;
        }

        function index_down() {
            if ($(window).scrollTop() <= 0) {
                $(".index").css("position", "fixed");
                $(".banner").css({
                    "position": "static",
                    "z-index": "1"
                })

                $(".head").stop(true, false).animate({
                    "top": "-150px"
                }, 500, function () {
                    $(".head").removeClass("head_wit");
                });
                $(".index").stop(true, false).animate({
                    "top": $('.banner').height()
                }, 800, function () {
                    $(".head").stop(true, false).animate({
                        "top": "0"
                    }, 500);
                });
                t = true;
                $(".fixed-r").removeClass("on")
                return false;
            };
        }

        $(document).keydown(function (event) {
            if (event.keyCode == 40) {
                if (t) {
                    index_up();
                }
            } else if (event.keyCode == 38) {
                if (!t) {
                    index_down()
                }
            }
        })
        $('.banner').on('mousewheel', function (e) {
            var delta = e.originalEvent.wheelDelta || e.originalEvent.detail;
            if (delta < 0) {
                index_up()
            }
        })
        $('.index').on('mousewheel', function (e) {
            var delta = e.originalEvent.wheelDelta || e.originalEvent.detail;
            if (delta > 0) {
                index_down()
            }
        });
        // 火狐滚动事件兼容
        document.querySelector('.banner').addEventListener('DOMMouseScroll', function (e) {
            var delta = e.detail;
            if (delta > 0) {
                index_up();
            }
        });
        document.querySelector('.index').addEventListener('DOMMouseScroll', function (e) {
            var delta = e.detail;
            if (delta < 0) {
                index_down()
            }
        });

 /* $(".banner").click(function () {
            index_up();
        })*/
    } else {
        $("body").addClass('m');
    };

    $("#downPage").click(function () {
        index_up();
    })



   /* $('.banner .slick').slick({
        autoplay: false,
        dots: true,
        arrows: false,
        accessibility: true,
    }); */


var $video = $("video");
    $(".banner .slick").on("init", function (event, slick) {
        if ($(".banner .slick .slick-current").find("video").length > 0) {
            $(".banner .slick .slick-current").find("video")[0].play();
            $(".banner .slick .icon").addClass("icon_play")
            $(".banner .slick .slick-current").find("video").bind("ended", function () {
                $(".banner .slick .icon").removeClass("icon_play")
                $(".banner .slick").slick("slickPlay");
                setTimeout(function () {
                    $(".banner .slick").slick("slickNext");
                }, 100)
            });
        } else {
            setTimeout(function () {
                $(".banner .slick .slick-current a").addClass("box2");
                $(".banner .slick").slick("slickPlay");
            }, 100)
        }
    })
    $(".banner .slick").slick({
        autoplay: false,
        autoplaySpeed: 7000,
        speed: 800,
        dots: true,
        arrows: false,
    });

    $(".banner .slick").on("beforeChange", function (event, slick, currentSlide) {
        $(".banner .slick a").removeClass("box2");
        $(".banner .slick .slick-current a").addClass("box1");
        $(".banner .slick a").removeClass("box0");
    });
    $(".banner .slick").on("afterChange", function (event, slick, currentSlide) {
        $(".banner .slick a").removeClass("box1");
        $(".banner .slick .slick-current a").addClass("box0");

        if ($(".banner .slick .slick-current").find("video").length > 0) {
            $(".banner .slick .slick-current").find("video")[0].play();
            $(".banner .slick .icon").addClass("icon_play")
            $(".banner .slick").slick("slickPause");
            $(".banner .slick .slick-current").find("video").bind("ended", function () {
                $(".banner .slick").slick("slickPlay");
                $(".banner .slick .icon").removeClass("icon_play")
                setTimeout(function () {
                    $(".banner .slick").slick("slickNext");
                }, 100)
            });
        } else {
            $(".banner .slick video").each(function () {
                var $vd = $(this).get(0);
                $vd.pause();
                $(".banner .slick .icon").removeClass("icon_play")
                $(".banner .slick").slick("slickPlay");
            })
        }
    });






    $('.s1-lpic').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        accessibility: true,
        asNavFor: '.s1-linfo'

    });

    $('.s1-linfo').slick({
        autoplay: false,
        dots: false,
        arrows: false,
        asNavFor: '.s1-lpic',
        accessibility: true,
    });

    $('.s2-l>ul').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        accessibility: true,

    });


    $('.s4-lt>ul').slick({
        autoplay: false,
        dots: false,
        arrows: false,
        asNavFor: '.s4-r>ul,.s4-lb>ul',
        accessibility: true,
    });

    $('.s4-lb>ul').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.s4-r>ul,.s4-lt>ul',
        responsive: [{
            breakpoint: 1401,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 1201,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    $('.s4-r>ul').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        accessibility: true,
        asNavFor: '.s4-lt>ul,.s4-lb>ul',
    });
});