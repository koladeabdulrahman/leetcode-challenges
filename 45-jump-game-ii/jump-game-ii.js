/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0, max = 0, oldMax = 0
    for(let i = 0; i<nums.length - 1; i++){
        max = Math.max(max, i + nums[i])
        if(i === oldMax){
            jumps++
            oldMax = max
        }
    }
    return jumps
};