/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) { return 0; }

    for (let ii = 0; ii < haystack.length; ii++) {
        if (needle[0] === haystack[ii]) {
            const haystackSubstr = haystack.slice(ii, ii + needle.length);
            if (needle === haystackSubstr) {
                return ii;
            }
        }
    }

    return -1;
};
