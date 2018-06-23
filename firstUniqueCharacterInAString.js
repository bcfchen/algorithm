/*
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    let counter = 0;
    for(char of s){
        if (!map[char]){
            map[char] = {
                freq: 1,
                index: counter
            }
        } else {
            map[char].freq++;
            map[char].index = counter;
        }
        counter++;
    }
    for(key of Object.keys(map)){
        if (map[key].freq === 1){
            return map[key].index;
        }
    }
    
    return -1;
};