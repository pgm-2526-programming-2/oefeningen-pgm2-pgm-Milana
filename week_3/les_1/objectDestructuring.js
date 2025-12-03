const person = {
    firstname: "Milana",
    lastname: "Akhmadova",
    Age: 21
}

const myfirstnamefirstname = person.firstname  //belletje! variabele zelfde als key naam?

const mylastnamelastname= person.lastname

const myageage= person.age

const {myfirstname, mylastname, myage} = person

//const {firstname , age} = person
console.log(age, gender) //(21, undefined)

//verschil tussen array en object destructuring, object is op basis van een key! niet de index! dus de volgorde maakt niet uit in tegenstelling tot array destructuring 

const {firstname, age, gender = 'Female'} = persoon

//nadeel van object destructuring! zelfde naam als key in object

const options = {
    c: 20000,
    w: 30000,
    mod: "C8"
}

const {w: weight, mod: model, c:cost, b: brand= "Citroen"} = options //nieuwe variabele naam

const {w: altWeight, ...rest} = options

/*rest

*/

const song = {
    name: "Flowers",
    artist: "Miley"
}

const edit = {
    name: "7 things"
}

function editSong(s, {name}) {
    s.name = name
}

editSong = (song, edit)