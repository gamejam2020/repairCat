// Global emoji map?:
// Each number is shown as a different asset, but behind the scenes is just a number.
const emojiMap = {
	1: "fish",
	2: "wetFood",
	3: "yarn"
};
/* Game Class:
    Keeps track of timer
    Keeps track of score?
    Ability to start, end game
*/

class Game {
	progress = 0; // Progress bar values, will fill based on value.
	constructor(progress) {
		this.progress = progress;
	}
	// Start game (i.e start press, or restart)
	start() {
		const roboCat = Cat();
	}
	// When game ends, stop timer, etc.
	end() {}
	// pause(){} // Stretch goal, ability to pause game with a button/'ESC'
}

/* Cat Class:
    Keeps track of combinations
    Number of successful combos
*/
class Cat {
	// We keep track of how many key strokes we are at (3 max), and also how many correct (inversely how many incorrect)
	// I.e if current: 2 and correct: 0, we know we are 2 incorrect.
	keystrokes = {
		current: 0,
		correct: 0
	};
	totalScore = 0;

	constructor(combination, keystrokes, totalScore) {
		this.combination = combination;
		this.keystrokes = keystrokes;
		this.totalScore = totalScore;
	}
	// Getter for combination
	get combination() {
		return this.combination;
	}
	// Generate a combination
	generateCombination() {
		return [1, 2, 3]; // Randomize a 3 digit combination of 1, 2, 3
	}
	calculateStreak(keystrokes) {}
	checkCombination() {
		/*
            When the User hits 3 keys/a combination, we "submit" the combination and generate a new combination
            We also add/decrease progress based on total combination (decrement if 3 wrong)
        */
	}
}

// Game loop:
const game = Game();
game.start();
