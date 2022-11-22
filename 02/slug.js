const title = 'Top 10 benefits of React framework';
console.log(title)

const normalizeTitle = title.toLowerCase()
// console.log(normalizeTitle)

const words = normalizeTitle.split(' ')
// console.log(words)

const slug = words.join('-')
// console.log(slug)


// =======================



const slug1 = title.toLowerCase().split(' ').join('-')
console.log(slug1)