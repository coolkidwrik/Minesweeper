import {ISubject} from "./ISubject";
import {IObserver} from "./IObserver";
import {Square} from "./Square";
import {IGameState} from "./IGameState";
import {EasyGameState} from "./EasyGameState";
import {MediumGameState} from "./MediumGameState";
import {HardGameState} from "./HardGameState";

export class Game implements ISubject {
    private state: IGameState;
    private observers: IObserver[] = [];
    private board: Square[][];

    constructor(newState: string) {
        this.state = this.setState(newState);
        this.board = this.generateBoard();
    }

    addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    removeObserver(observer: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }

    getState(): any {
        return this.state;
    }

    getBoard(): Square[][] {
        return this.board;
    }

    setBoard(value: Square[][]) {
        this.board = value;
    }

    clickSquare(row: number, col: number): void {
        const clickedSquare = this.board[row][col];
        clickedSquare.click();
    }

    private generateBoard(): Square[][] {
        return this.state.generateBoard();
    }

    // Set the state
    private setState(newState: string): IGameState {
        let state;
        if(newState === "Easy") {
            state = new EasyGameState(this);
        } else if(newState === "Medium") {
            state = new MediumGameState(this);
        } else {
            state = new HardGameState(this);
        }
        return state;
    }
}
