var CreatifyJS = CreatifyJS || {};

CreatifyJS.Game = function () {
	var game, 
		gameLoop,
		canvas = document.getElementById('world');
		
	this.fps = 60;
	this.player = new CreatifyJS.Player(this);
	this.context = canvas.getContext('2d');

	this.canvas_width = canvas.width;
	this.canvas_height = canvas.height;

	game = this,
	gameLoop = window.setInterval (
		function () {
			game.updateAll();
			game.drawAll();
		}, 0); 

	$(document).bind('keydown', function (e) {
	    var keyCode = e.keyCode;
	    game.delegateKeyActions(e);
	}); 
};

CreatifyJS.Game.prototype.updateAll = function () {
	this.player.update(-1, -1);
};

CreatifyJS.Game.prototype.drawAll = function () {
	this.drawRectangle('#fff', 0, 0, this.canvas_width, this.canvas_height);
	this.player.draw();
};

CreatifyJS.Game.prototype.drawRectangle = function (color, x, y, w, h) {
	this.context.fillStyle = color;
	this.context.fillRect(x, y, w, h);
};

CreatifyJS.Game.prototype.delegateKeyActions = function (e) {
	var key, pos;

	e.preventDefault();
	if (e.keyCode || e.which) {

		key = e.keyCode || e.which;
		pos = {x: 0, y: 0};

		switch (key) {
			case 37: pos.x = -1; pos.y = 0;
			break;
			case 38: pos.x = 0; pos.y = +1;
			break;
			case 39: pos.x = +1; pos.y = 0;
			break;
			case 40: pos.x = 0; pos.y = +1;
			break;
		}
		this.player.move(pos);
	}
};