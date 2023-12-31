import {IGameState} from "./IGameState";
import {Square} from "./Square";

class MediumGameState implements IGameState {
    rows: number = 14;
    cols: number = 18;
    numMines: number = 10;
    generateBoard(): Square[][] {
        // TODO
        return [];
    }

}