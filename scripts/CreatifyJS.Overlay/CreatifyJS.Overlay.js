var CreatifyJS = CreatifyJS || {};

CreatifyJS.Overlay = function(options) {
	var defaults = {
		styles: {
			opacity: 1,
			height:  '200px',
			width:   '200px'
		}
	};
	this.options = options ? CreatifyJS.extend(defaults, options) : defaults;
	this.rootEl = this.options.rootEl || document.getElementsByTagName('body')[0];
	this.el = null;
	this.makeEl();
};

CreatifyJS.Overlay.prototype.makeEl = function () {
	var prop, 
		styles = this.options.styles,
		el = document.createElement('div');
		el.setAttribute('class', 'overlay');
	for (prop in styles) {
		if (styles.hasOwnProperty(prop)) {
			el.setAttribute(prop, styles[prop]);
		}
	}
	this.el = el;
	this.rootEl.appendChild(el);
};

CreatifyJS.Overlay.prototype.show = function () {
	this.el.style.display = 'block';
};

CreatifyJS.Overlay.prototype.hide = function () {
	this.el.style.display = 'none';
};

CreatifyJS.Overlay.prototype.remove = function () {
	this.rootEl.removeChild(this.el);
	this.el = null;
};
