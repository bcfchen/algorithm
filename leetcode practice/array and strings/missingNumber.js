var missingNumber = function (nums) {
    const expectedSum = nums.length * (nums.length + 1) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num);
    return expectedSum - actualSum;
};