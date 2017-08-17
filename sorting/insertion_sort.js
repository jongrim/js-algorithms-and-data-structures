module.exports = function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      if (num < nums[j]) {
        let temp = nums[j];
        nums[j] = num;
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
