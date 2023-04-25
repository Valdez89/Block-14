// Below I am looking to create an array of numbers that returns a new array with odd numbers only.
// If there is only one value of an odd number, the array will return with a single value.

// I am creating an array that filters out even numbers to give me only odd numbers.
// The goal is to stay within 10 and 16 due to the odd numbers being present in that parameter.

const inputArray = [2, 4, 6, 8, 11, 20, 15, 22];
const outputArray = inputArray.filter((element) => {
  return element > 10 && element < 16; // Output will be [11, 15]
});

console.log(outputArray);

// The below array will filter out the even numbers to give me an array of odd numbers only.
// The filter within inputArray allows me to find numbers divisble by 2 and make them become a zero.
// This will about the outputArray to give me only odd numbers in my new array.

const inputArray = [1,2,3,4,5,6,7,8,9,10];
const outputArray = inputArray.filter((number) => number % 2 !== 0) 
console.log(outputArray); // Output will be [1,3,5,7,9]


// Utilizing filter to remove the even numbers from inputArray.
// Still using module to make the numbers that are divisble by 2 to become zero.

const inputArray = [70,42,55,81,21,91,34];
const outputArray = inputArray.filter((number) => number % 2 !== 0); 
console.log(outputArray); // Output will be [55,81,21,91]

// Utilizing the inputArray.filter function we will remove all even numbers.
// Using module to reduce all values to zero that are divisible by 2.

const inputArray = [2,4,6,8,10,11,12]
const outputArray = inputArray.filter((number) => number % 2 !== 0)
console.log(outputArray); //Output will be [11]
