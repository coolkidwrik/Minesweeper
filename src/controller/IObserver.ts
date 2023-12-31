export interface IObserver {
    // Update method is called when the state of the Subject changes
    update(newState: any): void;
}