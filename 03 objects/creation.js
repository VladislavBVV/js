const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,

}

// добавление свойства =========
playlist.trackName = 'follow'


console.log(playlist)

// ===============доступ к свойству====================


// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,

// }

// console.log(playlist.name)
// console.log(playlist.tracks)
// console.log(playlist.rating)
// console.log(playlist['rating'])

// =======================короткая запись свойств


// const username = 'Mango'
// const email = 'email@mail.com'

// const signupData = {
//     username,
//     email,
// }

// console.log(signupData)


// =================вычисляемые свойства============

/* <input name="color" value="tomato"> */


// const inputName = 'color'
// const inputValue = 'tomato'

// const colorPickerData = {
//     [inputName]: inputValue 
// }

// console.log(colorPickerData)


// const a = [1,2,3]

// a.hello = ':)'

// console.log(a)

const fn = function () {
    console.log('hello')
}

// fn()
// console.log(fn)
console.dir(fn)
