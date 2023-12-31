import {ISubject} from "./ISubject";
import {IObserver} from "./IObserver";
import {Square} from "./Square";

class Game implements ISubject {
    private state: any;
    private observers: IObserver[] = [];
    private board: Square[][];

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

    // Set the state and notify observers
    setState(newState: any): void {
        this.state = newState;
        this.notifyObservers();
    }
}
