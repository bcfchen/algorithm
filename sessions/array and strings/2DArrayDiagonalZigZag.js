/* 
** Print a 2D array in Diagonal ZigZag order
** example: 
**      1 2 3 4
**      5 6 7 8
**      9 0 1 2
** should turn into
**      1 2 5 9 6 3 4 7 0 1 8 
*/

function zigZag(arr) {
    let rowIndex = 0, columnIndex = 0, isUp = true;

    while (true) {
        // print first so we capture first point before our logic runs and updates coordinates
        console.log(arr[rowIndex][columnIndex]);

        // if we reach top or bottom wall, AND we're not at right wall, go right.
        // note that this also captures bottom left corner case: in which we go right
        if (rowIndex === 0 || rowIndex === arr.length - 1 && columnIndex !== arr[0].length - 1) {
            columnIndex++;
            console.log(arr[rowIndex][columnIndex]);
            isUp = !isUp;
        } else if (columnIndex === 0 || columnIndex === arr[0].length - 1) {
            // otherwise, if we reach left or right wall, go down
            rowIndex++;
            console.log(arr[rowIndex][columnIndex]);
            isUp = !isUp;
        }

        // if we're already at destination, exit the loop
        if (columnIndex === arr[0].length - 1 && rowIndex === arr.length - 1) {
            break;
        }

        // we always go up right or down left
        columnIndex = isUp ? columnIndex + 1 : columnIndex - 1;
        rowIndex = isUp ? rowIndex - 1 : rowIndex + 1;
    }
}

// this should print 1 2 5 9 6 3 4 7 0 1 8 2
console.log(zigZag([[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 1, 2]]));