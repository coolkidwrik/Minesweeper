import {ISquareState} from "./ISquareState";

export class Square {
    private readonly row: number;
    private readonly col: number;
    private state: ISquareState;
    private gameBoard: Square[][];

    constructor(row:number, col: number, initialState: ISquareState, board: Square[][]) {
        this.row = row;
        this.col = col;
        this.state = initialState;
        this.gameBoard = board;
    }

    getGameBoard(): Square[][] {
        return this.gameBoard;
    }

    setGameBoard(value: Square[][]) {
        this.gameBoard = value;
    }

    getState(): ISquareState {
        return this.state;
    }

    // Method to change the state of the square
    changeState(newState: ISquareState): void {
        this.state = newState;
    }

    getRow(): number {
        return this.row;
    }

    getCol(): number {
        return this.col;
    }


    click(): void {
        this.state.click();
    }
}