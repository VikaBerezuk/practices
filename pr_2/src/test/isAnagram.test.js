const { isAnagram } = require('../isAnagram');

describe('isAnagram', () => {
    test('not string', () => {
        expect(isAnagram(111, 111)).toBe('Not string');
    });
    test('is anagram', () => {
        expect(isAnagram('cat !*bv', 'bv#%&*tac')).toBe(true);
    });
    test('is anagram', () => {
        expect(isAnagram('cat', 'cat')).toBe(true);
    });
    test('not anagram', () => {
        expect(isAnagram('cat', 'qac')).toBe(false);
    });
    test('str1 length !== str2 length', () => {
        expect(isAnagram('vika', 'qac')).toBe(false);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})