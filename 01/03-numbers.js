// let elementWidth = '50px'
// const result = Number.parseInt(elementWidth)
// console.log(elementWidth)
// console.log(typeof elementWidth)
// console.log(typeof result)

// let elementHeight = '300.24px'
// elementHeight = Number.parseFloat(elementHeight)
// console.log(elementHeight)
// console.log(typeof elementHeight)


// let salary = 1300.5693;
// salary = Number(salary.toFixed(3))
// console.log(salary)
// console.log(typeof salary)
// console.log(Number(salary.toFixed(2)))


// const base = 3
// const power = 5

// console.log(Math)

// const result = Math.random()

// console.log(result)

// let base = prompt('give me number')
// base = Number(base)
// console.log(typeof base)


// let power = prompt('give me power')
// power = Number(power)
// console.log(power)

// const result = Math.pow(base, power)

// console.log(result)





const colors = ['tomato', 'teal', 'pink', 'yellow', 'blue'];
const max = colors.length - 1;
const min = 0;

let index = Math.round(Math.random() * (max - min) + min);

const color = colors[index]
console.log(index)

console.log(color)


document.body.style.backgroundColor = color;