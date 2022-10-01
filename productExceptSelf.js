/*

BruteForce Attempt
Time Complexity = O(N 2) - Because we have to itrate and compare the pair by the two nested for loops 
Space Complexity = O(N) - Space Complexity should be linear because we are  using  space in this approach as array

*/
function productExceptSelfBruteForce(nums) {
        let finalArray = [];
        for (let index = 0; index < nums.length; index++) {
            const element = nums[index];
            let productOfElement = 1;
            for (let j = 0; j < nums.length; j++) {
               if(element != nums[j]) productOfElement *= nums[j];
                
            }
            finalArray.push(Math.abs(productOfElement));
        }
        return finalArray;
}

/*

Optimized Attempt
Time Complexity = O(N) 
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach

*/
function productExceptSelfOptimized(nums) {
    let finalArray = [];
    let length = nums.length;
    let productOfAllBeforeCurrent = 1;
    let productOfAllAfterCurrent = 1;
    
    for(let i= 0; i < length; i++ ){
          finalArray[i]  = productOfAllBeforeCurrent;
        productOfAllBeforeCurrent *= nums[i];
    }

   for(let i= length - 1; i >= 0; i-- ){
          finalArray[i]  *= productOfAllAfterCurrent;
        productOfAllAfterCurrent *= nums[i];
    }
    
    return finalArray;
 
};

// console.log(productExceptSelf([1,2,3,4]))
//console.log(productExceptSelfBruteForce([-1,1,0,-3,3]));


/*
Steps For Optimized Solution
1 - Create a array that should return final result in the end.
2 - Define two variables productAllBeforeCurrent that should track the product of numbers left to right,
3 - Define two variables productAllAfterCurrent that should track the product of numbers right to left,
4 - Then we itrade over the array from right to left and both left to right 
5 - While itrating from left to right we record the number productAllBeforeCurrent in finalArray on the itrated index.
then multiply that productAllBeforeCurrent *= num[i];

6 - Then we start itrate from right to left and multiply each itration in finalArray with productAllAfterCurrent 
and then multiply productOfAllAfterCurrent *= num[i]

7 - Finally Return the array we created above which has all the results.
*/
