
// Home page popups

	var rlpWrapper       = $('.rlp-wrapper'),
		loginSwitch      = $('.rlp-switch-to-login'),
		registerSwitch   = $('.rlp-switch-to-register'),
		loginSection     = $('.rlp-login-section'),
		registerSection  = $('.rlp-register-section'),
		closePopup       = $('.rlp-close'),
		signInLinkHeader = $('.sign-in-link');


	// Fade in popup - needs cookie here!
	setTimeout(function() {

		rlpWrapper.fadeIn();
	}, 5000);

	// Switch between login & register forms
	loginSwitch.on("click", function() {

		registerSection.hide();
		loginSection.show();
	});

	registerSwitch.on("click", function() {

		registerSection.show();
		loginSection.hide();
	});

	// Hide popup on X click
	closePopup.on("click", function() {

		rlpWrapper.hide();
	});

	// Sign in show popup
	signInLinkHeader.on("click", function() {

		rlpWrapper.show();
		registerSection.hide();
		loginSection.show();
	});



	