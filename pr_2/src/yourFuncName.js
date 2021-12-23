//1) Написать функцию, выводящую в консоль числа от 1 до n (где n —
// это целое число), которая функция принимает в качестве параметра, с
// такими условиями:
// вывод three вместо чисел, кратных 3;
// вывод five вместо чисел, кратных 5;
// вывод threeFive вместо чисел, кратных как 3, так и 5.
// Пример  YourFuncName(5) Результат// 1// 2// three// 4// five
function yourFuncName(x) {

    if(typeof x !== 'number') {
        return false;
    }

    let result = '';

    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = result.concat('threeFive ');
        } else if (i % 3 === 0) {
            result = result.concat('three ');
        } else if (i % 5 === 0) {
            result = result.concat('five ')
        } else {
            result = result.concat(`${i} `);
        }
    }

    return result;
}
console.log(yourFuncName(5));

module.exports = { yourFuncName };