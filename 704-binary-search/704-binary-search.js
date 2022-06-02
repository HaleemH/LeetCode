/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
/**
- array of ints(nums) sorted in ascending order
- target = int
- search for target in nums
- true? return idx : return -1
- O(log n) runtime
*/
  
    let left = 0;
    let right = nums.length -1;
    
    while(left <= right){
        let mid = Math.floor((left + right) /2)
        if(target === nums[mid]){
            return mid;
        }else if(target > nums[mid]){
            left = mid + 1;
        }else{
            right = mid -1
        }
    }
    return -1
};