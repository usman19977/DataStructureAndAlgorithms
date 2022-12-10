/*
Optimzed Attempt
Time Complexity = O(2^n) - Because we need to progress number by 2n times
Space Complexity = O(2^n) - Because we are using recursion and thats why we are creating multiple stacks
*/
function powerSet(array) {
  let finalAnswerToReturn = [];
  helper(array, finalAnswerToReturn, 0, []);
  return finalAnswerToReturn;
}
function helper(array, ans, i, slate) {
  if (array.length === i) {
    ans.push(slate.slice());
    return;
  }
  //exclude//
  helper(array, ans, i + 1, slate);

  //include//
  slate.push(array[i]);
  helper(array, ans, i + 1, slate);
  slate.pop();
}

// console.log(powerSet([1, 2, 3, 4, 5, 6]));
