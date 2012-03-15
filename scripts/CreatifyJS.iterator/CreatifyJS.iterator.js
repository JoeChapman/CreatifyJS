var CreatifyJS = CreatifyJS || {};

CreatifyJS.iterator = function (data) {

	var index = 0;

	var count = function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        size++;
	    }
	    return size;
	};

	var getItem = function(obj, i) {
	    var key, arr = [];
	    for (key in obj) {
	        arr.push(obj[key]);
	    }
	    return arr[i];
	};

	var length = data.length ? data.length : count(data);

	return {
		next: function () {
			if (!this.hasNext()) {
                return null;
            }
			index += 1;
			if (data[index] !== undefined) {
                return data[index];
            }
            return getItem(data, index);
		},
		hasNext : function() {
            return index < length-1;
        }, 
	};

};