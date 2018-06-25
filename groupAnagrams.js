/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortedWords = strs.map(str => str.split("").sort().join(""));
    let index=0;
    let wordMap = {};
    for(word of sortedWords){
        if(wordMap[word]){
            wordMap[word].push(index);
        } else {
            wordMap[word] = [index];
        }
        index++;
    }
    
    let finalArr = [];
    for(uniqWord of Object.keys(wordMap)){
        let indexesOfUniqWord = wordMap[uniqWord];
        let arr = [];
        for(index of indexesOfUniqWord){
            arr.push(strs[index]);
        }
        
        finalArr.push(arr);
    }
    
    return finalArr;
};