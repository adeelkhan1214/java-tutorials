
// const arr = [54,2, 3, 4, 4, 5, 5, 56, 4];

// const secondLast = arr[arr.length - 2];

// console.log("Second last element is:", secondLast);
const arr = [2, 3, 4, 4, 5, 5, 55, 56, 4];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log("Second largest number is:", secondLargest);
