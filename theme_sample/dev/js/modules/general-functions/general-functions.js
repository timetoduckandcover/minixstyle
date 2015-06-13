

// Skip to content fix for chrome
$("#skip-to-content").on("click", function () {

    $('#content').attr('tabIndex', -1).focus();
});


// Burger
$('.burger').on("click", function() {

	$(this).parent().find('.burger-nav').slideToggle();
});

// Get sub-nav lists height
function getSubNavHeight() {

	if ($(window).width() >= 767) { 

	  	setTimeout(function() {

		    var heightArray = [],
		        maxHeight = 0;

		    $('.sub-nav-list').each(function() {

		        heightArray.push($(this).height());
		        maxHeight = Math.max.apply(Math, heightArray);
		    });

		    $('.sub-nav-list').each(function() {

		      $(this).css({"min-height" : maxHeight});
		    });

	  	},1000);
	} 
}
getSubNavHeight();




// Fitvids
//$('.video-wrapper').fitVids();

// Flexslider
//$('.flexslider').flexslider();
