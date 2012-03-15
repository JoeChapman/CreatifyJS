describe("Sorter", function() {

	describe("Passing an Array of unordered numbers", function () {
		var numbers = [9, 2, 100, 54, 2, 521, 4];
		var sorted = new CreatifyJS.Sorter(numbers);
		it("Returns the Array of numbers in sequence", function () {
			expect(sorted).toEqual([2, 2, 4, 9, 54, 100, 521]);
		});
	});
	describe("Passing an Array of unordered etters", function () {
		var letters = ["s", "b", "aa", "g", "t", "zx"];
		var sorted = new CreatifyJS.Sorter(letters);
		it("Returns the Array of letters in alphabetical order", function () {
			expect(letters).toEqual(["aa", "b", "g", "s", "t", "zx"]);
		});
	});
	describe("Passing an Array of letters and numbers", function () {
		var mixed = ["s", 100, 4, "b", 24, "aa", 621, "g", 9, 99, "t", "zx"];
		var sorted = new CreatifyJS.Sorter(mixed);
		it("Returns the Array of characters in alphabetical order and numerical sequence", function () {
			expect(mixed).toEqual([4, 9, 24, 99, 100, 621, "aa", "b", "g", "s", "t", "zx"]);
		});
	});
	describe("Passing an Array of objects and a key name to sort by", function () {
		var unsorted = [
			{first: "Joseph", last: "Chapman"}, 
			{first: "Robin", last: "Chapman-Hinge"},
			{first: "Harvey", last: "Chapman"},
			{first: "Philippa", last: "Hinge"},
			{first: "Drew", last: "Chapman"}
		];
		var sorted = new CreatifyJS.Sorter(unsorted, 'first');
		it("Returns the Array of objects sorted by by the values of key", function () {
			expect(sorted).toEqual([
				{first: "Drew", last: "Chapman"},
				{first: "Harvey", last: "Chapman"},
				{first: "Joseph", last: "Chapman"}, 
				{first: "Philippa", last: "Hinge"},
				{first: "Robin", last: "Chapman-Hinge"}
			]);
		});
	});
});