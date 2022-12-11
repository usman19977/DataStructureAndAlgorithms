/*
Optimzed Attempt
Time Complexity = O(W * H) - Because we have to itrate Top to bottom whole matrix
Space Complexity = O(W * H) - Space Complexity should because we need to same same size of matrix in memory
*/
function xogrid(board) {
  let tempDS = [];
  for (let row = 0; row < board.length; row++) {
    tempDS.push([]);
    for (let col = 0; col < board[row].length; col++) {
      tempDS[row].push(false);
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      let isRowBoarder = row === 0 || row === board.length - 1;
      let isColBoarder = col === 0 || col === board[row].length - 1;
      let isBoarder = isColBoarder || isRowBoarder;
      if (!isBoarder) continue;
      if (board[row][col] !== "O") continue;
      findOsConnectedToBoarder(board, row, col, tempDS);
    }
  }

  for (let row = 1; row < board.length - 1; row++) {
    for (let col = 1; col < board[row].length - 1; col++) {
      if (tempDS[row][col]) continue;
      board[row][col] = "X";
    }
  }
  return board;
}
function findOsConnectedToBoarder(board, row, col, tempDS) {
  let stack = [[row, col]];

  while (stack.length) {
    let currenPosition = stack.pop();
    let [cRow, cCol] = currenPosition;
    let isAlreadyVisited = tempDS[cRow][cCol];
    if (isAlreadyVisited) continue;
    tempDS[cRow][cCol] = true;
    let neighbours = getNeighbours(board, row, col);
    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];
      let [nRow, nCol] = neighbour;
      if (board[nRow][nCol] !== "O") continue;
      stack.push(neighbour);
    }
  }
}
function getNeighbours(board, row, col) {
  let neighbours = [];
  let numOfRows = board.length;
  let numOfCols = board[row].length;

  if (row - 1 >= 0) neighbours.push([row - 1, col]);
  if (row + 1 < numOfRows) neighbours.push([row + 1, col]);

  if (col - 1 >= 0) neighbours.push([row, col - 1]);
  if (col + 1 < numOfCols) neighbours.push([row, col + 1]);
  return neighbours;
}
console.log(
  xogrid([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
/*
Steps For Optimized Solution
1 - Create same size of matrix as of input with all false value.
2 - Find all with borders if there are ones trun them true also perform depth first search 
and trun all connected neighbors true in that temporary datastructure
3 - Get neighbors with TOP , LEFT , RIGHT , BOTTOM
4 - Modify the original matrix with respect of temporary datastructure
5 - return the modified matrix
**/
