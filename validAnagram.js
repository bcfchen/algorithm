/*
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * 
 * Example 1:
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * Note:
 * You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) { return false;}
    let charToCount = {};
    for(char of s){
        charToCount[char] = charToCount[char] ? charToCount[char] + 1 : 1;
    }
        
    for (char of t){
        if (charToCount[char]){
            charToCount[char]--;
        }
    }
        
    return Object.keys(charToCount).filter(key => charToCount[key] > 0).length === 0 ;
};