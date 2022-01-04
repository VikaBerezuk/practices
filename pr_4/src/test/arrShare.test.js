const { arrShare } = require('../arrShare');

describe('arr share', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('test undefined', () => {
        expect(arrShare()).toBeDefined();
    });

    test('test  types', () => {
        expect(arrShare('1', [1])).toBe(false);
    });

    test('test  types', () => {
        expect(arrShare(1, 1)).toBe(false);
    });

    test('get array share', () => {
        expect(arrShare([1, 2, 3, 4, 5], 3)).toEqual([ [ 1, 2, 3 ], [ 4, 5 ] ])
    });

    test('get array share', () => {
        expect(arrShare([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    });
})