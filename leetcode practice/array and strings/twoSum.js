var twoSum = function (nums, target) {
    // use hash table
    if (target === undefined || !nums || nums.length === 0) { return []; }
    const map = {};

    for (let ii = 0; ii < nums.length; ii++) {
        if (map[target - nums[ii]] !== undefined) {
            return [map[target - nums[ii]], ii];
        }

        map[nums[ii]] = ii;
    }

    return [];
};