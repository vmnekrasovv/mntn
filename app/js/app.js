gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.box'
});


(function($){
	$(document).ready(function(){ 

		$(window).on('scroll load', function(e){
			if(pageYOffset > $('.header').outerHeight(true) + 300){
				$('.top-line').addClass('fixed');
				$('body').addClass('top-line-fixed');
			} else {
				$('.top-line').removeClass('fixed');
				$('body').removeClass('top-line-fixed');
			}
		});

		$(window).on('load resize', function(){

			let wW = $(window).innerWidth();
			let account = $('.account');
			let follow  = $('.follow-us');
			let menu    = $('.header-menu');
			let box     = $('.header-title-box');

			function addClassInner(element, menu, box){
				if( wW <= 767 && !(element.hasClass('inner')) ){
					element.appendTo(menu);
					element.addClass('inner');
				} else if( wW > 767 && element.hasClass('inner') ) {
					if(box){
						box.after(element);
						element.removeClass('inner');
					} else {
						menu.after(element);
						element.removeClass('inner');
					}
					
				}
			}

			addClassInner(account, menu);
			addClassInner(follow, menu, box);
			
		});

		function scrollTopAnimate(trigger, target, offset, speed){

			trigger.on('click', function(){

				$(this).attr('id') ? target = $('.' + $(this).attr('id')) : true;

				$('html, body').stop().animate({
					scrollTop: target.offset().top - offset
				}, speed, function(){ 
					//console.log('callback function'); 
				});
			});
		}

		scrollTopAnimate($('.scroll-down'), $('.content'), 300, 900);
		scrollTopAnimate($('.pagination__element'), true, 150, 900);

		$('.header-menu__link').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
		});


		$('.header').parallax({
			imageSrc: 'images/dest/header_bg.jpg',
			speed: .7,
		});
		
	});

})(jQuery);