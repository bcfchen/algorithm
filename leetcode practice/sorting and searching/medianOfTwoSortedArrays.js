/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (numsA, numsB) {
    if (numsB.length < numsA.length) {
        return findMedianSortedArrays(numsB, numsA);
    }
    const mergedArrLength = numsA.length + numsB.length;
    let aLeftIndex = 0, aRightIndex = numsA.length;

    while (aLeftIndex <= aRightIndex) {
        const aMidIndex = Math.floor((aLeftIndex + aRightIndex) / 2);
        const bMidIndex = Math.floor((mergedArrLength + 1) / 2) - aMidIndex;

        const aLeftEnd = aMidIndex === 0 ? -Infinity : numsA[aMidIndex - 1];
        const bLeftEnd = bMidIndex === 0 ? -Infinity : numsB[bMidIndex - 1];
        const aRightStart = aMidIndex === numsA.length ? Infinity : numsA[aMidIndex];
        const bRightStart = bMidIndex === numsB.length ? Infinity : numsB[bMidIndex];

        // satisfies median index criteria?
        if (aLeftEnd <= bRightStart && bLeftEnd <= aRightStart) {
            // handle odd merged arr length
            if (mergedArrLength % 2 !== 0) {
                return Math.max(aLeftEnd, bLeftEnd);
            } else {
                // handle even merged arr length
                return (Math.max(aLeftEnd, bLeftEnd) + Math.min(aRightStart, bRightStart)) / 2;
            }
        }

        if (aLeftEnd > bRightStart) {
            // a's too big. move a's cut to the left
            aRightIndex = aMidIndex - 1;
        } else {
            aLeftIndex = aMidIndex + 1;
        }
    }
};
