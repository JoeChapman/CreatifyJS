window.CreatifyJS = window.CreatifyJS || {};

(function ($, window, undefined) {

	window.CreatifyJS.validator.model = {

		validated: false,
		validate: function (v) {
			return v !== '';
		},
		instructions: 'Must not be empty',
		errorHandler: function (id) {
			var el = $('#'+id);
			if (this.validated === false) {
			    el.after('<span>'+this.instructions+'</span>');	
			}
			this.validated = true;
		},
	    successHandler: function (id) {}
	}

} (jQuery, window));