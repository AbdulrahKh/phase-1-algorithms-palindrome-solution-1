function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  reverse the word provided 
  if the reversed string is the same as the input
  return true
  else
  return false
*/

/*
  Add written explanation of your solution here
  create an array from the input string
  reverse the array
  create a string from the reversed array
  return the reversed string
  check if the reversed string matches the original string
    if yes, return true
    if not, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Dana"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("cat"));
}

module.exports = isPalindrome;
