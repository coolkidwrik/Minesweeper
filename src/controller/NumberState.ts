import {ISquareState} from "./ISquareState";
import {Square} from "./Square";
import {RevealedState} from "./RevealedState";

export class NumberState implements ISquareState {
    private number: number;
    private readonly square: Square

    constructor(square: Square, numMines: number) {
        // this.number = this.generateNum(1, 8);
        this.number = numMines;
        this.square = square;
    }

    reveal(): void {
        this.square.changeState(new RevealedState(this.square));
        this.updateUI();
    }

    click(): void {
        this.reveal();
    }

    // generates a new random number between max and min
    private generateNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private updateUI(): void {
        // TODO: Implement logic to update the user interface
    }
}