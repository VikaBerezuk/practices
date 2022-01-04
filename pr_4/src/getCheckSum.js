//1)Cоздать функцию, которая возвращает true или false, в зависимости от того, может ли сумма любых двух чисел из массива быть
// равной заданному значению.
// Другими словами, есть ли в массиве два целых числа x и y, которые при сложении равны указанному значению?
// a)Если нам дали массив [1, 2, 4, 9] и значение 8, функция вернет false, потому что никакие два числа из массива не могут дать 8 в сумме.
// б)Но если это массив [1, 2, 4, 4] и значение 8, функция должна вернуть true, потому что 4 + 4 = 8.
function getCheckSum(arr, val) {
    if(typeof arr !== 'object' || typeof val !== 'number') {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && (arr[i] + arr[j]) === val) {
                return true;
            }
        }
    }
    return false;
}
console.log(getCheckSum([1, 2, 4, 9], 8))//false
console.log(getCheckSum([1, 2, 4, 4], 8))//true

module.exports = { getCheckSum };