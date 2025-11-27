const student = Symbol("Yme")
const person = Symbol("Yme")

console.log(student, student.toString(), student.description, student === person)

//uppercase valuables gaat over waarden die nooit zullen veranderen en je gebruikt hun in heel je project
const STATES = {
    LOADING: Symbol("Laden"),
    LOADED: Symbol("Laden")
}

console.log(STATES.LOADED === STATES.LOADING)