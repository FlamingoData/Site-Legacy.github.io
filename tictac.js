let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementById("board").children[index].innerText = currentPlayer;
        
        if (checkWin()) {
            alert(`${currentPlayer} a gagné !`);
            resetBoard();
        } else if (board.every(cell => cell !== "")) {
            alert("Match nul !");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== "" && board[a] === board[b] && board[a] === board[c];
    });
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    document.getElementById("board").childNodes.forEach(cell => cell.innerText = "");
}
