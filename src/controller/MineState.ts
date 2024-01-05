import {ISquareState} from "./ISquareState";

export class MineState implements ISquareState {
    reveal(): string {
        return 'Mine!';
    }
}