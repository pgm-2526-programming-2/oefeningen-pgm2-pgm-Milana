//operators
// >< ===, !==, etc

//spread en rest operator
//drie puntjes/...

const numbers = [1, 2, 3]
console.log(numbers, ...numbers)

//reden om mee te spreaden?
//kopie maken van een referentie datatype.

const students = ["Mert", "Yens"]
students.push("Farah")
const friends = students

//const people = [students] //[["Mert", "Yens", "Farah"]]
const people = [...students]
students.push("Milana")

//Students - ["Mert", "Yens", "Farah", "Milana"]
//Friends - ["Mert", "Yens", "Farah", "Milana"]
//People - ["Mert", "Yens", "Farah"]

// 2. Om arrays samen te voegen.
const apero = ["Pintje", "Gin", "Mocktail"]
const snacks = ["Frikandel", "Chipjes"]

const menu = [...drinks, "Cola", ...snacks]

//dit werkt ook allemaal met objecten

const car = {
    brand: "Citroen",
    model: "C8",
    year: 2011
}

const upgrade = {
    spoiler: true,
    extra: ["GPS", "custom Uitlaat"]
}

car.upgrade = upgrade

/*
const car = {
    brand: "Citroen",
    model: "C8",
    year: 2011
    upgrade = {
        spoiler: true,
        extra: ["GPS", "custom Uitlaat"]
    }
}
    */

const upgradedCar = {
    ...car,
    ...upgrade

}

/*
const upgradedCar = {
    brand: "Citroen",
    model: "C8",
    year: 2011
    spoiler: true,
    extra: ["GPS", "custom Uitlaat"]
    
}
    */

//Object key advancedsyntax

const a = 'Hello'

const obj = {
    a: a
}

//a:a(eerste is de key, tweede is een variabele)
//a: "hello"
//korte schrijfwijze: a