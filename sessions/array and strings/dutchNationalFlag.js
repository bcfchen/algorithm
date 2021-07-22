// Given an array of integers A and a pivot, rearrange A in the following order:
// [elements less than pivot, elements equal to pivot, elements greater than pivot]
// Example: if A = [5, 2, 4, 4, 6, 4, 4, 3], pivot = 4, then result = [3, 2, 4, 4, 4, 4, 5, 6]

function dutchNationalFlag(arr, pivotVal) {
    let lowerBoundIndex = 0, higherBoundIndex = arr.length - 1, movingIndex = 0;

    /* 
    ** we need to set the condition to movingIndex <= higherBoundIndex instead of movingIndex < higherBoundIndex.
    ** this is because if our movingIndex never reaches the higherBoundIndex, it means that when we stop, our higherBoundIndex
    ** would sit right next to our movingIndex, and the higherBoundIndex would never be processed. Everything to the right
    ** of the higherBoundIndex at this point should have been processed already, but the higherBoundIndex itself has not. 
    ** therefore, if the higherBoundIndex element is indeed less than our pivot, we would not be able to catch that if
    ** we stopped at movingIndex < higherBoundIndex. 
    */
    while (movingIndex <= higherBoundIndex) {
        if (arr[movingIndex] < pivotVal) {
            // swap value at lowerBoundIndex with value at movingIndex
            [arr[movingIndex], arr[lowerBoundIndex]] = [arr[lowerBoundIndex], arr[movingIndex]];
            // increment lowerBoundIndex and movingIndex
            movingIndex++;
            lowerBoundIndex++;
        } else if (arr[movingIndex] > pivotVal) {
            // swap value at higherBoundIndex with value at movingIndex
            [arr[movingIndex], arr[higherBoundIndex]] = [arr[higherBoundIndex], arr[movingIndex]];
            higherBoundIndex--;
        } else {
            // if value at movingIndex equals to pivot, do nothing and moving index to the right
            movingIndex++;
        }
    }

    return arr;
}

// should print  [3, 2, 1, 3, 4, 7, 5, 6]
console.log(dutchNationalFlag([3, 2, 4, 1, 6, 3, 7, 5], 4));