  var scrollAction = {x: 'undefined', y: 'undefined'}, scrollDirection;
  
  //判断页面滚动方向
  function scrollFunc() {
    if (typeof scrollAction.x == 'undefined') {
      scrollAction.x = window.pageXOffset;
      scrollAction.y = window.pageYOffset;
    }
    var diffX = scrollAction.x - window.pageXOffset;
    var diffY = scrollAction.y - window.pageYOffset;
    if (diffX < 0) {
    // Scroll right
      scrollDirection = 'right';
    } else if (diffX > 0) {
    // Scroll left
      scrollDirection = 'left';
    } else if (diffY < 0) {
    // Scroll down
      scrollDirection = 'down';
    } else if (diffY > 0) {
    // Scroll up
      scrollDirection = 'up';
    } else {
    // First scroll event
    }
    scrollAction.x = window.pageXOffset;
    scrollAction.y = window.pageYOffset;
  }
  
$(window).scroll(function(){
  var scrollPos = $(window).scrollTop();
  var showHeight = $(window).height()*.75;
  //console.log(showHeight)
  if(scrollPos > 0){
   $("body").addClass("scrolling");
  }else{
   $("body").removeClass("scrolling");
  }
  if(scrollPos > showHeight){
   $(".headers").addClass('on');
   $(".totop").fadeIn();
   $(".rightFix").fadeIn();
  }else{
   $(".totop").fadeOut();
   $(".rightFix").hide();
    $(".headers").removeClass('on');
  }
})
$(function(){
$("#app").append('<div  class="totop"><svg  class="icon" viewBox="0 0 1024 1024" version="x.x" xmlns="http://www.w3.org/2000/svg"  width="16" height="16"><path d="M825.568 555.328l-287.392-289.28C531.808 259.648 523.488 256.576 515.2 256.64 514.08 256.544 513.12 256 512 256c-4.672 0-9.024 1.088-13.024 2.88-4.032 1.536-7.872 3.872-11.136 7.136l-259.328 258.88c-12.512 12.48-12.544 32.736-0.032 45.248 6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.624-9.344L480 364.288 480 928c0 17.696 14.336 32 32 32s32-14.304 32-32L544 362.72l236.192 237.728c6.24 6.272 14.496 9.44 22.688 9.44s16.32-3.104 22.56-9.312C838.016 588.128 838.048 567.84 825.568 555.328zM864 192 160 192C142.336 192 128 177.664 128 160s14.336-32 32-32l704 0c17.696 0 32 14.336 32 32S881.696 192 864 192z" ></path></svg></div>')
var scrollPos = $(window).scrollTop();
var showHeight = $(window).height()*.75;
if (scrollPos > 0) {
$("body").addClass("scrolling");
} else {
$("body").removeClass("scrolling");
};
 if(scrollPos > showHeight){
   $(".headers").addClass('on');
   $(".totop").fadeIn();
   $(".rightFix").show();
  }else{
   $(".totop").fadeOut();
   $(".rightFix").hide();
    $(".headers").removeClass('on');
  }
$(".showSear").click(function () {
$(".ser-layer").addClass('showdiv');
//$('body').removeClass('navShow');
})
$(".serclose").click(function () {
$(".ser-layer").removeClass('showdiv');
});

$('.navbtn').click(function () {
 $('body').toggleClass('navShow');
})
$(".totop").click(function () {$('body,html').animate({ scrollTop: 0 }, 500);return false;});
$(".top-nav .navs li").each(function(){
    var child = $(this).find('.sub-nav');
    if(child.length!=0){
      $(this).find('a').eq(0).after('<i class="plus swiper-icons swi-downb"></i>');
    }
  })
$(".top-nav .navs li i.plus").click(function () {
  $(this).toggleClass('show').next().slideToggle();
  $(this).parent().siblings('li').find('.plus').removeClass('show').next().slideUp();
})
$(".big-nav .scroll dl dt i.plus").click(function () {
  $(this).toggleClass('show').parent().next().slideToggle();
  $(this).parent().parent().siblings().find('.plus').removeClass('show').parent().next().slideUp();
})
$("img.lazy").lazyload({effect: "fadeIn", threshold: 50});
$(".imgLazy").appear(function(){var img = $(this).find('img');img.each(function(){var _src = $(this).attr('data-src');$(this).attr('src',_src);})},{accX: 0, accY:-50});

})

$(window).on('load',function() {
  // 内容页面图片展示
  $(".arc-img img").each(function(){
    var _src = $(this).attr('src');
    var _wid = $(this).width();
    if(_wid>200){
    $(this).wrap("<a href="+_src+" data-fancybox='group'  class='fancybox'>");  
    }
  })
 $(".fancybox").fancybox({
    buttons : ['close'],
    arrows : false,
    mobile : {
    clickContent : "close",
    clickSlide : "close"
    }
  }); 
}); 
//ie兼容处理
if (isIE || isIE11) {
  $(".zoomImg,.slideImg").addClass('imgfix');
  $(".imgfix").each(function(){
  var _src= $(this).find('img').attr('data-src'),_srcs= $(this).find('img').attr('src');
  if(!_src){_src=_srcs;}
  $(this).css({'background-image':'url('+_src+')','background-size':'cover','background-position':'center','background-repeat':'no-repeat'})
 })

}
if (!isIE || isIE11) {
AOS.init({
duration: 1500,
offset: 0, 
disable: 'mobile',
//disable: true
});
}


var child = $('.nyLeft').find('.subNavs>li');
if(child.length!=0){
$(".nyLeftBtn").append('<i class="plus"></i>')
}

if ($(window).width() <= 992) {
$(".nyLeftBtn").click(function(e){
$(this).next('.subNavs').stop().slideToggle();
$(this).find('.plus').toggleClass('show');
})
$(document).click(function (event) {
        var con = $('.nyLeft');
        if (!con.is(event.target) && con.has(event.target).length === 0) {
            $('.nyLeft .subNavs').slideUp();
            $(".nyLeftBtn").removeClass('show');
            $(".nyLeftBtn i").removeClass('show');
      }
});
}
$(".nyLeft .subNavs .li").each(function(){
    var childs = $(this).find('.subNav .lis');
    if(childs.length!=0){
     $(this).find('a').eq(0).append('<i class="plus"></i>')
     $(this).addClass('has')
    }
    if($(this).hasClass('on')&&childs.length!=0){
     $(this).find('a').eq(0).find('.plus').addClass('show');
    }
})
$(".nyLeft .subNavs .lis").each(function(){
    var childs = $(this).find('.subNav .liss');
    if(childs.length!=0){
     $(this).find('a').eq(0).append('<i class="plus"></i>')
    }
    if($(this).hasClass('on')&&childs.length!=0){
     $(this).find('a').eq(0).find('.plus').addClass('show');
    }
})
$(".nyLeft .subNavs .li>a>i.plus").click(function () {
  $(this).toggleClass('show').parent().next().slideToggle();
  $(this).parent().parent().siblings('.li').find('.plus').removeClass('show');
  $(this).parent().parent().siblings('.li').find('.subNav').slideUp();
  return false;
})
$(".nyLeft .subNavs .lis>a>i.plus").click(function () {
  $(this).toggleClass('show').parent().next().slideToggle();
   $(this).parent().parent().siblings('.lis').find('.plus').removeClass('show');
   $(this).parent().parent().siblings('.lis').find('.subNav').slideUp();
  return false;
})

// 

// 内容
$(".arc-con table").wrap("<div class='tbsc'>");
$(".arc-con img").parentsUntil('.arc-con').css("text-indent", '0');

function fontResize(el){
 var $el = $(el);
 var large = $el.find('.large');
 var small = $el.find('.small');
 var middle = $el.find('.middle');
 var fontSizes = 18;
 large.click(function(){
   if (fontSizes < 24) { 
    fontSizes += 1;
    $(".arc-con *").css({'font-size':fontSizes +'px'})
    } 
 }) 
 small.click(function(){
    if (fontSizes > 16) { 
        fontSizes -= 1;
       $(".arc-con *").css({'font-size':fontSizes +'px'})
    }  
 })  
 middle.click(function(){
         fontSizes = 18;  
      $(".arc-con *").css({'font-size':fontSizes +'px'})
 })   
}


// 通用

function swiTab(el,type,autoHeight){
  var $el = $(el);
  var slide = 'swiTab'+el;
  var navs = $el.find('.swiNav ul li');
  var mores = $el.find('.mores .more');
  var swi = $el.find('.swiTabs');
  var slide = new Swiper(swi, {
  speed: 800,
  spaceBetween:15,
  autoHeight:autoHeight,
  noSwiping: true,
  noSwipingClass: 'noSwi',
  //loop: true,
  lazy: {loadPrevNext: true},
  effect : 'fade',fadeEffect: {crossFade: true},
  on: {
    init:function(){
     navs.eq(0).addClass('on').siblings().removeClass('on'); 
    },
    transitionStart: function () {
        navs.eq(this.realIndex).addClass('on').siblings().removeClass('on'); 
        mores.eq(this.realIndex).show().siblings().hide(); 
      }
    }
  });
  navs.on(type, function (e) { 
   e.preventDefault(); 
   var index = $(this).index(); 
   slide.slideTo(index)
   });
}
function swiSlide(el){
   var $el = $(el);
   var $swiDots = $el.find('.swiDots');
   var $prev = $el.find('.prev');
   var $next = $el.find('.next');
    new Swiper($el, {
      speed: 800,
      //loop: true,
      slidesPerView: 'auto',
      watchOverflow:true,
      //autoplay: { delay:5000, stopOnLastSlide: false, disableOnInteraction: false, },
      pagination: { el:$swiDots, clickable: !0, bulletActiveClass: 'active' },
      navigation: { nextEl:$next, prevEl:$prev },
    });
}
function swiSlideAuto(el,speed,loop){
   var $el = $(el);
   var $swiDots = $el.find('.swiDots');
   var $prev = $el.find('.prev');
   var $next = $el.find('.next');
    new Swiper($el, {
      speed: 800,
      loop:loop?loop:false,
      slidesPerView: 'auto',
      watchOverflow:true,
      autoplay: { delay:speed, stopOnLastSlide: false, disableOnInteraction: false, },
      pagination: { el:$swiDots, clickable: !0, bulletActiveClass: 'active' },
      navigation: { nextEl:$next, prevEl:$prev },
    });
}
function swiSlidef(el){
   var $el = $(el);
   var $swiDots = $el.parent().find('.swiDots');
   var $prev = $el.parent().find('.prev');
   var $next = $el.parent().find('.next');
    new Swiper($el, {
      speed: 800,
      loop:true,
      spaceBetween: 5,
      autoplay: { delay:8000, stopOnLastSlide: false, disableOnInteraction: false, },
       breakpoints: {
        1025: { noSwiping: true,noSwipingClass: 'noSwi',}
      },
      pagination: { el:$swiDots, clickable: !0, bulletActiveClass: 'active' },
      navigation: { nextEl:$next, prevEl:$prev },
    });
}

$(".swiList").each(function(){
   $(this).wrapAll('<div class="swiper-container"></div>');
   $(this).addClass('swiper-wrapper');
   $(this).after('<div class="swiDots"></div>');
   $(this).after('<div class="swiBtn"><a href="javascript:;" class="prev swiper-icons swi-arrlb"></a><a href="javascript:;" class="next swiper-icons swi-arrrb"></a></div>');
   $(this).find('li').addClass('swiper-slide');
   var slide = $(this).parent();
   swiSlideAuto(slide,6000,true);
})
function suTabs(el,type){
 var $el = $(el);
 var Navs = $el.find('.moress .more');
 var Lis = $el.find('.hds ul li');  
 $el.slide({ trigger: type ,titCell:'.hds li',mainCell:'.bds'});
 Lis.on(type, function (e) {  
   var index = $(this).index(); 
   Navs.eq(index).show().siblings().hide();
});
}
function suTab(el,type){
 var $el = $(el);
 var Navs = $el.find('.mores .more');
 var Lis = $el.find('.hd ul li');  
 $el.slide({ trigger: type });
 Lis.on(type, function (e) {  
   var index = $(this).index(); 
   Navs.eq(index).show().siblings().hide();
});
}

function GetQueryValue(queryName) {
          var query = decodeURI(window.location.search.substring(1));
          var vars = query.split("&");
          for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split("=");
              if (pair[0] == queryName) { return pair[1]; }
          }
          return null;
}

function eclipText(el) {
      $(el).each(function(){
        var str = $(this).text();
      if (str) {
        var strs = String(str).split('');
        $(this).html('');
        for (var i = 0; i < strs.length; i++) {
          $(this).append('<i>' + strs[i] + '</i>')
        }
      }
      })
      
    }
function addEl(el,num){
$el = $(el);
var spans = '';
  for (i = 1; i <= num; i++) {
    spans += '<span></span>';
  }
$el.html(spans);
}
var configPc = window.matchMedia('(min-width:993px)');
var configWap = window.matchMedia('(max-width:992px)');
if (configPc.matches) {
window.onscroll = function(e){
    scrollFunc();
    if(scrollDirection == 'down'){
      $('body').addClass('scrollDown');
    }
    else if(scrollDirection == 'up'){
     $('body').removeClass('scrollDown');
    }
  }
}
if (configWap.matches) {

}



$(".uarc-con table").wrap("<div class='tbsc'></div>");