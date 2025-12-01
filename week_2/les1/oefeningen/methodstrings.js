const woorden = [
  'mal',
  'snurkduif',
  'bromvlieg',
  'snottebel',
  'knotsgek',
  'pindakaas',
  'fluitketel',
  'smurfenmuts',
];

const koppel = woorden.join('-')
console.log(koppel)

woorden.unshift('Hello')
console.log(woorden)

const twoLetters = woorden.every(woord => woord.length > 2)
console.log(twoLetters)

woorden.sort()
console.log(woorden)

const thirdWord = woorden[2];
console.log(thirdWord)

const longWords = woorden.filter(woord=> woord.length > 4)
console.log(longWords)