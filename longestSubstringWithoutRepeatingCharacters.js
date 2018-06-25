/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let currentStr = "";
    let finalStr = "";
    for(char of s){
        let charIndexInCurrentStr = currentStr.indexOf(char);
        if(charIndexInCurrentStr > -1){
            currentStr = currentStr.substring(charIndexInCurrentStr + 1);
            currentStr += char;
        } else {
            currentStr += char;
        }
        // this is to ensure that only the longest non-repeating string gets returned.
        // i.e. "abc" gets returned instead of "b", which is also non repeating
        if (currentStr.length > finalStr.length){
            finalStr = currentStr;
        }
    }
    
    return finalStr.length;
};