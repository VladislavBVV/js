// Оператор ветвления if


// if (выражение, которое приводиться к true || false) { 
//    console.log('выполняем')
// }

// const x = 5
// const y = 10

// if (x > y) {
//     // тело
//     console.log("выполняем");
   
// }

// console.log('дальше')


// Оператор ветвления if else 

// if (5 < 30) {

//     console.log('correct')

// } else
// {
//     console.log("incorrect");
// }


// / Оператор ветвления  else if 

const salary = 5000

// if (salary < 500) {
//     console.log('salary lower 500')
    
// } else { 
//     console.log('salary bigger than 500')
// }




if (salary < 500) {
    console.log('level = 1')
} else if (salary >= 600 && salary < 1500) {
    console.log("level = 2");
} else if (salary >= 1500 && salary < 3000) {
    console.log("level = 3");
} else if (salary >= 3000 && salary < 5000) {
    console.log("level = 4");
} else { 
     console.log("level = 5");
}

console.log('jghfjghg')


// тернарный оператор


const balance = 1000;
// let message 

// if (balance >= 0 ) {
//     message = 'позитивный баланс'
// } else {
//     message = "негативный  баланс";
// }

// console.log(message)

// const message = условие ? выражение1 : выражение 2

const message = balance >= 0 ? 'позитивный баланс' : "негативный  баланс"

console.log(message)

const a = 10

if (true) {
    const b = 5
    console.log(b);
    console.log(a)
}
console.log(a);

