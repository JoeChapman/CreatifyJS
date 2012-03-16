describe("iterator", function() {
	var dataArr = ['joe', 'chapman', 'developer', 'UK'];
	var dataHash = {
           fname: 'joe',
           lname: 'chapman',
           title: 'developer',
           home:  'UK'
        }
	var iterator = null;
	describe("Asking for the next item of an Array", function () {
		var iterator = CreatifyJS.iterator(dataArr);
		it("Returns the next item", function () {
			expect(iterator.next()).toBe('chapman');
		});
	});
	describe("Asking for the next item of a hash", function () {
		var iterator = CreatifyJS.iterator(dataHash);
		it("Returns the next item", function () {
			expect(iterator.next()).toBe('chapman');
		})
	});
	describe("Asking if data has next item of Array", function () {
		var iterator = CreatifyJS.iterator(dataArr);
		it('Returns a true if another item exists', function () {
			expect(iterator.hasNext()).toBe(true);
		});
	});
	describe("Asking if data has next item of hash", function () {
		var iterator = CreatifyJS.iterator(dataHash);
		it('Returns true if another item exists', function () {
			expect(iterator.hasNext()).toBe(true);
		});
	});
	describe("Asking for the current item of the Array data", function () {
		var iterator = CreatifyJS.iterator(dataArr);
		it("Returns the current item", function () {
			expect(iterator.current()).toBe('joe');
		});
	});
	describe("Asking for the current item of the hash data", function () {
		var iterator = CreatifyJS.iterator(dataHash);
		it("Returns the current item", function () {
			expect(iterator.current()).toBe('joe');
		});
	});
	describe("Asking for the type of data", function () {
		it("Returns the real data type name (object)", function () {
			var iterator = CreatifyJS.iterator(dataHash);
			expect(iterator.getType()).toBe('object');
		});
		it("Returns the real data type name (array", function () {
			var iterator = CreatifyJS.iterator(dataArr);
			expect(iterator.getType()).toBe('array');
		});
	});
	describe("Asking for the last item of data", function () {
		it("Returns the last item of data", function () {
			var iterator = CreatifyJS.iterator(dataHash);
			expect(iterator.last()).toBe('UK');
		});
		it("Returns the last item of data", function () {
			var iterator = CreatifyJS.iterator(dataArr);
			expect(iterator.last()).toBe('UK');
		});
	});
	describe("Asking for item by it's position", function () {
		it("Returns the item at that position", function () {
			var iterator = CreatifyJS.iterator(dataHash);
			expect(iterator.find(3)).toBe('developer');
		});
		it("Returns the item at that position", function () {
			var iterator = CreatifyJS.iterator(dataArr);
			expect(iterator.find(2)).toBe('chapman');
		});
	});
	describe("Resetting", function () {
		it("Updates the current item to the first", function () {
			var iterator = CreatifyJS.iterator(dataHash);
			iterator.next();	
			expect(iterator.reset()).toBe('joe');
		});
		it("Updates the current item to the first", function () {
			var iterator = CreatifyJS.iterator(dataArr);
			iterator.last();
			expect(iterator.reset()).toBe('joe');
		});
	});
});