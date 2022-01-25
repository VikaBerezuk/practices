import {mappings} from "./index";

export default function encodeMorse(string:string):string {
    let result = '';
    if('SOS' === string) {
        mappings.forEach(el => el.translation === "SOS" ? result = el.symbol : '');
        return  result;
    }

    const arr = string.toUpperCase().split('');

    arr.forEach(x => {
        mappings.forEach(el => {
            if (el.translation === x) {
                result += el.symbol + " ";
            }
        })
    })

    return result.trim();
}

console.log(encodeMorse('HEY JUDE'))//".... . -.-- .--- ..- -.. ."
console.log(encodeMorse('hey jude'))