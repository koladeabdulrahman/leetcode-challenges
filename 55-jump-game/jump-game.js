/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0
    for(let i = 0; i<=max; i++){
        let jump = i + nums[i]
        max = Math.max(max, jump)
        if(jump >= nums.length - 1)return true
    }
    return false
};