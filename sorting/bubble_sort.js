module.exports = function bubbleSort(nums) {
  do {
    var swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      let j = i + 1;
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
};
