import {ISquareState} from "./ISquareState";

export class Square {
    private state: ISquareState;

    constructor(initialState: ISquareState) {
        this.state = initialState;
    }

    // Method to reveal the square, delegates to the current state
    reveal(): string {
        return this.state.reveal();
    }

    getState(): ISquareState {
        return this.state
    }

    click(): void {
        this.state.click();
    }

    // Method to change the state of the square
    changeState(newState: ISquareState): void {
        this.state = newState;
    }
}