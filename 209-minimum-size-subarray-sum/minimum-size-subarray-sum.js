/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0, min = Infinity, left = 0
    for(let right = 0; right<nums.length; right++){
        let num = nums[right]
        sum+=num
        while(sum>=target){
            min = Math.min(right-left+1, min)
            sum-= nums[left]
            left++
        }
    }
    return min == Infinity? 0: min
};