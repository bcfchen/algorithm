function longestIncreasingSubsequence(arr) {
    let currentLIS = 1;
    if (!arr || arr.length === 0) { return 0; }

    // create an array to store the LIS for every element of arr
    const lisArr = Array(arr.length).fill(1);
    for (let ii = 0; ii < arr.length; ii++) {
        // calculate the LIS for every array element up till ii
        for (let jj = 0; jj < ii; jj++) {
            /* 
            ** if element jj is less than element ii, then
            ** LIS[ii] could either be:
            **  1. LIS[jj] + 1, or
            **  2. LIS[ii]
            ** Therefore we take the max of the two
            */
            if (arr[jj] < arr[ii]) {
                lisArr[ii] = Math.max(lisArr[jj] + 1, lisArr[ii]);
            }
        }

        /* 
        ** say we have the array [1, 3, 2, 5, 3, 5, 6] and we are at the first 3 (ii == 1).
        ** at this point our currentLIS is still 1, and our lisArr[1] is 2, so we take the 2 as our lisArr[1].
        ** however, say we're at the second 3 (ii=4). In this case lisArr[4] is only 2, but our currentLIS = 3
        ** from the [1, 2, 5]. So we take the currentLIS over the lisArr[4]
        */
        currentLIS = Math.max(currentLIS, lisArr[ii]);
    }

    return currentLIS;
}

console.log(longestIncreasingSubsequence([1, 3, 2, 5, 3, 5, 6])); // this should return 5, for [1, 2, 3, 5, 6]