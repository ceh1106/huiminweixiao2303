$(function() {
	$(".tabmenu .lk").click(function() {

		$(this).addClass("cur").siblings().removeClass("cur");

		var index = $(this).parent('.tabmenu').children('.lk').index(this);

		$(this).parents(".tabmenu").siblings(".tabwrap").find(".module").eq(index).show().siblings(
			'.module').hide();

	});

	//
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			$(".yy-btn").show();
		} else {
			$(".yy-btn").hide();
		}
	});

	//
	$('.ft-link .showmore').click(function(e) {
		$(this).toggleClass('this').siblings('.lks').toggleClass('height');
	});



	//搜索
	$('.hd-sear .icon').click(function() {
		$('.sear-pop').show();
	});
	$('.sear-pop .close').click(function() {
		$('.sear-pop').hide();
	});
	$('.sear-pop .formbox').click(function(e) {
		$('.sear-pop').hide();
		e.stopPropagation();
	});
	$('.sear-pop .form').click(function(e) {
		e.stopPropagation();
	});


	$(window).scroll(function() {
		if ($(window).scrollTop() > 1) {
			$(".head").addClass('scroll');
		} else {
			$(".head").removeClass('scroll');
		}
	});


	function menu() {
		if ($(window).width() < 1200) {
			$('.hd-nav').hide();
			$('.hd-nav .drop').hide();

			$('.sj-menu').click(function() {
				$(this).toggleClass('close');
				$('.hd-nav').toggle();
				$('.head').toggleClass('bg');

			});
			$('.hd-nav li>.arrow').click(function() {
				$(this).toggleClass('this').siblings('.drop').toggle();
				$(this).parents('li').toggleClass('this').siblings('li').removeClass('this').find(
					'.arrow').removeClass('this').siblings('.drop').slideUp();
			});

		} else {
			$('.hd-nav').show();
			$('.hd-nav .drop').show();
		}

	}
	menu();
	$(window).resize(function() {
		menu()
	})


	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		});
		wow.init();
	};

	



});

function fontSize(res) {
	let docEl = document.documentElement,
		clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (!clientWidth) return;
	let fontSize = 100 * (clientWidth / 1920);
	return res * fontSize;
}
if($(window).width()<767){
	function fontSize(res) {
		let docEl = document.documentElement,
			clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (!clientWidth) return;
		let fontSize = 100 * (clientWidth / 600);
		return res * fontSize;
	}
}
$(window).resize(function() {
	fontSize()
});
// (function(doc, win) {
// 	var docEl = doc.documentElement,
// 		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// 		recalc = function() {
// 			var clientWidth = docEl.clientWidth;
// 			if (!clientWidth) return;
// 			if (clientWidth >= 1920) {
// 				docEl.style.fontSize = '100px';
// 			} else {
// 				docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
// 			}
// 		};
// 	if (!doc.addEventListener) return;
// 	win.addEventListener(resizeEvt, recalc, false);
// 	doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);
