const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(morseCode) {
    let morseCodeArr = [];
    let morseArr = [];
    let tempString = ``;
    let decodingResult = ``;
    for (let i = 0; i < morseCode.length; i++) {
      tempString += morseCode[i];
      if (tempString.length === 10) {
        if (tempString !== `**********`) {
          while (tempString.startsWith(`0`)) {
            tempString = tempString.slice(1);
          }
        }
        morseCodeArr.push(tempString);
        tempString = ``;
      }
    }
    for (element of morseCodeArr) {
      let morseSymbol = ``;
      if (element === `**********`) {
        morseArr.push(` `);
      } else {
        for (let x = 0; x < element.length; x++) {
          if(element[x] === `1` && element[x + 1] === `0`) {
            morseSymbol += `.`;
            x++;
          } else if (element[x] === `1` && element[x + 1] === `1`) {
            morseSymbol += `-`;
            x++;
          }
        }
        morseArr.push(morseSymbol);
      }
    }
    for(element of morseArr) {
      if (element === ` `){
        decodingResult += ` `;
      } else {
        decodingResult += MORSE_TABLE[element];
      }
    }
    return decodingResult;
  }

module.exports = {
    decode
}