/**
 * Steamroller
 * Flatten a nested array. You must account for varying levels of nesting.
 */
function steamrollArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), [])
  }