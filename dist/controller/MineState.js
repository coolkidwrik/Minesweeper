"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineState = void 0;
const RevealedState_1 = require("./RevealedState");
class MineState {
    square;
    constructor(square) {
        this.square = square;
    }
    reveal() {
        this.square.changeState(new RevealedState_1.RevealedState(this.square));
        this.updateUI();
    }
    click() {
        this.revealAllMines();
    }
    revealAllMines() {
        const board = this.square.getGameBoard();
        for (const row of board) {
            for (const square of row) {
                if (square.getState() instanceof MineState) {
                    square.getState().reveal();
                }
            }
        }
    }
    updateUI() {
        // TODO: Implement logic to update the user interface
    }
}
exports.MineState = MineState;
