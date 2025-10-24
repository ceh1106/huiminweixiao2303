$(function() {
  if (isMobile && isMobile.any) {
    $('html').addClass('isWap');
    wapFn();
  } else {
    $('html').addClass('isPc');
    pcFn();
  }

  // 妯℃嫙涓嬫媺妗�
  (function() {
    var $select = $('.select-group');
    var $options = $select.find('.select-options');

    $select.on('click', function(e) {
      e.stopPropagation();

      var $thisOptions = $(this).find('.select-options');

      if ($thisOptions.is(':hidden')) {
        $thisOptions.show();
      } else {
        $thisOptions.hide();
      }
    });

    $(document).on('click', function() {
      $options.hide();
    });
  })();

  (function() {
    var $alert = $('#alert');
    var $close = $alert.find('.alert-close');

    $close.on('click', function() {
      $alert.hide();
    });
  })();
});

function pcFn() {
  // 瀵艰埅
  (function() {
    var $nav = $('#nav');
    var subClass = 'cur';

    $nav.find('li').hover(function() {
      $(this).addClass(subClass);
      $(this).children('.nav-sub').show();
    }, function() {
      $(this).removeClass(subClass);
      $(this).children('.nav-sub').hide();
    });
  })();

  (function() {
    var $tags = $('#tabs2').find('.tab-tags2 li');
    var $cons = $('#tabs2').find('.tab-cons2 li');
    var index = 0;

    $tags.removeClass('cur').eq(index).addClass('cur');
    $cons.hide().eq(index).show();

    $tags.hover(function() {
      index = $(this).index();
      $tags.removeClass('cur').eq(index).addClass('cur');
      $cons.hide().eq(index).show();
    }, function() {});
  })();

  (function() {
    var $text = $('#art-text');
    var baseFontSize = parseInt($text.css('fontSize'));

    $('#art-font-l').click(function(e) {
      e.preventDefault();
      $text.css({ fontSize: baseFontSize + 2 });
    });

    $('#art-font-m').click(function(e) {
      e.preventDefault();
      $text.css({ fontSize: baseFontSize });
    });

    $('#art-font-s').click(function(e) {
      e.preventDefault();
      $text.css({ fontSize: baseFontSize - 2 });
    });
  })();

  (function() {
    if (typeof Swiper !== 'function' || $('#banner').length === 0) {
      return;
    }

    var timer = null;
    var mySwiper = new Swiper('#swiper-container1', {
      pagination: '#pagination1',
      // createPagination: false,
      // autoplay: 5000,
      autoplayDisableOnInteraction: false,
      loop: true,
      paginationClickable: true,
      onTouchEnd: function() {
        var $item = $(mySwiper.activeSlide());
        if ($item.hasClass('swiper-slide-video')) {
          var $video = $item.find('video')[0];
          $video.play();
        } else {
          $('#banner').find('video').each(function() {
            $(this)[0].pause();
            $(this)[0].currentTime = 0;
          });
        }
      }
    });

    function videoPlay() {
      var $item = $(mySwiper.activeSlide());
      if ($item.hasClass('swiper-slide-video')) {
        var $video = $item.find('video')[0];
        $video.play();
        // 瑙嗛鎾斁瀹屾瘯
        $video.onended = function() {
          nextFn();
        };
      } else {
        $('#banner').find('video').each(function() {
          $(this)[0].pause();
          $(this)[0].currentTime = 0;
        });
        nextFn();
      }
    }

    function nextFn() {
      timer = this.setTimeout(function() {
        mySwiper.swipeNext();
        videoPlay();
      }, 4000);
    }

    videoPlay();

    $('#banner').hover(function() {
      window.clearTimeout(timer);
    }, function() {
      videoPlay();
    });

    $('#pagination1').find('.swiper-pagination-switch').on('click', function() {
      mySwiper.swipeTo($(this).index());
      var $item = $(mySwiper.activeSlide());
      if ($item.hasClass('swiper-slide-video')) {
        var $video = $item.find('video')[0];
        $video.play();
        // 瑙嗛鎾斁瀹屾瘯
        $video.onended = function() {};
      } else {
        $('#banner').find('video').each(function() {
          $(this)[0].currentTime = 0;
          $(this)[0].pause();
        });
      }
    });
  })();

  (function() {
    if (typeof Swiper !== 'function') return;
    var $swiper = new Swiper('#swiper-container2', {
      loop: true,
      calculateHeight: true,
      paginationClickable: true,
      pagination: '#pagination2'
    });

    $('#swiper-prev2').on('click', function() {
      $swiper.swipePrev();
    });

    $('#swiper-next2').on('click', function() {
      $swiper.swipeNext();
    });
  })();
  
  (function() {
    if (typeof Swiper !== 'function') return;
    var $swiper = new Swiper('#swiper-container3', {
      loop: true,
      loopAdditionalSlides: 1,
      onSlideChangeEnd: function (swiper) {
        if(swiper.activeLoopIndex === 0){
          $swiper.swipeTo(0, 0);
        }
      }
    });

    $('#swiper-prev3').on('click', function() {
      $swiper.swipePrev();
    });

    $('#swiper-next3').on('click', function() {
      $swiper.swipeNext();
    });
  })();
  
  (function() {
    if (typeof Swiper !== 'function') return;
    var $swiper = new Swiper('#swiper-container4', {
      loop: false,
      loopAdditionalSlides: 1,
      slidesPerView: 5
    });

    $('#swiper-container4').on('click', '.list-date', function(){
      var index = $(this).parent('li').index();
      $swiper.swipeTo(index < 0 ? 0 : index - 1);
    });
  })();
}

function wapFn() {
  (function() {
    var $btn = $('#h-btn-search');
    var $search = $('#h-search');
    var $close = $search.find('.icon-close');

    $btn.on('click', function(e) {
      e.stopPropagation();

      if ($search.is(':hidden')) {
        $btn.addClass('btn-search-focus');
        $search.show();
      } else {
        $search.hide();
        $btn.removeClass('btn-search-focus');
      }
    });

    $search.on('click', function(e) {
      e.stopPropagation();
    });

    $close.on('click', function() {
      $search.hide();
    });

    $(document).on('click', function() {
      $search.hide();
    });
  })();

  // 瀵艰埅
  (function() {
    var $btn = $('#h-btn-nav');
    var $nav = $('#nav-container');
    var $close = $nav.find('.icon-close');
    var subClass = 'cur';

    $btn.on('click', function(e) {
      e.preventDefault();

      if ($nav.is(':hidden')) {
        $(this).addClass('h-switch-close');
        $nav.show();
        return;
      }

      $(this).removeClass('h-switch-close');
      $nav.hide();
    });

    $close.on('click', function(e) {
      e.preventDefault();
      $nav.hide();
    });

    $nav.on('click', '.icon-arrow', function(e) {
      e.preventDefault();
      var b = $(this).parent('a').parent('li').children('.nav-sub').is(':hidden');
      if (b) {
        $(this).html('-');
        $(this).parent('a').parent('li').children('.nav-sub').show();
      } else {
        $(this).html('+');
        // $(this).parents('li').removeClass('cur');
        $(this).parent('a').parent('li').children('.nav-sub').hide();
      }
    });
  })();

  (function() {
    if (typeof Swiper !== 'function' || $('#banner').length === 0) {
      return;
    }

    // $('#banner').find('video').css({
    //   width: $(window).width(),
    //   height: 820 * $(window).width() / 1920,
    // });

    var timer = null;
    var mySwiper = new Swiper('#swiper-container1', {
      pagination: '#pagination1',
      // cssWidthAndHeight: true,
      calculateHeight: true,
      // createPagination: false,
      autoplayDisableOnInteraction: false,
      loop: true,
      paginationClickable: true,
      onTouchEnd: function() {
        var $item = $(mySwiper.activeSlide());
        if ($item.hasClass('swiper-slide-video')) {
          var $video = $item.find('video.wap-item')[0];
          $video.play();
          // 瑙嗛鎾斁瀹屾瘯
          $video.onended = function() {
            nextFn();
          };
        } else {
          $('#banner').find('video.wap-item').each(function() {
            $(this)[0].pause();
            $(this)[0].currentTime = 0;
          });
          nextFn();
        }
      }
    });

    function playVideo () {
      var $item = $(mySwiper.activeSlide());
      if ($item.hasClass('swiper-slide-video')) {
        var $video = $item.find('video.wap-item')[0];
        $video.play();
        // 瑙嗛鎾斁瀹屾瘯
        $video.onended = function() {
          nextFn();
        };
      } else {
        $('#banner').find('video.wap-item').each(function() {
          $(this)[0].pause();
          $(this)[0].currentTime = 0;
        });
        nextFn();
      }
    }

    function nextFn() {
      window.clearTimeout(timer);
      timer = this.setTimeout(function() {
        mySwiper.swipeNext();
        playVideo();
      }, 4000);
    }

    playVideo();
  })();

  (function() {
    if (typeof Swiper !== 'function') return;
    var $swiper = new Swiper('#swiper-container2', {
      loop: true,
      calculateHeight: true,
      pagination: '#pagination2'
    });

    $('#swiper-prev2').on('click', function() {
      $swiper.swipePrev();
    });

    $('#swiper-next2').on('click', function() {
      $swiper.swipeNext();
    });
  })();

  (function() {
    if (typeof Swiper !== 'function') return;
    
    var $swiper = new Swiper('#swiper-container3', {
      createPagination: false,
      calculateHeight: true
    });

    $('#swiper-prev3').on('click', function() {
      $swiper.swipePrev();
    });

    $('#swiper-next3').on('click', function() {
      $swiper.swipeNext();
    });
  })();
  
  (function() {
    if (typeof Swiper !== 'function') return;
    
    var $swiper4 = new Swiper('#swiper-container4', {
      createPagination: false,
      calculateHeight: true
    });
  })();

  (function() {
    if (typeof Swiper !== 'function') return;
    var $swiper = new Swiper('#swiper-container5', {
      loop: false,
      calculateHeight: true,
      pagination: '#pagination5'
    });
  })();
}