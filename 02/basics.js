// const friends = ['Mango', 'Kiwi', 'Orange', 'Poly']
// console.log(friends.length)
// console.table(friends)

// console.log(friends[0])

// const lastIndex = friends.length - 1
// console.log(lastIndex)

// friends[1] = 'qwwerr'
// friends[3] = 12334
// console.log(friends)
// console.table(friends)

// let a = 10
// let b = a
// console.log(a)
// console.log(b)

// a = 20

// console.log(a);
// console.log(b);

// const a = [1, 2, 3]
// const b = a;

// console.log('a', a)
// console.log('b', b)

// a[0] = 500

// console.log("a", a);
// console.log("b", b);

// console.log(a === b)


// перебор массива

const friends = ["Mango", "Kiwi", "Orange", "Poly"];
// console.table(friends)
// const lastIndex = friends.length - 1


// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += "-1";
// }


// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }
// console.table(friends);

for (const friend of friends) {
    console.log(friend)
    
}

console.table(friends)