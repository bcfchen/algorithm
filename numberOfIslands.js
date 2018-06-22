/*
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 * Example 2:
 * 
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
/* the idea is to keep track of how many island we see
 loop through all elements in grid. when we see a 1, increment the count of islands, and 
 start a dfs recursion to traverse in all 4 
 directions of that element while making all nonezero elements 0. we're doing this because since we've already
 taken that 1 into account we can wipe out the direct neighboring 1s since it's the same island. notice this will NOT
 affect the diagonal 1s if there are any, but only the horizontal/vertical neighbors. like in this case:
    11000
    11000
    00100
    00011
 */
var numIslands = function(grid) {
    if (grid.length === 0){
        return 0;
    }
    
    let numOfRows = grid.length,
        numOfCols = grid[0].length,
        islandCount = 0;
    for(let rowNum=0;rowNum<numOfRows;rowNum++){
        for(let colNum=0;colNum<numOfCols;colNum++){
            let elemVal = grid[rowNum][colNum];
            if (elemVal === "1"){
                islandCount++;
                traverse(grid, rowNum, colNum);
            }
        }
    }
    
    return islandCount;
};

function traverse(grid, rowNum, colNum){
    // check if row or cell is nonexistent or empty. if so then stop the process
    let rowOrCellEmpty = !grid[rowNum] || !parseInt(grid[rowNum][colNum]);
    if (rowOrCellEmpty) {return;}
    
    // if current element is not zero, then make it zero since we need to clean around the island that we found
    // on line 22
    grid[rowNum][colNum] = "0";
    
    // traverse in all 4 directions to keep doing the same until it encounters an empty row or zero cell
    traverse(grid, rowNum + 1, colNum);
    traverse(grid, rowNum - 1, colNum);
    traverse(grid, rowNum, colNum + 1);
    traverse(grid, rowNum, colNum - 1);    
}