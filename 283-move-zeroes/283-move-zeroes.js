/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let container = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            container.push(nums.splice(i,1))
            i--
        }
    }
    return nums.push(...container )
};