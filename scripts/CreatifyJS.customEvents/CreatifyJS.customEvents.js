var Sky = Sky || {};

Sky.customEvents = {
	
	listeners: {},

	on: function(event, fn) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}
		this.listeners[event].push(fn);
	},
	
	off: function(event, fn) {
		if (!this.listeners[event]) {
			return;
		}
		
		for(var i in this.listeners[event]) {
			this.listeners[event].splice(i, 1);
		}
	},
	
	fire: function(event, data) {
		if (!this.listeners[event]) {
			return;
		}
		for(var i in this.listeners[event]) {
			this.listeners[event][i].call(this, data);
		}
	}
};