describe("Tabs", function() {
	var container = $('#fixture');
	var tabs = null;
		
	describe("Creating a new Tabs object", function() {
		beforeEach(function() {
			tabs = new CreatifyJS.Tabs(container);
		});
		afterEach(function() {
			$('.tabs').remove();
		});
		it("hides all but the first section", function() {
			expect(tabs.sections.eq(0).is(':visible')).toBe(true);
			expect(tabs.sections.eq(1).is(':visible')).toBe(false);
			expect(tabs.sections.eq(2).is(':visible')).toBe(false);
		});
		it("adds tab buttons", function() {
			expect(container.find('.tabs').length).not.toBe(0);
		});
	});
	
	describe("Clicking a different tab button", function() {
		beforeEach(function() {
			tabs = new CreatifyJS.Tabs(container);
		});
		afterEach(function() {
			$('.tabs').remove();
		});
		
		it("hides the current section", function() {
			var currentTab = $('.section.current');
			var newTab = container.find('.tabs li').eq(2);
			newTab.click();
			expect(currentTab.is(':visible')).toBe(false);
		});
		
		it("shows the new section", function() {
			var currentTab = $('.section.current');
			var newTab = container.find('.tabs li').eq(2);
			newTab.click();
			expect(newTab.is(':visible')).toBe(true);
			
		});
	});
});