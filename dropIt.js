/**
 * Drop it
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until
 * the function func returns true when the iterated element is passed through it.
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */
function dropElements(arr, func) {
    let result = [], terminateDropping = false;
    arr.forEach(num => {
      if (func(num)) terminateDropping = true
      if (terminateDropping === true) result.push(num)
    })
    return result;
  }