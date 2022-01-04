const {oneArray} = require('../oneArray');

describe('one array', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('types no array',  () => {
        expect(oneArray(111)).toEqual(false);
    });

    test('deep array to one-dimensional', () => {
        expect(oneArray( [1, 2, [3, 4, [5]]])).toEqual([1, 2, 3, 4, 5]);
    })
})