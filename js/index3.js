// banner
var swiper = new Swiper(".main-visual-slider .swiper-container", {
    loop: true,
    speed: 1200,
    draggable: false,
    //   autoplay: {
    //       delay: 6000,
    //       disableOnInteraction: false
    //   },
    // allowTouchMove: true,
    // watchSlidesProgress: true,
    pagination: {
        el: '.banner .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            switch (index) {
                case 0: text = '壹'; break;
                case 1: text = '贰'; break;
                case 2: text = '叁'; break;
                case 3: text = '肆'; break;
            }
            return '<span class="' + className + '">' + text + '</span>';
        },
    },
    navigation: {
        nextEl: '.banner .swiper-button-next',
        prevEl: '.banner .swiper-button-prev',
    },
    on: {
        slideChangeTransitionStart: function (swiper) {
            var swiper = this;
            // 判断swiper-slide-active是否有视频
            if ($(".main-visual-slider .swiper-slide-active video").length > 0) {
                console.log(1)
                // 停止自动切换
                swiper.autoplay.stop();
                // 动态增加id
                setTimeout(function () {
                    swiper.autoplay.stop();
                    $(".main-visual-slider .swiper-slide-active video").attr("id", "video_01");

                    var _video = document.getElementById("video_01");

                    // 播放视频
                    _video.play();
                    // 切换后重新播放视频
                    _video.currentTime = 0;
                    // 静音
                    _video.volume = 0;
                    // 监听视频播放结束
                    _video.addEventListener('ended', function () {
                        swiper.slideNext();
                        //重新开始轮播banner
                        swiper.autoplay.start();
                    });
                }, 10);
            }
        },
        slideChangeTransitionEnd: function (swiper) {
            //动态移除id
            setTimeout(function () {
                $(".main-visual-slider .swiper-slide-active video").attr("id", "");
            }, 10);
        },
    }
});

//   $(function () {
//       function l() { a.aspect = window.innerWidth / window.innerHeight; a.updateProjectionMatrix(); f.setSize(window.innerWidth, window.innerHeight) } function h() { requestAnimationFrame(h); a.position.x += .05 * (t - a.position.x); a.position.y += .05 * (500 - a.position.y); a.lookAt(k.position); for (var m = 0, d = 0; 50 > d; d++)for (var e = 0; 50 > e; e++)b = n[m++], b.position.y = 50 * Math.sin(.3 * (d + g)) + 50 * Math.sin(.5 * (e + g)), b.scale.x = b.scale.y = 2 * (Math.sin(.3 * (d + g)) + 1) + 2 * (Math.sin(.5 * (e + g)) + 1); f.render(k, a); g += .1 } var c, a, k, f, n, b, g = 0, t =
//         0; (function () {
//           c = document.createElement("div"); containerp = document.getElementById("lizip"); c.id = "lizi"; containerp.appendChild(c); a = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1E4); a.position.z = 1E3; k = new THREE.Scene; n = []; for (var m = 2 * Math.PI, d = new THREE.ParticleCanvasMaterial({ color: 0xDEEFFE, program: function (p) { p.beginPath(); p.arc(0, 0, 1, 0, m, !0); p.fill() } }), e = 0, q = 0; 50 > q; q++)for (var r = 0; 50 > r; r++)b = n[e++] = new THREE.Particle(d), b.position.x = 100 * q - 2500, b.position.z = 100 * r - 2500, k.add(b);
//           f = new THREE.CanvasRenderer; f.setSize(window.innerWidth, window.innerHeight); c.appendChild(f.domElement); window.addEventListener("resize", l, !1)
//         })(); h()
//     });



// home1



var new1 = new Swiper('.home1 .swiper-container', {
    loop: true,
    speed: 1E3,
    autoplay: {
        delay: 6000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    // 如果需要前进后退按钮
    pagination: {
        el: '.home1 .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            switch (index) {
                case 0: text = '壹'; break;
                case 1: text = '贰'; break;
                case 2: text = '叁'; break;
                case 3: text = '肆'; break;
            }
            return '<span class="' + className + '">' + text + '</span>';
        },
    },
    navigation: {
        nextEl: '.home1 .swiper-button-next',
        prevEl: '.home1 .swiper-button-prev',
    },

})

$(".home2 .home_bt span").click(function (e) {
    e.preventDefault()
    $(this).addClass('on').siblings().removeClass('on');
    $(".home2 .more  a").eq(this.realIndex).addClass('on').siblings().removeClass('on');

    var i = $(this).index();
    tab1.slideTo($(this).index())
});
var tab1 = new Swiper('.home2-t>.swiper-container', {
    noSwiping: true,
    speed: 800,
    slidesPerView: 1,
    allowTouchMove: false,
    // autoplay: {
    //     delay: 6000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },
    on: {
        slideChangeTransitionStart: function () {
            $(".home2 .home_bt span").eq(this.realIndex).addClass('on').siblings().removeClass('on');
            $(".home2 .more  a").eq(this.realIndex).addClass('on').siblings().removeClass('on');

        }
    },

});

var swipe2 = new Swiper('.h2_list1 .swiper-container', {
    loop: true,
    speed: 1500,

    breakpoints: {
        1025: {
            slidesPerView: "auto",
            spaceBetween: 39,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
    // autoplay: {
    //     delay: 6000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    // pagination: {
    //     el: '.s2-banner .swiper-pagination',
    //     type : 'progressbar',
    // },
    // navigation: {
    //     nextEl: '.s2-banner .next',
    //     prevEl: '.s2-banner .prev'
    // },
    // a11y:false,
})
var swipe21 = new Swiper('.h2_list2 .swiper-container', {
    loop: true,
    speed: 1500,

    breakpoints: {
        1025: {
            slidesPerView: "auto",
            spaceBetween: 39,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
    // autoplay: {
    //     delay: 6000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    // pagination: {
    //     el: '.s2-banner .swiper-pagination',
    //     type : 'progressbar',
    // },
    // navigation: {
    //     nextEl: '.s2-banner .next',
    //     prevEl: '.s2-banner .prev'
    // },
    // a11y:false,
})

$(".home3 .home_bt span").click(function (e) {
    e.preventDefault()
    $(this).addClass('on').siblings().removeClass('on');
    $(".home3 .more  a").eq(this.realIndex).addClass('on').siblings().removeClass('on');

    var i = $(this).index();
    news3.slideTo($(this).index())
});

var news3 = new Swiper('.home3-t>.swiper-container', {
    noSwiping: true,
    speed: 800,
    slidesPerView: 1, allowTouchMove: false,
    // autoplay: {
    //     delay: 6000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },
    on: {
        slideChangeTransitionStart: function () {
            $(".home3 .home_bt span").eq(this.realIndex).addClass('on').siblings().removeClass('on');
            $(".home3 .more  a").eq(this.realIndex).addClass('on').siblings().removeClass('on');

        }
    }
});
$(".h3_list ul li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
})

$(".home5-t>ul>li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
})
$(".home4 .home_bt span").click(function (e) {
    e.preventDefault()
    $(this).addClass('on').siblings().removeClass('on');
    $(".home4 .more  a").eq(this.realIndex).addClass('on').siblings().removeClass('on');

    var i = $(this).index();
    tab4.slideTo($(this).index())
});
var tab4 = new Swiper('.home4-t>.swiper-container', {
    noSwiping: true,
    speed: 800,
    slidesPerView: 1,
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    // autoplay: {
    //     delay: 6000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },
    on: {
        slideChangeTransitionStart: function () {
            $(".home4 .home_bt span").eq(this.realIndex).addClass('on').siblings().removeClass('on');
            $(".home4 .more  a").eq(this.realIndex).addClass('on').siblings().removeClass('on');
            $(".h4_list .h4_right ul li").removeClass("on");

        }
    }
});
var $leftContent = $('.h4_left');
var $leftText = $leftContent.find('span');
var $leftImg = $leftContent.find('.h4_tp img');
// 统一hover事件处理
$(".h4_list .h4_right ul li").mouseenter(function () {
    $(this).addClass('on').siblings().removeClass('on');
    var $currentItem = $(this);
    var currentText = $currentItem.find('p').text();
    var currentSrc = $currentItem.find('.h4_tp img').attr('src');

    // 文字切换
    $leftText.stop(true).fadeOut(200, function () {
        $(this).text(currentText).fadeIn(200);
    });

    // 图片切换
    $leftImg.stop(true).fadeOut(200, function () {
        $(this).attr('src', currentSrc).fadeIn(200);
    });
}
);