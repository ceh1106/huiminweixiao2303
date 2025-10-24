$(function () {
    $('.banner').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        speed: 1000,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.banner').slick('slickGoTo', 0);
    $('.banner .slick-current').addClass('img_scale');
    $('.banner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.banner .slick-current').removeClass('img_scale');
    });
    $('.banner').on('afterChange', function (event, slick, currentSlide) {
        $('.banner .slick-current').addClass('img_scale');
    });



    $('.r0-c>ul').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $(".r1-c .qh-tit ul li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var i = $(this).index();
        $(".r1-c .qh-tit .more a").eq(i).addClass("on").siblings().removeClass("on");
        $(".r1-c .qh-bd>div").eq(i).addClass("on").siblings().removeClass("on");
    })

    $(".r3-c .qh-tit ul li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var i = $(this).index();
        $(".r3-c .qh-tit .more a").eq(i).addClass("on").siblings().removeClass("on");
        $(".r3-c .qh-bd>div").eq(i).addClass("on").siblings().removeClass("on");
    })

    $('.jdt>ul').slick({
        autoplay: true,
        dots: true,
        arrows: false,
    });

    $('.l-ks>ul').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        vertical: true,
        // verticalSwiping:true,
        // infinite:false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    vertical: false,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    vertical: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.r3-l>ul').slick({
        autoplay: true,
        dots: true,
        arrows: false,
    });

    //返回顶部
	$('.gotop').click(function () {
		$('body,html').stop().animate({ scrollTop: 0 });
		return false;
	});

});