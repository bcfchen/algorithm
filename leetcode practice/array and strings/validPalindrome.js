/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    // use two pointer solution
    let startIndex = 0, endIndex = s.length - 1;
    while (startIndex <= endIndex) {
        if (s[startIndex] !== s[endIndex]) { return false; }
        startIndex++;
        endIndex--;
    }

    return true
};