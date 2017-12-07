(function($){

	// Preloader fade

	$(window).load(function() {
		$('#status').fadeIn();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

    // scroll smooth
		$('a[href*=#]').on("click", function(e){
           
			var anchor = $(this);
			$('html, body').animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000,"linear");
			e.preventDefault();
		});

		// scroll top

		$(window).scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		// navbar

		$(window).scroll(function(){
			var nav =$("nav");      //获取到导航栏
			if($(this).scrollTop() >600){  //当滚动距离大于600px时执行下面的东西
				nav.css({
					width:"100%",
					position:"fixed",
					top:0,
					zIndex:9999
				});
			}
			else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
				nav.css("position","static");
			}
		});
	

		//  Home

		$(".screen-height").height($(window).height());   //初始背景占据整个屏幕

		// $(window).resize(function(){
		// 	$(".screen-height").height($(window).height());
		// });

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}

	});

})(jQuery);