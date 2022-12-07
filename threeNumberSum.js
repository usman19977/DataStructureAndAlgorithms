/*

Optimized Attempt
Time Complexity = O(N^2) - Because we have to itrate on each and every element in array and then we should use nested while loop in order to do pointer stuff
Space Complexity = O(N) - Space Complexity should be Linear because we are creating a new result array and we should return it in the end

*/
function threeNumberSum(nums , target = 0){
    nums.sort((a , b) => a - b );
    let triplets = [];
    for (let i = 0; i < nums.length; i++) {
        let left= i + 1;
        let right = nums.length - 1;
        while(left < right){
            let runningSum = nums[i] + nums[left] + nums[right];
            if(runningSum === target){
                triplets.push([nums[i] , nums[left] , nums[right]]);
                left++;
                right--;
            }
            else if (runningSum < target){
                left++;
            }
            else {
                right--;
            }
        }

        
    } 
    return triplets;
}

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0));

/*
Steps For Optimized Solution
1 - Sort the input Array by using array.sort | any advance sorting algorithm which should result in O(nlogN)
2 - After that Loop over each and every element in an array
3 - For each element declare the left pointer as  [ CurrentIndex + 1] and right pointer as [ Length Of Array - 1]
4 - While left ponter < right 
5 - Declare currentSum as Current element + LeftPointer + RightPointer.
6 - Compare the currentSum as of if it is less than the target then as we know our array is sorted we should increase our left pointer by 1
7 - Compare the currentSum as of if it is greater than the target then as we know our array is sorted we should decrement our right pointer by 1
8 - If currentSum is equal to the target we should add that to our triplets array we defined above and we increment left pointer and decrement right pointer both by 1
9 = In the end we should return our triplets array
*/