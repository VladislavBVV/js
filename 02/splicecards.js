const cards = [
    'карточка - 1',
    'карточка - 2',
    'карточка - 3',
    'карточка - 4',
    'карточка - 5',
]
console.table(cards)

// удаление элементов по индексу


// const cardToRemove = 'карточка - 3' 
// const index = cards.indexOf(cardToRemove)
// console.log(index)
// cards.splice(index, 1)


// console.log(cards.splice(index, 1))
// console.table(cards)



// добавление элемента 


// const cardToInsert = 'карточка - 6'
// const index = '3'

// cards.splice(5,0,cardToInsert)

// console.table(cards)


// обновление 


const cardToUpdate = 'карточка - 4'

const index = cards.indexOf(cardToUpdate)
console.log(index)

cards.splice(index,1, 'обновленная карточка - 4')

console.table(cards)