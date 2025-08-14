const gameArea = document.getElementById("game-area");
const resultMsg = document.getElementById("result-msg");
const resetBtn = document.getElementById("reset-btn");

let grid = Array(9).fill("");
let playerTurn = "O";

function initGame() {
    gameArea.innerHTML = "";
    grid.forEach((_, index) => {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.dataset.index = index;
        tile.onclick = () => handleMove(index, tile);
        gameArea.appendChild(tile);
    });
    resultMsg.textContent = "";
}

function handleMove(idx, tileElement) {
    if (grid[idx] || resultMsg.textContent) return;

    grid[idx] = playerTurn;
    tileElement.textContent = playerTurn;
    tileElement.classList.add("locked");

    if (checkForWin()) {
        resultMsg.textContent = `${playerTurn} takes the victory!`;
        lockBoard();
    } else if (grid.every(cell => cell)) {
        resultMsg.textContent = "It's a tie!";
    } else {
        playerTurn = playerTurn === "O" ? "X" : "O";
    }
}

function checkForWin() {
    const combos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    return combos.some(([a,b,c]) => grid[a] && grid[a] === grid[b] && grid[a] === grid[c]);
}

function lockBoard() {
    document.querySelectorAll(".tile").forEach(t => t.classList.add("locked"));
}

resetBtn.onclick = () => {
    grid = Array(9).fill("");
    playerTurn = "O";
    initGame();
};

initGame();
