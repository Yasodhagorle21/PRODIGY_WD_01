const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameState = Array(9).fill(null);
const restartButton = document.getElementById('restart');

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(event) {
  const cell = event.target;
  const index = cell.getAttribute('data-index');

  if (gameState[index] || checkWin()) return;

  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    return;
  }

  if (gameState.every(cell => cell !== null)) {
    setTimeout(() => alert(`It's a draw!`), 100);
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  return winningConditions.some(condition => {
    const [a, b, c] = condition;
    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
  });
}

function restartGame() {
  gameState = Array(9).fill(null);
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);
