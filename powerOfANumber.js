/*
Optimzed Attempt
Time Complexity = O(X^n) - Because we need to progress number by n times
Space Complexity = O(X^n) - Because we are using recursion and thats why we are creating multiple stacks
*/
function powerOfANumber(x, n) {
  if (n === 0) return 1;
  let partialAns = powerOfANumber(x, n - 1);
  return partialAns * x;
}
// console.log(powerOfANumber(2, 2));
