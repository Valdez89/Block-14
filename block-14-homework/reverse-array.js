// This will be an example of a for loop that creates an array in reverse order.

function reverseArray(arr) {
    const reversedArr = [];
  // The beginning of the for loop showing reversedArr was pushed to create a reverse order.

    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
  
    return reversedArr;
  }
  
  // Results once printed out through Node.JS

  console.log(reverseArray([1, 2, 3])); // Output answer = [3, 2, 1]
  console.log(reverseArray([1, 3, 5, 7, 9, 11])); // Output answer = [11, 9, 7, 5, 3, 1]
  console.log(reverseArray([20, 50, 30, 60, 200])); // Output answer = [200, 60, 30, 50, 20]
  console.log(reverseArray([1, -1, 2, -3, 5, -8, 13])); // Output answer = [13, -8, 5, -3, 2, -1, 1]
  
