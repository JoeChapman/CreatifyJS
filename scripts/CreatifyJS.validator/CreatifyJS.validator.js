window.CreatifyJS = window.CreatifyJS || {};

(function ($, namespace, undefined) {
	
	var validator = {
		
		config: {},
		types: {},
		messages: [],
		handled: {},

		validate: function (data) {
			var i, type, tester; 

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

                    if (!tester.validate(data[i])) {
                    	if (typeof tester.errorHandler === 'function') {
                            tester.errorHandler(i);
                    	} else {
                    		if (!this.handled[i]) {
                    		    $('#'+i).after('<span>'+tester.instructions+'</span>');	
                    		    this.handled[i] = true;	
                    		}
                    	}
                    }
				}
			}
		}
	};

	// Would make sense to move 
	// configuration to another script
	validator.config = {
		email: 'validEmail',
		name:  'notEmpty',
		phone: 'maxLen10'
	};

    // Types could go in separate
    // script as well
	validator.types = {
		validEmail: {
			validated: false,
			validate: function (value) {
				return /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/.test(value);
			},
			instructions: 'Please enter a valid email.',
			errorHandler: function (id) {
				var el = $('#'+id);
				if (this.validated === false) {
				    el.after('<span>'+this.instructions+'</span>');	
				}
				this.validated = true;
			}
		},
		notEmpty: {
			validated: false,
			validate: function (value) {
				return value !== '';
			},
			instructions: 'This field cannot be empty',
			errorHandler: function (id) {
				var el = $('#'+id);
				if (this.validated === false) {
				    el.after('<span>'+this.instructions+'</span>');
			    }
			    this.validated = true;
			}
		},
		maxLen10: {
			validate: function (value) {
				return value.length < 11;
			},
			instructions: 'Please enter no more than 10 characters',
		}
	}

	// Add validator to the window.CreatifyJS
	namespace['validator'] = namespace.validator || validator;



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