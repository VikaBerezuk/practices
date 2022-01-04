//3) Напишите функцию, которая убирает повторяющиеся значения в массиве.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3

function getArrNoRepeat(arr) {

    if(typeof arr !== 'object') {
        return false;
    }

    const result = [];
    arr.forEach(item => {
        if(result.indexOf(item) < 0) {
            result.push(item);
        }
    });

    return result;
}

console.log(getArrNoRepeat([1, 2, 3, 1, 2]))
module.exports = { getArrNoRepeat };