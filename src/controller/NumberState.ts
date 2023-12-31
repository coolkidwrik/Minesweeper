import {IState} from "./IState";

class NumberState implements IState {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    reveal(): string {
        return this.number.toString();
    }
}