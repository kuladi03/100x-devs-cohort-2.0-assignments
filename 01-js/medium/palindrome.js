/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  return check(str, start, end);
}

function check(str, start, end) {
  if (start > end) {
    return true;
  }

  while (start < end) {
    if (isCharacter(str[start])) {
      if (isCharacter(str[end])) {
        if (str[start].toUpperCase() !== str[end].toUpperCase()) {
          return false;
        } else {
          return check(str, ++start, --end);
        }
      } else {
        end--;
      }
    } else {
      start++;
    }
  }

  return true;
}

function isCharacter(char) {
  return /^[A-Za-z]$/.test(char);
}

module.exports = isPalindrome;