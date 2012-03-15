var CreatifyJS = CreatifyJS || {};

// Helper for mixin objects.
CreatifyJS.extend = function (a, b) {
	for (var i in a) {
		if (a.hasOwnProperty(i)) {
			if (typeof a[i] === 'object') {
				CreatifyJS.extend(a[i], b[i]);
			} else {
				if (typeof b[i] === 'undefined') {
					b[i] = a[i];
				}
			}
		}
	}
	return b;
};
