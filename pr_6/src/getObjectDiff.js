//2) Напишите функцию, которая делает глубокое сравнение объектов.
// Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c:
// 1 } }) => true

function getObjectDiff(obj1, obj2) {
    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);

    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    for (let key of keysObj1) {
        if (!keysObj2.includes(key) || !getObjectDiff(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

console.log(getObjectDiff({}, {}))
console.log(getObjectDiff({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }))
console.log(getObjectDiff({ a: 1, b: { c: 1 } }, { a: 1, b: { b: 2 } }))

module.exports = {getObjectDiff};