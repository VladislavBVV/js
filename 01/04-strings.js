// const message = 'В этой строке 25 символов.'

// console.log(message.length)


// конкатенация строк

const first = 'Chelsy'
const second = 'Maya'
const fullName = first+ ' ' +second

console.log(fullName)

const  room = 716
const type = 'VIP'
const message = 'Guest' + ' ' +first+ ' ' +second+ ' ' +'enters in'+ ' ' +type+ ' ' + room
console.log(message)

// шаблонная строка

// const welcomeMessage = `Guest ${first} ${second} enters in ${type} ${room}`;
// console.log(welcomeMessage)


// const brand = prompt('give me a brand')

// const normalizedBrand = brand.toLowerCase()

// console.log(normalizedBrand);

console.log(first.slice(3))

const firstNormalized = first.toLowerCase()
console.log(firstNormalized);

console.log(firstNormalized.includes('c'));