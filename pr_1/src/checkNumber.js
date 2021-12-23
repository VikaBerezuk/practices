// 4) Создайте функцию, которая проверяет число на соответствие трем различным требованиям:
// - число простое
// - число четное
// - число кратно 10
// Каждый должен возвращать истину или ложь, которые должны
// быть представлены в виде массива.
// Число всегда будет целым, положительным или отрицательным.
// Обратите внимание, что отрицательные числа не могут быть простыми числами, но могут быть кратными 10.
// checkNumber(7) // ==> [true, false, false]
// checkNumber(-10) // ==> [false, true, true]
function checkNumber(value) {
    if(typeof value !== 'number') {
        return false;
    }
    const arr = [];
    if (isNaN(value) || value < 1) {
        arr[0] = false;
    } else {
        for (let i = 2; i <= value; i++) {
            if (value % i === 0) {
                arr[0] = false;
            }
        }
        arr[0] = true;
    }
    if (value % 2 === 0) {
        arr[1] = true;
    } else {
        arr[1] = false;
    }
    if (value % 10 === 0) {
        arr[2] = true;
    } else {
        arr[2] = false;
    }
    return arr;
}

console.log(checkNumber([]))// ==> [true, false, false]
console.log(checkNumber(0)) // ==> [false, true, true]


module.exports = { checkNumber };