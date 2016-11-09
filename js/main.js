/* Developed by : Eswara Sai (http://eswarasai.com) */

$(document).ready(function() {
	function signupAnim() {
		if ($(window).width() > 768) {
			$('#account-form').animate({
				'marginLeft' : "0"
			});

			$('.account-main').animate({
				'marginLeft' : "100%"
			});
		} else {
			$('#account-form').animate({
				'marginLeft' : "0"
			});

			$('.account-main').animate({
				'marginLeft' : "100%"
			});
		}
	};

	function loginAnim() {
		if ($(window).width() > 768) {
			$('#account-form').animate({
				'marginLeft' : "50%"
			});

			$('.account-main').animate({
				'marginLeft' : "0"
			});
		} else {
			$('#account-form').animate({
				'marginLeft' : "0%"
			});

			$('.account-main').animate({
				'marginLeft' : "0"
			});
		}
	};

	$('#allowSignup').click(function(e) {
		/* To prevent default event handling */
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();

		signupAnim();
	});

	$('#allowLogin').click(function(e) {
		/* To prevent default event handling */
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();

		loginAnim();
	});

	$('#allowLoginFromReset').click(function(e) {
		/* To prevent default event handling */
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();

		loginAnim();

		$('.login-form').css('display', 'block');
		$('.reset-form').css('display', 'none');
	});

	$('#forgot').click(function(e) {
		/* To prevent default event handling */
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();

		$('.login-form').css('display', 'none');
		$('.reset-form').css('display', 'block');
	});

	/* Validation */
	$("#loginForm").validate({
		rules: {
			loginEmail: {
				required: true,
				email: true
			},
			loginPassword: {
				required: true,
				minlength: 6
			}
		},
        messages: {
            loginEmail: {
                required: "Email address is mandatory.",
                email: "Please enter a valid email address."
            },
            loginPassword: {
				required: "Please enter the password",
				minlength: "Password should be atleast 6 characters."
			},
        },
		errorClass: 'invalid',
    	validClass: 'valid',
        errorPlacement: function(error, element) {
			$(element)
            .closest("div")
            .find("label[for=" + element.attr('id') + "]")
            .attr('data-error', error.text());
        }
	});

	$("#signupForm").validate({
		rules: {
			signupFirstname: {
				required: true
			},
			signupLastname: {
				required: true
			},
			signupEmail: {
				required: true,
				email: true
			},
			signupPassword: {
				required: true,
				minlength: 6
			},
			signupConfirmPassword: {
				required: true,
				minlength: 6,
				equalTo: '#signupPassword'
			}
		},
        messages: {
            signupEmail: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            signupPassword: {
				required: "Please fill the password field",
				minlength: "Password should be atleast 6 characters"
			},
			signupConfirmPassword: {
				required: "Please fill the confirm password field",
				minlength: "Confirm password should be atleast 6 characters",
				equalTo: "Confirm password should be same as Password"
			},
        },
		errorClass: 'invalid',
    	validClass: 'valid',
        errorPlacement: function(error, element) {
			$(element)
            .closest("div")
            .find("label[for=" + element.attr('id') + "]")
            .attr('data-error', error.text());
        }
	});

	$("#resetForm").validate({
		rules: {
			resetEmail: {
				required: true,
				email: true
			}
		},
        messages: {
            resetEmail: {
                required: "Email address is mandatory.",
                email: "Please enter a valid email address."
            },
        },
		errorClass: 'invalid',
    	validClass: 'valid',
        errorPlacement: function(error, element) {
			$(element)
            .closest("div")
            .find("label[for=" + element.attr('id') + "]")
            .attr('data-error', error.text());
        }
	});


	/* Form submit actions */
	$('#signup').click(function(e) {
		/* To prevent default event handling */
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();

		if ($("#signupForm").valid()) {
			swal("Success!", "You've registered successfully!", "success");
		} else {
			return false;
		}
	});

	$('#login').click(function(e) {
		/* To prevent default event handling */
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();

		if ($("#loginForm").valid()) {
			swal("Success!", "You've logged in successfully!", "success");
		} else {
			return false;
		}
	});

	$('#reset').click(function(e) {
		/* To prevent default event handling */
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();

		if ($("#resetForm").valid()) {
			$('#resetForm').css('display', 'none');
			$('#reset').css('display', 'none');
			$('#reset-message span').text('Password reset instructions has been successfully sent the provided email address. Please check the email for further instructions');
			$('#reset-message').css('display', 'block');
		} else {
			return false;
		}
	});


});
