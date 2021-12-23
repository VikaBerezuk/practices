// 3) Создайте функцию, которая принимает два аргумента:
// число, представленное в виде строки, и число. Если аргумент типа number делится на 3, 5 и 15 без остатка
// - умножьте его на -1. Функция должна возвращать числовую сумму двух аргументов.
function getSumArguments(str, num) {
    if(typeof str !== 'string') {
        return false;
    }
    let num1 = parseFloat(str);
    if (num1 % 3 === 0 && num1 % 5 === 0 && num1 % 15 === 0
        && num % 3 === 0 && num % 5 === 0 && num % 15 === 0) {
        return (num1 + num) * (-1);
    } else {
        return false;
    }
}

console.log(getSumArguments('30', -30))//sum

module.exports = { getSumArguments };