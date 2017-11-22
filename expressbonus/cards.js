// var obj = [{
//     suit: 'hearts',
//     value: 10
// },
// ]


// var cards = {
//     clubs: [1,2,3,4,5,6,7,8,9,10,'jack','queen','king','ace'],
//     hearts: [1,2,3,4,5,6,7,8,9,10,'jack','queen','king','ace'],
//     spade: [1,2,3,4,5,6,7,8,9,10,'jack','queen','king','ace'],
//     diamond: [1,2,3,4,5,6,7,8,9,10,'jack','queen','king', 'ace']
// }

// var cards = {one: 'onek', two: 'twok', three: 'threek'}


// var suits =  ['hearts', 'diamonds', 'spades', 'clubs']
// var value =  [1,2,3,4,5,6,7,8,9,10,'jack','queen','king', 'ace']

// console.log(cards.suits[Math.floor(Math.random() * 4)])
// console.log(cards.value[Math.floor(Math.random() * 14)])


// const chooseCard = (suits, value, num) => {
//     for(var i = 0; i < num; i++){
//        `${value[Math.floor(Math.random() * 14)]} of ${suits[Math.floor(Math.random() * 4)]}`
//     }
// }


// console.log(chooseCard(suits,value,3))

// var suits = ['hearts', 'diamonds', 'spades', 'clubs']
// var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ['jack',10], ['queen',11], ['king',12], ['ace',11]]

// const chooseCard = (suits, value, num) => {
//     newStr = []
//     if (num > 10) {
//         return `number should be 10 or less`
//     } else {
//         for (var i = 0; i < num; i++) {
//             var value1 = value[Math.floor(Math.random() * 14)]
//             var suits1 = suits[Math.floor(Math.random() * 4)]
//             if (!newStr.includes(`${value1} of ${suits1}`)) {
//                 newStr.push(`${value1} of ${suits1}`)
//             } else {
//                 var value1 = value[Math.floor(Math.random() * 14)]
//                 var suits1 = suits[Math.floor(Math.random() * 4)]
//                 newStr.push(`${value1} of ${suits1}`)
//             }
//             return newStr.join('\n')
//         }
//     }
// }



var suits = ['hearts', 'diamonds', 'spades', 'clubs']
var value = [[2,2],[3,3] [4,4], [5,5], [6,6], [7,7], [8,8], [9,9], [10,10], ['jack',10], ['queen',10], ['king',10], ['ace',11]]

var total = 0
const chooseCard = (suits, value, num) => {
    newStr = []
    if (num > 10 || !num) {
        return `Please enter a number, it should be between 1 and 10; inclusive.`
    } else {
        for (var i = 1; i <= num; i++) {
            var value1 = value[Math.floor(Math.random() * 13)]
            var suits1 = suits[Math.floor(Math.random() * 4)]
            if (!newStr.includes(`${value1} of ${suits1}`)) {
                newStr.push(`${value1} of ${suits1}`)
                total += value1
            } else {
                var value1 = value[Math.floor(Math.random() * 13)]
                var suits1 = suits[Math.floor(Math.random() * 4)]
                newStr.push(`${value1} of ${suits1}`)
                total += value1
            }
        }
        return newStr.join('\n')
    }
}

console.log(chooseCard(suits,value, 2))

// year/:year
// title/:title
// genre/:genre