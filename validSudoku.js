
/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/


function getBoxNum(num){
    return Math.ceil((num+1)/3) - 1;
}


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    /* data contract looks like 
     * rowsWithValues = {0: [8, 3, 7], 1: [6, 1, 9, 5]}
     * boxWithValues maps the box number (0-8) to the array of values it has
     * boxWithValues = {0: [1,2, 3]....8:[2, 3, 4]}
     */
    var rowsWithValues = {},
        columnsWithValues = {},
        boxWithValues = {} ;
    
    var length = board[0].length;
    for(var rowNum=0;rowNum<length;rowNum++){
        for(var colNum=0;colNum<length;colNum++){
            let elem = board[rowNum][colNum];
            if(elem === ".") continue;
            
            rowsWithValues[rowNum] =  rowsWithValues[rowNum] ? rowsWithValues[rowNum] : [];
            columnsWithValues[colNum] =  columnsWithValues[colNum] ? columnsWithValues[colNum] : [];

            let isDuplicateInRow = rowsWithValues[rowNum].indexOf(elem) > -1;
            let isDuplicateInCol = columnsWithValues[colNum].indexOf(elem) > -1;
            if (isDuplicateInRow || isDuplicateInCol){
                return false;
            }
            
            rowsWithValues[rowNum].push(elem);
            columnsWithValues[colNum].push(elem);
            
            // check in box for dupes
            let boxRowNum = getBoxNum(rowNum);
            let boxColNum = getBoxNum(colNum);
            
            if (boxWithValues[boxRowNum] === undefined){
                boxWithValues[boxRowNum] = {};
            }
            if (boxWithValues[boxRowNum][boxColNum] === undefined){
                boxWithValues[boxRowNum][boxColNum] = [];
            }
            let isDuplicateInBox = boxWithValues[boxRowNum][boxColNum].indexOf(elem) > -1;
            if (isDuplicateInBox) {
                return false;
            }
            
            boxWithValues[boxRowNum][boxColNum].push(elem);
        }
    }
    
    return true;
};