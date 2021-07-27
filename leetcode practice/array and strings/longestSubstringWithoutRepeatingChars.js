/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) { return 0 }

    let rightIndex = 0, leftIndex = 0;
    const charCountMap = {};
    let longestSubstrLength = 0;
    while (rightIndex < s.length) {
        const rightChar = s[rightIndex];
        charCountMap[rightChar] = charCountMap[rightChar] !== undefined ? charCountMap[rightChar] + 1 : 1

        while (charCountMap[rightChar] > 1) {
            const leftChar = s[leftIndex];
            charCountMap[leftChar]--;
            leftIndex++;
        }

        longestSubstrLength = Math.max(longestSubstrLength, rightIndex - leftIndex + 1);
        rightIndex++;
    }

    return longestSubstrLength;
};