/**
 * Seek and Destroy
 * An initial array (the first argument in the destroyer function) is provided, followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 * 
 * Use the `arguments` object.
 */
function destroyer(arr) {
    // turning arguments into a true array using the spread operator
    let args = [...arguments];
    let itemsToDelete = args.slice(1);
    let resultArr = new Array();
  
    args[0].forEach(item => {
      if (!itemsToDelete.includes(item)) { resultArr.push(item); }
    })
    
    return resultArr;
  }