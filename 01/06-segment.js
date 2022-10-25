const x1 = 1
const x2 = 10

const number = -1

console.log(`число ${number} попадает в отрезок до ${x1}`, number < x1)

console.log(`число ${number} попадает в отрезок после ${x2}`, number > x2);

const res1 = number > x1 && number < x2
console.log(`число ${number} попадает в отрезок между ${x1} и ${x2}`, res1);

const res2 = number < x1 || number > x2

console.log(`число ${number} не попадает в отрезок между ${x1} и ${x2}`, res2);



// открыть чат

const isOnline = true
const isFriend = true
const isDnd = false

const canOpenChat = isOnline && isFriend && !isDnd 

console.log(`можно отрыть чат?`, canOpenChat);

// подписка

const free = true
const pro = true
const vip = true

const sub = 'free'
const subScribe = sub === 'pro' || sub === 'vip';

console.log(`Acces granted`, subScribe);

