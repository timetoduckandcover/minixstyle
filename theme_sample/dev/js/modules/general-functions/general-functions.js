

// Flexslider
$('.flexslider').flexslider({

	slideshow: false,
	animation: 'slide'
});

$('.product-thumbnails li a').on("click", function () {

	var dataIndex = parseInt($(this).attr('data-index'));

    $('.flexslider').flexslider(dataIndex);
});


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

$('.has-mobile-sub-nav').on("click", function() {

	$('.mobile-sub-nav').slideUp();
	$(this).parent().find('.mobile-sub-nav').slideToggle();
});


// Fitvids
//$('.video-wrapper').fitVids();

