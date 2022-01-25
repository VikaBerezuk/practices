import {mappings} from "./index";

export default function decodeMorse(string:string):string {
    const arr = string.split('   ');
    let result = '';
    arr.forEach(item => {
       let el = item.split(' ');
       el.forEach(x => {
           mappings.forEach(elem => {
               if (elem.symbol === x) {
                   result += elem.translation;
               }
           })
       })
        result += " ";
    })

    return result.trim();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))//should return "HEY JUDE"