// const numbers = [5, 25, 7, 99, 36, 2]
// let smallestNumber = numbers[0];



// for (const number of numbers) {

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);


const findSmallestNumber = function (numbers) {
let smallest = numbers[0]
    for (const number of numbers) {
        if (number < smallest) {
            smallest = number
        }
    }
    return `smallestnumber = ${smallest} `
}


console.log(findSmallestNumber([2,7,3,-8,5]))
console.log(findSmallestNumber([78,34,5,23,77]))
console.log(findSmallestNumber([14,59,21,90,25]))

