describe("Game", function() {
	describe("Creating a new game", function () {
		it("Updates all", function () {
			var spy = spyOn(CreatifyJS.Game.prototype, "updateAll");
			var game = new CreatifyJS.Game();
			setTimeout(function () {
				expect(spy).toHaveBeenCalled();
				game = null;
			}, 0);
		});
		it("Draws all", function () {
			var spy = spyOn(CreatifyJS.Game.prototype, "drawAll");
			var game = new CreatifyJS.Game();
			setTimeout(function () {
				expect(spy).toHaveBeenCalled();
				game = null;	
			}, 0);
		});
	});
	describe("Updating all", function () {
		var spy = spyOn(CreatifyJS.Player.prototype, "update");
		var game = new CreatifyJS.Game();
		game.updateAll();
		it("Updates the player", function () {
			expect(spy).toHaveBeenCalled();
		});
	});
	describe("Drawing all", function () {
		var spyDraw = spyOn(CreatifyJS.Player.prototype, "draw");
		var spyDrawRect = spyOn(CreatifyJS.Game.prototype, "drawRectangle");
		var game = new CreatifyJS.Game();
		game.drawAll();
		it("Draws a white rectangle", function () {
			expect(spyDrawRect).toHaveBeenCalled();
			expect(spyDrawRect.mostRecentCall.args[0]).toBe('#fff');
		});
		it("Draws the player", function () {
			expect(spyDraw).toHaveBeenCalled();
		});
	});
	describe("Tapping the keys", function () {
		var game = new CreatifyJS.Game();
		var spy = spyOn(game.player, "move");
		var event = $.Event('keydown');
		describe("To move the player left", function () {
			event.keyCode = 37;
			$(document).trigger(event);
			it("Moves the player left", function () {	
				expect(spy).toHaveBeenCalled();
			});
		});
		describe("To move the player up", function () {
			event.keyCode = 38;
			$(document).trigger(event);
			it("Moves the player up", function () {	
				expect(spy).toHaveBeenCalled();
			});
		});
		describe("To move the player right", function () {
			event.keyCode = 39;
			$(document).trigger(event);
			it("Moves the player right", function () {	
				expect(spy).toHaveBeenCalled();
			});
		});
		describe("To move the player down", function () {
			event.keyCode = 40;
			$(document).trigger(event);
			it("Moves the player down", function () {	
				expect(spy).toHaveBeenCalled();
			});
		});
		
	});
	
});