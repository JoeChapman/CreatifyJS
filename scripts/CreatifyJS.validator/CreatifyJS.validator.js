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

                    if (!type) {
                    	continue;
                    }

                    if (!tester) {
                    	throw {
                    		name: "ValidationError",
                    		message: "No tester supplied for " + i
                    	}
                    }

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