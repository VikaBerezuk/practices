const { checkNumber } = require('../checkNumber');

describe('checkNumber', () => {
    test('check number: simple, even, multiple of ten', () => {
        expect(checkNumber(7)).toEqual([true, false, false]);
    });
    test('check number: simple, even, multiple of ten', () => {
        expect(checkNumber(-10)).toEqual([false, true, true]);
    });
    test('check number: simple, even, multiple of ten', () => {
        expect(checkNumber(0)).toEqual([false, true, true]);
    });
    test('not number', () => {
        expect(checkNumber([])).toEqual(false);
    });
    test('not number', () => {
        expect(checkNumber('1')).toEqual(false);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});