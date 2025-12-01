let woordenArray = ['appel', 'peer', 'kiwi', 'banaan']

woordenArray.sort((a, b) => b.length - a.length)
let langsteWoord = woordenArray[0]
console.log(langsteWoord)