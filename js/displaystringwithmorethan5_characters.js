function filterLongStrings(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 5) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  const strings = ["apple", "banana", "orange", "grapefruit", "kiwi"];
  const longStrings = filterLongStrings(strings);
  console.log(longStrings); // Output: ["banana", "orange", "grapefruit"]
  