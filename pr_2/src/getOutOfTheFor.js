// 2)Нужно выйти из цикла, изменив только две отмеченные строки.
// Результат в консоли сейчас останавливается на 19 19. Должен на 15 14.
function getOutOfTheFor () {
    let result = '';
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                break;
            }
            result = result.concat(`${i} ${j} `)
        }
    }
    return result;
}
console.log(getOutOfTheFor());

module.exports = { getOutOfTheFor };