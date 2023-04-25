// Below will be a for loop displaying numbers printed from 1 to 100.
// For each multiples of 3, print "Fizz" insead of the number.
// For each multiples of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// First part declares the parameters and boundaries set in the afterthought.
// There are if/else statements created to account for 3 and 5.
// At the bottom the console.log will print the results via Node.JS
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
