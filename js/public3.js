 


$(function () {
	$("#miso_loading").fadeOut();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			$(".header_box").addClass("fixed");
		} else {
			$(".header_box").removeClass("fixed");
		};
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$("#gotop").removeClass("hide");
		} else {
			$("#gotop").addClass("hide");
		};
	});
	$('#gotop').click(function () {
		$('html,body').animate({
			scrollTop: '0px'
		}, 800);
	});
	$("#miso_loading").fadeOut();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$(".header_box").addClass("fixed");
		} else {
			$(".header_box").removeClass("fixed");
		};
	});
	$(".miso_btn1").click(function () {

		$("body").toggleClass("show");
	});

	$(".g-nav2 .gn_gb").click(function () {

		$("body").removeClass("show");

	});
	AOS.init({
		disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 150, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});



	$('.search_btn').on('click', function () {
		$('.search-dialog-box').toggleClass("on");
	});

	$('.search-dialog-box .pub-close').on('click', function () {
		$('.search-dialog-box').removeClass("on");
	});

	$(".footer .right dl dt").click(function () {
		$(".footer .right dl .con").slideToggle();
		$(".footer .right dl").toggleClass("on");
	});

	$(".new-cont table").wrap('<div class="scroll"></div>');//表格外添加div

	$('.tc_btn[name]').click(function () {
		var tf_name_id = $(this).attr('name');
		$('.tc[name=' + tf_name_id + ']').addClass('act');
	});
	$('.tc_close').click(function () {
		$(this).parents('.tc').removeClass('act');
	});
	$('.tc_bg').click(function () {
		$(this).parents('.tc').removeClass('act');
	});

	//移动端导航
	$(".list_box_nav_mobile>li i").click(function () {
		$(this).parents(".list_box_nav_mobile>li").find(".list").slideToggle();
		$(this).parents(".list_box_nav_mobile>li").toggleClass("on1");
		$(this).parents(".list_box_nav_mobile>li").siblings().find(".list").slideUp();
		$(this).parents(".list_box_nav_mobile>li").siblings().removeClass("on1");
	});
	/*$("#m_nav .sub").hide();
	$("#m_nav .void").click(functon(){
		$(this).children(".sub").slideToggle(); //展开
	});*/
	$("#nav_btn_box").click(function () {
		$("#nav_btn_box .point").toggleClass("on");
		$("#nav_btn_box").toggleClass("on");
		$("#m_nav").toggleClass("act");
		$(".nav_mask").fadeToggle();
		$("body").toggleClass("navShow");
	});

	$(".nav_mask").click(function () {
		$("#nav_btn_box .point").removeClass("on");
		$("#nav_btn_box").removeClass("on");
		$(this).fadeToggle();
		$(".nav_btn_box").removeClass("act");
		$("#m_nav").removeClass("act");
	})

	$("#m_nav .close").click(function () {
		$("#nav_btn_box .point").removeClass("on");
		$("#nav_btn_box").removeClass("on");
		$(".nav_btn_box").removeClass("act");
		$("#m_nav").removeClass("act");
		$(".nav_mask").fadeOut();
	});

	//移动端内页导航
	$("#bnt_sub_nav").click(function () {
		$(this).toggleClass("on");
		$("#sub_nav_content").slideToggle();
	});

	$("#sub_nav_content dt.title a").attr("href", "javascript:void(0)");
	$("#sub_nav_content dt.title_on").next("dd").show();
	$("#sub_nav_content dt.title").click(function () {
		if ($(this).hasClass("title_on")) {
			$(this).next("dd").slideToggle();
			$(this).removeClass("title_on");
		} else {
			$("#sub_nav_content dd").slideUp();
			$("#sub_nav_content dt.title").removeClass("title_on").removeClass("on");
			$(this).toggleClass("title_on");
			$(this).next("dd").slideDown();
		}
	});

	$('.list_left li:not(".active") img').click(function (event) {
		$(this).next(".nysubnav").slideToggle();
		$(this).toggleClass('up');
	});

	$(".wrap_ph h3 i").click(function () {
		$(this).toggleClass("on");
		$(this).parent("h3").next('.box').slideToggle();

	});
	$(" .ny_nav2>ul>li>i").click(function () {
		$(this).parents("li").toggleClass("on").siblings().removeClass("on");
		$(this).parents("li").find(".sub").slideToggle().parents().siblings("li").find(".sub").slideUp();
	})
	// 内页手机下二级导航
	$(".ejlm h2").click(function (e) {
		$(this).next('ul').slideToggle();
		// $(document).one("click", function(){
		// $(".ejlm ul").slideUp();
		// });
		// e.stopPropagation();
	})

	$(".list_left li p").click(function () {
		$(this).next(".nysubnav").slideToggle();
	});

	// 视频弹框
	$(document).on("click", ".list_box_tc a", function (e) {
		var video_s = $(this).attr("data-video");
		$('#videobox video').attr("src", video_s);
		$(".vwrap").fadeIn();
	});

	$(".vwrap .close").click(function () {
		$(".vwrap").hide();
		$('#videobox video').attr("src", '');
	});

	$(".article table").wrap("<div class='tbsc'></div>");

	//下拉菜单

	$(".select h2").click(function () {
		$(this).next('ul').slideToggle()
		$(this).toggleClass('on')
		$(this).parent().siblings().find('ul').slideUp()
		$(this).parent().siblings().find('h2').removeClass('on')
	})
	$("body").click(function (e) {
		var target = $(e.target);
		if (target.closest(".select h2").length != 0) return;
		$(".select h2").removeClass('on');
		$(".select ul").slideUp()
	})



	//IE9 兼容placdholder属性
	// function placeholderSupport() {
	//     return 'placeholder' in document.createElement('input');
	// }
	// if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
	//     $("[placeholder]").each(function(){
	//         var _this = $(this);
	//        // console.log($(this).height());
	//         var inputHeight = parseInt(parseInt($(this).height()-2)-14)/2;
	//         var inputHeight = parseInt(parseInt(parseInt($(this).height()-2)/2)-7)+'px';
	//         _this.parent().css({"position": "relative"});
	//         var left = _this.position().left+parseInt(_this.css("padding-left"))+parseInt(_this.css("margin-left"))+"px";
	//         var top = parseInt(_this.css("padding-top"));//+parseInt(_this.css("margin-top"))+"px";
	//         var top = parseInt(_this.css("padding-top"));//+parseInt(_this.css("margin-top"))+"px";
	//         _this.after('<span class="placeholder" data-type="placeholder" style="position: absolute;font-size:14px; top: '+ inputHeight +'; left: ' + left + '">' + _this.attr("placeholder") + '</span>');
	//         //_this.after('<span class="placeholder" data-type="placeholder" style="position: absolute; top: 0px; left: ' + left + '">' + _this.attr("placeholder") + '</span>');
	//         if(_this.val() != ""){
	//             _this.parent().find("span.placeholder").hide();
	//         }
	//         else{
	//             _this.parent().find("span.placeholder").show();
	//         }
	//     }).on("focus", function(){
	//         $(this).parent().find("span.placeholder").hide();
	//     }).on("blur", function(){
	//         var _this = $(this);
	//         if(_this.val() != ""){
	//             _this.parent().find("span.placeholder").hide();
	//         }
	//         else{
	//             _this.parent().find("span.placeholder").show();
	//         }
	//     });
	//     // 点击表示placeholder的标签相当于触发input
	//     $("span.placeholder").on("click", function(){
	//         $(this).hide();
	//         $(this).siblings("[placeholder]").trigger("click");
	//         $(this).siblings("[placeholder]").trigger("focus");
	//     });
	// }


});