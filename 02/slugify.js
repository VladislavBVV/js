// const title = 'Top 10 benefits of React framework';
// console.log(title)

// const normalizeTitle = title.toLowerCase()
// // console.log(normalizeTitle)

// const words = normalizeTitle.split(' ')
// // console.log(words)

// const slug = words.join('-')
// // console.log(slug)


// // =======================



// const slug1 = title.toLowerCase().split(' ').join('-')
// console.log(slug1)



const slugify = function (string) {
    // // console.log(string)
    // const normalizedTitle = string.toLowerCase()
    // // console.log(normalizedTitle)
    // const words = normalizedTitle.split(' ')

    // // console.log(words)
    // const slug = words.join('-')

   

    return string.toLowerCase().split(' ').join('-')

}



console.log(slugify('Top 10 benefits of React framework'))
console.log(slugify('Azri jfwo dkeshfje ekfheke kejfke'))
console.log(slugify('Asus is the bad computer'))