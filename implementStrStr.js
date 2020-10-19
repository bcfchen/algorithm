/*
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Example 1:
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * Example 2:
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's  * strstr() and Java's indexOf().
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle || needle.length === 0){
        return 0;
    }
    
    var firstCharOfNeedle = needle[0];
    for(var counter=0;counter<haystack.length;counter++){
        var haystackFirstChar = haystack[counter];
        if (haystackFirstChar === firstCharOfNeedle){
            var haystackSliced = haystack.slice(counter, counter+needle.length);
            if (haystackSliced === needle){
                return counter;
            }
        }
    }
    
    return -1;
};