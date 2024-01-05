import {ISquareState} from "./ISquareState";

export class NumberState implements ISquareState {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    reveal(): string {
        return this.number.toString();
    }
}