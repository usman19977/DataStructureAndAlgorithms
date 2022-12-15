function threeLNWS(array) {
  let result = [null, null, null];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    updateLargest(num, result);
  }
  return result;
}

function updateLargest(num, result) {
  if (result[2] === null || num > result[2]) {
    swapAndUpdate(num, result, 2);
  } else if (result[1] === null || num > result[1]) {
    swapAndUpdate(num, result, 1);
  } else if (result[0] === null || num > result[0]) {
    swapAndUpdate(num, result, 0);
  }
}

function swapAndUpdate(num, result, idx) {
  let i = 0;
  while (i <= idx) {
    if (i === idx) result[i] = num;
    else {
      result[i] = result[i + 1];
    }
    i++;
  }
}

// console.log(threeLNWS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
Steps For Optimized Solution
1 - Define the result array with K null values Start itrating over the array
2 - Pick an element and then update the largest accordinly 
    2:1 So that if there is no placement in 3rd largest element in final array add that to the end 
    2:2 If there is already element present on 3rd largest element in final array add that to the 
        end and if it is largest then 3rd one swap and update that accordingly
    2:3 Same mechanism goes for 2nd and 1st numbers
3 - In the end we should return our result array
*/
