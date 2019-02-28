/**
 * Missing Letter
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */
function fearNotLetter(str) {
    if (str.length === 26) return undefined;
    const completeAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of completeAlphabet.slice(completeAlphabet.indexOf(str[0]))) {
      if (!str.includes(letter)) {
        console.log(letter)
        return letter;
      }
    }
  }