/*

Optimized Attempt
Time Complexity = O(2N) -Because we are itrating over each and every element times 
Space Complexity = O(2N) - Space Complexity should be Linear because we are using recursion and it uses space for each function call on callstack

*/
function fibo(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  let partialAns1 = fibo(n - 1);
  let partialAns2 = fibo(n - 2);
  return partialAns1 + partialAns2;
}

// console.log(fibo(7));

/*
Steps For Optimized Solution
1 - Define the basecase of recursion if n is 1 then we should return 1 and n is 2 we should return 1
as because we are providing the initial values to our recursive algorithm

2 - Now call the function recursively with both [ input - 1] & [ input - 2 ] 
3 - Return the precalculated answer by summing both of them up

*/
