/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, nums1ValuesCount, nums2, nums2ValuesCount) {
    let mergedIndex = nums1ValuesCount + nums2ValuesCount - 1;
    let nums1Index = nums1ValuesCount - 1;
    let nums2Index = nums2ValuesCount - 1;

    while (nums1Index >= 0 || nums2Index >= 0) {
        const val1 = nums1[nums1Index], val2 = nums2[nums2Index];
        if (val1 > val2 || nums2Index < 0) {
            nums1[mergedIndex] = val1;
            nums1Index--;
        } else {
            nums1[mergedIndex] = val2;
            nums2Index--;
        }

        mergedIndex--;
    }
}
