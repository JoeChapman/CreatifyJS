window.CreatifyJS = window.CreatifyJS || {};

(function ($, window, undefined) {

	var extend = function (from, to) {
		for  (var i in from) {
			if (from.hasOwnProperty(i)) {
				if (typeof to[i] === 'undefined') {
					to[i] = from[i];
				}
			}
		}
		return to;
	};

	window.CreatifyJS.validator.types.validEmail = extend(window.CreatifyJS.validator.model, {
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
	});

	window.CreatifyJS.validator.types.notEmpty = extend(window.CreatifyJS.validator.model, {
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
	});

	window.CreatifyJS.validator.types.maxLen10 = extend(window.CreatifyJS.validator.model, {
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
    });

}(jQuery, window));