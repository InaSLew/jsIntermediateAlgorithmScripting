/**
 * Spinal Tap Case
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
    let noCamelCase = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return noCamelCase.trim().split(/[\W+_\s-]/).join('-').toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));