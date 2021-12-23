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
    } else {
        let string = arg.split('');
        if (string[0] === string[0].toUpperCase() && string.length > 2 && string.length < 20) {
            for (let i = 0; i <= string.length; i++) {
                for (let j = 0; j <= symbol.length; j++) {
                    if (string[i] === symbol[j]) {
                        result = result + symbol[i];
                    }
                }
            }
            return 'VALID';
        } else {
            return 'INVALID';
        }
    }
}

module.exports = { validation };