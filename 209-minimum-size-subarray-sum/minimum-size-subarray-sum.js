/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0, begin = 0, min = Infinity
    for(let end = 0; end<nums.length; end++){
        sum+=nums[end]
        while(sum >= target){
            let len = end - begin + 1
            min = Math.min(min, len)
            sum-=nums[begin]
            begin++
        }
    }
    return min == Infinity? 0 : min
};