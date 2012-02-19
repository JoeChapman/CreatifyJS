describe("Script Loader", function () {
	
	describe("Calling scriptLoader with a filename and a callback", function () {
		var loader = CreatifyJS.scriptLoader,
			filename = 'the file name',
			expectedFilename = '',
			callback = function (file) {
				expectedFilename = file;
			};

		beforeEach(function () {
			loader(filename, callback);	
		});

		it("Calls the callback with the filename as the only argument", function () {
			expect(expectedFilename).toBe('the file name');
		});

	});

});