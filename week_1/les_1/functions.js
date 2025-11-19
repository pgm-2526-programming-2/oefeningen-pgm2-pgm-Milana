function sum(a, b) {
    return a + b ;
}

const name = 'Milana'
const divisio = () => {}
const multiplier = function () {}

function selectRandomStudent(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
}

const age = 21
const students = ['Yme', 'Arne', 'Mert']

console.log(sum(age,12))
console.log(20)
console.log(selectRandomStudent(students))

function showMessage() {
    console.log('Answer checker message')
}

function checkAnswer(answer, solution, callback){
    if (answer===solution) {
        callback()
        return true
    }

    callback()
    return false

}

checkAnswer('Ja', 'Ja', showMessage)

function sum (a, b){
    return a + b
}

function multiply(a, b) {
    return a * b
}

function division(a, b){
    return a / b
}

function showCalculation(a,b,callback) {
    console.log(callback(a, b))
}



showCalculation(1,1, sum)
showCalculation(1,1, multiply)
showCalculation(1,1, division)

