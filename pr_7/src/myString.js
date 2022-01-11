// 1)Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
//  который параметром принимает строку, а возвращает ее в перевернутом виде, метод
// ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее
// первую букву заглавной и метод ucWords, который принимает строку и делает заглавной
// первую букву каждого слова этой строки

class MyString {
    reverse(string) {
        if (typeof string !== 'string' || string === '') {
            return false;
        }

        return string.split('').reverse().join('')
    }

    ucFirst(string) {
        if (typeof string !== 'string' || string === '') {
            return false;
        }

        return string[0].toUpperCase() + string.slice(1);
    }

    ucWords(string) {
        if (typeof string !== 'string' || string === '') {
            return false;
        }

        let strArr = string.split(' ');

        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = this.ucFirst(strArr[i]);
        }

        return strArr.join(' ');
    }
}

const str = new MyString();

console.log(str.reverse('')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

module.exports = str;
