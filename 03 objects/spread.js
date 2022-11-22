
// const numbers = [1,2,3].concat([4,5,6],[7,8,9])
// console.log(numbers)



const numbers = [1000, ...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]]



console.log(numbers)



// Поиск самой маленькой или большой температуры

const temps = [18, 24, 20, 12, 38]

console.log(Math.max(1,5,0,4,2,))
console.log(Math.max(...temps));


const lastWeekTemp = [23, 12, 45]
const thisWeekTemp = [21, 42, 30];
const nextWeekTemp = [3, 5, 4];

const allTemps = [...lastWeekTemp, ...thisWeekTemp, ...nextWeekTemp];

console.log(allTemps)

// ===

const allTempsConcat = lastWeekTemp.concat(thisWeekTemp, nextWeekTemp);
console.log(allTempsConcat);

// распыление объектов

const a = { x: 1, y: 2 }
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b)

// ===

const c = {
    ...a,
    ...b,
}
console.log(c)


const defaultSettings = {
    theme: 'light',
    notifications: true,
    hideSidebar: false,
}

const userSettings = {
    notifications: false,
    hideSidebar: true,
}

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
