//1 Написать функцию, которая проверяет является ли строка палиндромом;
function isPalindrome(str) {
    let string = str;
    if(typeof str !== 'string' || str === null || str === '') {
        return 'in valid'
    }
    return str === string.split('').reverse().join('');
}


module.exports = { isPalindrome };