import {IObserver} from "./IObserver";

export class FlagCounter implements IObserver {
    private flagCount: number = 0;

    getFlagCount(): number {
        return this.flagCount;
    }

    incrementFlagCount(): void {
        this.flagCount++;
        this.updateUI();
    }

    decrementFlagCount(): void {
        if (this.flagCount > 0) {
            this.flagCount--;
            this.updateUI();
        }
    }

    resetFlagCount(): void {
        this.flagCount = 0;
        this.updateUI();
    }

    update(newState: any): void {
        // Handle updates from the observed subject (e.g., Game)
        // You might want to react to certain game state changes
    }

    private updateUI(): void {
        // TODO: Implement logic to update the user interface with the new flag count
    }
}