
/*
BruteForce Attempt
Time Complexity = O(N 2) - Because we have to itrate and compare the pair by the two nested for loops 
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach
*/
function twoSumBruteForce(integerArray,target){
   for (let i = integerArray.length; i >= 0; i--) {
    const element = integerArray[i];
    for (let j = 0; j < integerArray.length; j++) {
        if(element + integerArray[j] === target){
                return [i , j];
        }
        
    }
    
   }
}

/*

Optimized Attempt
Time Complexity = O(N) 
Space Complexity = O(N) - Because We use Hashmap

*/

function twoSumOptimized(nums,target){
    //Using For Loop//
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        
        let value = nums[i];
         
        let difference = target - value;
        if(hashMap.hasOwnProperty(difference)){
            return [hashMap[difference] , i];
        }
        hashMap[value] = i;  
    }
    //Using For Loop In Loop//

    let hashMapForIn = {};
    for(let index in nums){
        let value = nums[index];
        // console.log(value);
        let difference = target - value;
        // console.log(difference+"2");
        if(hashMapForIn[difference]){
           return [hashMapForIn[difference] , index];
           }
           hashMapForIn[value] = index;
        
    }
}

// console.log(twoSumBruteForce([2,7,11,15],9));
// console.log(twoSumOptimized([2,7,11,15],9));

/*

Steps For Optimized Solution
1 - Create a hashmap and itrate over the array .
2 - Take difference of the value of that itration on that index - target we are looking for.
3 - Check if that difference key already exist in hashmap .
4 - if it exist then return the pair of values the hashmap[difference] and index of that itration.
5 - Otherwise add key value to hashmap , key should be itrated value of that itration from loop and value should be index. 
**/