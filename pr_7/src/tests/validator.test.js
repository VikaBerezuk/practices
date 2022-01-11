const {validator} = require('../validator');

describe('validator email', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('',()=>{
        expect(validator.isEmail('')).toEqual(false);
    })

    test('777',()=>{
        expect(validator.isEmail(777)).toEqual(false);
    })

    test('text',()=>{
        expect(validator.isEmail('text')).toEqual(false);
    })

    test('vika@gmail.com',()=>{
        expect(validator.isEmail('vika@gmail.com')).toEqual(true);
    })

    test('vika@gmail.com',()=>{
        expect(validator.isEmail('vika@gmail.com.ua')).toEqual(true);
    })
})

describe('validator domain', () => {
    test('',()=>{
        expect(validator.isDomain('')).toEqual(false);
    })

    test('777',()=>{
        expect(validator.isDomain(777)).toEqual(false);
    })

    test('text',()=>{
        expect(validator.isDomain('text')).toEqual(false);
    })

    test('phphtml.net',()=>{
        expect(validator.isDomain('phphtml.net')).toEqual(true);
    })
})

describe('validator date',()=>{
    test('',()=>{
        expect(validator.isDate('')).toEqual(false);
    })

    test('777',()=>{
        expect(validator.isDate(777)).toEqual(false);
    })

    test('text',()=>{
        expect(validator.isDate('text')).toEqual(false);
    })

    test('20.07',()=>{
        expect(validator.isDate('20.07')).toEqual(false);
    })

    test('79.01.2022',()=>{
        expect(validator.isDate('79.01.2022')).toEqual(false);
    })

    test('01.01.2022',()=>{
        expect(validator.isDate('01.01.2022')).toEqual(true);
    })
})

describe('validator phone',()=>{
    test('',()=>{
        expect(validator.isPhone('')).toEqual(false);
    })

    test('777',()=>{
        expect(validator.isPhone(777)).toEqual(false);
    })

    test('text',()=>{
        expect(validator.isPhone('text')).toEqual(false);
    })

    test('7777777777',()=>{
        expect(validator.isPhone('7777777777')).toEqual(false);
    })

    test('0957759074',()=>{
        expect(validator.isPhone('0957759074')).toEqual(true);
    })

    test('+380 (29) 817-68-92',()=>{
        expect(validator.isPhone('+380 (29) 817-68-92')).toEqual(true);
    })
})