/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0
    for(let i = 0; i<=max; i++){
        max = Math.max(max, i+ nums[i])
        if(i + nums[i] >= nums.length - 1)return true
    }
    return false
};