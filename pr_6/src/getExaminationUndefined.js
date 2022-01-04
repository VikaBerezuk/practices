//4) Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
// Ожидаемый результат: ({}) => true,
// ({ a: undefined }) => true,
// ({ a: 1 }) => false
function getExaminationUndefined(obj) {
    let result;

    if (typeof obj !== 'object') {
        return false;
    }

    if(Object.keys(obj).length === 0) {
        return true;
    }

    Object.values(obj).forEach(el => {
        if(el === undefined) {
            result =  true;
        } else {
            result = false;
        }
    });

    return result;
}

console.log(getExaminationUndefined({}))
console.log(getExaminationUndefined({ a: undefined }))
console.log(getExaminationUndefined({ a: 1 }))
// ({ a: undefined }) => true,
// ({ a: 1 }) => false

module.exports = {getExaminationUndefined}