function findMin(arr) {
    let low = 0;
    let high = arr.length - 1;
    const lastVal = arr[arr.length - 1];

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] <= lastVal && (mid === 0 || (arr[mid - 1] > arr[mid]))) {
            return arr[mid];
        } else if (arr[mid] > lastVal) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(findMin([7, 8, 1, 2, 4, 6])); // this should output 1