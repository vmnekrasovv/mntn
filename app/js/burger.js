(function($){
	$(document).ready(function(){

		$('.burger').append("<span class='burger__element'></span>");

		let btn = $('.burger, .header-menu');

		btn.click(function(){
			btn.toggleClass('active');
			$('body').toggleClass('lock');
		});

		$(window).on('load resize', function(){

			let wW = $(window).innerWidth();
			let account = $('.account');
			let follow  = $('.follow-us');
			let menu    = $('.header-menu');
			let box     = $('.header-title-box');

			if( wW <= 767 && !(account.hasClass('inner')) ){
				account.appendTo(menu);
				account.addClass('inner');
			} else if( wW > 767 && account.hasClass('inner') ) {
				menu.after(account);
				account.removeClass('inner');
			}

			if( wW <= 767 && !(follow.hasClass('inner')) ){
				follow.appendTo(menu);
				follow.addClass('inner');
			} else if( wW > 767 && follow.hasClass('inner') ) {
				box.after(follow);
				follow.removeClass('inner');
			}
		});

	});
})(jQuery);