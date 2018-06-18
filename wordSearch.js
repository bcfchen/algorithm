
/*
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
 * Example:
 * 
 * board =
 * [
 *   ['A','B','C','E'],
 *   ['S','F','C','S'],
 *   ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    // trigger a search that starts from every single point of the matrix. from there the search will auto-traverse itself through all 4 directions (up/down/right/left)
    for(let rowIndex=0;rowIndex<board.length;rowIndex++){
        for(let colIndex=0;colIndex<board[rowIndex].length;colIndex++){
            let isFound = traverse(rowIndex, colIndex, word, 0, board);
            if (isFound){ return true; }
        }
    }

  return false;
}

function traverse(rowIndex, colIndex, word, wordCharIndex, board){
    let numRowsInBoard = board.length,
        numColsInBoard = board[0].length;
    let outOfBounds = rowIndex < 0 || colIndex < 0 || rowIndex > numRowsInBoard-1 || colIndex > numColsInBoard-1;
    if (outOfBounds) {return false;}
    
    if (board[rowIndex][colIndex] !== word[wordCharIndex]) {return false;} // check current element. if not same as word[wordCharIndex] then return false;

    if (wordCharIndex === word.length-1) {return true;} // if all word characters have been evaluated and no false yet then it means we've found it!
        board[rowIndex][colIndex] = '*';      // mark as visited

    if (traverse(rowIndex+1, colIndex, word, wordCharIndex+1, board)) return true; // traverse up
    if (traverse(rowIndex-1, colIndex, word, wordCharIndex+1, board)) return true; // traverse down
    if (traverse(rowIndex, colIndex-1, word, wordCharIndex+1, board)) return true; // traverse left
    if (traverse(rowIndex, colIndex+1, word, wordCharIndex+1, board)) return true; // traverse right  
    
    board[rowIndex][colIndex] = word[wordCharIndex];      // mark as visited

    return false;
}