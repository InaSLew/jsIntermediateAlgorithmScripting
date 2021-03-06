/**
 * Diff Two Arrays
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 */
function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(item => {
      if (!arr2.includes(item)) {
        newArr.push(item);
      }
    })
    arr2.forEach(item=> {
      if (!arr1.includes(item)) {
        newArr.push(item);
      }
    })
    return newArr;
  }