 function threeSum(nums) {
     let length = nums.length;
     let sumArray = [];
     let firstNum;
     let secondNum;
     let finalNum;
     nums.sort((a, b) => a - b);
     for (let i = 0; i < length - 2; i++) {
         firstNum = nums[i];
         if (firstNum > 0 && i != 0) {
             break;
         }
         if (firstNum == nums[i - 1]) {
             continue;
         } else {
             let j = i + 1;
             let k = length - 1;
             while (j < k) {
                 if (nums[j] + nums[k] + firstNum > 0) {
                     --k;
                     while (nums[k] == nums[k + 1]) {
                         --k;
                     }
                     continue;
                 }
                 if (nums[j] + nums[k] + firstNum < 0) {
                     ++j;
                     while (nums[j] == nums[j - 1]) {
                         ++j;
                     }
                     continue;
                 }

                 if (nums[j] + nums[k] + firstNum == 0) {
                     sumArray.push([nums[j], nums[k], firstNum]);
                     --k;
                     while (nums[k] == nums[k + 1]) {
                         --k;
                     }
                     ++j;
                     while (nums[j] == nums[j - 1]) {
                         ++j;
                     }
                     continue;
                 }
             }
         }
     }
     return sumArray;
 };