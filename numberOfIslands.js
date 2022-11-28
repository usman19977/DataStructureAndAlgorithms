/*
Optimzed Attempt
Time Complexity = O(W * H) - Because we have to itrate Top to bottom whole matrix
Space Complexity = O(N) - Space Complexity should Linear because we need to use stack for DFS
*/
/**
 * 
 * @param {*} matrix 
 * @description Calculate the number of islands inside matrix
 * 
 */
function numberOfIslands(matrix){
    /**
     * Itrate over the matrix and check if there is no 1ns then 
     * continue otherwise DFS it and find its neighbor to perform action
     */
    let counter = 0; 
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
           if(matrix[row][col] !== 1) continue;
           findOnesConnected(matrix,row,col);
           counter++;
        }
        
    }
    return counter;

}

/**
 * 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} col 
 * @description Calculate the number of neighbors and process them adjacently
 */
function findOnesConnected(matrix,row,col){
        let stack = [[row,col]];
        while(stack.length > 0){
            let currentPosition = stack.pop();
            let [crow,ccol] = currentPosition;

            matrix[crow][ccol] = 0;
            let neighbors = getNeigbours(matrix,crow,ccol);
            for (let indexNeighbour = 0; indexNeighbour < neighbors.length; indexNeighbour++) {
                const neighbor = neighbors[indexNeighbour];
                let [ rown , coln] = neighbor;
                if(matrix[rown][coln] !== 1) continue;
                stack.push([rown,coln]);
                
            }

        }

}

/**
 * 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} col 
 * @description Get All the neighbors of TOP LEFT RIGHT BOTTOM 
 * nodes horizotally & Vertically
 */
function getNeigbours(matrix,row,col){
    let neighbors = [];
    let numberOfRows = matrix.length;
    let numberOfCols = matrix[0].length;
    if(row - 1 >= 0 ) neighbors.push([row - 1,col]);
    if(row + 1 < numberOfRows) neighbors.push([row + 1 ,col]);
    if(col - 1 >= 0) neighbors.push([row,col-1]);
    if(col + 1 < numberOfCols ) neighbors.push([row,col+1]);
    return neighbors;
}


let matrixInput = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ];
  console.log(numberOfIslands(matrixInput));

  /*
Steps For Optimized Solution
1 - Create Variatble counter that will keep track of adjacent islands
2 - Itrate over matrix and check if any coulmn not equal to 1 skip that itration
If any node is 1 then findallits neighbors and mark that node 0 in matrix to skip
as basecase
3 - Get neighbors with TOP , LEFT , RIGHT , BOTTOM
4 - Modify the original matrix with respect of 0
5 - return counter variable from main function
**/