describe("scriptLoader", function () {

	describe("Calling scriptLoader with a filename and a callback", function () {
		it("Appends the new script to the document body", function () {
			CreatifyJS.scriptLoader('http://pathtofile/file.js', function () {});
			var scripts = $('body').find('script');
			expect(scripts[scripts.length-1].src).toBe('http://pathtofile/file.js');
		});

	});

});