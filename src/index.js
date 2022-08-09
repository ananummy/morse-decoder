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

const BINARY_MORSE_TABLE = {
    '10': '.',
    '11': '-',
    '00': ''
}

function decode(expr) {
    const letterLength = 10
    const space = '**********'
    const regexp = new RegExp(`.{1,${letterLength}}`, 'g')
    const letterArr = expr.match(regexp)
    const resultArr = []
    let engWord = ''
    let morseLetter = ''

    for(let l = 0; l < letterArr.length; l++){
        let letter = letterArr[l]
        morseLetter = ''
        
        if (letter === space){
            resultArr.push(engWord)
            resultArr.push(' ')
            engWord = ''
            continue
        }
        
        for(let i = 0; i < letter.length-1; i += 2) {
            morseLetter += BINARY_MORSE_TABLE[`${letter[i]}${letter[i+1]}`]
        }
        
        engWord += MORSE_TABLE[morseLetter]

    }
    resultArr.push(engWord);
    return resultArr.join('')
}

module.exports = {
    decode
}
