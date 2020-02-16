var GameOfLife = {
  advanceOneGeneration(currentGridInformation) {
    var nextGridState = this.calculateNextGridState(currentGridInformation);
    return `Generation ${this.calculateNextGenerationNumber(currentGridInformation)}:\r\n${this.getGridSize(currentGridInformation)}\r\n${nextGridState}`;
  },

  calculateNextGenerationNumber(currentGridInformation) {
    return parseInt(currentGridInformation.match(/Generation ([0-9]+)/)[1]) + 1;
  },

  getGridSize(currentGridInformation) {
    return currentGridInformation.split("\r\n")[1];
  },

  calculateNextGridState(currentGridInformation) {
    var nextGridState = [];
    var currentGridRows = currentGridInformation.split("\r\n");
    for(var r = 2; r < currentGridRows.length; r++) {
      var nextGridRow = "";
      for(var c = 0; c < currentGridRows[r].length; c++) {
        var currentCellState = currentGridRows[r].charAt(c);
        var nextCellState;
        var isFirstRow = (r===2);
        var isLastRow = (r===currentGridRows.length-1)
        var isFirstColumn = (c===0)
        var isLastColumn = (c===currentGridRows[r].length-1);
        var numberOfLiveNeighbours = 0;

        if(!isFirstRow && !isFirstColumn) {
          if(currentGridRows[r-1].charAt(c-1) === "*")
            numberOfLiveNeighbours += 1;
        }

        if(!isFirstRow) {
          if(currentGridRows[r-1].charAt(c) === "*")
            numberOfLiveNeighbours += 1;
        }

        if(!isFirstRow && !isLastColumn) {
          if(currentGridRows[r-1].charAt(c+1) === "*")
            numberOfLiveNeighbours += 1;
        }

        if(!isLastColumn) {
          if(currentGridRows[r].charAt(c+1) === "*")
            numberOfLiveNeighbours += 1;
        }

        if(!isLastColumn && !isLastRow) {
          if(currentGridRows[r+1].charAt(c+1) === "*")
            numberOfLiveNeighbours += 1;
        }

        if(!isLastRow) {
          if(currentGridRows[r+1].charAt(c) === "*")
            numberOfLiveNeighbours += 1;
        }

        if(!isLastRow && !isFirstColumn) {
          if(currentGridRows[r+1].charAt(c-1) === "*")
            numberOfLiveNeighbours += 1;
        }

        if(!isFirstColumn) {
          if(currentGridRows[r].charAt(c-1) === "*")
            numberOfLiveNeighbours += 1;
        }

        if(numberOfLiveNeighbours < 2 || numberOfLiveNeighbours > 3) {
          nextCellState = ".";
        }

        if(numberOfLiveNeighbours === 2) {
          nextCellState = currentCellState;
        }

        if(numberOfLiveNeighbours === 3) {
          nextCellState = "*";
        }

        nextGridRow += nextCellState

      }
      nextGridState.push(nextGridRow);
    }
    return nextGridState.join("\r\n");
  }

}

module.exports = GameOfLife;
