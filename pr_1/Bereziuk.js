//1 Написать функцию, которая проверяет является ли строка палиндромом;
function isPalindrome(str) {
    let string = str;
    return str === string.split('').reverse().join('');
}

//2 Написать функцию, которая принимает аргумент и валидирует его по правилам:
// - Строка должна содержать буквы и специальные символы включая пробел: [ , ! , : , - , ? , . , , ]
// - Длина строки должна быть больше 2 символов и меньше 20
// - Начинаться строка должна с заглавной буквы
// Функция должна вернуть “VALID” или “INVALID”, в случае если в
// аргумент передана не строка вывести ‘Incorrect input data’ Без использования регулярных выражений
function validation(arg) {
    const symbol = [' ', '!', ':', '-', '?', '.', ','];
    let result;
    if (typeof arg !== 'string') {
        return 'Incorrect input data';
    } else if (typeof arg === 'string') {
        let string = arg.split('');
        if (string[0] === string[0].toUpperCase() && string.length > 2 && string.length < 20) {
            for (let i = 0; i <= string.length; i++) {
                for (let j = 0; j <= symbol.length; j++) {
                    if (string[i] === symbol[j]) {
                        result = result + symbol[i];
                    }
                }
            }
            if (result.length >= 1) {
                return 'VALID';
            }
        } else {
            return 'INVALID';
        }
    }
}

// console.log(validation(33))//
// console.log(validation([]))//
// console.log(validation('As,'))// VALID
// console.log(validation('As '))//VALID
// console.log(validation('ts '))
// console.log(validation('Ysj,. u:'))//VALID
// console.log(validation('As,tyhynvk,,,,,,,vnf mv mv ,v,nfmf'))//INVALID

// 3) Создайте функцию, которая принимает два аргумента:
// число, представленное в виде строки, и число. Если аргумент типа number делится на 3, 5 и 15 без остатка
// - умножьте его на -1. Функция должна возвращать числовую сумму двух аргументов.
function getSumArguments(str, num) {
    let num1 = parseFloat(str);
    if (num1 % 3 === 0 && num1 % 5 === 0 && num1 % 15 === 0 && num % 3 === 0 && num % 5 === 0 && num % 15 === 0) {
        return (num1 + num) * (-1);
    }
}

//console.log(getSumArguments('30', 15))//sum
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

console.log(checkNumber(7))// ==> [true, false, false]
console.log(checkNumber(-10)) // ==> [false, true, true]
