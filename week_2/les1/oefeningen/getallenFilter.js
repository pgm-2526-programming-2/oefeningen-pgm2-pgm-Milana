

let willekeurigeGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(willekeurigeGetallen);

function filterEvenGetallen(getallen) {
  return willekeurigeGetallen.filter(n => n % 2 === 0);
}

console.log(evenGetallen)