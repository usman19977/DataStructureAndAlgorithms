/*

Optimized Attempt
Time Complexity = O(N) -Because we arw itrating over each and every element in array
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach

*/

function twoSumPonter(nums,target){
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        if(nums[left] + nums[right] > target) right--;
        else if(nums[left]+nums[right] < target) left++;
        else return [left+1,right+1]
    }
    return [];

}

console.log(twoSumPonter([1,2,3,4,5,6],9));

/*
Steps For Optimized Solution
1 - Create left pointer , right pointer as length of the number's array 
2 - While left ponter < right 
3 - IF nums[left] + nums[right] is greater than target then decrease right pointer.
4 - ELSEIF nums[left] + nums[right] is lesser than target then increase left pointer.
5 - ELSE return indices by adding one to them as [LEFT , RIGHT]
6 - IF WHILE LOOP exist then return empty array;
*/

