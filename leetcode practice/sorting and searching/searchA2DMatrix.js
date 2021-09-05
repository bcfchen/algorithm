/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const numRows = matrix.length, numCols = matrix[0].length;
    let leftIndex = 0, rightIndex = numRows * numCols - 1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const rowIndex = Math.floor(midIndex / numCols);
        const colIndex = midIndex % numCols;
        const cellVal = matrix[rowIndex][colIndex];

        if (cellVal === target) {
            return true;
        }

        if (cellVal > target) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }

    return false;
};