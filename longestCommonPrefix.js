/*
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * Example 2:
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

const allMatch = (strs, subStr)=> {
    for(str of strs){
        if (str.indexOf(subStr) !== 0){
            return false;
        }
    }
    return true;
}

var longestCommonPrefix = function(strs) {
    if (strs.length === 0){
        return "";
    }
    let shortestStr = strs.sort((s1, s2)=>s1>s2)[0];
    for(let ii=shortestStr.length;ii>0;ii--){
        let subStr = shortestStr.substring(0, ii);
        if (allMatch(strs, subStr)){
            return subStr;
        }
    }
    
    return "";
};