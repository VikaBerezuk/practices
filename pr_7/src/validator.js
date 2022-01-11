// 2)Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет
// метод isEmail параметром принимает строку и проверяет, является ли она корректным
// емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того,
//     класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate
// для проверки даты и метод isPhone для проверки телефона:

class Validator {
    isEmail(string) {
        const regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return regExp.test(String(string).toLowerCase());
    }

    isDomain(domain){
        return /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/.test(domain);
    }

    isDate(date) {
        const reg = /^(([1-2][0-9])|(3[0-1])|(0[1-9]))(\/|\-|\.)((0[1-9])|(1[0-2]))(\/|\-|\.)([0-9]([0-9]{2})([1-9]))$/;
        return reg.test(date);
    }

    isPhone(phone) {
        const regExp = /((380|\+380|0)?)[ .-]?[(]?(29|39|50|63|66|67|68|91|92|93|94|95|96|97|98|99|31|32|33|34|35|36|37|38|41|42|43|44|46|47|48|49|51|52|53|54|55|56|57|58|59|61|62|64|65|69)[)]?[ .-]?\d{3}[ .-]?\d{2}[ .-]?\d{2}/;
        return regExp.test(String(phone));
    }
}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));//
console.log(validator.isDomain('phphtml.net'));//
console.log(validator.isDate('12.05.2020'));//
console.log(validator.isPhone('+380 (29) 817-68-92'))//

module.exports = { validator };