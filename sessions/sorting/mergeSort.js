function mergeSortMain(arr) {
    if (!arr || arr.length === 0) { return arr; }
    mergeSort(arr, 0, arr.length - 1);
    return arr;
}

function mergeSort(arr, startIndex, endIndex) {
    if (startIndex >= endIndex) { return; }
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSort(arr, startIndex, midIndex);
    mergeSort(arr, midIndex + 1, endIndex);

    merge(arr, startIndex, midIndex, endIndex);
}


// this is the merged sorted arrays part
function merge(arr, startIndex, midIndex, endIndex) {
    // create new array to hold merged array
    const resultArr = [];

    /* loop through each element of the two arrays and compare 
    ** elements. Put smaller value in resultArr, and increase
    ** index for array of smaller element */
    let arrayOneIndex = startIndex, arrayTwoIndex = midIndex + 1;
    while (arrayOneIndex <= midIndex && arrayTwoIndex <= endIndex) {
        if (arr[arrayOneIndex] <= arr[arrayTwoIndex]) {
            resultArr.push(arr[arrayOneIndex]);
            arrayOneIndex++;
        } else {
            resultArr.push(arr[arrayTwoIndex]);
            arrayTwoIndex++;
        }
    }

    /* in case our arrays have different lengths, we should 
    ** push remaining elements of the longer array into resultArr */
    while (arrayOneIndex <= midIndex) {
        resultArr.push(arr[arrayOneIndex]);
        arrayOneIndex++;
    }

    while (arrayTwoIndex <= endIndex) {
        resultArr.push(arr[arrayTwoIndex]);
        arrayTwoIndex++;
    }

    /* Finally, we still need to update the original array so we'll 
    ** copy elements from resultArr into the appropriate elements of arr */
    for (let copyIndex = 0; copyIndex < resultArr.length; copyIndex++) {
        arr[startIndex + copyIndex] = resultArr[copyIndex];
    }
}


console.log(mergeSortMain([4, 6, 1, 2, 3, 5, 2, 8]));
// should print [1, 2, 2, 3, 4, 5, 6, 8]