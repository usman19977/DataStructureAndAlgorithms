/*

Optimized Attempt
Time Complexity = O(1);
Space Complexity = O(N) - Space Complexity should be constant because we are using Set and also recursion stack will impact as well 2N can be reduce to N

*/
function happyNumber(n, set = new Set()) {
  if (n === 1) return true;
  if (set.has(n)) return false;
  set.add(n);
  n = sumOfSquare(n);
  return happyNumber(n, set);
}
function sumOfSquare(n, sum = 0) {
  if (!n) return sum;
  let digit = n % 10;
  sum += digit ** 2;
  n = Math.floor(n / 10);
  return sumOfSquare(n, sum);
}
console.log(happyNumber(19));

/*
Steps For Optimized Solution

FUNCTION DEFINATION OF HAPPYNUMBER
1 - We Create a function called happyNumber That should be called recursively
2 - Having a basecase as of if n is reduced to 1 then we should return true
3 - We also create a set that should pass in recursion tree and we also add values to it if it contains duplicates the sum of square at any point 
we should return false because that number can not be a happy number and that is second basecase.
4 - Now we calculate sumOfSquares By calling seperate function .
5 - And Now we done our part let the recursion do the magic pass that calculated sumOfSquares to happyNumber again.

FUNCTION DEFINATION FOR SUMOFSQUARES
6 - sumOfSquares function will also call recursively and contain num and a running sum 
7 - We mod the number % 10 and then we just add square of that to the sum 
8 - By modding we get the last digit Now we need to calculate the rest of them also so that we do litte more maths by 
Dividing the n by 10 so that it should return the remaing part digit by digit and now its our part done.
9 - We pass that calculated number and running sum to recursion and it will do the magic 
10 - On the top of our part we define the base case if there is not N then we should return the calculated sum from recursion tree

**/
