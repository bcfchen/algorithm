/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (myInt) {
    let romanNumeral = '';

    const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const SYMBOLS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    // loop through values of symbols
    for (let ii = 0; ii < VALUES.length; ii++) {
        while (myInt >= VALUES[ii]) {
            myInt -= VALUES[ii];
            romanNumeral += SYMBOLS[ii];
        }

        if (myInt === 0) {
            return romanNumeral;
        }

    }

    return null;
};