
// посчитать сумму покупок FOR 


// const cart = [54, 46, 98, 32, 45]
// let total = 0

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i]
// }

// console.log('Total', total);
  
// посчитать сумму покупок FOR OF


// for (const value of cart) {
//   console.log(value)
//   total += value
// }
// console.log('Total', total)


// Добавить каждому по 20% налога можно через For 

// for (let i = 0; i < cart.length; i += 1) {
//   console.log('no VAT', cart[i])
//   const taxCart = cart[i] * 1.2
//   console.log('VAT added', Math.round(taxCart));
//   total += taxCart
// }

// console.log(total)




// посчитать сумму всех четных чисел


const numbers = [4,3,0,8,5,10,2,6,7]
let total = 0

// for (const value of numbers) {

//   if (value % 2 === 0) { 
//     console.log('четное', value);  
//      total += value; 
//   }
// }


// for (const value of numbers) {
//   if (value % 2 !== 0) {
//     console.log("go further", value);
//     continue;
//   }
//   console.log('четное', value);
//   total += value; 
// }

//   console.log(total);


for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i]
    if (number % 2 === 0) {
      console.log("четное", number);
      total += number;
    } 
}
  console.log("total", total);
  