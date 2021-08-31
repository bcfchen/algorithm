/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
    const matrix = [];

    // initialize matrix with false
    const numStrChars = str.length;
    const numPatternChars = pattern.length;
    for (let rowIndex = 0; rowIndex < numStrChars + 1; rowIndex++) {
        const matrixRowArr = [];
        for (let colIndex = 0; colIndex < numPatternChars + 1; colIndex++) {
            matrixRowArr.push(false);
        }
        matrix.push(matrixRowArr);
    }

    matrix[0][0] = true;
    for (let colIndex = 1; colIndex < numPatternChars + 1; colIndex++) {
        if (pattern[colIndex - 1] !== '*') {
            break;
        }

        matrix[0][colIndex] = true;
    }

    // here is the main logic
    for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 1; colIndex < matrix[0].length; colIndex++) {
            // if cell's pattern char is *
            if (pattern[colIndex - 1] === '*') {
                matrix[rowIndex][colIndex] = matrix[rowIndex - 1][colIndex] || matrix[rowIndex][colIndex - 1];
            } else if (pattern[colIndex - 1] === '?' || pattern[colIndex - 1] === str[rowIndex - 1]) {
                matrix[rowIndex][colIndex] = matrix[rowIndex - 1][colIndex - 1];
            } else {
                matrix[rowIndex][colIndex] = false;
            }
        }
    }

    return matrix[matrix.length - 1][matrix[0].length - 1];
};
