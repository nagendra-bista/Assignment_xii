function getLargestNumber(arr) {
    let largestNumber = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largestNumber) {
        largestNumber = arr[i];
      }
    }
  
    return largestNumber;
  }
  const numbers = [3, 5, 1, 8, 2];
  const largestNumber = getLargestNumber(numbers);
  console.log(largestNumber); // Output: 8
  