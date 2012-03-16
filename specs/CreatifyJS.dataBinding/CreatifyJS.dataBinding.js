describe("Data Binding", function () {
	var binder = null;
	var data = {fname: 'Joe', lname: 'Chapman'};

	describe("Adding data", function () {
		describe("Without a data argument", function () {
			var binder = CreatifyJS.dataBinding;
			it("Does not throw an error", function () {
				expect(function () {
					binder.add();
				}).toThrow("Invalid request: data must be an object with properties");
			});
		});
	});
	
	describe("Changing a property of the data", function () {
		var binder = CreatifyJS.dataBinding;
		binder.add(data);
		var changeSpy = spyOn(binder, "change")
		data.fname = "Harvey";
		binder.events.fname.fn();
		it("Fires a change event", function () {
			expect(changeSpy).toHaveBeenCalled();
		});
	});

});