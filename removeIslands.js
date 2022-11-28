/*
Optimzed Attempt
Time Complexity = O(W * H) - Because we have to itrate Top to bottom whole matrix
Space Complexity = O(W * H) - Space Complexity should because we need to same same size of matrix in memory
*/
function removeIslands(matrix) {
  let onesConnectedToBorder = [];
  //Creating temporaryDataStructure//
  for (let i = 0; i < matrix.length; i++) {
    onesConnectedToBorder.push([]);

    for (let j = 0; j < matrix.length; j++) {
      onesConnectedToBorder[i].push(false);
    }
  }

  //Checking for borders ones if any//
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder) continue;
      if (matrix[row][col] !== 1) continue;

      findOnesConnectedToBoarder(matrix, row, col, onesConnectedToBorder);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (onesConnectedToBorder[row][col]) continue;

      matrix[row][col] = 0;
    }
  }
  return matrix;
}
//Will perform DepthFirstSearch and modify onesConnectedToBorder temporary datastructure along//
function findOnesConnectedToBoarder(
  matrix,
  startRow,
  startColumn,
  onesConnectedToBorder
) {
  //Adding row in stack//
  let stack = [[startRow, startColumn]];
  while (stack.length > 0) {
    //Getting currentValue by popping from stack//
    let currentPosition = stack.pop();
    //Destructuring from stack poped position//
    [currentRow, currentColumn] = currentPosition;

    //Check if it is already visited i.e it is true //
    let alreadyVisited = onesConnectedToBorder[currentRow][currentColumn];
    if (alreadyVisited) {
      continue;
    }
    //marking it as true//
    onesConnectedToBorder[currentRow][currentColumn] = true;

    //finding all neighbours of that bordered 1//
    let gneighbours = getNeigbours(matrix, currentRow, currentColumn); //

    for (let neighbours = 0; neighbours < gneighbours.length; neighbours++) {
      const neighbour = gneighbours[neighbours];
      [row, col] = neighbour;
      if (matrix[row][col] !== 1) continue;
      stack.push(neighbour);
    }
  }
}
//will return all the array of neighbours of that position //
//Top , Left , Right , Bottom //
function getNeigbours(matrix, row, col) {
  let neighbours = [];
  let numberOfRows = matrix.length;
  let numberOfCols = matrix[row].length;

  if (row - 1 >= 0) neighbours.push([row - 1, col]); // UP
  if (row + 1 < numberOfRows) neighbours.push([row + 1, col]); // DOWN
  if (col - 1 >= 0) neighbours.push([row, col - 1]); //LEFT
  if (col + 1 < numberOfCols) neighbours.push([row, col + 1]); //RIGHT

  return neighbours;
}
let matrixInput = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];
console.log(removeIslands(matrixInput));

/*
Steps For Optimized Solution
1 - Create same size of matrix as of input with all false value.
2 - Find all with borders if there are ones trun them true also perform depth first search 
and trun all connected neighbors true in that temporary datastructure
3 - Get neighbors with TOP , LEFT , RIGHT , BOTTOM
4 - Modify the original matrix with respect of temporary datastructure
5 - return the modified matrix
**/
