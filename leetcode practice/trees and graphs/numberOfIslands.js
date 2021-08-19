/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (matrix) {
    const numRows = matrix.length, numCols = matrix[0].length;

    let islandCount = 0;
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        for (let colIndex = 0; colIndex < numCols; colIndex++) {
            if (matrix[rowIndex][colIndex] === '1') {
                islandCount++;
                traverse(matrix, rowIndex, colIndex);
            }
        }
    }

    return islandCount;
};

function traverse(matrix, rowIndex, colIndex) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    if (rowIndex < 0 || rowIndex > numRows - 1 || colIndex < 0 || colIndex > numCols - 1) {
        return;
    }

    if (matrix[rowIndex][colIndex] === '0') {
        return;
    }

    // turn land into water
    matrix[rowIndex][colIndex] = '0';

    // traverse in all 4 directions
    traverse(matrix, rowIndex + 1, colIndex);
    traverse(matrix, rowIndex - 1, colIndex);
    traverse(matrix, rowIndex, colIndex + 1);
    traverse(matrix, rowIndex, colIndex - 1);
}