import {IState} from "./IState";

class Square {
    private state: IState;

    constructor(initialState: IState) {
        this.state = initialState;
    }

    // Method to reveal the square, delegates to the current state
    reveal(): string {
        return this.state.reveal();
    }

    // Method to change the state of the square
    changeState(newState: IState): void {
        this.state = newState;
    }
}