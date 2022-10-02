/*
Itrative Approach
Time Complexity = O(LogN) - Because we have to divide into subspace of log base 2
Space Complexity = O(1) - Space Complexity Binary Search Should be constant.
*/

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((start+end)/2);
    
    while(target !== nums[middle] && start <= end){
        if(target > nums[middle]){
            start = middle +1;
            
        }
        else {
            end = middle - 1;
        }
        middle = Math.floor((start+end)/2);
    }
    return target === nums[middle] ? middle : -1;
};


/*
Recursive Approach
Time Complexity = O(LogN) - Because we have to divide into subspace of log base 2
Space Complexity = O(LogN) - Space Complexity Binary Search Should be Log of base 2 because we are using stack in recursion.
*/

function recursiveBinarySearch(nums,middle,target){
    //BaseCase//
    if(target === nums[middle]) return middle;

    if(target > nums[middle]) return recursiveBinarySearch(nums,middle + 1 , target);
    else if(target < nums[middle]) return recursiveBinarySearch(nums,middle - 1, target);
    else return -1;
}

let nums = [1,2,3,4,5,6,7,8,9,10];
let start = 0;
let end = nums.length - 1;
let middle = Math.floor((start+end)/2);
let target = 10;
console.log(recursiveBinarySearch(nums,middle,target));