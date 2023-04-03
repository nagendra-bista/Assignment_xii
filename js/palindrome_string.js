function isPalindrome(str) {
    // Remove all non-alphanumeric characters from the string
    const cleanedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return cleanedStr === reversedStr;
  }
  const str1 = 'racecar';
const str2 = 'hello';

console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: false

  