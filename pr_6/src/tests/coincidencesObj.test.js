const { coincidencesObj } = require('../coincidencesObj');

describe('coincidences object', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('coincidences object', () => {
        expect(coincidencesObj({ a: 1, b: 2 }, { c: 1, b: 2 })).toEqual({ b: 2 });
    });

    test('not object', () => {
        expect(coincidencesObj('1')).toEqual(false);
    });
})