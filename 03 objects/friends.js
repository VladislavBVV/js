const friends = [
  {  name: 'Mango', online: false},
  {  name: 'Kiwi', online: true},
  {  name: 'Poly', online: false},
  {  name: 'Ajax', online: false},
]

// console.table(friends)

// for (const friend of friends) {
//     // console.log(friend)
//     // console.log(friend.name)
//     console.log(friend.online)
// friend.newprop = 555

// }
// console.table(friends)

// ищем друга по имени

// const findFriendByName = function (allFriends, friendName) {
// for (const friend of friends) {
//     // console.log(friend.name)
//     if (friend.name ===  friendName) {
// return 'поздравляем нашли'

        
//     }
   
// }

// return 'не нашли'

// }

// console.log(findFriendByName(friends, 'Poly'))
// console.log(findFriendByName(friends, 'Chelsy'))


// получить именв всех друзей

console.table(friends)


// ============================

// const getAllNames = function (friends) {
//     const names = []
//     for (const friend of friends) {
//         console.log(friend.name)
//         names.push(friend.name)
       
//     }
//     // console.log(names)
//     return names
    
// }

// console.log(getAllNames(friends))

// ================================

// const getOnlineFriends = function (friends) {
//   const onlineFriends = []

//   for (const friend of friends) {
//     // console.log(friend)
//     // console.log(friend.online)
   
//     if (friend.online) {
//       onlineFriends.push(friend)
//     }
//   }
//   return onlineFriends
// }

// getOnlineFriends(friends)

// console.log(getOnlineFriends(friends))


// ====================================

// const getOfflineFriends = function (friends) {

//   const offlineFriends = []

//  for (const friend of friends) {
//   console.log(friend.online)
//   if (!friend.online) {
//     offlineFriends.push(friend)
//   }
//   }

//   return offlineFriends

// }

// getOfflineFriends(friends)

// console.log(getOfflineFriends(friends))


// =======================================

const getFriendsByOnlineStatus = function (friends) {
  const status = {
    onlineFriends:[],
    offlineFriends:[],
  }

  for (const friend of friends) {
    console.log(friend)
    if (friend.online) {
      status.onlineFriends.push(friend)
    } else {
      status.offlineFriends.push(friend)
    }

  }
 
  return status
}

  console.log(getFriendsByOnlineStatus(friends)) 


  const x = {
    a:1,
    b:4,
    c:7,
    d:8,
  }
  console.log(Object.keys(x))

  console.log(Object.values(x).length)