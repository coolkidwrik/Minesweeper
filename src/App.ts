import { Game } from "./controller/Game";
import { FlagCounter } from "./controller/FlagCounter";

class App {
    private game: Game;
    private flagCounter: FlagCounter;

    constructor() {
        this.flagCounter = new FlagCounter();
        this.game = new Game("Medium"); // You can choose the difficulty here

        // Register FlagCounter as an observer of the Game
        this.game.addObserver(this.flagCounter);

        // Initialize the game board and UI
        this.initializeGame();

        // Example: Simulate a user clicking on a square
        this.game.clickSquare(0, 0);

        // Example: Simulate placing a flag
        this.flagCounter.incrementFlagCount();
    }

    private initializeGame(): void {
        const boardContainer = document.getElementById("minesweeper-board");

        if (boardContainer) {
            const board = this.game.getBoard();

            board.forEach((row, rowIndex) => {
                row.forEach((square, colIndex) => {
                    const squareElement = document.createElement("div");
                    squareElement.className = "square";
                    squareElement.dataset.row = rowIndex.toString();
                    squareElement.dataset.col = colIndex.toString();

                    // Customize the appearance based on the square state
                    squareElement.textContent = ""; // Set the initial text content

                    // Add the square to the board container
                    boardContainer.appendChild(squareElement);
                });
            });
        }
    }


}

// Instantiate the App class when the script is loaded
const app = new App();