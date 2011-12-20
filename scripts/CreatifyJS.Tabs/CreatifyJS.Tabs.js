var CreatifyJS = CreatifyJS || {};

CreatifyJS.Tabs = function(container) {
	this.sections = container.find('.section');
	$('.first').before(this.makeTabs());
	this.makeCurrent(0);
	container.delegate('li', 'click', $.proxy(this.showTab, this));
};

CreatifyJS.Tabs.prototype.makeCurrent = function(pos) {
	var className = 'current';
	this.sections.eq(pos).addClass(className);
	this.tabs.eq(pos).addClass(className);
};

CreatifyJS.Tabs.prototype.makeTabs = function() {
	var sections = this.sections,
		headings = sections.find('h2'),
		i = 0,
		len = sections.length,
		doc = document,
		list = $('<ul></ul>'),
		item;
	
	while(i < len) {
		text = headings[i].innerHTML;
		item = $('<li></li>');
		item.text(text);
		list.append(item);
		i++;
	}
	list[0].className = 'tabs';
	this.tabs = list.find('li');
	return list;
};

CreatifyJS.Tabs.prototype.showTab = function(e) {
	var target = $(e.target);
	if (target.hasClass('current')) {
		return;
	}
	this.hideCurrent();
	this.makeCurrent(this.getPosition(target));
};

CreatifyJS.Tabs.prototype.getPosition = function(item) {
	var tabs = this.tabs,
		len = tabs.length;
	while(len--) {
		if (tabs[len] == item[0]) {
			return len;	
		}	
	}
};

CreatifyJS.Tabs.prototype.hideCurrent = function() {
	var className = 'current';
	this.sections.removeClass(className);
	this.tabs.removeClass(className);
};

