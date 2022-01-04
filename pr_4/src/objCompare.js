// 4) Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
// function objCompare(obj1, obj2) {
//     if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
//         return true;
//     } else {
//         return false;
//     }
// }
function objCompare(a, b) {
    for(let key in a) {
        if(!(key in b) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

console.log(objCompare({ a: 1, b: 1 }, { a: 1, b:2}))// false
console.log(objCompare({ a: 1, b: 1 }, { b: 1, a: 1 })) //true

module.exports = { objCompare }