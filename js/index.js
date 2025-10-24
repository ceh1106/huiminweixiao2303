$(function() {
	if (!isIE || ieVer == 10 || isIE11) {
        // $(".kuaijie").click(function(){
        //     $(".kuaijie").toggleClass("on");
        // });

        $(".kuaijie").hover(function() {
            $(".kuaijie").stop().addClass("on");
        }, function() {
            $(".kuaijie").stop().removeClass("on");
        });

		var gw = $(window).width();
		var vidIndex = 0;
		var slide_ba;
		
		// 视频结束事件处理函数
		function onVideoEnded() {
			console.log('视频播放结束，准备切换到下一个');
			// 等待一小段时间再切换，确保用户体验
			setTimeout(function() {
				slide_ba.slideNext();
			}, 500);
		}
		
		slide_ba = new Swiper('.banner', {
			speed: 1000,
			spaceBetween: 0,
			loop: true,
			slidesPerView: 1,
			watchOverflow: true,
			// 禁用自动播放，因为我们将通过视频结束事件来控制切换
			autoplay: false,
			pagination: {
				el: ".banner .swiDots",
				clickable: !0,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.banner .next',
				prevEl: '.banner .prev',
			},
			on: {
				init: function() {
					// 初始化时处理所有视频
					var videoList = $('.banner').find("video");
					if (videoList.length) {
						for (var i = 0; i < videoList.length; i++) {
							var video = videoList[i];
							// 确保视频有声音（移除muted属性）
							video.muted = false;
							video.volume = 1; // 设置音量为最大
							// 为每个视频添加结束事件监听，避免重复绑定
							// 先移除可能存在的事件监听器
							video.removeEventListener('ended', onVideoEnded);
							// 添加新的事件监听器
							video.addEventListener('ended', onVideoEnded);
							console.log('为视频添加了ended事件监听器');
						}
					};
					
					// 开始播放当前活动的视频
					var activeVideo = $('.banner .swiper-slide-active video')[0];
					if (activeVideo) {
						// 确保有声音
						activeVideo.muted = false;
						activeVideo.volume = 1;
						// 尝试播放视频
						try {
							activeVideo.play().catch(function(error) {
								console.log('自动播放限制，正在尝试用户交互后播放:', error);
								// 添加用户交互后播放的备用方案
								document.addEventListener('click', function playOnInteraction() {
									activeVideo.play();
									document.removeEventListener('click', playOnInteraction);
								}, { once: true });
							});
						} catch (e) {
							console.log('播放视频时发生错误:', e);
						}
					}
				},
                slideChangeTransitionStart: function(swiper) {
                    $('.banner .banner-pro').removeClass('ani');
                    var numd = this.realIndex+1;
                    $('.jindu .numd').html('0'+numd);

                    var numt = this.slides.length-2;
                    $('.jindu .numt').html('0'+numt);
                },
				slideChangeTransitionEnd: function(swiper) {
                    $('.banner .banner-pro').addClass('ani');
					
                    // 暂停所有视频
					var videoList = $('.banner').find("video");
					if (videoList.length) {
						for (var i = 0; i < videoList.length; i++) {
							videoList[i].pause();
						}
					};
					
					// 播放当前活动的视频
					var activeVideo = $('.banner .swiper-slide-active video')[0];
					if (activeVideo) {
						activeVideo.currentTime = 0; // 重置视频到开始
						// 确保有声音
						activeVideo.muted = false;
						activeVideo.volume = 1;
						// 尝试播放视频
						try {
							activeVideo.play().catch(function(error) {
								console.log('自动播放限制，正在尝试用户交互后播放:', error);
							});
						} catch (e) {
							console.log('播放视频时发生错误:', e);
						}
					}
				}
			}
		});
	}


var swi0 = new Swiper('.lt1Box', {
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt1Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
    });

    var swi4 = new Swiper('.lt4Box', {
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt4Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
    });

    var swi7 = new Swiper('.lt7Box', {
        speed: 1000,
        spaceBetween: 60,
        loop: true,
        slidesPerView:3,
        slidesPerGroup : 3,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt7Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
        breakpoints:{
            1025: {
                spaceBetween: 60,
                slidesPerView:3,
                slidesPerGroup : 3,
            },
            769: {
                spaceBetween: 15,
                slidesPerView:2,
                slidesPerGroup : 3,
            },
            200: {
                spaceBetween: 15,
                slidesPerView:1,
                slidesPerGroup : 1,
            }
        },
    });

    var swi7s = new Swiper('.lt7sBox', {
        speed: 1000,
        spaceBetween: 60,
        loop: true,
        slidesPerView:3,
        slidesPerGroup : 3,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 600000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt7sBox .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
        breakpoints:{
            1025: {
                spaceBetween: 60,
                slidesPerView:3,
                slidesPerGroup : 3,
            },
            769: {
                spaceBetween: 15,
                slidesPerView:2,
                slidesPerGroup : 3,
            },
            200: {
                spaceBetween: 15,
                slidesPerView:1,
                slidesPerGroup : 1,
            }
        },
    });

    var swi9 = new Swiper('.lt9Box', {
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        
        //effect : 'fade',fadeEffect: {crossFade: true},
        
        pagination: {
            el: ".lt9Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
    });

    var swi13 = new Swiper('.lt13Box', {
        speed: 1000,
        spaceBetween: 25,
        slidesPerView: 3,
        loop: true,
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt13Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
    });

    var swi17 = new Swiper('.lt17Box', {
        speed: 1000,
        spaceBetween: 28,
        loop: true,
        slidesPerView:4,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt17Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
        breakpoints:{
            1025: {
                spaceBetween: 28,
                slidesPerView:4,
            },
            769: {
                spaceBetween: 15,
                slidesPerView:2,
            },
            200: {
                spaceBetween: 15,
                slidesPerView:2,
            }
        },
    });

    
})