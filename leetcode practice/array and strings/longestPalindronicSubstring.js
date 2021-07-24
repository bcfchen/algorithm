/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const charsArr = s.split('');
    let result = [];
    let longestLength = 0;

    // handle odd cases
    for (let ii = 0; ii < charsArr.length; ii++) {
        let offset = 0;
        while (isValidIndex(charsArr, ii - offset - 1)
            && isValidIndex(charsArr, ii + offset + 1)
            && charsArr[ii - offset - 1] === charsArr[ii + offset + 1]) {
            offset++;
        }

        const currentLength = offset * 2 + 1;
        if (currentLength > longestLength) {
            longestLength = currentLength;
            result = [ii - offset, ii + offset];
        }
    }

    console.log(result);

    // handle even cases
    for (let ii = 0; ii < charsArr.length; ii++) {
        let offset = 0;
        while (isValidIndex(charsArr, ii - offset)
            && isValidIndex(charsArr, ii + offset + 1)
            && charsArr[ii - offset] === charsArr[ii + offset + 1]) {
            offset++;
        }

        const currentLength = offset * 2;
        if (currentLength > longestLength) {
            longestLength = currentLength;
            result = [ii - offset + 1, ii + offset];
        }
    }

    return s.substring(result[0], result[1] + 1);
};

function isValidIndex(charsArr, index) {
    return index >= 0 && index < charsArr.length;
}