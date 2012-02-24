describe("Validator", function () {
	
	beforeEach(function () {
	    this.fixture = $('#fixture');	
	});

	afterEach(function () {
		this.fixture = null;
	})
	
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
			this.fixture.find('span').remove();
			delete this.invalidEmail;
		});

		it("Calls the 'email' errorHandler() with the field id", function () {
			spyOn(CreatifyJS.validator.types.validEmail, "errorHandler");
			CreatifyJS.validator.validate(this.invalidEmail);
			expect(CreatifyJS.validator.types.validEmail.errorHandler).toHaveBeenCalledWith('email');
		});

		it("Appends the error message to the email field", function () {
			CreatifyJS.validator.validate(this.invalidEmail);
			expect(this.fixture.find('#email').next('span').text()).toContain(CreatifyJS.validator.types.validEmail.instructions);
		});

	});

	describe("Calling validator.validate() with an empty string for a 'notEmpty' field", function () {
		beforeEach(function () {
		    this.emptyName = {
		    	name: ''
		    };
		});
		afterEach(function () {
			this.fixture.find('span').remove();
			delete this.emptyName;
		});

		it("Calls the 'notEmpty' errorHandler() with the field id", function () {
			spyOn(CreatifyJS.validator.types.notEmpty, "errorHandler");
			CreatifyJS.validator.validate(this.emptyName);
			expect(CreatifyJS.validator.types.notEmpty.errorHandler).toHaveBeenCalledWith('name');
		});

		it("Appends the error message to the field", function () {
			CreatifyJS.validator.validate(this.emptyName);
			expect(this.fixture.find('#name').next('span').text()).toContain(CreatifyJS.validator.types.notEmpty.instructions);
		});

	});

	describe("Calling validator.validate() for a field with no custom errorHandler()", function () {
		beforeEach(function () {
		    this.invalidPhone = {
		    	phone: 12345678901
		    };
		});
		afterEach(function () {
			this.fixture.find('span').remove();
			delete this.invalidPhone;
		});

		it("Appends the error message to the field", function () {
			CreatifyJS.validator.validate(this.invalidPhone);
			expect(this.fixture.find('#phone').next('span').text()).toContain(CreatifyJS.validator.types.maxLen10.instructions);
		});

	});

	describe("Calling validator.validate() with invalid data for each field", function () {
		beforeEach(function () {
		    this.data = {
		    	name: '',
		    	phone: 12345678901,
		    	email: 'test@test'
		    };
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

		it("Appends the error message to the field", function () {
			CreatifyJS.validator.validate(this.data);
			expect(this.fixture.find('#name').next('span').text()).toContain(CreatifyJS.validator.types.notEmpty.instructions);
			expect(this.fixture.find('#email').next('span').text()).toContain(CreatifyJS.validator.types.validEmail.instructions);
			expect(this.fixture.find('#phone').next('span').text()).toContain(CreatifyJS.validator.types.maxLen10.instructions);
		});

	});

});