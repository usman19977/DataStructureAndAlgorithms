/*
Optimzed Attempt
Time Complexity = O(N) - Because we need to itrate over each and every letter in string
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach
*/

function kadaneAlgorithm(array){
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        maxEndingHere = Math.max(num,maxEndingHere+num);
        maxSoFar = Math.max(maxSoFar,maxEndingHere);
        
    }
    return maxSoFar;
}
console.log(kadaneAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))

/*
Steps For Optimized Solution
1 - Create Two Variables Max Sum While on the itration & max Sum of all other itrations as well.
2 - Itrate Over the array and calculate the sum so far by using the formula as of kadane's algorithm
max(NUM_WE_ARE_ITRATING_ON , PREVIOUS_MAX + NUM_WE_ARE_ITRATING_ON);
3 - Update max sum so far as well max(PREVIOUS_MAX , MAX_SUM_SO_FAR);
4 - After the itration return MAX_SUM_SO_FAR
*/


