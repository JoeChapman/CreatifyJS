var CreatifyJS = CreatifyJS || {};

CreatifyJS.customEvents = {
	
	events: {},

	on: function(event, fn) {
		if (typeof fn === 'undefined') {
			return;
		}
		if (!this.events[event]) {
			this.events[event] = [];
		}
		this.events[event].push(fn);
	},
	
	off: function(event, fn) {
		if (!this.events[event]) {
			return;
		}
		var i, ev = this.events[event];

		for (i = 0, len = ev.length; i < len; i++) {
			if (typeof fn === 'function') {
				if (ev[i] === fn) {
					delete ev[i];
				}	
			} else {
			 	ev.splice(i, 1);	
			}
		} 
	},
	
	fire: function(event, data) {
		if (!this.events[event]) {
			return;
		}
		for (var i in this.events[event]) {
			this.events[event][i].call(this, data);
		}
	}
};