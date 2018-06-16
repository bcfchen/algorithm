/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let min = nums[0];
  let middle = Infinity;

  for (num of nums) {
    if (num <= min) {
      min = num;
    } else if (num <= middle) {
      middle = num;
    } else {
      // this means min < middle < num
      return true;
    }
  }
  return false;
};