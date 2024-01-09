import {IGameState} from "./IGameState";
import {Square} from "./Square";
import {MineState} from "./MineState";
import {NumberState} from "./NumberState";
import {Game} from "./Game";
import {RevealedState} from "./RevealedState";

export class HardGameState implements IGameState {
    private readonly rows: number = 20;
    private readonly cols: number = 24;
    private readonly numMines: number = 99;
    private readonly game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    generateBoard(): Square[][] {
        const board: Square[][] = [];

        // Initialize the board with unrevealed squares
        for (let i = 0; i < this.rows; i++) {
            const row: Square[] = [];
            for (let j = 0; j < this.cols; j++) {
                const square = new Square(i, j, board);
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

    private placeMines(board: Square[][]): void {
        let minesToPlace = this.numMines;
        while (minesToPlace > 0) {
            const row = Math.floor(Math.random() * this.rows);
            const col = Math.floor(Math.random() * this.cols);

            if (!board[row][col].getState()) {
                board[row][col].changeState(new MineState(board[row][col]));
                minesToPlace--;
            }
        }
    }

    private setNumbers(board: Square[][]): void {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const currentSquare = board[i][j];

                if (!currentSquare.getState() || !(currentSquare.getState() instanceof MineState)) {
                    let count = 0;

                    // Check adjacent squares
                    for (let x = i - 1; x <= i + 1; x++) {
                        for (let y = j - 1; y <= j + 1; y++) {
                            if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
                                if (board[x][y].getState() instanceof MineState) {
                                    count++;
                                }
                            }
                        }
                    }

                    // Set the number in the square
                    currentSquare.changeState(new NumberState(currentSquare, count));
                }
            }
        }
    }
}