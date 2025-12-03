function mergeObjects (object1, object2) {
    return {
        ...object1,
        ...object2
    }
}

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }