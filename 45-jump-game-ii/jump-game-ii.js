/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let min = 0, max = 0
    for(let end = 0; end<nums.length - 1;){
        for(let i = 0; i<=end; i++){
            max = Math.max(max, nums[i]+i)
        }
        min++
        end = max
    }
    return min
};
