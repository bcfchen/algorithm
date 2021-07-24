/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const originalLength = s.length;
    for (let ii = s.length - 2; ii >= 0; ii--) {
        s.push(s[ii]);
    }

    s.splice(0, originalLength - 1);
};