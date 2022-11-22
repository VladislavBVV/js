const buttonAdd = document.querySelector('button[data-add]')
console.log(buttonAdd);

const buttonReset = document.querySelector("button[data-reset]");
console.log(buttonReset);

const input = document.querySelector("input");
console.log(input);

let total = 0;

const outPut = document.querySelector('.js-output span')
console.log(outPut)

buttonAdd.addEventListener('click', summary )

function summary() {
    const value = Number(input.value);
    console.log(value)
    total += value
    console.log('total', total)
    input.value = ''
    outPut.textContent = total;
}

 
buttonReset.addEventListener('click', dataReset)

function dataReset () { 
outPut.textContent = 0;
total = 0;
}