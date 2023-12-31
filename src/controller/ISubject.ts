import {IObserver} from "./IObserver";

export interface ISubject {
    // Register an observer to receive updates
    addObserver(observer: IObserver): void;

    // Remove an observer from the list of observers
    removeObserver(observer: IObserver): void;

    // Notify all registered observers about the state change
    notifyObservers(): void;

    // Get the current state of the subject
    getState(): any;
}