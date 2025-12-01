// Genereer een array met 10 willekeurige getallen tussen 1 en 100`
const willekeurigeGetallen = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log(willekeurigeGetallen);

const groterDanTien = willekeurigeGetallen.filter(getal => getal > 10)
console.log(groterDanTien)

willekeurigeGetallen.pop()
console.log(willekeurigeGetallen)

willekeurigeGetallen.shift()
console.log(willekeurigeGetallen)

willekeurigeGetallen.push(5);
console.log(willekeurigeGetallen);

const kleinerDanTien = willekeurigeGetallen.every(getal => getal < 20)
console.log(kleinerDanTien)

const string = willekeurigeGetallen.join(' ')
console.log(string)

const totaal = willekeurigeGetallen.reduce((totaal, twee) => totaal + twee, 0)
console.log(totaal)

const verdubbeld = willekeurigeGetallen.map(getal => getal * 2)
console.log(verdubbeld)

const groterDanDertig = willekeurigeGetallen.some(getal => getal > 30)
console.log(groterDanDertig)