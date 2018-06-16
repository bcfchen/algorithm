function increasingTriplet(nums) {

  var m; // mininum
  var m2; // sec mininum

  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (m === undefined || n <= m) {
      m = n;
    } else /* n > m */ {
      if (m2 === undefined || n <= m2) {
        m2 = n;
      } else {
        return true;
      }
    }
  }
  return false;
}