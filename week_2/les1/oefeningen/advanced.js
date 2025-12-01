
function sorterenOpEigenschap(objecten, eigenschap) {
  return objecten.sort((a, b) => {
    const waardeA = a[eigenschap];
    const waardeB = b[eigenschap];

    if (waardeA < waardeB) return -1;
    if (waardeA > waardeB) return 1;
    return 0
})
}
let objectenArray = [
  { naam: 'Anna', leeftijd: 30 },
  { naam: 'Bob', leeftijd: 25 },
  { naam: 'Charlie', leeftijd: 35 },
];
let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, 'naam');