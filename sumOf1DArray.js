/*

Optimized Attempt
Time Complexity = O(N) - Because we have to itrate on each and every element in array
Space Complexity = O(N) - Space Complexity should be constant because we are creating a new result array//

*/

function sumOf1DArray(array){
        let result = [];
        result.push(array[0]);
        for (let i = 1; i < array.length; i++) {
            result[i] = result[i - 1] + array[i];
           
        }
        return result;
}
/*
Steps For Optimized Solution
1 - Create new result Array 
2 - Push input array 1st element into that final array
3 - Itrate over the rest of the remaining elements in input array
4 - Push in final result variable from itrator ( from 1 ).
5 - Get the previous value from result variable the one we push ( from i - 1 ) add current input array value to that +array[i]
6 - return the final result array when itration ends
*/


console.log(sumOf1DArray([1,2,3,4]));