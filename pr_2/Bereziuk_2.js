//1) Написать функцию, выводящую в консоль числа от 1 до n (где n —
// это целое число), которая функция принимает в качестве параметра, с
// такими условиями:
// вывод three вместо чисел, кратных 3;
// вывод five вместо чисел, кратных 5;
// вывод threeFive вместо чисел, кратных как 3, так и 5.
// Пример  YourFuncName(5) Результат// 1// 2// three// 4// five
function YourFuncName(n) {
    for(let i = 1; i <= n; i++) {
        if(i % (3 * 5) === 0) {
            console.log('threeFive');
        } else if(i % 3 === 0) {
            console.log('three');
        } else if(i % 5 === 0) {
            console.log('five');
        } else {
            console.log(i);
        }
    }
}
//console.log(YourFuncName(16));
// 2)Нужно выйти из цикла, изменив только две отмеченные строки.
// Результат в консоли сейчас останавливается на 19 19. Должен на 15 14.
// for (let i = 0; i < 20; i++) {
//     if(i === 16) {
//         break
//     }
//    for (let j = 0; j < 20; j++) {
//        if (i === 15 && j === 15) {
//          break;
//        }
//        console.log(i, j);
//    }
// }
// 3) Нужно написать функцию, которая проверяет, являются ли
// две строки анаграммами, причем регистр букв не имеет
// значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// Анаграмма- слово, которое содержит все буквы другого слова
// в том же количестве, но ином порядке
//const sort = (str) => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]| /g,"").toLowerCase().split('').sort().join('');
function  isAnagram(str1, str2) {
    if(typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'Вы ввели не стороку!';
    }
    if(str1.trim() === str2.trim() && sort(str1) === sort(str2) ) {
        return true;
    }
    return str1.trim() === str2.trim() ? false : sort(str1) === sort(str2);
}
// console.log(isAnagram(111, 111));// 'Вы ввели не стороку!'
// console.log(isAnagram('cat !*bv', 'bv#%&*tac')); // true
// console.log(isAnagram('cat', 'qac')); // false
// console.log(isAnagram('cat', 'cat')); // true
