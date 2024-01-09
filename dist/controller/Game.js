"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const EasyGameState_1 = require("./EasyGameState");
const MediumGameState_1 = require("./MediumGameState");
const HardGameState_1 = require("./HardGameState");
class Game {
    state;
    observers = [];
    board;
    constructor(newState) {
        this.state = this.setState(newState);
        this.board = this.generateBoard();
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }
    getState() {
        return this.state;
    }
    getBoard() {
        return this.board;
    }
    setBoard(value) {
        this.board = value;
    }
    clickSquare(row, col) {
        const clickedSquare = this.board[row][col];
        clickedSquare.click();
    }
    generateBoard() {
        return this.state.generateBoard();
    }
    // Set the state
    setState(newState) {
        let state;
        if (newState === "Easy") {
            state = new EasyGameState_1.EasyGameState(this);
        }
        else if (newState === "Medium") {
            state = new MediumGameState_1.MediumGameState(this);
        }
        else {
            state = new HardGameState_1.HardGameState(this);
        }
        return state;
    }
}
exports.Game = Game;
