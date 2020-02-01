// Global emoji map?:
// Each number is shown as a different asset, but behind the scenes is just a number.
const emojiMap = {
	1: "",
	2: "",
	3: ""
};
/* Game Class:
    Keeps track of timer
    Keeps track of score?
    Ability to start, end game
*/

class Game {
	timer = 60; // Default, 60 seconds?
	constructor(timer) {
		this.timer = timer;
	}
	// Start game (i.e start press, or restart)
	start() {}
	// When game ends, stop timer, etc.
	end() {}
	// pause(){} // Stretch goal, ability to pause game with a button/'ESC'
}
/* Cat Class:
    Keeps track of combinations
    Number of successful combos
*/

class Cat {
	totalScore = 0;
	constructor(combination, totalScore) {
		this.totalScore = totalScore;
		this.combination = combination;
	}
	// Getter for combination
	get combination() {
		return this.combination;
	}
	// Generate a combination
	generateCombination() {
		return [1, 2, 3, 4, 5]; // Randomize a 5 unique array, placeholder
	}
}

// Game loop:
const game = Game();
game.start();
