/**
 * Sum All Numbers in a Range
 * An array of two numbers is passed into the function sumAll(). Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first.
 */

function sumAll(arr) {
    let sortedArr = arr.sort((a,b) => a - b);
    let sum = 0;
    for (let i = sortedArr[0]; i <= sortedArr[1]; i += 1) {
      sum += i;
    }
    return sum;
  }