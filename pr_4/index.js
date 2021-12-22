//1)Cоздать функцию, которая возвращает true или false, в зависимости от того, может ли сумма любых двух чисел из массива быть
// равной заданному значению.
// Другими словами, есть ли в массиве два целых числа x и y, которые при сложении равны указанному значению?
// a)Если нам дали массив [1, 2, 4, 9] и значение 8, функция вернет false, потому что никакие два числа из массива не могут дать 8 в сумме.
// б)Но если это массив [1, 2, 4, 4] и значение 8, функция должна вернуть true, потому что 4 + 4 = 8.
function check(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && (arr[i] + arr[j]) === val) {
                return true;
            }
        }
    }
    return false;
}
console.log(check([1, 2, 4, 9], 8))//false
console.log(check([1, 2, 4, 4], 8))//true
// 2) Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
//const oneArray = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? oneArray(val) : val), []);
function oneArray(arr) {
    return arr.reduce((acc, val) =>
        acc.concat(Array.isArray(val) ? oneArray(val) : val), [])
}

console.log(oneArray([1, 2, [3, 4, [5]]]));

// 3)Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
function arrShare(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index = index + size;
    }
    return chunkedArr;
}
console.log(arrShare([1, 2, 3, 4, 5], 3))//[ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(arrShare([1, 2, 3, 4, 5], 2))//[[1, 2], [3, 4], [5]]
// 4) Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
// function objCompare(obj1, obj2) {
//     if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function objCompare(a, b) {
//     for(let key in a) {
//         if(!(key in b) || a[key] !== b[key]) {
//             return false;
//         }
//     }
//     for(let key in b) {
//         if(!(key in a) || a[key] !== b[key]) {
//             return false;
//         }
//     }
//     return true;
// }
function objCompare(obj1, obj2) {
    return Object.keys(obj1).every(key => {
        return obj1[key] === obj2[key];
    });
}

console.log(objCompare({ a: 1, b: 1 }, { a: 1, b: 2 }))// false
console.log(objCompare({ b: 1, a: 1 }, { a: 1, b: 1 })) //true