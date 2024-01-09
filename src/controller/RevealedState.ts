import {ISquareState} from "./ISquareState";
import {Square} from "./Square";

export class RevealedState implements ISquareState {
    private square: Square;

    constructor(square: Square) {
        this.square = square;
    }

    click(): void {
        this.revealAdjacentSquares();
    }

    reveal(): void {
        // do nothing
    }

    // if a revealed square is clicked, the adjacent squares will be revealed as well.
    // This has the potential to reveal a mine and end game as well.
    private revealAdjacentSquares(): void {
        const row = this.square.getRow()
        const col = this.square.getCol()

        // Define relative positions of adjacent squares
        const positions = [
            { row: row - 1, col: col - 1 }, { row: row - 1, col }, { row: row - 1, col: col + 1 },
            { row, col: col - 1 },                                 { row, col: col + 1 },
            { row: row + 1, col: col - 1 }, { row: row + 1, col }, { row: row + 1, col: col + 1 },
        ];

        for (const pos of positions) {
            const adjacentSquare = this.getSquareAtPosition(pos.row, pos.col);
            if (adjacentSquare && !(adjacentSquare.getState() instanceof RevealedState)) {
                adjacentSquare.click();
                // adjacentSquare.state.reveal();
            }
        }
    }

    // helper for revealAdjacentSquares() which returns the square in a given position of the board.
    // returns null is position is not on the board
    private getSquareAtPosition(row: number, col: number):Square | null {
        const board = this.square.getGameBoard();
        const height = board.length
        const width = board[0].length
        if (row >= 0 && row < height && col >= 0 && col < width) {
            return null;
        } else {
            return board[row][col];
        }
    }
}