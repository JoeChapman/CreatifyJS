var CreatifyJS = CreatifyJS || {};

CreatifyJS.Player = function (game) {
	this.game = game;
	this.x = 100;
	this.y = 100;
};

CreatifyJS.Player.prototype.update = function (x, y) {
	this.x = this.x + x;
	this.y = this.y + y;
};

CreatifyJS.Player.prototype.draw = function () {
	this.game.drawRectangle('#f00', this.x, this.y, 10 , 10);
};

CreatifyJS.Player.prototype.move = function (axes) {
	this.x = this.x + axes.x;
	this.y = this.y + axes.y;
};
