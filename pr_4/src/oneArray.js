// 2) Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
//const oneArray = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? oneArray(val) : val), []);
function oneArray(arr) {
    if(typeof arr !== 'object') {
        return false;
    }

    return arr.reduce((acc, val) =>
        acc.concat(Array.isArray(val) ? oneArray(val) : val), [])
}

console.log(oneArray([1, 2, [3, 4, [5]]]));

module.exports = { oneArray };