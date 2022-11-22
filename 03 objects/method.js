
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     getName: function (a, b, c, d) {
//         console.log('this is get name', a, b, c, d)  
//     } =
//     getName() {
//         console.log('this is get name',)

//     }

// }
// playlist.getName(5 )
// console.log(playlist)


const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    // trackCount: 3,
    changeName(newName) {
        console.log('this внутри changeName', this)
        this.name = newName
    },
    addTrack(newTrack) {
        this.tracks.push(newTrack)
        this.trackCount = this.tracks.length
    },
    updateRating(newRating){
        this.rating = newRating
    },
    getTrackCounts (){
        return this.tracks.length
    }
}

playlist.changeName('NEW NAME')
playlist.addTrack('track-4')
console.log(playlist.getTrackCounts())
playlist.addTrack('track-5')
console.log(playlist.getTrackCounts())

playlist.updateRating(9)

console.log(playlist)