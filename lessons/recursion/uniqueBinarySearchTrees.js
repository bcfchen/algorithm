
/*
 * Complete the function below.
 */
function how_many_BSTs(n) {
    const memoMap = {};

    function helper(n) {
        if (n <= 1) {
            return 1;
        }

        if (memoMap[n] !== undefined) {
            return memoMap[n];
        }

        let totalCount = 0;
        for (let ii = 0; ii < n; ii++) {
            const numOnLeft = ii || 1;
            const numOnRight = n - ii - 1 || 1;

            totalCount += (helper(numOnLeft) * helper(numOnRight));
        }

        memoMap[n] = totalCount;
        return totalCount;
    }

    return helper(n);
}

