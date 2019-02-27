/**
 * Pig Latin
 * Translate the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * Input strings are guaranteed to be English words in all lowercase.
 */

 // Currently very bumped out by this one
 // Below is a neat solution I found (still trying to understand it) and my own (commented) code
 function translatePigLatin(str) {
    // const vowelsStart = /^[aeiou]/;
    // const consonants = /^[^aeiou]+[aeiou]/
    // if (str.match(vowelsStart)) return `${str}way`
  
    // let matchedCluster = str.match(consonants);
  
    // if (matchedCluster[0].length === 2) {
    //   return `${str.slice(matchedCluster.join('').length - 1)}${matchedCluster[0][0]}ay`
    // } else {
    //   return `${str.slice(matchedCluster.join('').length - 1)}${matchedCluster[0][0]}${matchedCluster[0][1]}ay`
    // }
    // if
    return str
        .replace(/^([aeiou])(.*)/, '$1$2way')
        .replace(/^([^aeiou]+)(.*)/, '$2$1ay');
  }