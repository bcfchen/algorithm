function subsets(nums) {
    const results = [];
    helper([], nums, 0, results);
    return results;
}

function helper(slate, nums, level, results) {
    if (level === nums.length) {
        results.push([...slate]);
    } else {
        const currentElem = nums[level];
        // include current element
        slate.push(currentElem);
        helper(slate, nums, level + 1, results);
        slate.pop();

        // exclude current element
        helper(slate, nums, level + 1, results);
    }
}

console.log(JSON.stringify(subsets([1, 2, 3])));