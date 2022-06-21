/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let results = []
    for( let i = 0; i < nums.length; i++){
        if(results.length <1){
           results.push(nums[i])
    }else{
        results.push(nums[i] + results[i-1])
    }
    }
    return results
};