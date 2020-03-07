$(document).ready(function(){
	$('.galbox a').prettyPhoto({
		animation_speed:'fast',
		theme:'dark_rounded',
		 autoplay_slideshow: true
	});
	$('.box').mixItUp();

	$('.box ul li a').click(function(){
		$('.box ul li a').removeClass('bg');
		$(this).addClass('bg');
	})
});