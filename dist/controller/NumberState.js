"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberState = void 0;
const RevealedState_1 = require("./RevealedState");
class NumberState {
    number;
    square;
    constructor(square, numMines) {
        // this.number = this.generateNum(1, 8);
        this.number = numMines;
        this.square = square;
    }
    reveal() {
        this.square.changeState(new RevealedState_1.RevealedState(this.square));
        this.updateUI();
    }
    click() {
        this.reveal();
    }
    // generates a new random number between max and min
    generateNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    updateUI() {
        // TODO: Implement logic to update the user interface
    }
}
exports.NumberState = NumberState;
