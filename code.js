let dataModel = {
  score: 244,
  bestScore: 244,
  board: [
    [2,    8,    16,   32],
    [null, 4,    8,    16],
    [null, null, null, 2],
    [null, 2,    null, 4]
  ]
} 

// These four functions will get called whenever the user presses the corresponding arrow key.
// Each of these should move all the pieces and combine any pieces which collide that are the same number.
function moveLeft() {}
function moveRight() {}
function moveUp(){}
function moveDown() {}

// This function gets called after each move, it should add a random tile into an empty space
function addRandomTile() {}

// This function will check if there are no empty squares left.
function checkIfGameHasEnded() {
  return false; // It will return a boolean, true or false if the game has ended.
}

// This will reset the board to the starting conditions
function resetBoard() {}

// This function will render the game board to the DOM.
// It will completely delete the old DOM and create a new board after each move.  
function renderBoard() {
  let board = document.getElementById("board");

  let html = `<div class="grid">`
  for (let row of dataModel.board) {
    for (let cell of row) {
      html += `<div class="cell number-${cell}">${(cell) ? cell : ""}</div>`
    }
  }
  html += `</div>`

  board.innerHTML = html;
}

// When any of the move functions are done, they should call this.  
function afterMove() {
  if (checkIfGameHasEnded()) {
    alert("Game Over!")
  } else {
    renderBoard();   
  }
}

function startGame() {
  resetBoard();
  addRandomTile();
  addRandomTile();
  renderBoard();
}
startGame();







// Shouldn't be any issues unless we try to merge this line!
