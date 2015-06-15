
	// Function to remove class of invalid character
	function removeInvalid() {

		setTimeout(function() {

			$('.card-inputs input').removeClass('invalid-character');
		}, 300);
	};

	// Skip inputs once maxlength == 4 & restrict only to numbers
	$('.card-inputs input').keypress(function(e) {

		var numberBtn = ( !(e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) ),
			myLength = $(this).val().length;

			console.log(numberBtn)

		if(!numberBtn) {

			$(this).addClass('invalid-character');
			removeInvalid();
			return false;
		}

		if( (myLength == 4) && (numberBtn) ) {

			$(this).next('input').focus();
		}

	});