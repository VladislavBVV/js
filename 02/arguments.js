// const fn = function () {
//     console.log(arguments)

//     const args = Array.from(arguments)

//     console.log(args)
// }

// fn(1,2,3,)
// fn(1,2,3,4,5,)
// fn(1,2,3,4,5,6,7,)

//=====================================


// const fn = function (a, b, c, ...args) {
//     console.log(`${a},${b},${c}`)


//     console.log(args)
// }

// fn('hello', 1,2,3,)
// fn('hi', 1,2,3,4,5,)
// fn(1,2,3,4,5,6,7,)


//====================

// const add = function (...args) {
//     console.log(args)
//     let total = 0
//     for (const arg of args) {
//         total += arg
//     }
    
//     return total
// }

// console.log(add(1,2,3))
// console.log(add(1,2,4,5,6,))


//=========отфильтровать похожие номера и вывести в новый массив======





const filterNumbers = function (array,...args) {
const newArray = []
    console.log('array', array)
console.log('args', args)

for (const element of array) {
    if (args.includes(element)) {
        newArray.push(element)
        console.log(`${element} есть везде`)
    }
}

return newArray
// console.log(newArray)

}


console.log(filterNumbers ([1,2,3,4,5],10,48,52,3,9,5))
console.log(filterNumbers ([45,87,20,90,],45,4,56,20,90,1))
console.log(filterNumbers ([100,200,300,400,500],3,67,300,22))