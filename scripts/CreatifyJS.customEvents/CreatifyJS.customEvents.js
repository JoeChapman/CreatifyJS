var CreatifyJS = CreatifyJS || {};

CreatifyJS.customEvents = {
	
	events: {},

	/**
	* @method on
	* @param event 		{String}
	* @param fn 		{Function}
	* @param [context]    {Object}
	* Adds an event property and callback function
	* to an array on the events hash
	*
	*/
	on: function(event, fn, context) {
		if (typeof fn === 'undefined') {
			return;
		}
		if (!this.events[event]) {
			this.events[event] = [];
		}
		this.events[event].push({fn: fn, context: context});
	},

	/**
	* @method off
	* @param event  	{String}
	* @param fn  		{Function}
	* Removes one or more callback functions
	* or the event from the events object
	*
	*/
	off: function(event, fn) {
		if (!this.events[event]) {
			return;
		}
		var i, ev = this.events[event];
		for (i = 0, len = ev.length; i < len; i++) {
			if (typeof fn === 'function') {
				if (ev[i].fn === fn) {
					ev[i].fn = null;
					delete ev[i].fn;
				}
			} else {
			 	ev.splice(i, 1);
			}
		} 
	},
	
	/**
	* @method fire
	* @param event  	{String}
	* @param [data]		{Object|Array|String|Number}
	* @param [context]	{Object}
	* Executes all callback functions bound to the given event
	* Callback bound to the optional context parameter, event context or this object
	* Passes optional data to the callback
	*
	*/
	fire: function(event, data, context) {
		if (!this.events[event]) {
			return;
		}
		var i, ev = this.events[event];
		for (i = 0, len = ev.length; i < len; i++) {
			try {
				if ('PAUSE' === ev[i].fn.call((context || ev[i].context || this), data)) {
					break;
				}
			} catch (e) {
				throw {
					name: "CallbackError",
					message: "Cannot call null callback"
				}
			}
			
		}
	}
};