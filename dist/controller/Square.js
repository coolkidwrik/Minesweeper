"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    row;
    col;
    state = null;
    gameBoard;
    constructor(row, col, board) {
        this.row = row;
        this.col = col;
        this.gameBoard = board;
    }
    getGameBoard() {
        return this.gameBoard;
    }
    setGameBoard(value) {
        this.gameBoard = value;
    }
    getState() {
        return this.state;
    }
    // Method to change the state of the square
    changeState(newState) {
        this.state = newState;
    }
    getRow() {
        return this.row;
    }
    getCol() {
        return this.col;
    }
    click() {
        if (this.state) {
            this.state.click();
        }
    }
}
exports.Square = Square;
