/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let i = 0;
  while(i < str1.length){
    let character = str1[i];
    let flag = false;
    for(let j = 0 ; j < str2.length ; j++){
      if(str2[j] == character){
        flag = true;
      }
    }
    if(flag == false){
      return false;
    }
    i++;
  }
  return true;
}

module.exports = isAnagram;
