describe("extend", function() {
	var defaults = {name: 'defaultProp', hello: 'world', styles: {height: '200px'}};
	var options = {name: 'optionsProp', color: 'white', styles: {width: '400px'}};
	describe("Calling extend with an object parameter", function () {
		var newObject = CreatifyJS.extend(defaults, options);
		it("Merges the two objects and overwrites properties of the same name", function () {
			expect(newObject.name).toBe('optionsProp');
			expect(newObject.hello).toBe('world');
			expect(newObject.color).toBe('white');
			expect(newObject.styles.width).toBe('400px');
			expect(newObject.styles.height).toBe('200px');
		});
	});
});