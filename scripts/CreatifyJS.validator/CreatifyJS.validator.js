window.CreatifyJS = window.CreatifyJS || {};

(function ($, window, undefined) {
	
	window.CreatifyJS.validator = {
		
		config: {},
		types: {},
		messages: [],
		handled: [],

		validate: function (data) {
			var i, type, tester; 

			for (i in data) {
				if (data.hasOwnProperty(i)) {
					
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

                    if (typeof tester.errorHandler !== 'function') {
                    	throw {
                    		name: "ErrorHandlerError",
                    		message: "No errorHandler supplied for " + i 
                    	}
                    }

                    if (typeof tester.successHandler !== 'function') {
                    	throw {
                    		name: "SuccessHandlerError",
                    		message: "No successHandler supplied for " + i 
                    	}
                    }

                    if (!tester.validate(data[i])) {
                        tester.errorHandler(i);
                        this.handled.push(i);
                    } else {
                    	tester.successHandler(i);
                    	this.handled.splice(i, 1);
                    }
				}
			}
			return this.handled.length === 0;
		}
	};

}(jQuery, window));