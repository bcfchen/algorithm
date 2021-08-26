/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digitsAsStr) {
    if (!digitsAsStr || digitsAsStr.length === 0) { return []; }
    const combinations = [];
    let buffer = '';
    let digitIndex = 0;
    traverse(digitsAsStr, buffer, digitIndex, combinations);

    return combinations;
};

function traverse(digitsAsStr, buffer, digitIndex, combinations) {
    if (digitIndex === digitsAsStr.length) {
        combinations.push(buffer);
        return;
    }

    const currentDigit = digitsAsStr[digitIndex];
    if (currentDigit === '0' || currentDigit === '1') {
        traverse(digitsAsStr, buffer, digitIndex + 1, combinations);
    } else {
        const charsAsStr = getCharsFromDigit(currentDigit);
        for (let charIndex = 0; charIndex < charsAsStr.length; charIndex++) {
            traverse(digitsAsStr, buffer + charsAsStr[charIndex], digitIndex + 1, combinations);
        }
    }
}

function getCharsFromDigit(digit) {
    const digitToCharsMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    return digitToCharsMap[digit];
}