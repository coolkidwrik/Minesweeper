import {IGameState} from "./IGameState";
import {Square} from "./Square";

class EasyGameState implements IGameState {

    rows: number = 8;
    cols: number = 10;
    numMines: number = 10;
    generateBoard(): Square[][] {
        // TODO
        return [];
    }

}