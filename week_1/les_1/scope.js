const message = 'hey daar'

function sayHello(){
    const message = 'bye'
    console.log(message)

    const say = function () {
        console.log(message)
    }

    say()
}

sayHello()
console.log(message)