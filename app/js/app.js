(function($){
	$(document).ready(function(){ 

		$('.scroll-down').on('click', function(){
			$('html, body').animate({
				scrollTop: $('.navbar').offset().top
			}, 500, function(){ 
				//console.log('callback function'); 
			});
		});

		$(window).on('scroll load', function(e){
			if(pageYOffset > $('.header').outerHeight(true)){
				$('.navbar').addClass('fixed');
				$('body').addClass('navbar-fixed');
			} else {
				$('.navbar').removeClass('fixed');
				$('body').removeClass('navbar-fixed');
			}
		});


		$('.header').parallax({
			imageSrc: 'images/dest/header_bg.jpg',
			speed: .7,
		});
		
	});
})(jQuery);