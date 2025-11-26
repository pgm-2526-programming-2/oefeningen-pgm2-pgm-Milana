const games = ["SuperMario Bros" , "Zelda" , "N+ Game" , "Pokemon"]
const favoriteGames = [{
    name: "Super Mario Bros",
    releaseYear: 1980},
{
    name: "Zelda",
    releaseYear: 1984,
}
]

const altGames = new Array()

Array.isArray(games) //true

const secondGame = games[1]
const altSecondGame = games.at(1)
const lastGame = games.at(-1) // games[length - 1]

const values = [
    "Milana", 
    function () {
        console.log('Hello')
    }
]

const amountOfFavGames = favoriteGames.length

games.length = 3
const topThree = games

games.length = 4



const stringArray = "[1, 2, 3, 4]"
const numbers = JSON.parse(stringArray)
console.log(typeof(stringArray), typeof(numbers))

numbers.push(5)

const numbersString = JSON.stringify(numbers)

console.log(stringArray, numbers, numbersString)

const students = ["Nick", "Mert", "Yens"]
const people = ["Nick", "Mert", "Yens"]

const teacher = "Adriaan"
const friend = "Adriaan"

console.log(teacher === friend) // true
console.log(students === people) // false


function areArrayEqual(one,two){
    const first = JSON.stringify(one)
    const second = JSON.stringify(two)

    return first === second
}

function areArrayEqual(arrOne,arrTwo){
    return JSON.stringify(arrOne) === JSON.stringify(arrTwo)
}

console.log(areArrayEqual(students, people));



const matrix = [
    ['0', '0' , '0', '0'],
    ['0', 'X' , '0', '0'],
    ['0', '0' , '0', '0'],
    ['0', '0' , '0', '0'],
]

matrix[1][1]

const colors = ["red", "green", "blue"]

for(let i = 0; i< colors.length; i++){
    const currntColor = colors[i]
    console.log(currntColor)
}

for(const color of colors){
    console.log(color)
}

colors.forEach((color) => {
    console.log(color)
})

colors.forEach(function (color){
    console.log(color)
})

colors.push("eind toevoegen")
colors.pop("eind verwijderen")
colors.unshift("begin van Array toevoegen")
colors.shift("begin verwijderen")

console.log('numbers', numbers)
const doubleNumbers = numbers.map((value, index) => {
    return value * 2
})

console.log('Double Numbers', doubleNumbers)

console.log('Double Numbers', doubleNumbers.join(' , '))

const numbersWithoutEight = doubleNumbers.filter((value) => {
    return value != 8

})

console.log(numbersWithoutEight)

numbers.some((number) => {
    return number === 8
})

numbers.some((number) => number === 8)

numbers.every((number) => {
    return number === 8

})
 


//reduce -> minder maken

// van een array naar 1 getal te gaan (meestal een som/optelling)

const sales = [4, 10, 6] 


sales.reduce((prevValue, currentValue)=>{
    return prevValue + currentValue


})

// Loop 1: 0 + 4 = 4
// Loop 2: 4 + 10 = 14
// Loop 3: 14 + 6 = 20

const products = [
    {name: "Shirt", price: 20},
    {name: "Shoes", price: 50},
    {name: "Hat", price: 15},
]

const totalProducts = products.reduce((prevValue, currentValue)=>{
    return prevValue + currentValue.price
}, 0)

console.log(totalProducts)