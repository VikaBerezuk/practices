const { user, bind } = require('../myBind');

describe('my bind', () => {
    const alex = bind(user,  { userName: "Alex" });

    test('test', () => {
        expect(true).toBe(true);
    });

    test('examination on null and undefined',  () => {
        expect(user()).toBeDefined();
    });

    test('the passed value is not a string', () => {
        expect(user(111, {a:11})).toBe(false);
    });

    test('check bind', () => {
        expect(alex("Hello", ".")).toEqual('Hello Alex.');
    });

    test('check bind', () => {
        expect(alex("How are you", "?")).toEqual('How are you Alex?');
    });
})