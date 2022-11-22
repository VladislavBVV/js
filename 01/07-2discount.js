let totalSpent = 11100;
let payment = 500;
let discount = 0;




if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02
    console.log(`bronze partner dicount 2%`)
}
else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;
    console.log(`silver partner dicount 5%`);
}
else if (totalSpent > 5000) {
    console.log(`gold partner dicount 10%`);
    discount = 0.1;
} else { 
     console.log("not a partner discount 0%");
}

payment -= payment * discount

console.log(`order in amount ${payment} discount ${discount * 100}%`);
 
totalSpent += payment

console.log(`total amount in shop ${totalSpent}`);

// if (condition) {
    
// } else if (condition) {

// }
// else if (condition) {

// } else { 

// }

const button = document.querySelector('button')
console.log(button);

const buttonValue = document.querySelector("button[data-value]");
console.log(buttonValue);

const input = document.querySelector('input');
console.log(input);
console.log(input.value)

const par = document.querySelector('.summ')
console.log(par)
console.log(par.textContent)

input.addEventListener('input', function () { 
    console.log(input.value);
    
})

button.addEventListener('click', function () { 
    console.log(input.value);
    console.log('hjkhkjhkjhk')
    const colors = ["tomato", "teal", "pink", "yellow", "blue"];
    const max = colors.length - 1;
    const min = 0;

    let index = Math.round(Math.random() * (max - min) + min);

    const color = colors[index];
    console.log(index);

    console.log(color);

    document.body.style.backgroundColor = color;
})

const summary = par.value