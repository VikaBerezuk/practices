const { isPalindrome } = require('../isPalindrome');

describe('isPalindrome', () => {
    test('sting === palindrome', () => {
        expect(isPalindrome('vav')).toBe(true);
    });
    test('string !== palindrome', () => {
        expect(isPalindrome('test')).toBe(false);
    });
    test('string === null', () => {
        expect(isPalindrome(null)).toBe('in valid');
    });
    test('string === ""', () => {
        expect(isPalindrome('')).toBe('in valid');
    });
    test('string === number', () => {
        expect(isPalindrome(11)).toBe('in valid');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})