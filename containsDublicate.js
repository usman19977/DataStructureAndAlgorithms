/*

BruteForce Attempt
Time Complexity = O(N 2) - Because we have to itrate and compare the pair by the two nested for loops 
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach

*/

function containsDublicatebruteforceSolution(nums){
    for (let i = nums.length; i >= 0; i--) {
        const element = nums[i];
     for (let j = 0; j < nums.length; j++) {
            if(element === nums[j]){
                return true;
            }
       }
        
    }
    return false;
}


/*

Optimized Attempt
Time Complexity = O(N) 
Space Complexity = O(N) - Because We use Hashmap

*/
function containsDublicateoptimizedSolution(nums){
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
       if(hashMap.hasOwnProperty(nums[i])){
        return true;
       }
        hashMap[nums[i]] = true;
    }
    return false;
  
}

// console.log(containsDublicatebruteforceSolution([1,2,3,6]));
// console.log(containsDublicateoptimizedSolution([1,2,3,6]));


/*
Steps For Optimized Solution
1 - Create a hashmap and itrate over the array .
2 - Check if hasMap Already has a property we are itrating over ,
3 - If yes then return true
4 - Else add that property to the hasmap with the value of true or anything 
5 - And after loop we should return false because we didnt find any dublication
*/