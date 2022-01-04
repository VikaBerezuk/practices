const { objCompare } = require('../objCompare');

describe("obj compare",  () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('test undefined', () => {
        expect(objCompare()).toBeDefined();
    });

    test('test  types', () => {
        expect(objCompare('11', {a:1})).toEqual(false);
    });

    test('object compare', () => {
        expect(objCompare({ a: 1, b: 1 }, { a: 1, b: 2 })).toBe(false);
    });

    test('object compare', () => {
        expect(objCompare({ a: 1, b: 1 }, { a: 1, b: 1 })).toBe(true);
    });
})