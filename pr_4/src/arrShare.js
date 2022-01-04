// 3)Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
function arrShare(array, size) {
    const chunkedArr = [];
    let index = 0;

    if(typeof array !== 'object' || typeof size !== 'number') {
        return false;
    }

    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index = index + size;
    }
    return chunkedArr;
}
console.log(arrShare([1, 2, 3, 4, 5], 3))//[ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(arrShare([1, 2, 3, 4, 5], 2))//[[1, 2], [3, 4], [5]]

module.exports = { arrShare };