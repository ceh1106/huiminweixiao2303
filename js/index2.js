if (!isIE || ieVer == 10 || isIE11) {
 $(".banner .arrd").click(function(){
      var allH = $(window).height();
      $('html,body').animate({scrollTop:$('.homea').offset().top}, 500);
    })

  var gw = $(window).width();
  var vidIndex = 0;
  var slide_ba = new Swiper('.slide-ba', {
    speed: 1000,
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    watchOverflow: true,
    lazy: { loadPrevNext: true },
    //effect : 'fade',fadeEffect: {crossFade: true},
    autoplay: { delay: 8000, stopOnLastSlide: false, disableOnInteraction: false, },
    pagination: {el: ".banner .swiDots", clickable: !0, bulletActiveClass: 'active'},
    navigation: { nextEl: '.banner .next', prevEl: '.banner .prev' },
    on: {
      init: function () {
        var vid = $("#slide-video").attr('data-swiper-slide-index');
        vidIndex = vid;
      },
      transitionStart: function(){
      $(".banner .mores .more").eq(this.realIndex).stop().fadeIn().siblings().hide();
      },
      slideChangeTransitionEnd: function (swiper) {
          if (configPc.matches) {
        var videoList = $('.slide-ba').find("video");
        if (videoList.length) {
          for (var i = 0; i < videoList.length; i++) {
            videoList[i].pause();
          }
        };
        var swiper = this;
        if ($(".slide-ba .swiper-slide-active video").length > 0) {
          swiper.autoplay.stop();
          setTimeout(function () {
            swiper.autoplay.stop();
            var vio = $(".slide-ba .swiper-slide-active").find("video")[0];
            vio.currentTime = 0;
            vio.volume = 0;
            vio.play();
            vio.addEventListener('ended', function () {
              swiper.slideNext();
              swiper.autoplay.start();
            });
          }, 10);

        }
      }

      },
    },

  });
  // 移动端去掉视频
  var baVideo = $("#slide-video");
  if (baVideo.length != 0) {
    if (configWap.matches) {
      slide_ba.removeSlide(vidIndex);
    };
  };
  // 移动端去掉视频
  var c = new Swiper('.slide-c', {
    spaceBetween: 10,
    speed:800,
    loop:true,
    //autoplay: { delay: 6000, stopOnLastSlide: false, disableOnInteraction: false, },
    pagination: { el: ".homec  .swiDots", clickable: !0, bulletActiveClass: 'active' },
    navigation: { nextEl: '.homec .next', prevEl: '.homec .prev', },
     
   });

 
  
  if (configPc.matches) {
  
  } 

}