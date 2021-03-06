const width = 25;
const height = 20; // width and height dimensions of the board

/**
 * Create a Game of Life instance
 */

const gol = new GameOfLife(width, height);


/**
 * create a table and append to the DOM
 */

// Actual table cells
const tds = [];

// <table> element
const table = document.createElement("tbody");
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById("board").append(table);


/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */

const paint = () => {

  let tdArr = Array.from(document.getElementsByTagName('td'));
  for (let i = 0; i < tdArr.length; i++) {
    let currCell = tdArr[i]
    let cellCol = currCell.dataset.col
    let cellRow = currCell.dataset.row

    if (gol.board[cellRow][cellCol] === 1) {
      currCell.className = 'alive'
    }
    else{
      currCell.className = '';
    }
  }
}



  // TODO:
  //   1. For each <td> in the table:
  //     a. If its corresponding cell in gol instance is alive,
  //        give the <td> the `alive` CSS class.
  //     b. Otherwise, remove the `alive` class.
  //
  // To find all the <td>s in the table, you might query the DOM for them, or you
  // could choose to collect them when we create them in createTable.
  //
  // HINT:
  //   https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  //   https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName



/**
 * Event Listeners
 */

function enableAutoPlay(){
  gol.tick();
  paint();
}

document.getElementById("board").addEventListener("click", event => {
  // TODO: Toggle clicked cell (event.target) and paint
  let cell = event.target;
  let col = cell.dataset.col;
  let row = cell.dataset.row;
  gol.board[row][col] = 1;
  paint();
  console.log(event.target);
  console.log(gol.board);

});

document.getElementById("step_btn").addEventListener("click", event => {
  enableAutoPlay();
  // TODO: Do one gol tick and paint
});


document.getElementById("play_btn").addEventListener("click", event => {

    setInterval(enableAutoPlay, 500);

  
  // TODO: Start playing by calling `tick` and paint
  // repeatedly every fixed time interval.
  // HINT:
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
}, {once: true});

document.getElementById("random_btn").addEventListener("click", event => {
  for(let row = 0; row < gol.height; row++){
    for(let col = 0; col < gol.width; col++){
      gol.board[row][col] = Math.round(Math.random());
      console.log(gol.board[row][col]);
    }
  }
  console.log(gol.board);
  paint();
  // TODO: Randomize the board and paint
});

document.getElementById("clear_btn").addEventListener("click", event => {
  gol.board = gol.makeBoard();
  
  paint();
  // TODO: Clear the board and paint
});
