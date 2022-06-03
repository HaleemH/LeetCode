/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    /**
    -nums = [int sorted non-decreasing order]
    -return an Arr of the squares of each number sorted in non decreasing order
    */
    const squared = [];
    for (let i = 0; i < nums.length; i++){
        squared.push(nums[i]**2)
    }
    return squared.sort((a,b) => {
        if(a < b){
            return -1;
        }else if(a > b){
            return 1;
        }else return 0
    })
};