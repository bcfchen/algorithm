function solveNQueens(n) {
    const results = [];
    helper(n, [], results);
    return results;
}

function helper(n, boardArr, results) {

    if (lastQueenCanAttackOthers(boardArr)) {
        return;
    }


    if (boardArr.length === n) {
        const boardArrStr = convertToStrArr(boardArr.slice());
        results.push(boardArrStr);
        return;
    }

    for (let ii = 0; ii < n; ii++) {
        helper(n, [...boardArr, ii], results);
    }
}

function convertToStrArr(boardArr) {
    let strArr = [];
    for (let rowIndex = 0; rowIndex < boardArr.length; rowIndex++) {
        let rowStr = '';
        const colIndexWithQueen = boardArr[rowIndex];
        for (let colIndex = 0; colIndex < boardArr.length; colIndex++) {
            if (colIndex === colIndexWithQueen) {
                rowStr += 'Q';
            } else {
                rowStr += '.';
            }
        }

        strArr.push(rowStr);
    }

    return strArr;
}

function lastQueenCanAttackOthers(boardArr) {
    if (boardArr.length <= 1) {
        return false;
    }

    const lastQueenColIndex = boardArr[boardArr.length - 1];
    const lastQueenRowIndex = boardArr.length - 1;

    for (let currentQueenRowIndex = 0; currentQueenRowIndex < boardArr.length - 1; currentQueenRowIndex++) {
        const currentQueenColIndex = boardArr[currentQueenRowIndex];
        if (currentQueenColIndex === lastQueenColIndex) {
            return true;
        }

        const isOnDiagonal = Math.abs(lastQueenRowIndex - currentQueenRowIndex) === Math.abs(lastQueenColIndex - currentQueenColIndex);
        if (isOnDiagonal) {
            return true;
        }
    }

    return false;
}