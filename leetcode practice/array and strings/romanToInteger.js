/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbolValues = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };

    let myInt = 0;
    let charIndex = 0;
    while (charIndex < s.length) {
        const currentSymbol = s[charIndex];
        const currentSymbolVal = symbolValues[currentSymbol];
        let nextSymbolVal = 0;
        // calculate next symbol value, only if 
        // next index is not out of bounds
        if (charIndex + 1 < s.length) {
            nextSymbolVal = symbolValues[s[charIndex + 1]];
        }

        if (currentSymbolVal < nextSymbolVal) {
            myInt += (nextSymbolVal - currentSymbolVal);
            charIndex += 2;
        } else {
            myInt += currentSymbolVal;
            charIndex += 1;
        }
    }

    return myInt;
};