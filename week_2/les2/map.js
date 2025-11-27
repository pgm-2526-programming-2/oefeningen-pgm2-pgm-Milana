
const regionNotation = 'btw'

const product = {
    price: 25,
    name: 'Gameboy',
    [regionNotation]: 21
}

const productKeys = Object.keys(product)

product.color = 'Red'
product.color = 'Blue'
product[regionNotation] = 32,
product[test] = 40

const productMap = new Map()
productMap.set('price', 25),
productMap.set('name', 'Gameboy')
productMap.set('color', 'Red')
productMap.set('color', 'Blue')

const productMapLength = productMap.size

console.log(product, productMap)