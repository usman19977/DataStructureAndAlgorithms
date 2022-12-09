/*

Optimized Attempt
Time Complexity = O(N) -Because we are itrating over each and every element times 
Space Complexity = O(N) - Space Complexity should be Linear because we are using recursion and it uses space for each function call on callstack

*/
function factorial(n) {
  if (n === 0) return 1;
  let partialAnswer = factorial(n - 1);
  return n * partialAnswer;
}

// console.log(factorial(4));

/*
Steps For Optimized Solution
1 - Define the base case of recusion if value is more less or equal to 0 then return 1 as we know 0 factorial is 1
2 - Then we call our function as of [ input - 1 ]
3 - return the ansswer [ input * calculated answer ]
*/
