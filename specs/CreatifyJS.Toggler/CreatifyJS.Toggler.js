describe("Toggler", function () {
	
	var fixture = $('#fixture');
    var rootEl = fixture.find('.toggler');

	describe("Clicking the handle when the content is hidden", function () {
		beforeEach(function () {
			this.toggler = new CreatifyJS.Toggler(rootEl);
			spyOn(this.toggler, 'show');
			this.toggler.handle.click();
		});

		it("Shows the content", function () {
		    expect(this.toggler.show).toHaveBeenCalled();
		});
	});

	describe("Clicking the handle when the content is visible", function () {
		beforeEach(function () {
			this.toggler = new CreatifyJS.Toggler(rootEl);
			spyOn(this.toggler, 'hide');
			this.toggler.handle.click();
		});

		it("Hides the content", function () {
		    expect(this.toggler.hide).toHaveBeenCalled();	
		});
	});

	describe("Calling show()", function () {
		beforeEach(function () {
			this.toggler = new CreatifyJS.Toggler(rootEl);
			this.toggler.show()
		});

		it("Adds className 'open' to the content and the handle elements", function () {
		    expect(this.toggler.content.hasClass('open')).toBe(true);	
		    expect(this.toggler.handle.hasClass('open')).toBe(true);
		});
	});

	describe("Calling hide()", function () {
		beforeEach(function () {
			this.toggler = new CreatifyJS.Toggler(rootEl);
			this.toggler.hide()
		});

		it("Removes className 'open' from the content and the handle elements", function () {
		    expect(this.toggler.content.hasClass('open')).toBe(false);	
		    expect(this.toggler.handle.hasClass('open')).toBe(false);
		});
	});

});