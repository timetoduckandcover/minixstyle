
var screenHeight = $(window).height() - 60;

function getScreenHeight() {

	//subtract height of header, remove if we add a fixed header
	$('.home-promo-1').css({"height" : screenHeight});

	if ($(window).width() >= 767) { 

		$('.home-promo-2, .home-promo-3').css({"height" : screenHeight});

	} else {

		$('.home-promo-2, .home-promo-3').css("height", "370px");
	}
};

getScreenHeight();

window.onresize = function() {

	getScreenHeight();
};


// If home page, remove line under header
// if(window.location.origin == window.location.href) {

// 	console.log("homepage")

// 	$('.global-header').css({"border-bottom" : "none"});

// 	$(window).scroll(function() {

// 	    var height = $(window).scrollTop();

// 	    if(height  > screenHeight) {
	        
// 	        $('.global-header').css({"border-bottom" : "1px solid $col-black"});
// 	    } else {

// 	    	$('.global-header').css({"border-bottom" : "none"});
// 	    }
// 	});
// }