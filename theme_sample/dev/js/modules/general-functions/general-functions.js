

// Skip to content fix for chrome
$("#skip-to-content").on("click", function () {

    $('#content').attr('tabIndex', -1).focus();
});

// Burger
$('.burger').on("click", function() {

	$(this).parent().find('.burger-nav').slideToggle();
	$('#cart').slideUp();
});

// Cart link
$('.cart-link').on("click", function() {

	$('#cart').slideToggle();
	$('.burger-nav').slideUp();
});


// Fitvids
//$('.video-wrapper').fitVids();

// Flexslider
//$('.flexslider').flexslider();
