function dutchNationalFlag(arr, startIndex, pivotIndex, endIndex) {
    const pivotVal = arr[pivotIndex];
    let low = startIndex, refIndex = startIndex, high = endIndex;

    /* it should be refIndex <= high instead of refIndex < high.
    ** Imagine that within startIndex and endIndex, your array is [1, 2, 3, 4],
    ** then your refIndex should move from 1 to 4, not 1 to 3 */
    while (refIndex <= high) {
        if (arr[refIndex] < pivotVal) {
            [arr[low], arr[refIndex]] = [arr[refIndex], arr[low]];
            refIndex++;
            low++;
        } else if (arr[refIndex] > pivotVal) {
            [arr[high], arr[refIndex]] = [arr[refIndex], arr[high]];
            high--;
        } else {
            refIndex++;
        }
    }
    return {
        /* make sure lower half ends an index before current pivot,
        ** ex. for [1, 2, 3, 4] if pivot is the 3, then lower half should be 
        ** [1, 2] instead of [1, 2, 3] */
        lowerHalfEndIndex: low - 1,
        /* make sure upper half starts an index fter current pivot,
        ** ex. for [1, 2, 3, 4] if pivot is the 3, then upper half should be 
        ** [4] instead of [3, 4] */
        upperHalfStartIndex: high + 1
    };
}

function quickSort(arr, startIndex, endIndex) {
    if (startIndex < 0 || endIndex >= arr.length || startIndex >= endIndex) { return; }

    const pivotIndex = startIndex + Math.floor(Math.random() * (endIndex - startIndex + 1));
    const indicesOfTwoHalves = dutchNationalFlag(arr, startIndex, pivotIndex, endIndex);
    const { lowerHalfEndIndex, upperHalfStartIndex } = indicesOfTwoHalves;
    quickSort(arr, startIndex, lowerHalfEndIndex);
    quickSort(arr, upperHalfStartIndex, endIndex);
}

function quickSortMain(arr) {
    if (!arr) { return arr; }
    quickSort(arr, 0, arr.length - 1);
    return arr;
}

console.log(quickSortMain([8, 5, 1, 3, 4, 2, 7, 6]));
