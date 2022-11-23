/*

Optimized Attempt
Time Complexity = O(nLogn)  
Space Complexity = O(N) - Space Complexity should be Linear because we are using an space in this approach as array

*/

function sortArray(nums) {
    if(nums.length === 1) return nums;
    let middle = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,middle));
    let right = sortArray(nums.slice(middle));
    
    return mergeHelper(left,right);
    
};
function mergeHelper(left,right){
    let i = 0;
    let j = 0;
    let results = [];
    while(i < left.length && j < right.length){
          if(left[i]  > right[j]){
              results.push(right[j]);
              j++
              
          }
        else {
             results.push(left[i]);
              i++
        }
    }
    while(i < left.length){
        results.push(left[i]);
        i++;
    }
     while(j < right.length){
        results.push(right[j]);
        j++;
    }
    return results;
}

/*
Steps For Optimized Solution
1 - Split Array From Middle
2 - Recusivly break down into smaller part until unless it has length 1
3 - Create new helper function which takes left and right part of the array in the end
4 - Sort them in another array as final result by comparing the values of array which is greater and smaller will come first go
5 - Return the final array in the end
6 - Algorithm is called mergeSort;
*/
