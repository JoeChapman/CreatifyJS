describe("Custom events", function () {
	beforeEach(function () {
		observer = CreatifyJS.customEvents;
	});
	afterEach(function () {
		observer.events = {};
	})
	describe("Adding an event and a callback function", function () {
		var	callBack = function () {};
		it("Should add the callback function to the new event", function () {
			observer.on('newEvent', callBack);
			expect(observer.events['newEvent']).toBeDefined();
			expect(typeof observer.events['newEvent'][0].fn).toBe('function');
		});
	});
	describe("Adding multiple callback to the same event", function () {
		it("Should add each callback to the event", function () {
			observer.on('newEvent', function callback1 () {});
			observer.on('newEvent', function callback2 () {});
			observer.on('newEvent', function callback3 () {});
			expect(observer.events['newEvent']).toBeDefined();
			expect(typeof observer.events['newEvent'][0].fn).toBe('function');
			expect(typeof observer.events['newEvent'][1].fn).toBe('function');
			expect(typeof observer.events['newEvent'][2].fn).toBe('function');
		});
	});
	describe("Adding an event without a callback function", function () {
		it("Should not add the new event", function () {
			observer.on('newEvent');
			expect(observer.events['newEvent']).not.toBeDefined();
		});
	});
	describe("Removing an event", function () {
		it("Removes the entire event and associated callbacks", function () {
			observer.on('newEvent');
			observer.off('newEvent');
			expect(observer.events['newEvent']).not.toBeDefined();
		});
	});
	describe("Removing a callback when multiple callbacks are registered", function () {
		var callBack1 = function () {},
			callBack2 = function () {},
			callBack3 = function () {},
			callBack4 = function () {};
		it("Removes the callback function but not the event", function () {
			observer.on('newEvent', callBack1);
			observer.on('newEvent', callBack2);
			observer.on('newEvent', callBack3);
			observer.on('newEvent', callBack4);
			observer.off('newEvent', callBack2);
			expect(observer.events['newEvent'][1].fn).not.toBeDefined();
			expect(observer.events['newEvent']).toBeDefined();
		});
	});
	describe("Firing the event", function () {
		var data = {name: 'Joe'},
			expectedData;
		beforeEach(function () {
			callBack = function (data) { expectedData = data; };
			observer.on('newEvent', callBack);
		});
		afterEach(function () {
			callBack = null;
			observer.off('newEvent', callBack);
		});
		describe("With data", function () {
			it("Does not throw an error", function () {
				expect(function () {
					observer.fire('newEvent', data);
				}).not.toThrow();
			});
			it("Passes the data to the callback", function () {
				observer.fire('newEvent', data);
				expect(data).toEqual(expectedData);
				expect(expectedData.name).toBe('Joe');
			});
		});
		describe("Without data", function () {
			it("Does not throw an error", function () {
				expect(function () {
					observer.fire('newEvent');
				}).not.toThrow();
			});
		});
	});
	describe("Firing an event without a callback", function () {
		var callBack = null;
		it("Throws an error", function () {
			observer.on('newEvent', callBack);
			expect(function () {
				observer.fire('newEvent');
			}).toThrow({
				name: "CallbackError",
				message: "Cannot call null callback"
			});
		});
	});
	describe("Telling the execution to pause", function () {
		var functions = {},
			cB1Fired = false, cB2Fired = false, cB3Fired = false, cB4Fired = false,
			callBack1 = function () { cB1Fired = true; },
			callBack2 = function () { cB2Fired = true; return 'PAUSE'; },
			callBack3 = function () { cB3Fired = true; },
			callBack4 = function () { cB4Fired = true; };
		it("Pauses all subsequent callbacks from firing", function () {
			observer.on('newEvent', callBack1);
			observer.on('newEvent', callBack2);
			observer.on('newEvent', callBack3);
			observer.on('newEvent', callBack4);
			observer.fire('newEvent');
			expect(cB1Fired).toBe(true);
			expect(cB2Fired).toBe(true);
			expect(cB3Fired).toBe(false);
			expect(cB4Fired).toBe(false);
		});
	});
});