// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
var missingElement = function(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    let firstElement = nums[0];
    while(left < right) {
        let mid = Math.ceil((right+left)/2);
        if(k <= (nums[mid] - (mid + firstElement))) {
            right = mid - 1;
        } else {
          left = mid;
        }
    }
    return k + firstElement + left;
};
  

      


