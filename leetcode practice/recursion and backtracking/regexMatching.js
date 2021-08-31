/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (text, pattern) {
    // populate DP table with all false
    const matrix = [];
    for (let rowIndex = 0; rowIndex < text.length + 1; rowIndex++) {
        const row = [];
        for (let colIndex = 0; colIndex < pattern.length + 1; colIndex++) {
            row[colIndex] = false;
        }

        matrix.push(row);
    }

    // process first row of matrix by setting all continuous front *s to true
    matrix[0][0] = true;
    for (let colIndex = 1; colIndex < pattern.length + 1; colIndex++) {
        if (pattern[colIndex - 1] === '*') {
            matrix[0][colIndex] = matrix[0][colIndex - 2];
        }
    }

    for (let rowIndex = 1; rowIndex < text.length + 1; rowIndex++) {
        for (let colIndex = 1; colIndex < pattern.length + 1; colIndex++) {
            const patternChar = pattern[colIndex - 1];
            const textChar = text[rowIndex - 1];
            if (patternChar === textChar || patternChar === '.') {
                matrix[rowIndex][colIndex] = matrix[rowIndex - 1][colIndex - 1];
            } else if (patternChar === '*') {
                if (matrix[rowIndex][colIndex - 2]) {
                    matrix[rowIndex][colIndex] = true;
                } else {
                    const precedingPatternCharMatchesTextChar = pattern[colIndex - 2] === text[rowIndex - 1] || pattern[colIndex - 2] === '.';
                    if (precedingPatternCharMatchesTextChar && matrix[rowIndex - 1][colIndex]) {
                        matrix[rowIndex][colIndex] = true;
                    }
                }
            }
        }
    }


    return matrix[text.length][pattern.length];
}
