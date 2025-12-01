const shoppingCart = {
  item1: { name: "Product 1", price: 20 },
  item2: { name: "Product 2", price: 30 },
  item3: { name: "Product 3", price: 15 },
};

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart)
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCart).map(item => item.price)
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCart).map(([key, item]) => [item.name, item.price])
console.log("Namen en prijzen van items:", itemEntries);