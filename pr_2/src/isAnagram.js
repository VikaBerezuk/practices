// 3) Нужно написать функцию, которая проверяет, являются ли
// две строки анаграммами, причем регистр букв не имеет
// значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// Анаграмма- слово, которое содержит все буквы другого слова
// в том же количестве, но ином порядке
function  isAnagram(str1, str2) {

    if(typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'Not string';
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    str1 = str1.replace(/[^a-zа-я]+/g, '').split('');
    str2 = str2.replace(/[^a-zа-я]+/g, '').split('');

    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.sort().join('');
    str2 = str2.sort().join('');

    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}
console.log(isAnagram(111, 111));// 'Вы ввели не стороку!'
console.log(isAnagram('cat !*bv', 'bv#%&*tac')); // true
console.log(isAnagram('cat', 'qac')); // false
console.log(isAnagram('cat', 'cat')); // true

module.exports = { isAnagram };