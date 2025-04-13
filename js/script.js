const board = document.getElementById("chessboard");
let selected = null;

const initialPosition = [
  ["♜","♞","♝","♛","♚","♝","♞","♜"],
  ["♟","♟","♟","♟","♟","♟","♟","♟"],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["♙","♙","♙","♙","♙","♙","♙","♙"],
  ["♖","♘","♗","♕","♔","♗","♘","♖"]
];

function createBoard() {
  board.innerHTML = "";
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.className = `square ${(row + col) % 2 === 0 ? "white" : "black"}`;
      square.dataset.row = row;
      square.dataset.col = col;
      square.textContent = initialPosition[row][col];
      square.addEventListener("click", onSquareClick);
      board.appendChild(square);
    }
  }
}

function onSquareClick(e) {
  const square = e.target;
  const row = parseInt(square.dataset.row);
  const col = parseInt(square.dataset.col);
  const piece = initialPosition[row][col];

  if (selected) {
    const [fromRow, fromCol] = selected;

    
    if (fromRow !== row || fromCol !== col) {
      initialPosition[row][col] = initialPosition[fromRow][fromCol];
      initialPosition[fromRow][fromCol] = "";
    }

    selected = null;
    createBoard();
  } else if (piece !== "") {
    selected = [row, col];
  }
}

createBoard();
