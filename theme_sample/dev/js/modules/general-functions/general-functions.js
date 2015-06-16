

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

// Get screen height for home & lookbook slides
var screenHeight = $(window).height() - 60; //subtract height of header, remove if we add a fixed header

function getScreenHeight() {
	
	// Home promos height
	$('.home-promo-1').css({"height" : screenHeight});

	if ($(window).width() >= 767) { 

		$('.home-promo-2, .home-promo-3').css({"height" : screenHeight});

	} else {

		$('.home-promo-2, .home-promo-3').css("height", "370px");
	}

	// Lookbooks height
	$('#lookbooks li').css({"height" : screenHeight});

};

getScreenHeight();

window.onresize = function() {

	getScreenHeight();
};



// Fitvids
//$('.video-wrapper').fitVids();

