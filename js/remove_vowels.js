function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';
  
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase())) {
        newStr += str[i];
      }
    }
  
    return newStr;
  }
  
const inputStr = 'Hello World!';
const newStr = removeVowels(inputStr);
console.log(newStr); // Output: 'Hll Wrld!'
