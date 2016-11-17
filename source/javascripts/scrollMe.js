$(document).ready(function(){
	$('.item-scroll-me').on('click', function () {
		$('.item-illustrations').toggleClass('item-illustrations-scroll');
		$('.item-scroll-me').toggleClass('item-scroll-me-active');
		$('.item-scroll-me').html($('.item-scroll-me').text() == 'scroll me' ? 'stop <i class="fa fa-times" aria-hidden="true"></i>' : 'scroll me');
	})

	
	$('.carousel-nav').on('click', function () {
		$('.item-scroll-me').removeClass('item-scroll-me-active');
		$('.item-scroll-me').html('scroll me');
		$('.item-illustrations').scrollTop(0);
	})
});