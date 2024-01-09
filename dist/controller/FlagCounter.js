"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlagCounter = void 0;
class FlagCounter {
    flagCount = 0;
    getFlagCount() {
        return this.flagCount;
    }
    incrementFlagCount() {
        this.flagCount++;
        this.updateUI();
    }
    decrementFlagCount() {
        if (this.flagCount > 0) {
            this.flagCount--;
            this.updateUI();
        }
    }
    resetFlagCount() {
        this.flagCount = 0;
        this.updateUI();
    }
    update(newState) {
        // Handle updates from the observed subject (e.g., Game)
        // You might want to react to certain game state changes
    }
    updateUI() {
        // TODO: Implement logic to update the user interface with the new flag count
    }
}
exports.FlagCounter = FlagCounter;
