import encodeMorse from '../encodeMorse';

describe('encode Morse' , () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test.each([
        ['  HEY JUDE  ', ".... . -.-- .--- ..- -.. ."],
        ['hey jude ', ".... . -.-- .--- ..- -.. ."],
        ['SOS', '...---...']
    ])('encode morse', function (arg, result) {
        expect(encodeMorse(arg)).toBe(result)
    })
})