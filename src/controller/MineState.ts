import {ISquareState} from "./ISquareState";
import {Square} from "./Square";
import {RevealedState} from "./RevealedState";

export class MineState implements ISquareState {
    private readonly square: Square;

    constructor(square: Square) {
        this.square = square;
    }

    reveal(): void {
        this.square.changeState(new RevealedState(this.square));
        this.updateUI();
    }

    click(): void {
        this.revealAllMines();
    }

    private revealAllMines(): void {
        const board = this.square.getGameBoard();

        for (const row of board) {
            for (const square of row) {
                if (square.getState() instanceof MineState) {
                    square.getState().reveal();
                }
            }
        }
    }

    private updateUI(): void {
        // TODO: Implement logic to update the user interface
    }
}