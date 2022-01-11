const MyString = require('../myString')

describe('Tests for class MyString (reverse, ucFirst, ucWords', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('Test for method reverse', () => {
        expect(MyString.reverse('abcde')).toBe('edcba')
    })

    test('Test for reverse empty',() => {
        expect(MyString.reverse('')).toBe(false)
    })

    test('Test for method ucFirst', () => {
        expect(MyString.ucFirst('abcde')).toBe('Abcde')
    })

    test('Test for ucFirst empty',() => {
        expect(MyString.ucFirst('')).toBe(false)
    })

    test('Test for method ucWords', () => {
        expect(MyString.ucWords('abcde, abcde, abcde')).toBe('Abcde, Abcde, Abcde')
    })

    test('Test for ucWords empty',() => {
        expect(MyString.ucWords('')).toBe(false)
    })
})