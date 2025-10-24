 $(function(){
	
	
	
	
	var infoSwiper = new Swiper('.swiper-container-info',{
		loop: true,
		autoplay: 5000,
		pagination:'.pagination-info',
		paginationClickable: true,
		slidesPerView: 1,
		calculateHeight : true,
	})
	if (/mobile/i.test(navigator.userAgent) ) {
		$('.swiper-container-index li').each(function(){
			var img_src = $(this).find('img').attr('src');
			$(this).css('background-image','url('+img_src+')').find('img').remove();
		})
		
		var indexSwiper = new Swiper('.swiper-container-index',{
			loop: true,
			autoplay: 5000,
			pagination:'.pagination-index',
			paginationClickable: true,
			slidesPerView: 1,
			calculateHeight : true,
		})
		$('.home-prev').on('click', function(e){
			e.preventDefault()
			indexSwiper.swipePrev()
		})
		$('.home-nxt').on('click', function(e){
			e.preventDefault()
			indexSwiper.swipeNext()
		})
		var campusSwiper = new Swiper('.swiper-container-campus', {
		    loop: true,
		    slidesPerView: 1,
		    calculateHeight: true,
		    watchActiveIndex: true,
			calculateHeight : true
		});
		$('.campus-prev').on('click', function(e){
			e.preventDefault()
			campusSwiper.swipePrev()
		})
		$('.campus-nxt').on('click', function(e){
			e.preventDefault()
			campusSwiper.swipeNext()
		})
		$('.swiper-container-exchange').after('<div class="swiper-container-exchangeM"><ul class="swiper-wrapper"><ul></div>');
		$('.swiper-container-exchange .swiper-slide').each(function(){
			$(this).find('li').each(function(){
				var liHtml = $(this).html();
				$('.swiper-container-exchangeM .swiper-wrapper').append('<li class="swiper-slide">'+liHtml+'</li>');
			})
			
		})
		$('.swiper-container-exchange').remove();
		var exSwiper = new Swiper('.swiper-container-exchangeM',{
			loop: true,
			slidesPerView: 1,
			calculateHeight : true,
			pagination:'.pagination-exchange',
			paginationClickable: true,
		})
		$('.exPrev').on('click', function(e){
			e.preventDefault()
			exSwiper.swipePrev()
		})
		$('.exNxt').on('click', function(e){
			e.preventDefault()
			exSwiper.swipeNext()
		})
		
		var acaSwiper = new Swiper('.swiper-container-aca', {
		    loop: true,
		    slidesPerView: 3,
		    calculateHeight: true,
		    watchActiveIndex: true,
		    centeredSlides: true, // 激活的滑块居中
		    initialSlide: 1, //  初始激活第二个滑块
			calculateHeight : true,
		    on: {
		        slideChangeTransitionEnd: function () { // 滑动结束后调整样式
		            this.slides.forEach(slide => {
		                slide.classList.remove('active-slide');
		            });
		            this.slides[this.realIndex + 1].classList.add('active-slide'); // 中间滑块添加样式
		        }
		    }
		});
		$('.aca-prev').on('click', function(e){
			e.preventDefault()
			acaSwiper.swipePrev()
		})
		$('.aca-nxt').on('click', function(e){
			e.preventDefault()
			acaSwiper.swipeNext()
		})
		// $('.swiper-container-his .swiper-wrapper').addClass('swiper-wrapper-temp');
		// $('.swiper-container-his').append('<ul class="swiper-wrapper swiper-wrapper-his hisList"></ul>');
		// $('.swiper-container-his li').each(function(){
		// 	var html = $(this).html();
		// 	$('.swiper-wrapper-his').append('<li class="swiper-slide">'+html+'</li>');
		// })
		// $('.swiper-wrapper-temp').remove();
		var hisSwiper = new Swiper('.swiper-container-his',{
			slidesPerView: 1,
			calculateHeight : true
		})
		$('.prev').on('click', function(e){
			e.preventDefault()
			hisSwiper.swipePrev()
		})
		$('.nxt').on('click', function(e){
			e.preventDefault()
			hisSwiper.swipeNext()
		})
	}else{
		var indexSwiper = new Swiper('.swiper-container-index',{
			loop: true,
			autoplay: 5000,
			pagination:'.pagination-index',
			paginationClickable: true,
			slidesPerView: 1,
			calculateHeight : true,
		})
		$('.home-prev').on('click', function(e){
			e.preventDefault()
			indexSwiper.swipePrev()
		})
		$('.home-nxt').on('click', function(e){
			e.preventDefault()
			indexSwiper.swipeNext()
		})
		// $('#info .swiper-slide').each(function(){
		// 	var img_src = $(this).find('img.imgBg').attr('src');
		// 	$(this).css('background-image','url('+img_src+')').find('img.imgBg').remove();
		// })
		var wid = ($(window).width() - 1200)/2;
		$('.home-prev').css('left',(wid-24)+'px');
		$('.home-nxt').css('right',(wid-24)+'px');
		// var photoSwiper = new Swiper('.swiper-container-photos',{
		// 	loop: true,
		// 	slidesPerView: 3,
		// 	calculateHeight : true
		// })
		var hisSwiper = new Swiper('.swiper-container-his',{
			slidesPerView: 4,
			calculateHeight : true
		})
		$('.prev').on('click', function(e){
			e.preventDefault()
			hisSwiper.swipePrev()
		})
		$('.nxt').on('click', function(e){
			e.preventDefault()
			hisSwiper.swipeNext()
		})
	
	}
 })