class MorseSymbol {
    symbol: string;
    translation: string;
    constructor(symbol: string, translation: string) {
        this.symbol = symbol;
        this.translation = translation;
    }
}

export const mappings: Array<MorseSymbol> = [
    new MorseSymbol('.-', 'A'),
    new MorseSymbol('-...', 'B'),
    new MorseSymbol('-.-.', 'C'),
    new MorseSymbol('-..', 'D'),
    new MorseSymbol('.', 'E'),
    new MorseSymbol('..-.', 'F'),
    new MorseSymbol('--.', 'G'),
    new MorseSymbol('....', 'H'),
    new MorseSymbol('..', 'I'),
    new MorseSymbol('.---', 'J'),
    new MorseSymbol('-.-', 'K'),
    new MorseSymbol('.-..', 'L'),
    new MorseSymbol('--', 'M'),
    new MorseSymbol('-.', 'N'),
    new MorseSymbol('---', 'O'),
    new MorseSymbol('.--.', 'P'),
    new MorseSymbol('--.-', 'Q'),
    new MorseSymbol('.-.', 'R'),
    new MorseSymbol('...---...', 'SOS'),
    new MorseSymbol('...', 'S'),
    new MorseSymbol('-', 'T'),
    new MorseSymbol('..-', 'U'),
    new MorseSymbol('...-', 'V'),
    new MorseSymbol('.--', 'W'),
    new MorseSymbol('-..-', 'X'),
    new MorseSymbol('-.--', 'Y'),
    new MorseSymbol('--..', 'Z'),
    new MorseSymbol('-----', '0'),
    new MorseSymbol('.----', '1'),
    new MorseSymbol('..---', '2'),
    new MorseSymbol('...--', '3'),
    new MorseSymbol('....-', '4'),
    new MorseSymbol('.....', '5'),
    new MorseSymbol('-....', '6'),
    new MorseSymbol('--...', '7'),
    new MorseSymbol('---..', '8'),
    new MorseSymbol('----.', '9')
];