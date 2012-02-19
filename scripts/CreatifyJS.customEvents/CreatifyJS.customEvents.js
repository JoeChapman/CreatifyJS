var CreatifyJS = CreatifyJS || {};

CreatifyJS.customEvents = {
	
	events: {},

	/**
	* @method on
	* @param event 		{String}
	* @param fn 		{Function}
	* Adds an event property and callback function
	* to an array on the events hash
	*
	*/
	on: function(event, fn) {
		if (typeof fn === 'undefined') {
			return;
		}
		if (!this.events[event]) {
			this.events[event] = [];
		}
		this.events[event].push(fn);
	},

	/**
	* @method off
	* @param event  	{String}
	* @param fn  		{Function}
	* Removes one or more callback functions
	* or the event from the events hash
	*
	*/
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
	
	/**
	* @method fire
	* @param event  	{String}
	* @param data		{Object|Array|String|Number}
	* Executes all callback functions bound to the given event
	* passes data to the callback
	*
	*/
	fire: function(event, data) {
		if (!this.events[event]) {
			return;
		}
		var i, ev = this.events[event];
		for (i = 0, len = ev.length; i < len; i++) {
			this.events[event][i].call(this, data);
		}
	}
};