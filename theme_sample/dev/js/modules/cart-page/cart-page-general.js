
	// Get height of VIP image
	function getCartVipImageHeight() {

		var cartVipImage = $('.cart-footer-vip').height();
		$('.cart-footer-checkout-btn').css({"height" : cartVipImage});
	};
	getCartVipImageHeight();

	window.onresize = function() {

		getCartVipImageHeight();
	};
