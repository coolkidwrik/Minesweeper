import {Square} from "./Square";

export interface IGameState {
    generateBoard(): Square[][]
}