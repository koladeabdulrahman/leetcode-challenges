/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Math.min(...nums), result = 0
    for(let i = 0; i<nums.length; i++){
        result += nums[i] - min
    }
    return result
};