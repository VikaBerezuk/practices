const { getObjectDiff } = require('../getObjectDiff');

describe('get object diff', () => {
    const obj = { a: 1, b: { c: 1 } };
    test('test', () => {
       expect(true).toBe(true);
    });

    test('the same object', () => {
        expect(getObjectDiff(obj, obj)).toBe(true);
    });

    test('the same object', () => {
       expect(getObjectDiff({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toEqual(true);
    });

    test('the same object', () => {
        expect(getObjectDiff({}, {})).toEqual(true);
    });

    test('the same object', () => {
        expect(getObjectDiff({a: 1}, {b: 1})).toEqual(false);
    });

    test('the same object', () => {
        expect(getObjectDiff({a: 1}, {a: 2})).toEqual(false);
    });
});