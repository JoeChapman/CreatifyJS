var CreatifyJS = CreatifyJS || {};

CreatifyJS.namespace = function(ns_str, container) {
	var parts = ns_str.split('.'),
		i, len = parts.length,
		ns = this;
	
	if (container && container === parts[0]) {
		parts.shift();
	}
	
	for (i = 0; i < len; i++) {
		ns = ns[parts[i]] = ns[parts[i]] || {};
	}
	return ns;
};