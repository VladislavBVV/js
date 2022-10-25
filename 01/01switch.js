let stars = 4

let price;

// if (stars === 1) {
//     price = 20
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 40;
// } else if (stars === 4) {
//     price = 50;
// }
// else if (stars === 5) {
//     price = 60;
// } else { console.log("there is no such stars") };



if (stars === 1 || stars === 2) {
    price = 20
}  else if (stars === 3 || stars === 4) {
    price = 40;
} 
else if (stars === 5) {
    price = 60;
} else { console.log("there is no such stars") };


// switch (stars) {
//     case 1:
//         price = 20;
//         console.log(`price ${price}`);
//         break;
//     case 2:
//         price = 30;
//         console.log(`price ${price}`);
//         break;
//     case 3:
//         price = 40;
//         console.log(`price ${price}`);
//         break;
//     case 4:
//         price = 50;
//         console.log(`price ${price}`);
//         break;
//     case 5:
//         price = 60;
//         console.log(`price ${price}`);
//         break;
//     default: 
//         console.log("there is no such stars");
      
// } 
 
// console.log(price);
  
// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     console.log(`price ${price}`);
//     break;

//   case 3:
//   case 4:
//     price = 40;
//     console.log(`price ${price}`);
//     break;

//   case 5:
//     price = 60;
//     console.log(`price ${price}`);
//     break;
//   default:
//     console.log("there is no such stars");
// }

console.log(price);


// 1. сделать переменные 

const option = 6;
let message = '';

// 2. сделать свитч
switch (option) {
  case 1:
    message = "самовывоз";
    break;
  case 2:
    message = "курьер";
    break;
  case 3:
    message = "почта";
    break;

  case 4:
    message = "ничего нет";
    break;

  default:
    message = "вам перезвонит менеджер";
}
// 3.в каждом кейсе записать в меседж

console.log(message)
// 4.сделать log





