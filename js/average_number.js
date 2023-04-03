function getAverage(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    const average = sum / arr.length;
    return average;
  }
  
  const numbers = [1, 2, 3, 4, 5];
const average = getAverage(numbers);
console.log(average); // Output: 3
