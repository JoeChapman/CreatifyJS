window.CreatifyJS = window.CreatifyJS || {};

(function ($, namespace, undefined) {
	
	var validator = {
		
		config: {},
		types: {},
		messages: [],

		validate: function (data) {
			var i, type, checker, isValid = false;

			for (i in data) {
				if (data.hasOwnProperty(i)) {
					// Is data[i] a valid type?
				}
			}


		}

	};

	// Would make sense to move 
	// configuration to another script
	validator.config = {
		email: 'validEmail',
		contactName: 'notEmpty'
	};

    // Types could go in separate
    // script as well
	validator.types = {
		validEmail: {
			validate: function () {},
			instructions: '',
			errorHandler: function () {}
		},
		notEmpty: {
			validate: function () {},
			instructions: '',
			errorHandler: function () {}
		}
	}

	// Add validator to the window.CreatifyJS
	namespace['validator'] = validator;



	/**
	* Implementation:
	* binding key strokes events
	* to validator.validate
	*/

	$('form').delegate(':input', 'keypress keyup',
		function () {
			var field = this.id;
			validate.validator({field: this.value});
		}
	);

}(jQuery, CreatifyJS));