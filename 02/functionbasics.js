
                    // параметры
// const add = function add (x,y) {
// console.log(x)
// console.log(y)


// console.log('выполняется функция add')

// // return - возврат результата из функции

// return x+y 
    
// }
// //    аргументы - значения для параматров
// const result1 = add (5, 3)
// console.log('result1',result1)

// const result2 = add(10,15)
// console.log('result2',result2)

// const result3 = add(30,50)
// console.log('result3',add(30,50))


// 2

// const fn = function (value) {

//     console.log(1)
//     console.log(2)

// if (value > 50) {
//     return 'меньше 50'
// }
//     return 'больше 50'
// }



// console.log('result of function', fn(10))

// console.log('result of function', fn(60))


// 3 Стек вызовов

const fnA = function () {
    console.log('выполняется функция А')

   
    fnB()
}

const fnB = function () {
    console.log('выполняется функция B')

    // console.log(value)
    fnC()
}

const fnC = function () {
    console.log('выполняется функция C')

    console.log(value)
}

// console.log('перед вызовом функции А')
fnA()
// console.log('после вызовом функции А')

// console.log('перед вызовом функции В')
// fnB()
// console.log('после вызовом функции В')

// console.log('перед вызовом функции С')
// fnC()
// console.log('после вызовом функции С')














