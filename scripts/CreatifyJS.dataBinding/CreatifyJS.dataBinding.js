var CreatifyJS = CreatifyJS || {};

CreatifyJS.dataBinding = {
	
	events: {},

	on: function(key, val) {
		if (!this.events[event]) {
			this.events[event] = [];
		}
		this.events[key] = {val: val, fn: this.change};
		console.log(this.events)
	},

	add: function(data) {
		var key, val;

		if (typeof data === 'undefined') {
			throw {
				name: 'TypeError',
				message: "Invalid request: data must be an object with properties"
			};
		}

		for (key in data) {
			this.on(key, data[key]);
		}
	},

	change: function () {
		console.log('CHANGED');
	}
};