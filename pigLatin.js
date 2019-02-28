/**
 * Pig Latin
 * Translate the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * Input strings are guaranteed to be English words in all lowercase.
 */

 function translatePigLatin(str) {
    return str
        .replace(/^([aeiou])(.*)/, '$1$2way') // try matching for when the str starts with a vowel, and re-arrange accordingly;
        .replace(/^([^aeiou]+)(.*)/, '$2$1ay'); // then try matching for when the str starts with a consonant/consonant cluster, and re-arrange.
  }