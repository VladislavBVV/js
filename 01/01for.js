// for (инициализация; условие; пост - выражение) { 
//     тело цикла
// }



// for (let index = 0; index <= 10; index += 1) {
 
//     console.log(index)
    
// }

// 1. сделать вары

const minSalary = 500
const maxSalary = 5000

const employees = 14;
let totalSalary = 0

// 2. перебрать работников в цикле

for (let employee = 1; employee <= employees; employee += 1) {
  // 3. сгенерить случайную ЗП
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`Заработная плата работника, ${employee} - ${salary}`);
  // 4. прибавить к тоталу
  totalSalary = totalSalary + salary;
}


// 5. лог
console.log('общая сумма ЗП',  totalSalary);


const min = 10
const max = 50
let total = 0

for (let index = min; index <= max; index +=1) {
    // console.log(index)

    if (index % 2 !== 0) {
      console.log('не четное', index);
      continue;
    }
   console.log("четное", index);
   total += index;
}
console.log('total: ',total);


