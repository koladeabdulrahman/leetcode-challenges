/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jump = 0, max = 0, oldmax = 0
    for(let i = 0; i<nums.length-1; i++){
        max = Math.max(max, i+nums[i])
        if(i >= oldmax){
            jump++
            oldmax = max
        }
    }
    return jump
};