"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyGameState = void 0;
const Square_1 = require("./Square");
const NumberState_1 = require("./NumberState");
const MineState_1 = require("./MineState");
class EasyGameState {
    rows = 8;
    cols = 10;
    numMines = 10;
    game;
    constructor(game) {
        this.game = game;
    }
    generateBoard() {
        const board = [];
        // Initialize the board with unrevealed squares
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.cols; j++) {
                const square = new Square_1.Square(i, j, board);
                row.push(square);
            }
            board.push(row);
        }
        // Place mines randomly on the board
        this.placeMines(board);
        // Set numbers in squares indicating the count of adjacent mines
        this.setNumbers(board);
        return board;
    }
    placeMines(board) {
        let minesToPlace = this.numMines;
        while (minesToPlace > 0) {
            const row = Math.floor(Math.random() * this.rows);
            const col = Math.floor(Math.random() * this.cols);
            if (!board[row][col].getState()) {
                board[row][col].changeState(new MineState_1.MineState(board[row][col]));
                minesToPlace--;
            }
        }
    }
    setNumbers(board) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const currentSquare = board[i][j];
                if (!currentSquare.getState() || !(currentSquare.getState() instanceof MineState_1.MineState)) {
                    let count = 0;
                    // Check adjacent squares
                    for (let x = i - 1; x <= i + 1; x++) {
                        for (let y = j - 1; y <= j + 1; y++) {
                            if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
                                if (board[x][y].getState() instanceof MineState_1.MineState) {
                                    count++;
                                }
                            }
                        }
                    }
                    // Set the number in the square
                    currentSquare.changeState(new NumberState_1.NumberState(currentSquare, count));
                }
            }
        }
    }
}
exports.EasyGameState = EasyGameState;
