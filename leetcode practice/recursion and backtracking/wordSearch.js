/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const numRows = board.length;
    const numCols = board[0].length;

    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        for (let colIndex = 0; colIndex < numCols; colIndex++) {
            const isFound = traverse(rowIndex, colIndex, 0, board, word)
            if (isFound) {
                return true;
            }
        }
    }

    return false;
};

function traverse(rowIndex, colIndex, wordCharIndex, board, word) {
    if (rowIndex < 0 || rowIndex >= board.length || colIndex < 0 || colIndex >= board[0].length) {
        return false;
    }

    if (board[rowIndex][colIndex] !== word[wordCharIndex]) {
        return false;
    }

    if (wordCharIndex === word.length - 1) {
        return true;
    }

    const temp = board[rowIndex][colIndex];
    board[rowIndex][colIndex] = '#';

    if (traverse(rowIndex - 1, colIndex, wordCharIndex + 1, board, word)) { return true; }
    if (traverse(rowIndex + 1, colIndex, wordCharIndex + 1, board, word)) { return true; }
    if (traverse(rowIndex, colIndex - 1, wordCharIndex + 1, board, word)) { return true; }
    if (traverse(rowIndex, colIndex + 1, wordCharIndex + 1, board, word)) { return true; }

    board[rowIndex][colIndex] = temp;

    return false;
}