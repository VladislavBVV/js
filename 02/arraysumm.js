// скрипт считает сумму элементов двух массивов


const array1 = [5,10,15,20]
const array2 = [10,20,30]
 
let total = 0

// 1 вариант============

// for (let index = 0; index < array1.length; index +=1) {
    
//     total += array1[index]
// }

// for (let index = 0; index < array2.length; index +=1) {
//     total += array2[index]
    
// }

// console.log(total)


// второй вариант==========

const numbers = array1.concat(array2)

console.log(numbers)
console.log(array1)
console.log(array2)

for (const number of numbers) {
    
    total += number
}



console.log(total)
