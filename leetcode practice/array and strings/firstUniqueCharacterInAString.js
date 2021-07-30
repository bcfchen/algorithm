/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
    if (s === undefined || s.length === 0) { return -1; }
    const charMap = {};
    for (let ii = 0; ii < s.length; ii++) {
        charMap[s[ii]] = charMap[s[ii]] === undefined ? 1 : charMap[s[ii]] + 1;
    }

    for (let ii = 0; ii < s.length; ii++) {
        if (charMap[s[ii]] === 1) {
            return ii;
        }
    }

    return -1;
};
