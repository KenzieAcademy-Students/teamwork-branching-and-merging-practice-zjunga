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

document.addEventListener("keyup", function(event) {
  let key = event.keyCode;
  console.log(event);
  if (key == "40") {
    moveDown();
  } else if (key == "38") {
    moveUp();
  } else if (key == "39") {
    moveRight();
  } else if (key == "37") {
    // A tile may move up to 3 times, so repeat three times to make sure everything has finished moving
    moveLeft();
    moveLeft();
    moveLeft();
    renderBoard();
  }
})

// These four functions will get called whenever the user presses the corresponding arrow key.
// Each of these should move all the pieces and combine any pieces which collide that are the same number.
function moveLeft() {
  for (let row of dataModel.board) {
    for (let i=0; i<row.length; i++) {
      if (i > 0) {
        let number = row[i];
        if (row[i - 1] === null) {
          row[i-1] = number;
          row[i] = null;
        } else if (row[i-1] === number) {
          row[i-1] = number * 2;
          row[i] = null;
        }
      }
    }
  }
}
function moveRight() {}
function moveUp(){}
function moveDown() {}

// This function gets called after each move, it should add a random tile into an empty space
function addRandomTile() {
  let emptyCoordinates = [];

  for (let row = 0; row < dataModel.board.length; row++) {
    for (let column = 0; column < dataModel.board[row].length; column++) {
      let value = dataModel.board[row][column];
      if (value == null) {
        emptyCoordinates.push([row, column]);
      }
    }
  }
  let randomIndex = Math.floor(Math.random() * emptyCoordinates.length);
  let coordinates = emptyCoordinates[randomIndex];
  dataModel.board[coordinates[0]][coordinates[1]] = 2;
}

// Hope this line doesn't induce a merge conflict
// This function will check if there are no empty squares left.
function checkIfGameHasEnded() {
  return false; // It will return a boolean, true or false if the game has ended.
}

// This will reset the board to the starting conditions
function resetBoard() {}

// This function will render the game board to the DOM.
// It will completely delete the old DOM and create a new board after each move.  
function renderBoard() {}

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
