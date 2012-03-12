describe("Validator", function () {
	
	beforeEach(function () {
	    this.fixture = $('#fixture');	
	});

	afterEach(function () {
		this.fixture = null;
	})

	describe("Calling validate() with an invalid email address", function () {
		beforeEach(function () {
		    this.invalidEmail = {
		    	email: 'test@test'
		    };
		});
		afterEach(function () {
			this.fixture.find('span').remove();
			delete this.invalidEmail;
		});

		it("Shows the email error message", function () {
			CreatifyJS.validator.validate(this.invalidEmail);
			expect(this.fixture.find('#email').next('span').text()).toContain(CreatifyJS.validator.types.validEmail.instructions);
		});

	});

	describe("Calling validate() with an empty string for a 'notEmpty' field", function () {
		beforeEach(function () {
		    this.emptyName = {
		    	name: ''
		    };
		});
		afterEach(function () {
			this.fixture.find('span').remove();
			delete this.emptyName;
		});

		it("Shows the notEmpty error message", function () {
			CreatifyJS.validator.validate(this.emptyName);
			expect(this.fixture.find('#name').next('span').text()).toContain(CreatifyJS.validator.types.notEmpty.instructions);
		});

	});

	describe("Calling validator.validate() with invalid data for each field", function () {
		beforeEach(function () {
		    this.data = {
		    	name: '',
		    	phone: 12345678901,
		    	email: 'test@test'
		    };
            CreatifyJS.validator.types.notEmpty.validated = false;
            CreatifyJS.validator.types.validEmail.validated = false;
            CreatifyJS.validator.handled.phone = false;
		});
		afterEach(function () {
			this.fixture.find('span').remove();
			delete this.data;
		});

		it("Calls the appropriate errorHandler() with the field id", function () {
			var emptyErrorHandler = spyOn(CreatifyJS.validator.types.notEmpty, "errorHandler");
			var emailErrorHandler = spyOn(CreatifyJS.validator.types.validEmail, "errorHandler");
			CreatifyJS.validator.validate(this.data);
			expect(emptyErrorHandler).toHaveBeenCalledWith('name');
			expect(emailErrorHandler).toHaveBeenCalledWith('email');
		});

	});

});