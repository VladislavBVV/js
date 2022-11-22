const logins = ['poly', 'header', 'cute', 'mango', 'stupid']
const logToFind = 'cute'
// let message = `user ${logToFind} not found`;

// for (const login of logins) {
//     console.log('login:', login)
//     if (logToFind === login) {
//         message = (`user ${logToFind} found`);
//         break
//     } 
// }
// console.log(message)



// .includes

// console.log(logins.includes(logToFind));

const message = logins.includes(logToFind)
    ? `user ${logToFind} found`
    : `user ${logToFind} not found`
console.log(message)


