var CreatifyJS = CreatifyJS || {};

CreatifyJS.iterator = function (data) {

	var index = 0,

		size = function(obj) {
		    var size = 0, key;
		    for (key in obj) {
		        size++;
		    }
		    return size;
		},

		getItem = function(obj, i) {
		    var key, arr = [];
		    for (key in obj) {
		        arr.push(obj[key]);
		    }
		    return arr[i];
		},

		DATATYPE = (function () {
			return Object.prototype.toString.call(data).match(/\w+/g)[1].toLowerCase();
		}()),

		length = data.length ? data.length : size(data);

	return {

		next: function () {
			if (!this.hasNext()) {
                return null;
            }
			index += 1;
            return data[index] || getItem(data, index);
		},

		hasNext : function() {
            return index < length-1;
        }, 

        current: function () {
        	return data[index] || getItem(data, index);
        },

        getType: function () {
        	return DATATYPE;
        },

        last: function () {
        	var end = length - 1;
        	return data[end] || getItem(data, end);
        },

        find: function (pos) {
        	var position = pos -1;
        	return data[position] || getItem(data, position);
        },

        reset: function () {
        	index = 0;
        	return this.current();
        }
	};

};