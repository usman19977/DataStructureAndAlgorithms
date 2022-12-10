/*
Optimzed Attempt
Time Complexity = O(N) - Because we need to itrate over each and every element in an array
Space Complexity = O(N) - Because we are using recursion and thats why we are creating multiple stacks
*/
function reverseArray(array) {
  let left = 0;
  let right = array.length - 1;
  helper(array, left, right);
  return array;
}
function helper(array, left, right) {
  if (left > right) return array;
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
  return helper(array, left + 1, right - 1);
}
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));
