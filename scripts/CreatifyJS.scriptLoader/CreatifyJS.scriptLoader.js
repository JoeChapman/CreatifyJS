var CreatifyJS = CreatifyJS || {};

CreatifyJS.scriptLoader = function(filename, callback) {
	var doc = document,
		script = doc.createElement('script');
	script.type = 'text/javascript';
	if (script.readyState) {
		script.onreadystatechange = function() {
			if (readyState === 'loaded' || script.readyState === 'complete') {
				script.onreadystatechange = null;
				callback();
			}	
		};
	} else {
		script.onload = function() {
			callback(filename);
		};		
	}	
	script.src = filename;
	doc.getElementsByTagName('body')[0].appendChild(script);
	
};