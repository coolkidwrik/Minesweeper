import {ISquareState} from "./ISquareState";

export class MineState implements ISquareState {
    reveal(): string {
        return 'Mine!';
    }

    click(): void {
        //TODO
        this.revealAllMines();
    }

    private revealAllMines(): void {
        // const gameBoard: Square[][] = /* get the game board */;
        //
        // for (const row of gameBoard) {
        //     for (const square of row) {
        //         if (square.getState() instanceof MineState) {
        //             square.changeState(new MineState()); // You might have a state to indicate the mine has been revealed
        //         }
        //     }
        // }
    }
}