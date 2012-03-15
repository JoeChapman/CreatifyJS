describe("Overlay", function() {

	var overlay = null;
	var rootEl = document.getElementsByTagName('body')[0];
	var options = {name: 'optionsProp', color: 'white', styles: {width: '400px'}};

	describe("Creating a new Overlay", function() {
		beforeEach(function() {
			spyOn(CreatifyJS.Overlay.prototype, 'makeEl');
			overlay = new CreatifyJS.Overlay(options);
		});
		afterEach(function() {
			overlay = null;
		});
		it("Calls makeEl", function() {
			expect(overlay.makeEl).toHaveBeenCalled();
		});
	});
	describe("Creating a new Overlay without options", function() {
		it("Does not throw an exception", function() {
			expect(function () {
				new CreatifyJS.Overlay()
			}).not.toThrow();
		});
	});
	describe("Calling makeEl", function () {
		beforeEach(function() {
			overlay = new CreatifyJS.Overlay(options);
		});
		afterEach(function() {
			overlay.rootEl.removeChild(overlay.el);
			overlay = null;
		});
		it("Makes an overlay using the options", function () {
			expect(overlay.el.getAttribute('opacity')).toBe('1');
			expect(overlay.el.getAttribute('height')).toBe('200px');
			expect(overlay.el.getAttribute('width')).toBe('400px');
		});
		it("Adds an overlay to the root", function () {
			expect(overlay.rootEl.lastChild.getAttribute('class')).toBe('overlay');
		});
	});
	describe("Calling show", function () {
		beforeEach(function() {
			overlay = new CreatifyJS.Overlay(options);
			overlay.show();
		});
		afterEach(function() {
			overlay.rootEl.removeChild(overlay.el);
			overlay = null;
		});
		it("Shows the overlay", function () {
			expect(overlay.el.style.display).toBe('block');
		});
	});
	describe("Calling hide", function () {
		beforeEach(function() {
			overlay = new CreatifyJS.Overlay(options);
			overlay.hide();
		});
		afterEach(function() {
			overlay.rootEl.removeChild(overlay.el);
			overlay = null;
		});
		it("Shows the overlay", function () {
			expect(overlay.el.style.display).toBe('none');
		});
	});
	describe("Calling remove", function () {
		beforeEach(function() {
			overlay = new CreatifyJS.Overlay(options);
			overlay.remove();
		});
		it("Removes the overlay", function () {
			expect($(overlay).find('.overlay').length).toBe(0);
			expect(overlay.el).toBeNull();
		});
	});
});