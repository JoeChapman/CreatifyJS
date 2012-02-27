window.CreatifyJS = window.CreatifyJS || {};

(function ($, namespace, undefined) {
	
	namespace.Toggler = function (rootEl) {
		this.rootEl = rootEl;
		this.handle = rootEl.find('.handle');
		this.content = rootEl.find('.content');
		this.rootEl.delegate('.handle', 'click', $.proxy(this.toggle, this));
	};

	(function (p) {
	    p.show = function () {
	    	this.handle.addClass('open');
			this.content.addClass('open');
		};

		p.hide = function () {
			this.handle.removeClass('open');
			this.content.removeClass('open');
		};

		p.toggle = function () {
			if (this.content.hasClass('open')) {
				this.hide();
			} else {
				this.show();
			}
		};	
	}(namespace.Toggler.prototype))
	


}(jQuery, CreatifyJS));