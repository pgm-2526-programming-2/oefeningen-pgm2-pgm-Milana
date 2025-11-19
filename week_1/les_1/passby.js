const name = 'Jan' //primitief
const age = 20 //primitief
const isStudent = true //primitief
const hobbies = ['Gaming' , 'Soccer'] //samengesteld of referentie
const address = {
    street: 'New york straat',
    number: 4
} //samengesteld of referentie

const interests = hobbies 

console.log(interests)

let total = 0

function addFiveToNumber(a=0){
    total = a + 5
    console.log(a + 5)
}
addFiveToNumber(2)
console.log('totaal:',total)

function doubleNumber(num){
    num = num * 2
    console?log(('binnen functie: ', num))
}

function doubleNumberWithReeference(obj){
    obj.number = obj.number * 2
    console.log(('binnen ref-functie', obj.number))
}

let originalNumber = 5

doubleNumber(originalNumber)

console.log('original number uit functie', originalNumber)

