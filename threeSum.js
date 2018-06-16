function twoSum(sumArray, nums, parentIndex) {
    let smallIndex = parentIndex + 1,
        bigIndex = nums.length - 1,
        parentNum = nums[parentIndex];

    while (smallIndex < bigIndex) {
        let smallNum = nums[smallIndex],
            bigNum = nums[bigIndex];
        let sum = smallNum + bigNum + parentNum;
        if (sum > 0) {
            bigIndex--;
            while (nums[bigIndex] === nums[bigIndex + 1]) {
                bigIndex--;
            }
            continue;
        }
        if (sum < 0) {
            smallIndex++;
            while (nums[smallIndex] === nums[smallIndex - 1]) {
                smallIndex++;
            }
            continue;
        }

        if (sum === 0) {
            sumArray.push([smallNum, bigNum, parentNum]);
            bigIndex--;
            while (nums[bigIndex] === nums[bigIndex + 1]) {
                bigIndex--;
            }

            smallIndex++;
            while (nums[smallIndex] === nums[smallIndex - 1]) {
                smallIndex++;
            }

            continue;
        }
    }
}

function threeSum(nums) {
    let length = nums.length,
        sumArray = [];
    nums.sort((a, b) => a - b);
    for (let ii = 0; ii < length - 2; ii++) {
        let parentNum = nums[ii];
        if (parentNum > 0 && ii !== 0) {
            break;
        }
        if (parentNum === nums[ii - 1]) {
            continue;
        } else {
            twoSum(sumArray, nums, ii);
        }
    }

    return sumArray;
}
