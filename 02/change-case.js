// const string = 'JavaScript';
// console.log(string)

// const letters = string.split('')
// let invertedString = '';
// console.log(letters)

// for (const letter of letters) {
//     console.log(letter)
//     // if (letter === letter.toLowerCase()) { 
//     //     console.log('lowercase-', letter)
//     //     invertedString += letter.toUpperCase()
//     // } else {
//     //     console.log('Uppercase-', letter)
//     //     invertedString += letter.toLowerCase()
//     // }
//     invertedString += letter === letter.toLowerCase() 
//     ? letter.toUpperCase() 
//     : letter.toLowerCase()
// }
// console.log('invertedString-',invertedString)



const changeCase = function (string) {
    let invertedString = ''
    const letters = string.split('')


    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase()

        invertedString += isInLowerCase
        ? letter.toUpperCase() 
        : letter.toLowerCase ()
        }

    return invertedString
}




console.log(changeCase('qEtUEt'))
console.log(changeCase('aFGSghJs'))
console.log(changeCase('zzVBnMcxX'))