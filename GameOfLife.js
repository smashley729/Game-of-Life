class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    // TODO: Create and return an 2D Array 
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
    let board = [];
    for(let row = 0; row < this.height; row++ ){
      let newRow = [];
      for(let column = 0; column <this.width; column++){
        newRow.push(0);
      }
      board.push(newRow);
    }
    return board;
  }

  getCell(row, column){
    if(row >= 0 && column >= 0 && row < this.height && column <this.width){
      return board[row][column];
    }
    else{
      return 0;
    }
  }

  neighbors(row, column){
    let topLeft = getCell[row-1, column-1];
    let top = getCell[row-1, column];
    let topRight = getCell[row-1, column+1];
    let left = getCell[row, column-1];
    let right = getCell[row, column+1];
    let bottomLeft = getCell[row+1, column-1];
    let bottom = getCell[row+1, column];
    let bottomRight = getCell[row+1, column+1];
    let neighborArr = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight];
    let sum = 0;
    for(let i = 0; i <neighborArr.length; i++){
      let value = neighborArr[i];
      sum += value;
    }
    return sum;
  }

  newState(row, column){
    let currentCell = getCell[row, column];
    let sum = neighbors(row, column);
    if(currentCell === 1){
      if(sum === 0 || sum === 1){
        return 0;
      }
      if(sum === 2 || sum === 3){
        return 1;
      }
      else{
        return 0;
      }
    }
    if(currentCell === 0){
      if(sum === 3){
        return 1;
      }
      else{
        return 0;
      }
    }
  }


  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
  }


  /**
   * Given the present board, apply the rules to generate a new board
   */
  
  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board 
    // (the next iteration of the game) 
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
