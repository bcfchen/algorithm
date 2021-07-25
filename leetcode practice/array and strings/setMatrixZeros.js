/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const numRows = matrix.length;
    const numColumns = matrix[0].length;
    let firstColHasZero = false;

    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        if (matrix[rowIndex][0] === 0) {
            firstColHasZero = true;
        }

        for (let colIndex = 1; colIndex < numColumns; colIndex++) {
            if (matrix[rowIndex][colIndex] === 0) {
                matrix[0][colIndex] = 0;
                matrix[rowIndex][0] = 0;
            }
        }
    }

    for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
        for (let colIndex = 1; colIndex < numColumns; colIndex++) {
            if (matrix[rowIndex][0] === 0 || matrix[0][colIndex] === 0) {
                matrix[rowIndex][colIndex] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let colIndex = 0; colIndex < numColumns; colIndex++) {
            matrix[0][colIndex] = 0;
        }
    }

    if (firstColHasZero) {
        for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
            matrix[rowIndex][0] = 0;
        }
    }
};
