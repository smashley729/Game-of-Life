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
      return this.board[row][column];
    }
    else{
      return 0;
    }
  }

  neighbors(row, column){
    let topLeft = this.getCell(row-1, column-1);
    let top = this.getCell(row-1, column);
    let topRight = this.getCell(row-1, column+1);
    let left = this.getCell(row, column-1);
    let right = this.getCell(row, column+1);
    let bottomLeft = this.getCell(row+1, column-1);
    let bottom = this.getCell(row+1, column);
    let bottomRight = this.getCell(row+1, column+1);
    let neighborArr = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight];
    let sum = 0;
    for(let i = 0; i <neighborArr.length; i++){
      let value = neighborArr[i];
      sum += value;
    }
    return sum;
  }

  newState(row, column){
    let currentCell = this.getCell(row, column);
    let sum = this.neighbors(row, column);
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
  
  tick() {
    
    const newBoard = this.makeBoard();

    for(let row = 0; row < this.height; row++ ){
      for(let column = 0; column <this.width; column++){
        newBoard[row][column] = this.newState(row,column)
      }
    }

    this.board = newBoard;
    console.log(this.board)
  }
}

//setInterval(game.tick.bind(game),500)