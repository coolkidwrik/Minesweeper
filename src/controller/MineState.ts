import {IState} from "./IState";

class MineState implements IState {
    reveal(): string {
        return 'Mine!';
    }
}