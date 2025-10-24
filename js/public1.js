 $(function(){
	 var imgSrc = $('.secBanner').find('img').attr('src');
	 $('.secBanner').css('background-image','url('+imgSrc+')').find('img').remove();
	 var imgSrc02 = $('.multiBx').find('img').attr('src');
	 $('.multiBx').css('background-image','url('+imgSrc02+')').find('img').remove();
	if (/mobile/i.test(navigator.userAgent) ) {
		var langHtml = $('.langs').html();
		var shareHtml = $('.topShares').html();
		$('.headerBx').before('<div class="mobileHeaderBx"><em></em><span></span><b></b></div><div class="mobileHeaderBxPlace"></div>');
		
		$('.navList').before('<div class="navBack"><span class="back"></span></div>');
		$('.navBack .back').click(function(){
			$('.headerBx').removeClass('headerBxShow');
			$('html').removeClass('lockHei');
			$('.navList').show();
			$('.searchC').removeClass('searchCShow');
		});
		$('.mobileHeaderBx em').click(function(){
			if($('.headerBx').hasClass('headerBxShow')){
				$('.headerBx').removeClass('headerBxShow');
				$('html').removeClass('lockHei');
			}else{
				$('.headerBx').addClass('headerBxShow');
				$('.navList').show();
				$('.searchC').removeClass('searchCShow');
				$('html').addClass('lockHei');
			}
		});
		$('.mobileHeaderBx b').click(function(){
			if($('.headerBx').hasClass('headerBxShow')){
				$('.headerBx').removeClass('headerBxShow');
				$('.navList').show();
				$('.searchC').removeClass('searchCShow');
				$('html').removeClass('lockHei');
			}else{
				$('.headerBx').addClass('headerBxShow');
				$('.navList').hide();
				$('.searchC').addClass('searchCShow');
				$('html').addClass('lockHei');
			}
		});
		$('.navList').append('<li class="menuLang"><ul>'+langHtml+'</ul></li>');
		$('.navList').append('<li class="menuShare"><ul>'+shareHtml+'</ul></li>');
		$('.navList li').each(function(){
			if($(this).find('dl dd').length>0){
				$(this).append('<em class="liMenu">+</em>');
			}
		})
		$('.liMenu').click(function(){
			if($(this).parent().find('dl').hasClass('show')){
				$(this).parent().find('dl').removeClass('show');
				$(this).text('+');
			}else{
				$(this).parent().find('dl').addClass('show');
				$(this).text('-');
			}
		})
		
		var numHtml01 = $('.numList li').eq(0).html();
		var numHtml02 = $('.numList li').eq(2).html();
		var numHtml03 = $('.numList li').eq(3).html();
		var numHtml04 = $('.numList li').eq(1).html();
		$('.numList').before('<ul class="inline_block numList widper"><li>'+numHtml01+'</li><li>'+numHtml02+'</li><li>'+numHtml03+'</li><li>'+numHtml04+'</li></ul>');
		$('.numListPc').remove();
		$(document).click(function(e){
			if($('.dropList dd').hasClass('show')){
				$('.dropList dt').removeClass('dtShow');
				$('.dropList dd').removeClass('show');
			}
			e.stopPropagation();
		});
		$('.dropList dt').click(function(e){
			if($(this).parent().find('dd').hasClass('show')){
				$(this).removeClass('dtShow');
				$(this).parent().find('dd').removeClass('show');
			}else{
				$(this).addClass('dtShow');
				$(this).parent().find('dd').addClass('show');
			}
			e.stopPropagation();
		})
	}else{
		$('.swiper-container-campus dd').eq(0).addClass('showBlock');
		$('.menuList li').eq(0).addClass('curr').siblings('li').removeClass('curr');
		var hml = $('.swiper-container-campus dd').eq(0).find('h3').html();
		var hrf = $('.swiper-container-campus dd').eq(0).find('h3 a').attr('href');
		$('.menuCard h3').html(hml);
		$('.menuCard .readMore a').attr('href',hrf);
		$('.menuList li').hover(function(){
			var index = $(this).index();
			$('.menuList li').eq(index).addClass('curr').siblings('li').removeClass('curr');
			$('.swiper-container-campus dd').eq(index).addClass('showBlock').siblings('dd').removeClass('showBlock');
			var hml = $('.swiper-container-campus dd').eq(index).find('h3').html();
			$('.menuCard h3').html(hml);
			var hrf = $('.swiper-container-campus dd').eq(index).find('h3 a').attr('href');
			$('.menuCard h3').html(hml);
			$('.menuCard .readMore a').attr('href',hrf);
		})
		// 添加滚动监听
		$(window).scroll(function() {
			if ($(this).scrollTop() > 524) {
				$('.dlMenu').addClass('dlMenuFixed'); // 替换 yourClassName 为你想添加的类名
			} else {
				$('.dlMenu').removeClass('dlMenuFixed');
			}
		});
		$(document).click(function(e){
			
			if($('.searchC').hasClass('searchC_show')){
				$('.searchC').removeClass('searchC_show');
			}
			if($('.langList').hasClass('langListShow')){
				$('.langList').removeClass('langListShow');
			}
			
			if($('.dropList dd').hasClass('show')){
				$('.dropList dt').removeClass('dtShow');
				$('.dropList dd').removeClass('show');
			}
			e.stopPropagation();
		});
		$('.searchBtn').click(function(e){
			if($('.searchC').hasClass('searchC_show')){
				$('.searchC').removeClass('searchC_show');
			}else{
				$('.searchC').addClass('searchC_show');
			}
			e.stopPropagation();
		})
		$('.searchC').click(function(e){
			$(this).addClass('searchC_show');
			e.stopPropagation();
		})
		$('.dropList dt').click(function(e){
			if($(this).parent().find('dd').hasClass('show')){
				$(this).removeClass('dtShow');
				$(this).parent().find('dd').removeClass('show');
			}else{
				$(this).addClass('dtShow');
				$(this).parent().find('dd').addClass('show');
			}
			e.stopPropagation();
		})
		$('#chooseLang').click(function(e){
			if($('.langList').hasClass('langListShow')){
				$('.langList').removeClass('langListShow');
			}else{
				$('.langList').addClass('langListShow');
			}
			e.stopPropagation();
		})
		$('#fonts span').click(function(){
			$(this).addClass('curr').siblings('span').removeClass('curr');
		});
		$('#large').click(function(){
			$('.content').css('font-size','22px');
		});
		$('#medium').click(function(){
			$('.content').css('font-size','18px');
		});
		$('#small').click(function(){
			$('.content').css('font-size','16px');
		});
		// 添加滚动监听
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.headerBx').addClass('headerBxWithBg');
			} else {
				$('.headerBx').removeClass('headerBxWithBg');
			}
		});
	}
 })