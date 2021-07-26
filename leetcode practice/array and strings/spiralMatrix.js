/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const printArr = [];
    if (matrix.length === 0) { return printArr; }

    let firstRow = 0, lastRow = matrix.length - 1,
        firstCol = 0, lastCol = matrix[0].length - 1;

    while (lastRow >= firstRow && lastCol >= firstCol) {
        // add top
        for (let colIndex = firstCol; colIndex <= lastCol; colIndex++) {
            printArr.push(matrix[firstRow][colIndex]);
        }

        // add right
        for (let rowIndex = firstRow + 1; rowIndex <= lastRow; rowIndex++) {
            printArr.push(matrix[rowIndex][lastCol]);
        }

        if (lastRow > firstRow && lastCol > firstCol) {
            // add bottom
            for (let colIndex = lastCol - 1; colIndex > firstCol; colIndex--) {
                printArr.push(matrix[lastRow][colIndex]);
            }

            for (let rowIndex = lastRow; rowIndex > firstRow; rowIndex--) {
                printArr.push(matrix[rowIndex][firstCol]);
            }
        }

        firstRow++;
        lastRow--;
        firstCol++;
        lastCol--;
    }

    return printArr;
}