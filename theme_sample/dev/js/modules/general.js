
	jQuery(function($) {

		// Skip to content fix for chrome
		$("#skip-to-content").on("click", function () {

	        $('#content').attr('tabIndex', -1).focus();
	    });

	    // Burger
	    $('.burger').on("click", function() {

	    	$(this).parent().find('.sub-nav').slideToggle();
	    	console.log("test");
	    });



		// Fitvids
		//$('.video-wrapper').fitVids();

		// Flexslider
		//$('.flexslider').flexslider();

	})