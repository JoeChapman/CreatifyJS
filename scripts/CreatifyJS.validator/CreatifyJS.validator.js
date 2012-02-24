window.CreatifyJS = window.CreatifyJS || {};

(function ($, namespace, undefined) {
	
	var validator = {
		
		config: {},
		types: {},
		messages: [],

		validate: function (data) {
			var i, type, tester, isValid = false;

			for (i in data) {
				if (data.hasOwnProperty(i)) {
					
					// Get name of validator
					type = this.config[i];
                    tester = this.types[type];

                    // if (!type) {
                    // 	continue;
                    // }

                    // if (!tester) {
                    // 	throw {
                    // 		name: "ValidationError",
                    // 		message: "No tester supplied for" + type;
                    // 	}
                    // }

                    isValid = tester.validate(data[i]);

                    if (!isValid) {
                    	tester.errorHandler(i);
                    }
				}
			}


		}

	};

	// Would make sense to move 
	// configuration to another script
	validator.config = {
		email: 'validEmail',
		name: 'notEmpty'
	};

    // Types could go in separate
    // script as well
	validator.types = {
		validEmail: {
			validate: function (value) {
				return /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/.test(value);
			},
			instructions: 'Please enter a valid email.',
			errorHandler: function (id) {
				var el = $('#'+id);
				el.after('<span>'+this.instructions+'</span>');
			}
		},
		notEmpty: {
			validate: function (value) {
				return value !== '';
			},
			instructions: 'This field cannot be empty',
			errorHandler: function (id) {
				var el = $('#'+id);
				el.after('<span>'+this.instructions+'</span>');
			}
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