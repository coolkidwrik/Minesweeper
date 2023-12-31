import {ISquareState} from "./ISquareState";

export class Square {
    // TODO: Need to implement this class first!!
    private state: ISquareState;

    constructor(initialState: ISquareState) {
        this.state = initialState;
    }

    // Method to reveal the square, delegates to the current state
    reveal(): string {
        return this.state.reveal();
    }

    // Method to change the state of the square
    changeState(newState: ISquareState): void {
        this.state = newState;
    }
}