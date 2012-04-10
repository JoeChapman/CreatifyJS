describe("Player", function() {

	var game = new CreatifyJS.Game();

	describe("Creating a new Player", function () {
		it("Does not throw an error", function () {
			expect(function () {
				new CreatifyJS.Player(game);
			}).not.toThrow();
		});
	});
	describe("Telling player to draw", function () {
		var player = new CreatifyJS.Player(game);
		it("Draws a red, square player", function () {
			var spy = spyOn(game, "drawRectangle");	
			player.draw();
			expect(spy).toHaveBeenCalledWith('#f00', 100, 100, 10, 10);
			expect(spy.mostRecentCall.args[0]).toBe('#f00');
		});
	});
	
});