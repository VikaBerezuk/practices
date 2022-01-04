const { getArrNoRepeat } = require('../getArrNoRepeat');

describe('getArrNoRepeat',  () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('filter Array no repeat', () => {
        expect(getArrNoRepeat([1,2,4,5,2,3,5])).toEqual([1,2,4,5,3])
    });

    test('not arr', () => {
        expect(getArrNoRepeat()).not.toContain(false);
    });
})