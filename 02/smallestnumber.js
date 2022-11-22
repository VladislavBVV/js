// найти самое маленькое число

// const numbers = [5, 25, 7, 99, 36, 2]
// let smallestNumber = numbers[0];

// console.log(smallestNumber);

// for (const number of numbers) {
//     // console.log(number)
//     if (number < smallestNumber) { 
//         smallestNumber = number
//     }
// }
// console.log(smallestNumber);


// найти самое большое число


const numbers = [5, 25, 7, 99, 36, 2]
let biggestNumber = numbers[0];

console.log(biggestNumber);

for (const number of numbers) {
  // console.log(number)
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}
console.log(biggestNumber);