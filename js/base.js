// JavaScript Document
$(function() {
	//点击导航按钮显示layer-moreNav
	$('#J_showMoreNav').click(function() {
		$('#J_layerMoreNav').toggle();
	});
	
	//swipe slider api
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	  startSlide: 2,
	  speed: 400,
	  auto: 3000,
	  continuous: true,
	  disableScroll: false,
	  stopPropagation: false,
	  callback: function(index, elem) {
		  $('.swipe-indicator span').eq(index).addClass('curr')
		  	.siblings().removeClass('curr');
	  },
	  transitionEnd: function(index, elem) {}
	});	
});