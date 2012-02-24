describe("Validator", function () {
	
	it("Is defined", function () {
		expect(CreatifyJS.validator).toBeDefined();
	});

	describe("Calling validator.validate() with an invalid email address", function () {
		beforeEach(function () {
		    this.invalidEmail = {
		    	email: 'test@test'
		    };
		});
		afterEach(function () {
			delete this.invalidEmail;
		});

		it("calls the email errorHandler() with the value", function () {
			spyOn(CreatifyJS.validator.types.validEmail, "errorHandler");
			CreatifyJS.validator.validate(this.invalidEmail);

			expect(CreatifyJS.validator.types.validEmail.errorHandler).toHaveBeenCalledWith('test@test');
		});
	});

});