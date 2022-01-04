const { getCheckSum } = require('../getCheckSum');

describe('check', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('test undefined', () => {
        expect(getCheckSum()).toBeDefined();
    });

    test('test  types', () => {
        expect(getCheckSum('ddd', 1)).toBe(false);
    });

    test('test  types', () => {
        expect(getCheckSum(['1'], "1")).toBe(false);
    });

    test('get check sum 2 value', () => {
       expect(getCheckSum([1, 2, 4, 9], 8)).toBe(false)
    });

    test('get check sum 2 value', () => {
        expect(getCheckSum([1, 2, 4, 4], 8)).toBe(true)
    });
})