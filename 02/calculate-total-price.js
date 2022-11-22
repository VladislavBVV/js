// const cart = [54,28,105,70,92,17,120,12,25,90]
// let total = 0

// for (const value of cart) {

//     total += value
    
// }
// console.log('Total:', total)


// 2--------------------------------


const calculateTotalPrice = function (items) {

    console.log('items inside function', items)
    let total = 0 

    for (const item of items) {
        total += item
        
    }
    
   return total
}

const result1 = calculateTotalPrice([1,2,3,])

console.log(`общая сумма покупок:${result1}`)
console.log(calculateTotalPrice([5,10,56,]))
console.log(calculateTotalPrice([9,40,6,]))