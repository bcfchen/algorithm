/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const numRows = matrix.length, numCols = matrix[0].length;
    let rowIndex = numRows - 1, colIndex = 0;

    while (rowIndex >= 0 && colIndex < numCols) {
        const cellVal = matrix[rowIndex][colIndex];
        if (cellVal === target) {
            return true;
        }

        if (target > cellVal) {
            colIndex++;
        } else {
            rowIndex--;
        }
    }

    return false;
};