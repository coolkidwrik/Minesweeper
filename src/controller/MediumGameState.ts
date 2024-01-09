import {IGameState} from "./IGameState";
import {Square} from "./Square";
import {NumberState} from "./NumberState";
import {MineState} from "./MineState";
import {Game} from "./Game";

export class MediumGameState implements IGameState {
    rows: number = 14;
    cols: number = 18;
    numMines: number = 10;
    private game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    generateBoard(): Square[][] {
        //TODO: need to refactor this to match code for square
        const board: Square[][] = Array.from({ length: this.rows }, () =>
            Array.from({ length: this.cols }, () => new Square(new NumberState(0)))
        );

        // Place mines randomly on the board
        let minesPlaced = 0;
        while (minesPlaced < this.numMines) {
            const randomRow = Math.floor(Math.random() * this.rows);
            const randomCol = Math.floor(Math.random() * this.cols);

            if (!(board[randomRow][randomCol].getState() instanceof MineState)) {
                board[randomRow][randomCol].changeState(new MineState());
                minesPlaced++;
            }
        }

        return board;
    }

}