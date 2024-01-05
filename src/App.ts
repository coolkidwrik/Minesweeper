// // Create an instance of the game
// import {Game} from "./controller/Game";
// import {Square} from "./controller/Square";
//
// const minesweeperGame = new Game("Easy");
//
// // Render the initial board
// renderBoard(minesweeperGame.getBoard());
//
// // Handle user input (click on a square)
// document.getElementById("minesweeper-board")?.addEventListener("click", handleSquareClick);
//
// function handleSquareClick(event: MouseEvent): void {
//     const target = event.target as HTMLDivElement;
//
//     // Check if the clicked element is a square on the board
//     if (target.classList.contains("square")) {
//         const row = Number(target.dataset.row);
//         const col = Number(target.dataset.col);
//
//         // Perform game logic based on the clicked square
//         minesweeperGame.clickSquare(row, col);
//
//         // Update the rendered board
//         renderBoard(minesweeperGame.getBoard());
//     }
// }
//
// function renderBoard(board: Square[][]): void {
//     const boardContainer = document.getElementById("minesweeper-board");
//
//     // Clear existing content
//     if (boardContainer) {
//         boardContainer.innerHTML = "";
//     }
//
//     // Render the new board
//     board.forEach((row, rowIndex) => {
//         row.forEach((square, colIndex) => {
//             const squareElement = document.createElement("div");
//             squareElement.className = "square";
//             squareElement.dataset.row = rowIndex.toString();
//             squareElement.dataset.col = colIndex.toString();
//
//             // Customize the appearance based on the square state
//             const squareState = square.reveal();
//             squareElement.textContent = squareState;
//
//             // Add the square to the board container
//             boardContainer?.appendChild(squareElement);
//         });
//     });
// }