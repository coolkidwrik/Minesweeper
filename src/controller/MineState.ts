import {ISquareState} from "./ISquareState";

class MineState implements ISquareState {
    reveal(): string {
        return 'Mine!';
    }
}