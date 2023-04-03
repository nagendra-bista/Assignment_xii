function getLongestString(arr) {
    let longestString = '';
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestString.length) {
        longestString = arr[i];
      }
    }
  
    return longestString;
  }
  
  const strings = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
const longestString = getLongestString(strings);
console.log(longestString); // Output: 'elderberry'
