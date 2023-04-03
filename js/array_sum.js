function sumArray(arr) {
    // Initialize the sum to 0
    let sum = 0;
    
    // Loop through each number in the array
    for (let i = 0; i < arr.length; i++) {
      // Add the current number to the sum
      sum += arr[i];
    }
    
    // Return the final sum
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum); // Output: 15
