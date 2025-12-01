const person = {
    naam: "Anna",
    leeftijd: 25,
    adres: {
        straat: "Hoofdstraat",
        nummer: 123,
        stad: "Stadsville" }

}

const extraInfo = {
  hobby: "lezen",
  favorieteKleur: "blauw"
}

person.telefoon = "0612345678"

Object.assign(person, extraInfo)

console.log(person.adres.nummer)
console.log(person)
