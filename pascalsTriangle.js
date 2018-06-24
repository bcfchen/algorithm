/*
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * Example:
 * 
 * Input: 5
 * Output:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let parentArray = [];
    for(let rowNumber=0;rowNumber<numRows;rowNumber++){
        // only for the first row, rowArray is [1]
        if (rowNumber === 0){
            parentArray.push([1]);
            continue;
        }

        // for all rows after the first
        let numOfelements = rowNumber + 1;
        let rowArray = [];
        let previousRow = parentArray[rowNumber-1];
        for(let targetIndex=0;targetIndex<numOfelements;targetIndex++){
            let leftIndex = targetIndex -1;
            let rightIndex = targetIndex;
            let leftVal = previousRow[leftIndex] ? previousRow[leftIndex] : 0;
            let rightVal = previousRow[rightIndex] ? previousRow[rightIndex] : 0;
            rowArray.push(leftVal + rightVal);
        }
        
        parentArray.push(rowArray);
    }
    
    return parentArray;
};