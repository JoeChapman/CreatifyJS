window.CreatifyJS = window.CreatifyJS || {};

(function ($, window, undefined) {

    /**
     * @TODO - These are models, break each out into an individual file.
     * 	       Make abstract validator model with same props and methods to be overriden.
     */
	window.CreatifyJS.validator.types = {
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
			}, 
			successHandler: function (id) {}
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
			},
			successHandler: function (id) {}
		},
		maxLen10: {
			validate: function (value) {
				return value.length < 11;
			},
			instructions: 'Please enter no more than 10 characters',
			errorHandler: function (id) {
				var el = $('#'+id);
				if (this.validated === false) {
				    el.after('<span>'+this.instructions+'</span>');
			    }
			    this.validated = true;
			},
			successHandler: function (id) {}
	    }
	};

}(jQuery, window));