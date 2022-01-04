//5) Напишите свою реализацию метода bind
const bind = (func, context) => (...args) =>
    func.apply(context, [...args]);

// Пример:
function user(greeting, punctuation) {
    if(typeof greeting !== 'string' || typeof punctuation !== 'string') {
        return false;
    }
    return `${greeting} ${this.userName}${punctuation}`;
}

const alex = bind(user,  { userName: "Alex" });

console.log(alex("Hello", ".")); // 'Hello Alex!'
console.log(alex("How are you", "?"));

module.exports = { user, bind };