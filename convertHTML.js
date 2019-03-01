/**
 * Convert HTML entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */
function convertHTML(str) {
    const htmlElementMap = new Map(
      [['&', '&amp;'],
      ['<', '&lt;'],
      ['>', '&gt;'],
      ['"', '&quot;'],
      ["'", '&apos;']]
    )
  
    let result = new Array();
    str.split('').forEach(char => {
      htmlElementMap.has(char) ? result.push(htmlElementMap.get(char)) : result.push(char)
    })
    return result.join('');
  }