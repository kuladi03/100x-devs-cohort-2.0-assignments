/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length;
  let str1 = "";
  for(let i = n-1 ; i >=0 ; i--){
    if(str[i] == ' ' || str[i] > 122 || str[i] < 65){
      str[i]=str[i-1];
      continue;
    }
    str1[i]=str[i];
  }
  for(let i = 0 ; i < n ; i++){
    if(str[i] != str1[i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
