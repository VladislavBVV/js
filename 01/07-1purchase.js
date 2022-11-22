

// вары


let balance = 10000;
const payment = 11000;

1 

console.log(`total amount order ${payment} credits`);

// условие  сумма <= баланса

// if (payment <= balance) {
//     const credits = balance -= payment;
//     console.log(`left on account ${credits} credits`);
//     console.log('ewerithing is ok')
// }
//     else if (payment >= balance) {
//        console.log("there is not enough money")
// }
  
//  console.log("end of operation");


 if (payment <= balance) {
   const credits = balance -= payment;
   console.log(`left on account ${credits} credits`);
   console.log("ewerithing is ok");
 } else {
   console.log("there is not enough money");
 }

 console.log("end of operation");
 
