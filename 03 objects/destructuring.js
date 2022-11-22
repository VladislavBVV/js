// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   // trackCount: 3,
// };


// деструктуризация========

// const {
//   name,
//   rating,
//   tracks,
//   trackCount: numberOfTracks = 5,
// } = playlist;


// console.log(numberOfTracks);

// console.log(name)



// глубокая деструктуризация=============


// const profile = {
//   name: 'Jack',
//   tag: 'jgluke',
//   location: 'Jamaica',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   }
// }



// const {
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
//   } = profile;



// console.log(
//   name,
//   tag,
//   location,
//   followers,
//   views,
//   likes)



// деструктуризация массивов====================

// const rgb = [255, 100, 80]



// const [red,green,blue] = rgb

// console.log(red, green, blue);







// const author = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 10,
//   mango:6,
// }



// const keys = Object.keys(author)

// for (const key of keys) {
//   console.log(key) 
//   console.log(author[key])
// }



// const entries = Object.entries(author);

// console.log(entries);



// ====================================

// for (const [name,rating] of entries) {
//   console.log(entry);

//   ур 2
//   const [name,rating] = entry
  
//   ур1
//   const name = entry[0]
//   const rating = entry[1]

//   console.log(name, rating)

// }

// операция rest ==============


// const profile = {
//   name: "Jack",
//   tag: "jgluke",
//   location: "Jamaica",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {name,tag,...restProps} = profile;

// console.log(name, tag);

// const restProps = {
//  location: profile.location,
//   stats: profile.stats

// } 

// console.log(restProps);
// console.log(profile)


// Пвттерн "объект настроек" ===========================

const showProfileInfo = function ({ name, tag, location, stats: { followers, views, likes }, }) {
  // const {
  //   name,
  //   tag,
  //   location,
  //   stats: { followers, views, likes },
  // } = userProfile;
  


  console.log(name, tag, location, followers, views, likes);
  
}




const profile = {
  name: "Jack",
  tag: "jgluke",
  location: "Jamaica",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);