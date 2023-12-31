import {Square} from "./Square";

export interface IGameState {
    rows: number;
    cols: number;
    numMines: number;
    generateBoard(): Square[][]
}