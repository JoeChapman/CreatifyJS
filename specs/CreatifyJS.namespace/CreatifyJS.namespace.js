describe("CreatifyJS.namespace", function() {
	
	describe("calling with a string of period-delimited keys", function() {
		it("nests those keys as objects in the CreatifyJS namespace object", function() {
			CreatifyJS.namespace('my.augmented.namespace');
			expect(CreatifyJS.my.augmented.namespace).toBeDefined();
		});	
	});
	
	describe("calling with a string of period-delimited keys beginning with 'CreatifyJS'", function() {
		afterEach(function() {
			delete CreatifyJS.CreatifyJS;	
		})
		it("nests all keys including 'CreatifyJS' as members of the CreatifyJS namespace object", function() {
			CreatifyJS.namespace('CreatifyJS.my.augmented.namespace');
			expect(CreatifyJS.CreatifyJS).toBeDefined();
		});	
	});
	
	describe("calling with a string of period-delimited keys beginning with 'CreatifyJS' and 'CreatifyJS' as 2nd param", function() {
		it("nests all keys other than 'CreatifyJS' as members of the CreatifyJS namespace object", function() {
			CreatifyJS.namespace('CreatifyJS.my.augmented.namespace', 'CreatifyJS');
			expect(CreatifyJS.CreatifyJS).toBeUndefined();
		});	
	});
	
});