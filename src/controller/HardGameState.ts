import {IGameState} from "./IGameState";
import {Square} from "./Square";

class HardGameState implements IGameState {

    rows: number = 20;
    cols: number = 24;
    numMines: number = 99;

    generateBoard(): Square[][] {
        // TODO
        // // Initialize the board with empty cells
        // const board: Square[][] = Array.from({ length: this.rows }, () =>
        //     Array.from({ length: this.cols }, () =>
        //         ({ isMine: false, isRevealed: false }))
        // );
        //
        // // Place mines randomly on the board
        // let minesPlaced = 0;
        // while (minesPlaced < this.numMines) {
        //     const randomRow = Math.floor(Math.random() * this.rows);
        //     const randomCol = Math.floor(Math.random() * this.cols);
        //
        //     if (!board[randomRow][randomCol].isMine) {
        //         board[randomRow][randomCol].isMine = true;
        //         minesPlaced++;
        //     }
        // }
        //
        // return board;
        return [];
    }


}