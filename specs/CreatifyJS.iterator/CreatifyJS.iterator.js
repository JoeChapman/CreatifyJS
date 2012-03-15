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
		it('Returns a true if another item exists', function () {
			expect(iterator.hasNext()).toBe(true);
		});
	});
});