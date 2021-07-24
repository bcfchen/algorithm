/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s || s.length === 0) { return false; }
    const map = {
        ']': '[',
        '}': '{',
        ')': '('
    };

    const stack = [];
    for (let ii = 0; ii < s.length; ii++) {
        if (!map[s[ii]]) {
            stack.push(s[ii]);
        } else {
            if (map[s[ii]] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};