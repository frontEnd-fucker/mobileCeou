// JavaScript Document
$(function() {
	//点击导航按钮显示layer-moreNav
	$('#J_showMoreNav').toggle(function() {
		$('.icon-channel_1, .icon-detail_1').addClass('selected');
		$('#J_layerMoreNav').show();
	}, function() {
		$('#J_layerMoreNav').hide();
		$('.icon-channel_1, .icon-detail_1').removeClass('selected');
	});
	
	//swipe slider api
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	  startSlide: 0,
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