describe("Custom events", function () {

	describe("Calling on() with an event and a callback function", function () {
		var observer = CreatifyJS.customEvents;
		
		beforeEach(function () {
			observer.on('newEvent', function callback () {});	
		});

		afterEach(function () {
			observer.events = {};	
		});
		
		it("Should add the callback function to the new event", function () {
			expect(observer.events['newEvent']).toBeDefined();
			expect(typeof observer.events['newEvent'][0]).toBe('function');
			expect(observer.events['newEvent'][0].name).toBe('callback');
		});

	});

	describe("Calling on() with the same event and multiple callback functions", function () {
		var observer = CreatifyJS.customEvents;
		
		beforeEach(function () {
			observer.on('newEvent', function callback1 () {});
			observer.on('newEvent', function callback2() {});
			observer.on('newEvent', function callback3 () {});	
		});

		afterEach(function () {
			observer.events = {};	
		});
		
		it("Should add each callback function to the event", function () {
			expect(observer.events['newEvent'][0].name).toBe('callback1');
			expect(observer.events['newEvent'][1].name).toBe('callback2');
			expect(observer.events['newEvent'][2].name).toBe('callback3');
		});
	});

	describe("Calling on() without a callback function", function () {
		var observer = CreatifyJS.customEvents;
		
		beforeEach(function () {
			observer.on('newEvent');	
		});
		
		afterEach(function () {
			observer.events = {};	
		});

		it("Should not add the new event", function () {
			expect(observer.events['newEvent']).not.toBeDefined();
		});

	});

	describe("Calling off() with an event", function () {
		var observer = CreatifyJS.customEvents;
		var callBack1 = function () {};

		beforeEach(function () {
			// Add multiple callbacks to the event
			observer.events = {
				newEvent: [callBack1]
			};
			observer.off('newEvent');
		});

		afterEach(function () {
			observer.events = {};	
		});
		
		it("Should remove the event and its callback function", function () {
			expect(observer.events['newEvent'][0]).not.toBeDefined();
			expect(observer.events['newEvent'].length).toBe(0);
		});
	});

	describe("Calling off() with an event and a callback", function () {
	 	var observer = CreatifyJS.customEvents;

		describe("When only one callback is registered to the event", function () {
			var callBack1 = function () {};

			beforeEach(function () {
				// Add multiple callbacks to the event
				observer.events = {
					newEvent: [callBack1]
				};
				observer.off('newEvent', callBack1);
			});

			afterEach(function () {
				observer.events = {};
			});

			it("Should removes the callback function", function () {
				expect(observer.events['newEvent'][0]).not.toBeDefined();
			});

		});

		describe("When multiple callbacks are registered", function () {
			var callBack1 = function () {};
			var callBack2 = function () {};
			var callBack3 = function () {};
			var callBack4 = function () {};

			beforeEach(function () {
				// Add multiple callbacks to the event
				observer.events = {
					newEvent: [callBack1, callBack2, callBack3, callBack4]
				};
				// Remove one callback
				observer.off('newEvent', callBack4);
			});

			afterEach(function () {
				observer.events = {};	
			});

			it("Should remove the callback function from the event", function () {
				expect(observer.events['newEvent'][0]).toBe(callBack1);
				expect(observer.events['newEvent'][1]).toBe(callBack2);
				expect(observer.events['newEvent'][2]).toBe(callBack3);
				expect(observer.events['newEvent'][3]).not.toBeDefined();
			});

		});
				
		
	});

	describe("Calling fire() with an event and data", function () {
		var observer = CreatifyJS.customEvents;
		var data = {name: 'Joe'};
		var flag = false;
		var callBack = function (data) {
			flag = true;
		};
		
		beforeEach(function () {
			observer.events = {
				newEvent: [callBack]
			};
			observer.fire('newEvent', data);
		});

		afterEach(function () {
			observer.events = {};	
		});

		it("Calls callBack() with data", function () {
			expect(flag).toBe(true);
		});

	});


});