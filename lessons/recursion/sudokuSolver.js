/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
 * @param {list_list_int32} board
 * @return {list_list_int32}
 */
function solveSudoku(board) {
    // Write your code here.
    const boardSize = board.length;
    const rowTrackerArr = [],
        colTrackerArr = [],
        squareTrackerArr = [];

    for (let ii = 0; ii < boardSize; ii++) {
        rowTrackerArr[ii] = Array(boardSize + 1).fill(0);
        colTrackerArr[ii] = Array(boardSize + 1).fill(0);
        squareTrackerArr[ii] = Array(boardSize + 1).fill(0);
    }

    for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
        for (let colIndex = 0; colIndex < boardSize; colIndex++) {
            const num = board[rowIndex][colIndex];
            if (num === '.') { continue; }
            rowTrackerArr[rowIndex][num]++;
            colTrackerArr[colIndex][num]++;

            // fill in squareTrackerArr
            const squareIndex = getSquareIndex(rowIndex, colIndex);
            squareTrackerArr[squareIndex][num]++;
        }
    }

    function helper(rowIndex, colIndex) {
        if (rowIndex === boardSize - 1 && colIndex === boardSize) {
            return true;
        }

        if (colIndex === boardSize) {
            return helper(rowIndex + 1, 0);
        }

        if (board[rowIndex][colIndex] !== '.') {
            return helper(rowIndex, colIndex + 1);
        }

        const squareIndex = getSquareIndex(rowIndex, colIndex);

        for (let newNum = 1; newNum <= 9; newNum++) {
            if (rowTrackerArr[rowIndex][newNum] || colTrackerArr[colIndex][newNum] || squareTrackerArr[squareIndex][newNum]) {
                continue;
            }

            // insert number into board and tracker arrays
            board[rowIndex][colIndex] = newNum.toString();
            rowTrackerArr[rowIndex][newNum]++;
            colTrackerArr[colIndex][newNum]++;
            squareTrackerArr[squareIndex][newNum]++;

            if (helper(rowIndex, colIndex + 1)) {
                return true;
            }

            // if helper doesnt return true it means this number isnt promising
            // so revert it back from the board
            board[rowIndex][colIndex] = '.';
            rowTrackerArr[rowIndex][newNum]--;
            colTrackerArr[colIndex][newNum]--;
            squareTrackerArr[squareIndex][newNum]--;
        }
    }

    helper(0, 0);
    return board;
}

function getSquareIndex(rowIndex, colIndex) {
    return 3 * Math.floor(rowIndex / 3) + Math.floor(colIndex / 3);
}

const testBoard = [[".", ".", "9", "7", "4", "8", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."], [".", "2", ".", "1", ".", "9", ".", ".", "."], [".", ".", "7", ".", ".", ".", "2", "4", "."], [".", "6", "4", ".", "1", ".", "5", "9", "."], [".", "9", "8", ".", ".", ".", "3", ".", "."], [".", ".", ".", "8", ".", "3", ".", "2", "."], [".", ".", ".", ".", ".", ".", ".", ".", "6"], [".", ".", ".", "2", "7", "5", "9", ".", "."]];
console.info(solveSudoku(testBoard)[8]);