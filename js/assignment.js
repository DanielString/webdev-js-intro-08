"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findTheSmallestNumber() {
  let smallestNumber;
  for (let i = 0; i < myNumbers.length; i++) {
    if (i === 0) {
      smallestNumber = myNumbers[i];
    } else {
      if (smallestNumber > myNumbers[i])
        smallestNumber = myNumbers[i]
    }
  }
}
console.log()
findTheSmallestNumber()

function findLargestNumber() {
  let largestNumber;
  for (let i = 0; i < myNumbers.length; i++) {
    if (i === 0) {
      largestNumber = myNumbers[i];
    } else {
      if (largestNumber < myNumbers[i])
        largestNumber = myNumbers[i]
    }
  }
}
console.log(largestNumber)
findLargestNumber()

function findAverage() {
  let sum = 0
  for (let i = 0; i < myNumbers.length; i++) {
    sum += myNumbers[i];
  }
  let average = sum / myNumbers.length
}
console.log(average)
findAverage()