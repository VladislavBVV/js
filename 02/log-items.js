// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item)
//     }
// }


// logItems(['mango','poly','jin'])
// logItems([1,2,3,4,5])
// logItems(['key','board','watch'])
// logItems(['key','board','watch'])



// 2 find login ------------------

// const logins = ['mango','poly','jin','cruel']

// const findLogin = function (allLogins, loginToFind) {   
    


//     for (const login of allLogins) { 
//         if(login === loginToFind) {
//           return  `пользователь ${loginToFind} найден `
//         }

//     }
//     return `пользователь ${loginToFind} не найден `
// } 


// console.log(findLogin(logins,'kiwi'))
// console.log(findLogin(logins,'mango'))
// console.log(findLogin(logins,'dodge'))
// console.log(findLogin(logins,'cruel'))

// 3 через тернарник--------------------

const logins = ['mango','poly','jin','cruel']


const findLogin = function (allLogins, loginToFind) {   

   return allLogins.includes(loginToFind)
    ? `user ${loginToFind} found`
    : `user ${loginToFind} not found`

} 

false ? 1 : 2; // 2 
true ? 1 : 2; // 1

console.log(findLogin(logins,'kiwi'))
console.log(findLogin(logins,'mango'))
console.log(findLogin(logins,'dodge'))
console.log(findLogin(logins,'cruel'))










