var CreatifyJS = CreatifyJS || {};

CreatifyJS.Sorter = function (unsorted, key) {

	var by = function (name, minor) {
		if (typeof name === 'undefined' && typeof minor === 'undefined') {
			return function (a, b) {
				if (a === b) {
					return 0;
				}
				if (typeof a === typeof b) {
					return a < b ? -1 : 1;
				}
				return typeof a < typeof b ? -1 : 1;
			}
		} else {
			return function (o, p) {
				if (o && p && typeof o === 'object' && typeof p === 'object') {
					a = o[name];
					b = p[name];
					if (a === b) {
						return typeof minor === 'function' ? minor(o, p) : 0;
					}
					if (typeof a === typeof b) {
						return a < b ? -1 : 1;
					}
					return typeof a < typeof b ? -1 : 1;
				} else {
					throw {
						name: 'Error',
						message: 'Expected an object when sorting by ' + name
					};
				}
			}	
		} 
		
	};

	return unsorted.sort(by(key));

};